import { isAddress, type Address } from "viem";

import { erc20Abi } from "./abis.js";
import { sendContractCall } from "./chain.js";
import { getAgentWallet, getPublicClient } from "./clients.js";
import { agentClaim, readRecentContractEvents, readTokenBalance, readVaultState } from "./contracts.js";
import { formatAmount, formatUsd, parseTokenAmount, truncateHash } from "./format.js";
import { clearPendingApproval, readRuntimeState, recordLastRunValue, recordPendingApproval } from "./history.js";
import { assertSupportedRouting, ensureRequiredLocusEndpoints, isQuoteStale, selectClaimAmount } from "./guards.js";
import { getLocusBalance, getWrappedCatalog } from "./locus.js";
import { logStep } from "./logger.js";
import { escapeTelegramHtml, sendTelegramMessage } from "./telegram.js";
import type {
  ContractKind,
  LocusBalanceResponse,
  MonitorPreflightResult,
  RingfenceConfig,
  TreasuryRefillResult,
  VaultState,
} from "./types.js";
import {
  broadcastSwapTransaction,
  buildSwapTransaction,
  checkSwapApproval,
  quoteClassic,
  runSwapApprovalFlow,
  signPermitIfNeeded,
} from "./uniswap.js";

const LOCUS_BALANCE_POLL_INTERVAL_MS = 3_000;
const LOCUS_BALANCE_POLL_TIMEOUT_MS = 60_000;
const TOKEN_BALANCE_POLL_INTERVAL_MS = 1_500;
const TOKEN_BALANCE_POLL_TIMEOUT_MS = 20_000;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function requireAgentRecipient(config: RingfenceConfig): Address {
  if (!config.agentAddress) {
    throw new Error("AGENT_PRIVATE_KEY is required to derive the agent address");
  }
  if (!config.claimRecipient) {
    throw new Error("CLAIM_RECIPIENT is required");
  }
  if (config.claimRecipient.toLowerCase() !== config.agentAddress.toLowerCase()) {
    throw new Error("Ringfence v1 expects CLAIM_RECIPIENT to match the agent EOA for swap execution");
  }

  return config.claimRecipient;
}

export function requireLocusWallet(config: RingfenceConfig): Address {
  if (!config.locusWalletAddress) {
    throw new Error("LOCUS_WALLET_ADDRESS is required");
  }

  return config.locusWalletAddress;
}

export function requireLocusApiKey(config: RingfenceConfig): string {
  if (!config.locusApiKey) {
    throw new Error("LOCUS_API_KEY is required for Locus actions");
  }

  return config.locusApiKey;
}

export function requireUniswapApiKey(config: RingfenceConfig): string {
  if (!config.uniswapApiKey) {
    throw new Error("UNISWAP_API_KEY is required for swap actions");
  }

  return config.uniswapApiKey;
}

export function requireTelegramConfig(config: RingfenceConfig): void {
  if (!config.telegramBotToken) {
    throw new Error("TELEGRAM_BOT_TOKEN is required for Telegram delivery");
  }
  if (!config.telegramChatId) {
    throw new Error("TELEGRAM_CHAT_ID is required for Telegram delivery");
  }
}

export function ensureTreasuryConfig(config: RingfenceConfig): void {
  requireAgentRecipient(config);
  requireUniswapApiKey(config);
  requireLocusApiKey(config);
  requireLocusWallet(config);
  requireTelegramConfig(config);
}

export function parseLocusUsdcBalance(balance: string): bigint {
  return parseTokenAmount(balance, 6);
}

export function getLocusUsdcBalanceString(balance: LocusBalanceResponse["data"]): string {
  const value = balance.usdc_balance ?? balance.balance;
  if (!value) {
    throw new Error("Locus /pay/balance did not include a USDC balance");
  }

  return value;
}

export function formatLocusBalanceDisplay(balance: LocusBalanceResponse["data"]): string {
  return `${getLocusUsdcBalanceString(balance)} USDC`;
}

export function protectionSummary(state: VaultState): string {
  if (state.contractKind === "production") {
    return state.currentPositionValue >= state.principalBaseline
      ? "Production principal baseline remains protected."
      : "Production principal baseline has been breached.";
  }

  return state.currentPositionValue >= state.effectiveBaseline
    ? "Demo claim remained within the explicit demo spendable delta and preserved the effective locked baseline."
    : "Demo harness fell below the effective locked baseline.";
}

export async function getVerifiedLocusBalance(config: RingfenceConfig): Promise<LocusBalanceResponse> {
  requireLocusApiKey(config);
  const configuredWallet = requireLocusWallet(config);
  const balance = await getLocusBalance(config);
  const apiWallet = balance.data.wallet_address;

  if (!isAddress(apiWallet)) {
    throw new Error(`Locus /pay/balance returned an invalid wallet address: ${apiWallet}`);
  }
  if (configuredWallet.toLowerCase() !== apiWallet.toLowerCase()) {
    throw new Error(
      `LOCUS_WALLET_ADDRESS (${configuredWallet}) does not match the wallet behind LOCUS_API_KEY (${apiWallet})`,
    );
  }

  return balance;
}

export async function ensureMonitorProviderCatalog(config: RingfenceConfig): Promise<string[]> {
  await getVerifiedLocusBalance(config);
  const catalog = await getWrappedCatalog(config);
  ensureRequiredLocusEndpoints(catalog.data.endpoints);
  return catalog.data.endpoints;
}

export async function waitForLocusBalanceIncrease(
  config: RingfenceConfig,
  startingBalance: bigint,
  expectedIncrease: bigint,
): Promise<{ balance: LocusBalanceResponse; attempts: number }> {
  const targetBalance = startingBalance + expectedIncrease;
  const deadline = Date.now() + LOCUS_BALANCE_POLL_TIMEOUT_MS;
  let attempts = 0;

  while (true) {
    attempts += 1;
    const balance = await getVerifiedLocusBalance(config);
    const reportedBalance = parseLocusUsdcBalance(getLocusUsdcBalanceString(balance.data));

    if (reportedBalance >= targetBalance) {
      return { balance, attempts };
    }
    if (Date.now() >= deadline) {
      throw new Error(
        `Timed out waiting for Locus /pay/balance to reflect the top-up. Expected at least ${formatUsd(targetBalance)} USDC, last seen ${formatUsd(reportedBalance)} USDC.`,
      );
    }

    await sleep(LOCUS_BALANCE_POLL_INTERVAL_MS);
  }
}

export async function waitForTokenBalanceIncrease(input: {
  config: RingfenceConfig;
  token: Address;
  holder: Address;
  startingBalance: bigint;
  minimumIncrease?: bigint;
}): Promise<{ balance: bigint; attempts: number }> {
  const {
    config,
    token,
    holder,
    startingBalance,
    minimumIncrease = 1n,
  } = input;
  const targetBalance = startingBalance + minimumIncrease;
  const deadline = Date.now() + TOKEN_BALANCE_POLL_TIMEOUT_MS;
  let attempts = 0;
  let lastSeenBalance = startingBalance;

  while (true) {
    attempts += 1;
    const balance = (await readTokenBalance(config, token, holder)) ?? 0n;
    lastSeenBalance = balance;

    if (balance >= targetBalance) {
      return { balance, attempts };
    }
    if (Date.now() >= deadline) {
      throw new Error(
        `Timed out waiting for ${token} balance to increase. Expected at least ${targetBalance.toString()}, last seen ${lastSeenBalance.toString()}.`,
      );
    }

    await sleep(TOKEN_BALANCE_POLL_INTERVAL_MS);
  }
}

export function recordLocusPendingApproval(
  step: string,
  pending: { pending_approval_id: string; approval_url: string; message?: string },
): void {
  recordPendingApproval(step, pending.pending_approval_id, pending.approval_url, pending.message);
  recordLastRunValue("lastRunStatus", "pending_approval");
  recordLastRunValue("pendingApprovalStep", step);
  recordLastRunValue("pendingApprovalId", pending.pending_approval_id);
  recordLastRunValue("pendingApprovalUrl", pending.approval_url);
}

export function clearLocusPendingApproval(step: string): void {
  clearPendingApproval(step);
}

export function getMonitorRefillClaimAmount(config: RingfenceConfig, state: VaultState): bigint | undefined {
  if (state.claimableAmount <= 0n || state.perTxCap <= 0n) {
    return undefined;
  }

  let amount = config.monitorRefillClaimWstETH;
  if (amount > state.claimableAmount) {
    amount = state.claimableAmount;
  }
  if (amount > state.perTxCap) {
    amount = state.perTxCap;
  }
  if (config.maxClaimAmountWstETH > 0n && amount > config.maxClaimAmountWstETH) {
    amount = config.maxClaimAmountWstETH;
  }
  if (amount < config.minClaimAmountWstETH) {
    return undefined;
  }

  return amount;
}

export async function runMonitorPreflight(
  config: RingfenceConfig,
  contractKind: ContractKind,
): Promise<MonitorPreflightResult> {
  logStep("monitor-preflight", "start", { message: `Running governance-monitor preflight for ${contractKind}` });
  ensureTreasuryConfig(config);

  const state = await readVaultState(config, contractKind);
  const [locusBalance, endpoints] = await Promise.all([
    getVerifiedLocusBalance(config),
    ensureMonitorProviderCatalog(config),
  ]);

  let approvalStatus: MonitorPreflightResult["approvalStatus"] = "skipped";
  let approvalRequestId: string | undefined;
  const monitorRefillClaimAmount = getMonitorRefillClaimAmount(config, state);

  if (monitorRefillClaimAmount && monitorRefillClaimAmount > 0n) {
    const approval = await checkSwapApproval(config, requireAgentRecipient(config), monitorRefillClaimAmount);
    approvalRequestId = approval.requestId;
    approvalStatus = approval.approval || approval.cancel ? "approval_required" : "ready";
  }

  const summary: MonitorPreflightResult = {
    contractKind,
    claimableAmount: state.claimableAmount,
    perTxCap: state.perTxCap,
    monitorRefillClaimAmount,
    approvalStatus,
    approvalRequestId,
    locusWalletAddress: locusBalance.data.wallet_address,
    locusBalance: getLocusUsdcBalanceString(locusBalance.data),
    wrappedEndpoints: endpoints,
    telegramChatId: config.telegramChatId,
  };

  logStep("monitor-preflight", "ok", {
    message: "Governance-monitor preflight completed",
    ...summary,
  });

  return summary;
}

export async function showState(config: RingfenceConfig, contractKind: ContractKind): Promise<void> {
  const state = await readVaultState(config, contractKind);
  const [agentUsdcBalance, locusUsdcBalance, recentEvents] = await Promise.all([
    readTokenBalance(config, config.usdc, config.agentAddress),
    readTokenBalance(config, config.usdc, config.locusWalletAddress),
    readRecentContractEvents(config, contractKind, 5).catch(() => []),
  ]);

  let locusBalance = "not configured";
  let enabledEndpoints = "not configured";
  if (config.locusApiKey) {
    try {
      const [balance, endpoints] = await Promise.all([getVerifiedLocusBalance(config), ensureMonitorProviderCatalog(config)]);
      locusBalance = formatLocusBalanceDisplay(balance.data);
      enabledEndpoints = endpoints.join(", ");
    } catch (error) {
      const message = (error as Error).message;
      locusBalance = `error: ${message}`;
      enabledEndpoints = `error: ${message}`;
    }
  }

  const history = readRuntimeState();
  console.log(`Contract: ${contractKind}`);
  console.log(`Address: ${state.contractAddress}`);
  console.log(`Owner: ${state.owner}`);
  console.log(`Agent: ${state.agent}`);
  console.log(`Vault balance: ${formatAmount(state.vaultBalanceWstETH)} wstETH`);
  console.log(`Principal baseline: ${formatAmount(state.principalBaseline)} stETH-value`);
  console.log(`Effective baseline: ${formatAmount(state.effectiveBaseline)} stETH-value`);
  console.log(`Current value: ${formatAmount(state.currentPositionValue)} stETH-value`);
  console.log(`Claimable amount: ${formatAmount(state.claimableAmount)} wstETH`);
  if (state.demoSpendableDeltaStETH !== undefined) {
    console.log(`Demo delta: ${formatAmount(state.demoSpendableDeltaStETH)} stETH-value`);
  }
  console.log(`Claim recipient whitelisted: ${state.claimRecipientWhitelisted}`);
  console.log(`Per-tx cap: ${formatAmount(state.perTxCap)} wstETH`);
  console.log(`Agent USDC: ${formatUsd(agentUsdcBalance ?? 0n)} USDC`);
  console.log(`Locus wallet USDC: ${formatUsd(locusUsdcBalance ?? 0n)} USDC`);
  console.log(`Locus balance: ${locusBalance}`);
  console.log(`Diffbot/Gemini availability: ${enabledEndpoints}`);
  console.log(`Telegram chat: ${config.telegramChatId || "not configured"}`);
  console.log(`Protection summary: ${protectionSummary(state)}`);
  console.log(`Monitor contract default: ${config.monitorContractKind}`);
  console.log(`Latest monitor status: ${history.monitor.latestStatus ?? "unknown"}`);
  console.log(`Latest monitor summary: ${history.monitor.latestPublicSummary ?? "none"}`);
  console.log(`Last hourly run: ${history.monitor.lastHourlyRunAt ?? "never"}`);
  console.log(`Last daily digest: ${history.monitor.lastDigestSentAt ?? "never"}`);
  console.log("Recent monitor runs:");
  if (history.monitor.runHistory.length === 0) {
    console.log("  none");
  } else {
    for (const run of history.monitor.runHistory.slice(0, 3)) {
      console.log(`  ${run.runType}: ${run.status} (${run.startedAt})`);
    }
  }
  console.log("Recent contract events:");
  if (recentEvents.length === 0) {
    console.log("  none");
  } else {
    for (const event of recentEvents) {
      console.log(`  ${event.eventName}: ${event.txHash} (${event.timestamp ?? "unknown"})`);
    }
  }
  console.log("Recent tx hashes:");
  if (history.recentTxs.length === 0) {
    console.log("  none");
  } else {
    for (const tx of history.recentTxs) {
      console.log(`  ${tx.step}: ${tx.hash} (${tx.timestamp})`);
    }
  }
  console.log("Pending approvals:");
  if (!history.pendingApprovals || history.pendingApprovals.length === 0) {
    console.log("  none");
  } else {
    for (const approval of history.pendingApprovals) {
      console.log(`  ${approval.step}: ${approval.pendingApprovalId} -> ${approval.approvalUrl} (${approval.timestamp})`);
    }
  }
}

export async function runAgentClaimStep(
  config: RingfenceConfig,
  contractKind: ContractKind,
  requestedAmount?: bigint,
) {
  const stateBefore = await readVaultState(config, contractKind);
  const recipient = requireAgentRecipient(config);
  const amount =
    requestedAmount ??
    selectClaimAmount({
      claimableAmount: stateBefore.claimableAmount,
      perTxCap: stateBefore.perTxCap,
      minClaimAmountWstETH: config.minClaimAmountWstETH,
      maxClaimAmountWstETH: config.maxClaimAmountWstETH,
    });

  logStep("claim", "start", {
    message: `Claiming ${formatAmount(amount)} wstETH from ${contractKind}`,
    claimableAmount: stateBefore.claimableAmount,
    perTxCap: stateBefore.perTxCap,
  });
  const { hash } = await agentClaim(config, contractKind, amount, recipient);
  recordLastRunValue("claimTxHash", hash);
  logStep("claim", "ok", { message: `Claim sent: ${truncateHash(hash)}`, txHash: hash, amount });

  return { hash, amount, stateBefore, stateAfter: await readVaultState(config, contractKind) };
}

export async function runAgentApproveSwapStep(config: RingfenceConfig, amount: bigint) {
  const publicClient = getPublicClient(config);
  const { account, walletClient } = getAgentWallet(config);

  logStep("approve-swap", "start", { message: `Checking Uniswap approval for ${formatAmount(amount)} wstETH` });
  const approvalResponse = await checkSwapApproval(config, account.address, amount);
  const hashes = await runSwapApprovalFlow({
    config,
    publicClient,
    walletClient,
    account,
    response: approvalResponse,
  });

  logStep("approve-swap", "ok", {
    message: hashes.length === 0 ? "Approval already satisfied" : `Approval txs: ${hashes.map(truncateHash).join(", ")}`,
    hashes,
    requestId: approvalResponse.requestId,
  });

  return { hashes, requestId: approvalResponse.requestId };
}

export async function runAgentSwapStep(config: RingfenceConfig, amount: bigint) {
  const publicClient = getPublicClient(config);
  const { account, walletClient } = getAgentWallet(config);
  const usdcBalanceBefore = (await readTokenBalance(config, config.usdc, account.address)) ?? 0n;

  logStep("swap", "start", { message: `Quoting ${formatAmount(amount)} wstETH -> USDC` });
  let quoteResponse = await quoteClassic(config, account.address, amount);
  assertSupportedRouting(quoteResponse.routing);
  if (quoteResponse.quoteTimestampMs && isQuoteStale(quoteResponse.quoteTimestampMs)) {
    quoteResponse = await quoteClassic(config, account.address, amount);
    assertSupportedRouting(quoteResponse.routing);
  }

  const signature = await signPermitIfNeeded(walletClient, account, quoteResponse.permitData);
  const swapResponse = await buildSwapTransaction({
    config,
    quoteResponse,
    signature,
  });
  const { hash } = await broadcastSwapTransaction({
    publicClient,
    walletClient,
    account,
    transaction: swapResponse.swap,
  });
  let usdcBalanceAfter = (await readTokenBalance(config, config.usdc, account.address)) ?? 0n;
  if (usdcBalanceAfter <= usdcBalanceBefore) {
    usdcBalanceAfter = (
      await waitForTokenBalanceIncrease({
        config,
        token: config.usdc,
        holder: account.address,
        startingBalance: usdcBalanceBefore,
      })
    ).balance;
  }
  const usdcReceived = usdcBalanceAfter - usdcBalanceBefore;

  recordLastRunValue("swapTxHash", hash);
  logStep("swap", "ok", {
    message: `Swap confirmed: ${truncateHash(hash)}`,
    txHash: hash,
    requestId: swapResponse.requestId ?? quoteResponse.requestId,
    routing: quoteResponse.routing,
    usdcReceived,
  });

  return {
    hash,
    quoteResponse,
    requestId: swapResponse.requestId ?? quoteResponse.requestId,
    usdcReceived,
  };
}

export async function runAgentTopupLocusStep(config: RingfenceConfig, requestedAmount?: bigint) {
  const publicClient = getPublicClient(config);
  const { account, walletClient } = getAgentWallet(config);
  const locusWalletAddress = requireLocusWallet(config);
  const agentBalanceBefore = (await readTokenBalance(config, config.usdc, account.address)) ?? 0n;
  const locusBalanceBefore = (await readTokenBalance(config, config.usdc, locusWalletAddress)) ?? 0n;
  const locusPayBalanceBefore = config.locusApiKey
    ? parseLocusUsdcBalance(getLocusUsdcBalanceString((await getVerifiedLocusBalance(config)).data))
    : undefined;
  const amount = requestedAmount ?? agentBalanceBefore;

  if (amount <= 0n) {
    throw new Error("Agent USDC balance is zero; nothing to top up");
  }

  logStep("topup-locus", "start", {
    message: `Transferring ${formatUsd(amount)} USDC to the Locus wallet`,
    locusWalletAddress,
  });
  const { hash } = await sendContractCall({
    publicClient,
    walletClient,
    account,
    address: config.usdc,
    abi: erc20Abi,
    functionName: "transfer",
    args: [locusWalletAddress, amount],
    step: "topup-locus",
  });

  const agentBalanceAfter = (await readTokenBalance(config, config.usdc, account.address)) ?? 0n;
  const locusBalanceAfter = (await readTokenBalance(config, config.usdc, locusWalletAddress)) ?? 0n;
  let locusPayBalance: string | undefined;
  let locusBalancePollAttempts: number | undefined;
  if (config.locusApiKey) {
    if (locusPayBalanceBefore === undefined) {
      throw new Error("Missing starting Locus balance for post-top-up verification");
    }

    logStep("topup-locus", "info", {
      message: "Waiting for Locus /pay/balance to reflect the USDC top-up",
      startingBalance: locusPayBalanceBefore,
      expectedIncrease: amount,
    });
    const synced = await waitForLocusBalanceIncrease(config, locusPayBalanceBefore, amount);
    locusPayBalance = getLocusUsdcBalanceString(synced.balance.data);
    locusBalancePollAttempts = synced.attempts;
  }

  recordLastRunValue("topupTxHash", hash);
  logStep("topup-locus", "ok", {
    message: `Locus top-up confirmed: ${truncateHash(hash)}`,
    txHash: hash,
    amount,
    agentBalanceBefore,
    agentBalanceAfter,
    locusBalanceBefore,
    locusBalanceAfter,
    locusPayBalance,
    locusBalancePollAttempts,
  });

  return {
    hash,
    amount,
    agentBalanceBefore,
    agentBalanceAfter,
    locusBalanceBefore,
    locusBalanceAfter,
    locusPayBalance,
    locusBalancePollAttempts,
  };
}

export async function runTreasuryRefillFlow(
  config: RingfenceConfig,
  contractKind: ContractKind,
): Promise<TreasuryRefillResult> {
  ensureTreasuryConfig(config);
  const locusBalanceBeforeResponse = await getVerifiedLocusBalance(config);
  const locusBalanceBefore = parseLocusUsdcBalance(getLocusUsdcBalanceString(locusBalanceBeforeResponse.data));

  if (locusBalanceBefore >= config.locusBufferMinUsdc) {
    logStep("monitor-refill", "info", {
      message: "Locus balance already satisfies the configured monitoring buffer",
      locusBalanceBefore,
      locusBufferMinUsdc: config.locusBufferMinUsdc,
    });
    return {
      action: "skipped",
      locusBalanceBefore,
      locusBalanceAfter: locusBalanceBefore,
    };
  }

  const vaultState = await readVaultState(config, contractKind);
  const claimAmount = getMonitorRefillClaimAmount(config, vaultState);
  if (!claimAmount || claimAmount <= 0n) {
    throw new Error(
      `Locus balance ${formatUsd(locusBalanceBefore)} USDC is below the configured buffer ${formatUsd(config.locusBufferMinUsdc)} USDC, and no refill claim amount is currently available.`,
    );
  }

  logStep("monitor-refill", "start", {
    message: `Locus balance is below buffer; refilling from ${contractKind}`,
    locusBalanceBefore,
    locusBufferMinUsdc: config.locusBufferMinUsdc,
    claimAmount,
  });

  const claim = await runAgentClaimStep(config, contractKind, claimAmount);
  const approval = await runAgentApproveSwapStep(config, claim.amount);
  const swap = await runAgentSwapStep(config, claim.amount);
  const topup = await runAgentTopupLocusStep(config, swap.usdcReceived);
  const locusBalanceAfter = topup.locusPayBalance
    ? parseLocusUsdcBalance(topup.locusPayBalance)
    : parseLocusUsdcBalance(getLocusUsdcBalanceString((await getVerifiedLocusBalance(config)).data));

  if (locusBalanceAfter < config.locusBufferMinUsdc) {
    throw new Error(
      `Locus balance remained below the configured buffer after one refill attempt. Current balance: ${formatUsd(locusBalanceAfter)} USDC, required minimum: ${formatUsd(config.locusBufferMinUsdc)} USDC.`,
    );
  }

  logStep("monitor-refill", "ok", {
    message: "Monitoring treasury refill completed",
    claimTxHash: claim.hash,
    swapTxHash: swap.hash,
    topupTxHash: topup.hash,
    claimedWstETH: claim.amount,
    usdcReceived: swap.usdcReceived,
    locusBalanceBefore,
    locusBalanceAfter,
  });

  return {
    action: "refilled",
    claimTxHash: claim.hash,
    approvalRequestId: approval.requestId,
    swapTxHash: swap.hash,
    topupTxHash: topup.hash,
    claimedWstETH: claim.amount,
    usdcReceived: swap.usdcReceived,
    locusBalanceBefore,
    locusBalanceAfter,
  };
}

export async function sendOperatorTelegramStep(input: {
  config: RingfenceConfig;
  step: string;
  subject: string;
  text: string;
  html?: string;
}) {
  requireTelegramConfig(input.config);
  let balanceFooter = "";
  try {
    const balance = await getVerifiedLocusBalance(input.config);
    balanceFooter = [
      "",
      "────────────",
      `<a href="https://basescan.org/address/${balance.data.wallet_address}"><b>Locus balance</b>: ${escapeTelegramHtml(formatLocusBalanceDisplay(balance.data))}</a>`,
    ].join("\n");
  } catch {
    balanceFooter = ["", "────────────", "<b>Locus balance</b>: Unavailable"].join("\n");
  }

  const messageHtml = [
    `<b>${escapeTelegramHtml(input.subject)}</b>`,
    "",
    input.html?.trim() || escapeTelegramHtml(input.text).replaceAll("\n", "\n"),
    balanceFooter,
  ].join("\n").trim();

  logStep(input.step, "start", {
    message: `Sending Telegram update to ${input.config.telegramChatId}`,
    subject: input.subject,
  });
  const response = await sendTelegramMessage({
    config: input.config,
    text: messageHtml,
    parseMode: "HTML",
  });

  logStep(input.step, "ok", {
    message: `Telegram update sent to ${input.config.telegramChatId}`,
    messageCount: response.messageCount,
  });

  return { response };
}
