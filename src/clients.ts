import { createPublicClient, createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { base } from "viem/chains";

import type { RingfenceConfig } from "./types.js";

export function getPublicClient(config: RingfenceConfig) {
  if (!config.baseRpcUrl) {
    throw new Error("BASE_RPC_URL is required");
  }

  return createPublicClient({
    chain: base,
    transport: http(config.baseRpcUrl),
  });
}

export function getOwnerWallet(config: RingfenceConfig) {
  if (!config.baseRpcUrl || !config.ownerPrivateKey) {
    throw new Error("OWNER_PRIVATE_KEY and BASE_RPC_URL are required for owner actions");
  }

  const account = privateKeyToAccount(config.ownerPrivateKey);
  const walletClient = createWalletClient({
    account,
    chain: base,
    transport: http(config.baseRpcUrl),
  });

  return { account, walletClient };
}

export function getAgentWallet(config: RingfenceConfig) {
  if (!config.baseRpcUrl || !config.agentPrivateKey) {
    throw new Error("AGENT_PRIVATE_KEY and BASE_RPC_URL are required for agent actions");
  }

  const account = privateKeyToAccount(config.agentPrivateKey);
  const walletClient = createWalletClient({
    account,
    chain: base,
    transport: http(config.baseRpcUrl),
  });

  return { account, walletClient };
}
