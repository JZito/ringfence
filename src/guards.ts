import { isAddress, type Address } from "viem";

import type { ChangeLevel, TransactionRequest } from "./types.js";

export const QUOTE_MAX_AGE_MS = 30_000;

export function assertAddress(value: string | undefined, label: string): Address {
  if (!value || !isAddress(value)) {
    throw new Error(`${label} is required and must be a valid address`);
  }

  return value;
}

export function parseOptionalAddress(value: string | undefined): Address | undefined {
  if (!value || value.trim() === "") {
    return undefined;
  }

  if (!isAddress(value)) {
    throw new Error(`Invalid address: ${value}`);
  }

  return value;
}

export function isQuoteStale(quoteTimestampMs: number, now = Date.now()): boolean {
  return now - quoteTimestampMs > QUOTE_MAX_AGE_MS;
}

export function assertSupportedRouting(routing: string): asserts routing is "CLASSIC" {
  if (routing !== "CLASSIC") {
    throw new Error(`Unsupported Uniswap routing result: ${routing}. Ringfence v1 requires CLASSIC.`);
  }
}

export function validateSwapTransactionRequest(tx: TransactionRequest): void {
  if (!tx.data || tx.data === "0x") {
    throw new Error("Uniswap returned empty transaction data");
  }
  if (!isAddress(tx.to)) {
    throw new Error(`Invalid swap transaction recipient: ${tx.to}`);
  }
  if (!isAddress(tx.from)) {
    throw new Error(`Invalid swap transaction sender: ${tx.from}`);
  }
  if (tx.maxFeePerGas && tx.gasPrice) {
    throw new Error("Swap transaction cannot contain both EIP-1559 and legacy gas pricing");
  }

  void BigInt(tx.value ?? "0");
}

export function ensureRequiredLocusEndpoints(endpoints: string[]): void {
  const enabled = new Set(endpoints);
  const required = ["diffbot/discussion", "gemini/chat"];

  for (const endpoint of required) {
    if (!enabled.has(endpoint)) {
      throw new Error(`Required Locus endpoint is not enabled: ${endpoint}`);
    }
  }
}

export function selectClaimAmount(input: {
  claimableAmount: bigint;
  perTxCap: bigint;
  minClaimAmountWstETH: bigint;
  maxClaimAmountWstETH: bigint;
}): bigint {
  const { claimableAmount, perTxCap, minClaimAmountWstETH, maxClaimAmountWstETH } = input;

  if (claimableAmount <= 0n) {
    throw new Error("Claimable amount is zero");
  }
  if (perTxCap <= 0n) {
    throw new Error("Per-transaction cap is zero");
  }

  let selected = claimableAmount < perTxCap ? claimableAmount : perTxCap;
  if (maxClaimAmountWstETH > 0n && selected > maxClaimAmountWstETH) {
    selected = maxClaimAmountWstETH;
  }
  if (selected < minClaimAmountWstETH) {
    throw new Error("Selected claim amount is below the configured minimum threshold");
  }

  return selected;
}

export function asChangeLevel(value: string): ChangeLevel {
  if (value === "NONE" || value === "MINOR" || value === "MATERIAL") {
    return value;
  }

  throw new Error(`Invalid change level: ${value}`);
}
