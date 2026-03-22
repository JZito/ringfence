# Ringfence

Agent treasury on Base mainnet. wstETH-backed, principal-protected, yield-only spending.

## Build & Test

```bash
forge build                    # compile contracts
forge test                     # run Solidity tests
pnpm run check                 # TypeScript type check
pnpm run test:unit             # TypeScript guard tests
pnpm test                      # run all tests
```

## Run CLI

```bash
pnpm run cli -- state --contract demo
pnpm run cli -- agent run-loop --contract demo
```

## Deploy

```bash
forge script script/DeployRingfence.s.sol --rpc-url $BASE_RPC_URL --broadcast
```

Writes addresses to `config/deployments.json`.

## Architecture

- **Contracts**: `contracts/RingfenceProduction.sol` (canonical), `contracts/RingfenceDemoHarness.sol` (demo delta)
- **Runtime**: TypeScript CLI in `src/`, uses viem + commander
- **Config**: `.env` for secrets, `config/defaults.json` for parameters, `config/deployments.json` for addresses

## Key Design Decisions

- `principalBaseline` stored in stETH-value units, not wstETH token count
- Claimable = `getCurrentPositionValue() - effectiveBaseline`, converted back to wstETH
- Demo harness lowers effective baseline via explicit `demoSpendableDeltaStETH` — not real yield
- Uniswap swaps enforce CLASSIC routing only; non-Classic routes abort
- Locus defaults to beta environment
