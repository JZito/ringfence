# Ringfence Architecture

## Core Split

- `RingfenceProduction` is the canonical primitive.
- `RingfenceDemoHarness` is the explicit demo-only variant used for live monitoring during judging.
- The Node monitor service is the public runtime surface: scheduler, dashboard, admin triggers, and state persistence.

## Treasury Model

1. Owner deposits `wstETH` into the selected contract.
2. Production tracks principal in stETH-value terms via the Base `wstETH/stETH` rate feed.
3. Demo harness can reduce the effective locked baseline with explicit demo-only delta state.
4. Claimable value is always bounded onchain by the contract’s value-based accounting, whitelist, and per-tx cap.

## Monitoring Flow

1. Free discovery reads `https://research.lido.fi/latest.json` and tracks recent forum topics.
2. Only new or updated topics are analyzed.
3. If paid analysis is needed, the service checks Locus balance first.
4. If the Locus balance is below `LOCUS_BUFFER_MIN_USDC`, the agent performs one bounded refill:
   - claim `wstETH`
   - Uniswap approval check
   - Classic-only `wstETH -> USDC` swap on Base
   - direct USDC transfer to the configured Locus wallet
   - poll `/pay/balance` until the transfer is reflected or timeout
5. Changed topics are sent through:
   - `diffbot/discussion`
   - `gemini/chat` with structured JSON output
6. The service classifies each run as `NONE`, `MINOR`, or `MATERIAL`.
7. `MATERIAL` topics trigger an immediate Telegram alert.
8. A daily digest goes out at `18:00 UTC`.

## Public Surface

- `/` shows both vaults, monitor health, recent governance changes, alert history, digests, contract events, tx hashes, and pending approvals.
- `/admin` exposes manual hourly run, digest send, and preflight behind `DASHBOARD_ADMIN_TOKEN`.
- File-backed runtime state persists snapshots, run history, alerts, digests, approvals, and recent txs.

## Safety Narrative

- Principal protection is value-based, not token-count based.
- Claims fail loudly on wrong caller, wrong recipient, over-cap, and over-claim.
- Demo-only state is explicit onchain and in the dashboard.
- Uniswap routing is constrained to Classic; unexpected routing aborts.
- Locus wallet/API-key mismatch hard-fails before paid actions.
- Pending approval URLs are persisted and surfaced to the operator.
