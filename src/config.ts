import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { privateKeyToAccount } from "viem/accounts";

import { assertAddress, parseOptionalAddress } from "./guards.js";
import { parseTokenAmount } from "./format.js";
import type { ContractKind, DefaultsFile, DeploymentsFile, RingfenceConfig } from "./types.js";

const DEFAULTS_PATH = resolve(process.cwd(), "config/defaults.json");
const DEPLOYMENTS_PATH = resolve(process.cwd(), "config/deployments.json");

function readJsonFile<T>(path: string, fallback: T): T {
  try {
    return JSON.parse(readFileSync(path, "utf8")) as T;
  } catch {
    return fallback;
  }
}

function env(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

function parseContractKind(value: string | undefined, fallback: ContractKind): ContractKind {
  if (value === "production" || value === "demo") {
    return value;
  }

  return fallback;
}

export function loadConfig(): RingfenceConfig {
  const defaults = readJsonFile<DefaultsFile>(DEFAULTS_PATH, {
    chainId: 8453,
    wstETH: "",
    usdc: "",
    claimRecipient: "",
    locusWalletAddress: "",
    slippageBps: 50,
    demoDeltaStETH: "1000000000000000000",
    perTxCapWstETH: "100000000000000000",
    minClaimAmountWstETH: "1",
    maxClaimAmountWstETH: "0",
    telegramChatId: "",
    monitorContractKind: "demo",
    monitorLookbackHours: 72,
    monitorMaxTopicsPerRun: 5,
    monitorDiscoveryMaxPages: 3,
    locusBufferMinUsdc: "2",
    monitorRefillClaimWstETH: "0.005",
    digestHourUtc: 18,
    forumBaseUrl: "https://research.lido.fi",
    forumLatestUrl: "https://research.lido.fi/latest.json",
    geminiModel: "gemini-3-flash-preview",
    dashboardHost: "0.0.0.0",
    dashboardPort: 3000,
    eventLookbackBlocks: 50000,
  });
  const deployments = readJsonFile<DeploymentsFile>(DEPLOYMENTS_PATH, {
    chainId: defaults.chainId,
    owner: "",
    wstETH: "",
    production: "",
    demo: "",
  });

  const ownerPrivateKey = env("OWNER_PRIVATE_KEY") as `0x${string}` | undefined;
  const agentPrivateKey = env("AGENT_PRIVATE_KEY") as `0x${string}` | undefined;

  const ownerAddress = ownerPrivateKey
    ? privateKeyToAccount(ownerPrivateKey).address
    : parseOptionalAddress(env("OWNER_ADDRESS") ?? deployments.owner);
  const agentAddress = agentPrivateKey ? privateKeyToAccount(agentPrivateKey).address : undefined;

  const locusEnv = env("LOCUS_ENV") === "prod" ? "prod" : "beta";
  const locusApiBase =
    env("LOCUS_API_BASE") ??
    (locusEnv === "prod" ? "https://api.paywithlocus.com/api" : "https://beta-api.paywithlocus.com/api");
  const telegramApiBase = env("TELEGRAM_API_BASE") ?? "https://api.telegram.org";

  const productionAddress = parseOptionalAddress(env("RINGFENCE_PRODUCTION_ADDRESS") ?? deployments.production);
  const demoAddress = parseOptionalAddress(env("RINGFENCE_DEMO_ADDRESS") ?? deployments.demo);
  const wstETH = assertAddress(env("WSTETH_ADDRESS") ?? deployments.wstETH ?? defaults.wstETH, "WSTETH_ADDRESS");
  const usdc = assertAddress(env("USDC_ADDRESS") ?? defaults.usdc, "USDC_ADDRESS");

  const claimRecipient = parseOptionalAddress(env("CLAIM_RECIPIENT") ?? defaults.claimRecipient) ?? agentAddress;
  const locusWalletAddress = parseOptionalAddress(env("LOCUS_WALLET_ADDRESS") ?? defaults.locusWalletAddress);

  return {
    chainId: Number(env("CHAIN_ID") ?? defaults.chainId),
    baseRpcUrl: env("BASE_RPC_URL"),
    ownerPrivateKey,
    agentPrivateKey,
    ownerAddress,
    agentAddress,
    wstETH,
    usdc,
    claimRecipient,
    locusWalletAddress,
    contractAddresses: {
      production: productionAddress,
      demo: demoAddress,
    },
    uniswapApiKey: env("UNISWAP_API_KEY"),
    uniswapApiBase: "https://trade-api.gateway.uniswap.org/v1",
    locusEnv,
    locusApiKey: env("LOCUS_API_KEY"),
    locusApiBase,
    telegramBotToken: env("TELEGRAM_BOT_TOKEN"),
    telegramChatId: env("TELEGRAM_CHAT_ID") ?? defaults.telegramChatId,
    telegramApiBase,
    slippageBps: Number(env("SLIPPAGE_BPS") ?? defaults.slippageBps),
    demoDeltaStETH: BigInt(env("DEMO_DELTA_STETH") ?? defaults.demoDeltaStETH),
    perTxCapWstETH: BigInt(env("PER_TX_CAP_WSTETH") ?? defaults.perTxCapWstETH),
    minClaimAmountWstETH: parseTokenAmount(env("MIN_CLAIM_AMOUNT_WSTETH") ?? defaults.minClaimAmountWstETH),
    maxClaimAmountWstETH: parseTokenAmount(env("MAX_CLAIM_AMOUNT_WSTETH") ?? defaults.maxClaimAmountWstETH),
    monitorContractKind: parseContractKind(env("MONITOR_CONTRACT_KIND"), defaults.monitorContractKind),
    monitorLookbackHours: Number(env("MONITOR_LOOKBACK_HOURS") ?? defaults.monitorLookbackHours),
    monitorMaxTopicsPerRun: Number(env("MONITOR_MAX_TOPICS_PER_RUN") ?? defaults.monitorMaxTopicsPerRun),
    monitorDiscoveryMaxPages: Number(env("MONITOR_DISCOVERY_MAX_PAGES") ?? defaults.monitorDiscoveryMaxPages),
    locusBufferMinUsdc: parseTokenAmount(env("LOCUS_BUFFER_MIN_USDC") ?? defaults.locusBufferMinUsdc, 6),
    monitorRefillClaimWstETH: parseTokenAmount(
      env("MONITOR_REFILL_CLAIM_WSTETH") ?? defaults.monitorRefillClaimWstETH,
    ),
    digestHourUtc: Number(env("DIGEST_HOUR_UTC") ?? defaults.digestHourUtc),
    forumBaseUrl: env("FORUM_BASE_URL") ?? defaults.forumBaseUrl,
    forumLatestUrl: env("FORUM_LATEST_URL") ?? defaults.forumLatestUrl,
    geminiModel: env("GEMINI_MODEL") ?? defaults.geminiModel,
    dashboardAdminToken: env("DASHBOARD_ADMIN_TOKEN"),
    dashboardHost: env("DASHBOARD_HOST") ?? defaults.dashboardHost,
    dashboardPort: Number(env("DASHBOARD_PORT") ?? defaults.dashboardPort),
    eventLookbackBlocks: BigInt(env("EVENT_LOOKBACK_BLOCKS") ?? defaults.eventLookbackBlocks),
  };
}
