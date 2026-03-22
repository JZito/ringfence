# Ringfence Demo Script

1. Show `RingfenceProduction` on Base and point at the value-based `principalBaseline` accounting.
2. Show `RingfenceDemoHarness`, its explicit `demoGrantSpendableDelta`, and the visible `demoSpendableDeltaStETH` state.
3. Deposit real `wstETH` into the demo harness.
4. Set the agent, whitelist the claim recipient, and set the per-tx cap.
5. Run `pnpm run cli -- demo fail-claim --contract demo --amount 1 --recipient 0x...` to show a visible revert.
6. Call `pnpm run cli -- owner demo-grant-delta --amount 0.005`.
7. Run `pnpm run cli -- monitor preflight --contract demo`.
8. Start the dashboard with `pnpm run serve` and open `/`.
9. Trigger `pnpm run cli -- monitor hourly --contract demo` or use the admin page.
10. Show the live log and dashboard updates:
    - detected governance topics
    - Diffbot + Gemini classification
    - alert status or no-alert `MINOR/NONE` path
    - Telegram alert or digest content on the dashboard
    - claim, swap, and Locus top-up tx hashes if a refill was needed
11. Show the daily digest record on the dashboard after `18:00 UTC`, or trigger it manually from the admin page.
12. End on `pnpm run cli -- state --contract demo` and highlight that principal protection remains intact while the monitor keeps itself funded.
