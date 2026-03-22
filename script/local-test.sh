#!/usr/bin/env bash
# ──────────────────────────────────────────────────────────────────────────────
# local-test.sh — End-to-end Ringfence test against an Anvil fork of Base mainnet.
#
# Prerequisites:
#   - anvil (from foundry)
#   - forge
#   - pnpm / node 20+
#   - A Base mainnet RPC URL in $BASE_RPC_URL (Alchemy, Infura, etc.)
#
# What this does:
#   1. Starts Anvil forking Base mainnet
#   2. Deploys both contracts to the local fork
#   3. Funds the owner EOA with wstETH (impersonation)
#   4. Runs the full owner setup + demo claim flow via the CLI
#   5. Optionally runs the Uniswap swap step (if UNISWAP_API_KEY is set)
#
# Usage:
#   export BASE_RPC_URL="https://base-mainnet.g.alchemy.com/v2/YOUR_KEY"
#   bash script/local-test.sh
# ──────────────────────────────────────────────────────────────────────────────
set -euo pipefail

if [ -f .env ]; then
  set -a
  # shellcheck disable=SC1091
  . ./.env
  set +a
fi

if [ -s "${HOME}/.nvm/nvm.sh" ]; then
  # shellcheck disable=SC1090
  . "${HOME}/.nvm/nvm.sh"
  nvm use 20 >/dev/null
fi

# ── Config ───────────────────────────────────────────────────────────────────
ANVIL_PORT=8545
ANVIL_RPC="http://127.0.0.1:$ANVIL_PORT"
ANVIL_PID=""
RUN_SWAP_ON_FORK="${RUN_SWAP_ON_FORK:-false}"

# Base mainnet addresses
WSTETH="0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452"
USDC="0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"
WSTETH_STETH_RATE_FEED="0xB88BAc61a4Ca37C43a3725912B1f472c9A5bc061"

# Deployer uses the default Anvil account. Owner/agent use EOAs with no code on Base
# so Permit2 treats the agent as a normal EOA during forked Uniswap tests.
DEPLOYER_KEY="0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
OWNER_KEY="0xcc76e9c29bda7d55422fc2c1d5bc0123665bbcac13882b1a174cf0400c527bf0"
AGENT_KEY="0xcd953f3dce4bbc7e6af13a753649a5e6204e2263c37cd642c83537a2e4e7a7c8"
OWNER_ADDR="0x10CE20Ec7655B1Df6B6Cbe447eDB344b75Fc2eBD"
AGENT_ADDR="0xbE9721180F7C988519A33e21fa834b0751B84E64"

# A known wstETH whale on Base mainnet (for impersonation funding)
# This is the wstETH/ETH pool or a large holder — adjust if balance is insufficient
WSTETH_WHALE="0x99CBC45ea5bb7eF3a5BC08FB1B7E56bB2442Ef0D"

# ── Helpers ──────────────────────────────────────────────────────────────────
cleanup() {
  if [ -n "$ANVIL_PID" ]; then
    echo "🧹 Stopping Anvil (PID $ANVIL_PID)"
    kill "$ANVIL_PID" 2>/dev/null || true
    wait "$ANVIL_PID" 2>/dev/null || true
  fi
}
trap cleanup EXIT

log() { echo -e "\n══════════════════════════════════════════════════════"; echo "  $1"; echo "══════════════════════════════════════════════════════"; }

cli() { node --import tsx src/index.ts "$@"; }

# ── Preflight ────────────────────────────────────────────────────────────────
if [ -z "${BASE_RPC_URL:-}" ]; then
  echo "ERROR: BASE_RPC_URL must be set to a Base mainnet RPC (for forking)"
  exit 1
fi

# ── Step 1: Start Anvil fork ────────────────────────────────────────────────
log "Starting Anvil fork of Base mainnet on port $ANVIL_PORT"
anvil \
  --fork-url "$BASE_RPC_URL" \
  --port "$ANVIL_PORT" \
  --chain-id 8453 \
  --silent &
ANVIL_PID=$!
sleep 2

# Verify Anvil is running
if ! curl -s "$ANVIL_RPC" -X POST -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' > /dev/null; then
  echo "ERROR: Anvil failed to start"
  exit 1
fi
echo "Anvil running (PID $ANVIL_PID)"

# Fund owner and agent with ETH for local gas spend on the fork
curl -s "$ANVIL_RPC" -X POST -H "Content-Type: application/json" \
  --data "{\"jsonrpc\":\"2.0\",\"method\":\"anvil_setBalance\",\"params\":[\"$OWNER_ADDR\",\"0x3635C9ADC5DEA00000\"],\"id\":10}" > /dev/null
curl -s "$ANVIL_RPC" -X POST -H "Content-Type: application/json" \
  --data "{\"jsonrpc\":\"2.0\",\"method\":\"anvil_setBalance\",\"params\":[\"$AGENT_ADDR\",\"0x3635C9ADC5DEA00000\"],\"id\":11}" > /dev/null

# ── Step 2: Deploy contracts to local fork ──────────────────────────────────
log "Deploying contracts to Anvil fork"
DEPLOYER_PRIVATE_KEY="$DEPLOYER_KEY" \
OWNER_ADDRESS="$OWNER_ADDR" \
WSTETH_ADDRESS="$WSTETH" \
WSTETH_STETH_RATE_FEED_ADDRESS="$WSTETH_STETH_RATE_FEED" \
  forge script script/DeployRingfence.s.sol \
    --rpc-url "$ANVIL_RPC" \
    --broadcast \
    --slow \
    2>&1 | tail -5

# Read deployed addresses
DEMO_ADDR=$(jq -r '.demo' config/deployments.json)
PROD_ADDR=$(jq -r '.production' config/deployments.json)
echo "Production: $PROD_ADDR"
echo "Demo:       $DEMO_ADDR"

# ── Step 3: Fund owner with wstETH via impersonation ────────────────────────
log "Funding owner ($OWNER_ADDR) with wstETH from whale"

# Impersonate whale and transfer 1 wstETH to owner
AMOUNT_HEX=$(printf "0x%064x" 1000000000000000000)  # 1e18 = 1 wstETH
# ERC20 transfer(address,uint256) selector = 0xa9059cbb
CALLDATA="0xa9059cbb$(printf "%064s" "${OWNER_ADDR:2}" | tr ' ' '0')$(printf "%064x" 1000000000000000000)"

# Impersonate the whale
curl -s "$ANVIL_RPC" -X POST -H "Content-Type: application/json" \
  --data "{\"jsonrpc\":\"2.0\",\"method\":\"anvil_impersonateAccount\",\"params\":[\"$WSTETH_WHALE\"],\"id\":1}" > /dev/null

# Fund the whale with ETH for gas on the fork
curl -s "$ANVIL_RPC" -X POST -H "Content-Type: application/json" \
  --data "{\"jsonrpc\":\"2.0\",\"method\":\"anvil_setBalance\",\"params\":[\"$WSTETH_WHALE\",\"0x3635C9ADC5DEA00000\"],\"id\":2}" > /dev/null

# Send wstETH transfer
TRANSFER_RESPONSE=$(curl -s "$ANVIL_RPC" -X POST -H "Content-Type: application/json" \
  --data "{\"jsonrpc\":\"2.0\",\"method\":\"eth_sendTransaction\",\"params\":[{\"from\":\"$WSTETH_WHALE\",\"to\":\"$WSTETH\",\"data\":\"$CALLDATA\"}],\"id\":3}")
if echo "$TRANSFER_RESPONSE" | jq -e '.error' >/dev/null; then
  echo "ERROR: failed to transfer wstETH from whale"
  echo "$TRANSFER_RESPONSE"
  exit 1
fi

# Stop impersonation
curl -s "$ANVIL_RPC" -X POST -H "Content-Type: application/json" \
  --data "{\"jsonrpc\":\"2.0\",\"method\":\"anvil_stopImpersonatingAccount\",\"params\":[\"$WSTETH_WHALE\"],\"id\":4}" > /dev/null

# Mine the block
curl -s "$ANVIL_RPC" -X POST -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"evm_mine","params":[],"id":5}' > /dev/null

OWNER_WSTETH=$(cast call "$WSTETH" "balanceOf(address)(uint256)" "$OWNER_ADDR" --rpc-url "$ANVIL_RPC")
if [ "$OWNER_WSTETH" = "0" ]; then
  echo "ERROR: owner did not receive wstETH on the fork"
  exit 1
fi

echo "Owner funded with wstETH"

# ── Step 4: Export env for CLI ──────────────────────────────────────────────
export BASE_RPC_URL="$ANVIL_RPC"
export OWNER_PRIVATE_KEY="$OWNER_KEY"
export AGENT_PRIVATE_KEY="$AGENT_KEY"
export WSTETH_ADDRESS="$WSTETH"
export USDC_ADDRESS="$USDC"
export RINGFENCE_DEMO_ADDRESS="$DEMO_ADDR"
export RINGFENCE_PRODUCTION_ADDRESS="$PROD_ADDR"
export CLAIM_RECIPIENT="$AGENT_ADDR"
export PER_TX_CAP_WSTETH="1000000000000000000"
export DEMO_DELTA_STETH="500000000000000000"
export MIN_CLAIM_AMOUNT_WSTETH="0.0001"
export EVENT_LOOKBACK_BLOCKS="10"

# ── Step 5: Owner setup via CLI ─────────────────────────────────────────────
log "Owner: set agent"
cli owner set-agent --contract demo --agent "$AGENT_ADDR"

log "Owner: whitelist agent as claim recipient"
cli owner whitelist --contract demo --recipient "$AGENT_ADDR" --allowed true

log "Owner: set per-tx cap (1 wstETH)"
cli owner set-cap --contract demo --amount 1

log "Owner: deposit 1 wstETH into demo harness"
cli owner deposit --contract demo --amount 1

log "Owner: grant demo delta (0.5 stETH)"
cli owner demo-grant-delta --amount 0.5

# ── Step 6: Read state ──────────────────────────────────────────────────────
log "State: demo harness"
cli state --contract demo

# ── Step 7: Agent claim ─────────────────────────────────────────────────────
log "Agent: claim from demo harness"
cli agent claim --contract demo

# ── Step 8: Demo fail-claim (proves principal protection) ────────────────────
log "Demo: attempt over-claim (should fail)"
cli demo fail-claim --contract demo --amount 999 --recipient "$AGENT_ADDR" || true

# ── Step 9: Post-claim state ────────────────────────────────────────────────
log "State: after claim"
cli state --contract demo

# ── Step 10: Uniswap swap (optional — opt-in on local fork) ─────────────────
if [ "$RUN_SWAP_ON_FORK" = "true" ] && [ -n "${UNISWAP_API_KEY:-}" ]; then
  log "Agent: approve swap"
  cli agent approve-swap --amount 0.001

  log "Agent: swap wstETH -> USDC"
  cli agent swap --amount 0.001
else
  echo ""
  echo "⏭️  Skipping Uniswap swap (set RUN_SWAP_ON_FORK=true and UNISWAP_API_KEY to test)"
fi

# ── Done ─────────────────────────────────────────────────────────────────────
log "✅ Local test complete"
echo ""
echo "Anvil is still running at $ANVIL_RPC (PID $ANVIL_PID)"
echo "Run individual CLI commands against it, or Ctrl-C to stop."
echo "Use 'pnpm run cli -- locus smoke' separately for the offchain Locus path."
echo ""

# Keep Anvil alive for manual exploration
wait "$ANVIL_PID"
