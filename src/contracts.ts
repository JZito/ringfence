import { decodeEventLog, encodeFunctionData, type Address } from "viem";

import { demoHarnessAbi, erc20Abi, ringfenceAbi } from "./abis.js";
import { getAgentWallet, getOwnerWallet, getPublicClient } from "./clients.js";
import { sendContractCall } from "./chain.js";
import type { ContractEventRecord, ContractKind, RingfenceConfig, VaultState } from "./types.js";

export function getContractAddress(config: RingfenceConfig, contractKind: ContractKind): Address {
  const address = config.contractAddresses[contractKind];
  if (!address) {
    throw new Error(`Missing contract address for ${contractKind}`);
  }

  return address;
}

export function getContractAbi(contractKind: ContractKind) {
  return contractKind === "demo" ? demoHarnessAbi : ringfenceAbi;
}

async function approveIfNeeded(input: {
  publicClient: any;
  owner: Address;
  spender: Address;
  token: Address;
  amount: bigint;
  step: string;
  config: RingfenceConfig;
}) {
  const { publicClient, owner, spender, token, amount, step, config } = input;
  const allowance = await publicClient.readContract({
    address: token,
    abi: erc20Abi,
    functionName: "allowance",
    args: [owner, spender],
  });

  if (allowance >= amount) {
    return undefined;
  }

  const { account, walletClient } = getOwnerWallet(config);
  return sendContractCall({
    publicClient,
    walletClient,
    account,
    address: token,
    abi: erc20Abi,
    functionName: "approve",
    args: [spender, amount],
    step,
  });
}

export async function readVaultState(config: RingfenceConfig, contractKind: ContractKind): Promise<VaultState> {
  const publicClient = getPublicClient(config);
  const contractAddress = getContractAddress(config, contractKind);
  const abi = getContractAbi(contractKind);

  const [owner, agent, principalBaseline, effectiveBaseline, currentPositionValue, claimableAmount, perTxCap, vaultBalance] =
    await Promise.all([
      publicClient.readContract({ address: contractAddress, abi, functionName: "owner" }),
      publicClient.readContract({ address: contractAddress, abi, functionName: "agent" }),
      publicClient.readContract({ address: contractAddress, abi, functionName: "principalBaseline" }),
      publicClient.readContract({ address: contractAddress, abi, functionName: "getEffectivePrincipalBaseline" }),
      publicClient.readContract({ address: contractAddress, abi, functionName: "getCurrentPositionValue" }),
      publicClient.readContract({ address: contractAddress, abi, functionName: "getClaimableAmount" }),
      publicClient.readContract({ address: contractAddress, abi, functionName: "perTxCap" }),
      publicClient.readContract({ address: config.wstETH, abi: erc20Abi, functionName: "balanceOf", args: [contractAddress] }),
    ]);

  const claimRecipientWhitelisted = config.claimRecipient
    ? await publicClient.readContract({
        address: contractAddress,
        abi,
        functionName: "isRecipientWhitelisted",
        args: [config.claimRecipient],
      })
    : false;

  let demoSpendableDeltaStETH: bigint | undefined;
  if (contractKind === "demo") {
    demoSpendableDeltaStETH = await publicClient.readContract({
      address: contractAddress,
      abi: demoHarnessAbi,
      functionName: "demoSpendableDeltaStETH",
    });
  }

  return {
    contractKind,
    contractAddress,
    owner,
    agent,
    vaultBalanceWstETH: vaultBalance,
    principalBaseline,
    effectiveBaseline,
    currentPositionValue,
    claimableAmount,
    perTxCap,
    claimRecipientWhitelisted,
    demoSpendableDeltaStETH,
  };
}

export async function readTokenBalance(config: RingfenceConfig, token: Address, holder?: Address): Promise<bigint | undefined> {
  if (!holder) {
    return undefined;
  }

  const publicClient = getPublicClient(config);
  return publicClient.readContract({
    address: token,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [holder],
  });
}

function normalizeEventArgs(args: Record<string, unknown>): Record<string, string | boolean> {
  return Object.fromEntries(
    Object.entries(args).map(([key, value]) => {
      if (typeof value === "boolean") {
        return [key, value];
      }
      if (typeof value === "bigint") {
        return [key, value.toString()];
      }
      return [key, String(value)];
    }),
  );
}

export async function readRecentContractEvents(
  config: RingfenceConfig,
  contractKind: ContractKind,
  limit = 10,
): Promise<ContractEventRecord[]> {
  const publicClient = getPublicClient(config);
  const contractAddress = getContractAddress(config, contractKind);
  const abi = getContractAbi(contractKind);
  const toBlock = await publicClient.getBlockNumber();
  const fromBlock = toBlock > config.eventLookbackBlocks ? toBlock - config.eventLookbackBlocks : 0n;
  const rawLogs = await publicClient.getLogs({
    address: contractAddress,
    fromBlock,
    toBlock,
  });

  const decoded = rawLogs
    .map((log) => {
      try {
        const event = decodeEventLog({
          abi,
          data: log.data,
          topics: log.topics,
        });
        return {
          log,
          event,
        };
      } catch {
        return undefined;
      }
    })
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry))
    .sort((left, right) => {
      if (left.log.blockNumber === right.log.blockNumber) {
        return Number((right.log.logIndex ?? 0) - (left.log.logIndex ?? 0));
      }
      return Number((right.log.blockNumber ?? 0n) - (left.log.blockNumber ?? 0n));
    })
    .slice(0, limit);

  const blockCache = new Map<bigint, string>();
  const records: ContractEventRecord[] = [];
  for (const entry of decoded) {
    const blockNumber = entry.log.blockNumber ?? 0n;
    let timestamp = blockCache.get(blockNumber);
    if (!timestamp) {
      const block = await publicClient.getBlock({ blockNumber });
      timestamp = new Date(Number(block.timestamp) * 1000).toISOString();
      blockCache.set(blockNumber, timestamp);
    }

    records.push({
      contractKind,
      contractAddress,
      eventName: entry.event.eventName,
      txHash: entry.log.transactionHash,
      blockNumber,
      timestamp,
      args: normalizeEventArgs(entry.event.args as Record<string, unknown>),
    });
  }

  return records;
}

export async function ownerSetAgent(config: RingfenceConfig, contractKind: ContractKind, newAgent: Address) {
  const publicClient = getPublicClient(config);
  const { account, walletClient } = getOwnerWallet(config);

  return sendContractCall({
    publicClient,
    walletClient,
    account,
    address: getContractAddress(config, contractKind),
    abi: getContractAbi(contractKind),
    functionName: "setAgent",
    args: [newAgent],
    step: `${contractKind}-set-agent`,
  });
}

export async function ownerDeposit(config: RingfenceConfig, contractKind: ContractKind, amount: bigint) {
  const publicClient = getPublicClient(config);
  const { account, walletClient } = getOwnerWallet(config);
  const contractAddress = getContractAddress(config, contractKind);

  await approveIfNeeded({
    publicClient,
    owner: account.address,
    spender: contractAddress,
    token: config.wstETH,
    amount,
    step: `${contractKind}-deposit-approve`,
    config,
  });

  return sendContractCall({
    publicClient,
    walletClient,
    account,
    address: contractAddress,
    abi: getContractAbi(contractKind),
    functionName: "deposit",
    args: [amount],
    step: `${contractKind}-deposit`,
  });
}

export async function ownerSetWhitelist(
  config: RingfenceConfig,
  contractKind: ContractKind,
  recipient: Address,
  allowed: boolean,
) {
  const publicClient = getPublicClient(config);
  const { account, walletClient } = getOwnerWallet(config);

  return sendContractCall({
    publicClient,
    walletClient,
    account,
    address: getContractAddress(config, contractKind),
    abi: getContractAbi(contractKind),
    functionName: "setRecipientWhitelist",
    args: [recipient, allowed],
    step: `${contractKind}-whitelist`,
  });
}

export async function ownerSetPerTxCap(config: RingfenceConfig, contractKind: ContractKind, newCap: bigint) {
  const publicClient = getPublicClient(config);
  const { account, walletClient } = getOwnerWallet(config);

  return sendContractCall({
    publicClient,
    walletClient,
    account,
    address: getContractAddress(config, contractKind),
    abi: getContractAbi(contractKind),
    functionName: "setPerTxCap",
    args: [newCap],
    step: `${contractKind}-set-cap`,
  });
}

export async function ownerGrantDemoDelta(config: RingfenceConfig, deltaStETH: bigint) {
  const publicClient = getPublicClient(config);
  const { account, walletClient } = getOwnerWallet(config);

  return sendContractCall({
    publicClient,
    walletClient,
    account,
    address: getContractAddress(config, "demo"),
    abi: demoHarnessAbi,
    functionName: "demoGrantSpendableDelta",
    args: [deltaStETH],
    step: "demo-grant-delta",
  });
}

export async function ownerResetDemoDelta(config: RingfenceConfig) {
  const publicClient = getPublicClient(config);
  const { account, walletClient } = getOwnerWallet(config);

  return sendContractCall({
    publicClient,
    walletClient,
    account,
    address: getContractAddress(config, "demo"),
    abi: demoHarnessAbi,
    functionName: "demoResetSpendableDelta",
    args: [],
    step: "demo-reset-delta",
  });
}

export async function agentClaim(
  config: RingfenceConfig,
  contractKind: ContractKind,
  amount: bigint,
  recipient: Address,
) {
  const publicClient = getPublicClient(config);
  const { account, walletClient } = getAgentWallet(config);

  return sendContractCall({
    publicClient,
    walletClient,
    account,
    address: getContractAddress(config, contractKind),
    abi: getContractAbi(contractKind),
    functionName: "claim",
    args: [amount, recipient],
    step: `${contractKind}-claim`,
  });
}

export async function agentFailClaim(
  config: RingfenceConfig,
  contractKind: ContractKind,
  amount: bigint,
  recipient: Address,
) {
  const publicClient = getPublicClient(config);
  const { account } = getAgentWallet(config);
  const contractAddress = getContractAddress(config, contractKind);
  const stateBefore = await readVaultState(config, contractKind);
  const recipientWhitelisted = await publicClient.readContract({
    address: contractAddress,
    abi: getContractAbi(contractKind),
    functionName: "isRecipientWhitelisted",
    args: [recipient],
  });
  const data = encodeFunctionData({
    abi: getContractAbi(contractKind),
    functionName: "claim",
    args: [amount, recipient],
  });

  try {
    await publicClient.call({
      account: account.address,
      to: contractAddress,
      data,
    });
    throw new Error("Expected revert, but eth_call simulation succeeded");
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    if (message.includes("Expected revert, but eth_call simulation succeeded")) {
      throw error;
    }

    const violations: string[] = [];
    if (!recipientWhitelisted) {
      violations.push("recipient_not_whitelisted");
    }
    if (stateBefore.perTxCap > 0n && amount > stateBefore.perTxCap) {
      violations.push("amount_exceeds_per_tx_cap");
    }
    if (amount > stateBefore.claimableAmount) {
      violations.push("amount_exceeds_claimable");
    }

    return {
      reverted: true,
      reason: message,
      amount,
      recipient,
      stateBefore,
      recipientWhitelisted,
      violations,
    };
  }
}
