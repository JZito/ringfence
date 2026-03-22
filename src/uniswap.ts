import type { Account, Address } from "viem";

import { sendTransactionRequest } from "./chain.js";
import { validateSwapTransactionRequest } from "./guards.js";
import type {
  PermitData,
  RingfenceConfig,
  TransactionRequest,
  UniswapCheckApprovalResponse,
  UniswapQuoteResponse,
  UniswapSwapResponse,
} from "./types.js";

function requireUniswapApiKey(config: RingfenceConfig): string {
  if (!config.uniswapApiKey) {
    throw new Error("UNISWAP_API_KEY is required for swap actions");
  }

  return config.uniswapApiKey;
}

async function postUniswap<T>(config: RingfenceConfig, path: string, body: Record<string, unknown>): Promise<T> {
  const response = await fetch(`${config.uniswapApiBase}${path}`, {
    method: "POST",
    headers: {
      "x-api-key": requireUniswapApiKey(config),
      accept: "application/json",
      "content-type": "application/json",
      "x-universal-router-version": "2.0",
    },
    body: JSON.stringify(body),
  });

  const payload = await response.json().catch(() => undefined);
  if (!response.ok) {
    throw new Error(`Uniswap ${path} failed: ${response.status} ${JSON.stringify(payload)}`);
  }

  return payload as T;
}

export async function checkSwapApproval(
  config: RingfenceConfig,
  walletAddress: Address,
  amount: bigint,
): Promise<UniswapCheckApprovalResponse> {
  return postUniswap<UniswapCheckApprovalResponse>(config, "/check_approval", {
    walletAddress,
    amount: amount.toString(),
    token: config.wstETH,
    chainId: config.chainId,
    tokenOut: config.usdc,
    tokenOutChainId: config.chainId,
  });
}

export async function runSwapApprovalFlow(input: {
  config: RingfenceConfig;
  publicClient: any;
  walletClient: any;
  account: Account;
  response: UniswapCheckApprovalResponse;
}) {
  const hashes: string[] = [];

  if (input.response.cancel) {
    validateSwapTransactionRequest(input.response.cancel);
    const cancelTx = await sendTransactionRequest({
      publicClient: input.publicClient,
      walletClient: input.walletClient,
      account: input.account,
      transaction: input.response.cancel,
      step: "uniswap-cancel-approval",
    });
    hashes.push(cancelTx.hash);
  }

  if (input.response.approval) {
    validateSwapTransactionRequest(input.response.approval);
    const approvalTx = await sendTransactionRequest({
      publicClient: input.publicClient,
      walletClient: input.walletClient,
      account: input.account,
      transaction: input.response.approval,
      step: "uniswap-approve",
    });
    hashes.push(approvalTx.hash);
  }

  return hashes;
}

export async function quoteClassic(
  config: RingfenceConfig,
  swapper: Address,
  amount: bigint,
): Promise<UniswapQuoteResponse> {
  const quote = await postUniswap<UniswapQuoteResponse>(config, "/quote", {
    swapper,
    tokenInChainId: config.chainId,
    tokenOutChainId: config.chainId,
    tokenIn: config.wstETH,
    tokenOut: config.usdc,
    amount: amount.toString(),
    type: "EXACT_INPUT",
    slippageTolerance: config.slippageBps / 100,
    routingPreference: "BEST_PRICE",
    protocols: ["V2", "V3", "V4"],
    generatePermitAsTransaction: false,
    permitAmount: "EXACT",
  });

  return { ...quote, quoteTimestampMs: Date.now() };
}

function normalizePermitTypes(permitData: PermitData) {
  const types = { ...permitData.types };
  delete types.EIP712Domain;
  return types;
}

export async function signPermitIfNeeded(
  walletClient: any,
  account: Account,
  permitData?: PermitData | null,
): Promise<string | undefined> {
  if (!permitData) {
    return undefined;
  }

  const normalizedTypes = normalizePermitTypes(permitData);
  const primaryType = Object.keys(normalizedTypes)[0];
  if (!primaryType) {
    throw new Error("Uniswap returned permitData without a primary type");
  }

  return (walletClient as any).signTypedData({
    account,
    domain: permitData.domain as never,
    types: normalizedTypes as never,
    primaryType,
    message: permitData.values as never,
  });
}

export async function buildSwapTransaction(input: {
  config: RingfenceConfig;
  quoteResponse: UniswapQuoteResponse;
  signature?: string;
}) {
  const { quoteResponse, signature } = input;
  const body = quoteResponse.permitData
    ? { quote: quoteResponse.quote, signature, permitData: quoteResponse.permitData }
    : { quote: quoteResponse.quote };

  return postUniswap<UniswapSwapResponse>(input.config, "/swap", body);
}

export async function broadcastSwapTransaction(input: {
  publicClient: any;
  walletClient: any;
  account: Account;
  transaction: TransactionRequest;
}) {
  validateSwapTransactionRequest(input.transaction);

  return sendTransactionRequest({
    publicClient: input.publicClient,
    walletClient: input.walletClient,
    account: input.account,
    transaction: input.transaction,
    step: "uniswap-swap",
  });
}
