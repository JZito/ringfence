export const BASE_EXPLORER_URL = "https://basescan.org";
export const REFRESH_INTERVAL_MS = 30_000;

export const FLOW_STEPS = [
  { id: "vault", label: "Vault (wstETH)" },
  { id: "claim", label: "Claimable Yield" },
  { id: "swap", label: "Uniswap Swap" },
  { id: "locus", label: "Locus Buffer" },
  { id: "monitor", label: "Governance Monitor" },
] as const;

export const STEP_TO_FLOW_ID: Record<string, string> = {
  claim: "claim",
  "claim-wsteth": "claim",
  swap: "swap",
  "uniswap-swap": "swap",
  "uniswap-quote": "swap",
  "uniswap-approval": "swap",
  topup: "locus",
  "locus-topup": "locus",
  "locus-send": "locus",
  monitor: "monitor",
  "monitor-hourly": "monitor",
  "monitor-digest": "monitor",
};
