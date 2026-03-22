import type { Address, Hex } from "viem";

export type ContractKind = "production" | "demo";
export type LocusEnv = "beta" | "prod";
export type ChangeLevel = "NONE" | "MINOR" | "MATERIAL";
export type MonitorRunStatus = ChangeLevel | "FAILED" | "PENDING_APPROVAL";
export type AgentStatus = "healthy" | "degraded" | "pending_approval" | "failed";
export type TopicRecommendedAction = "monitor" | "review" | "urgent_review";

export interface DefaultsFile {
  chainId: number;
  wstETH: string;
  usdc: string;
  claimRecipient: string;
  locusWalletAddress: string;
  slippageBps: number;
  demoDeltaStETH: string;
  perTxCapWstETH: string;
  minClaimAmountWstETH: string;
  maxClaimAmountWstETH: string;
  telegramChatId: string;
  monitorContractKind: ContractKind;
  monitorLookbackHours: number;
  monitorMaxTopicsPerRun: number;
  monitorDiscoveryMaxPages: number;
  locusBufferMinUsdc: string;
  monitorRefillClaimWstETH: string;
  digestHourUtc: number;
  forumBaseUrl: string;
  forumLatestUrl: string;
  geminiModel: string;
  dashboardHost: string;
  dashboardPort: number;
  eventLookbackBlocks: number;
}

export interface DeploymentsFile {
  chainId: number;
  owner: string;
  wstETH: string;
  production: string;
  demo: string;
}

export interface RecentTx {
  step: string;
  hash: string;
  timestamp: string;
}

export interface PendingApprovalRecord {
  step: string;
  pendingApprovalId: string;
  approvalUrl: string;
  timestamp: string;
  message?: string;
}

export interface TransactionRequest {
  to: Address;
  from: Address;
  data: Hex;
  value: string;
  chainId: number;
  gasLimit?: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  gasPrice?: string;
}

export interface TypedDataField {
  name: string;
  type: string;
}

export interface PermitData {
  domain: Record<string, unknown>;
  values: Record<string, unknown>;
  types: Record<string, TypedDataField[]>;
}

export interface UniswapCheckApprovalResponse {
  requestId?: string;
  approval?: TransactionRequest | null;
  cancel?: TransactionRequest | null;
}

export interface UniswapQuoteResponse {
  requestId?: string;
  quote: Record<string, unknown>;
  permitData?: PermitData | null;
  routing: string;
  quoteTimestampMs?: number;
}

export interface UniswapSwapResponse {
  requestId?: string;
  swap: TransactionRequest;
}

export interface LocusBalancePayload {
  wallet_address: string;
  balance?: string;
  token?: string;
  usdc_balance?: string;
  chain?: string;
  allowance?: string | null;
  max_transaction_size?: string | null;
}

export interface LocusBalanceResponse {
  success: boolean;
  data: LocusBalancePayload;
}

export interface WrappedCatalogResponse {
  success: boolean;
  data: {
    endpoints: string[];
    catalog?: Array<{ provider: string; endpoints: string[] }>;
  };
}

export interface LocusPendingApproval {
  pending_approval_id: string;
  approval_url: string;
  status: "PENDING_APPROVAL";
  estimated_cost_usdc?: number;
  message?: string;
}

export interface LocusCallResponse<T = Record<string, unknown>> {
  success?: boolean;
  data?: T | LocusPendingApproval;
  error?: string;
  message?: string;
}

export interface RingfenceConfig {
  chainId: number;
  baseRpcUrl?: string;
  ownerPrivateKey?: Hex;
  agentPrivateKey?: Hex;
  ownerAddress?: Address;
  agentAddress?: Address;
  wstETH: Address;
  usdc: Address;
  claimRecipient?: Address;
  locusWalletAddress?: Address;
  contractAddresses: Partial<Record<ContractKind, Address>>;
  uniswapApiKey?: string;
  uniswapApiBase: string;
  locusEnv: LocusEnv;
  locusApiKey?: string;
  locusApiBase: string;
  telegramBotToken?: string;
  telegramChatId: string;
  telegramApiBase: string;
  slippageBps: number;
  demoDeltaStETH: bigint;
  perTxCapWstETH: bigint;
  minClaimAmountWstETH: bigint;
  maxClaimAmountWstETH: bigint;
  monitorContractKind: ContractKind;
  monitorLookbackHours: number;
  monitorMaxTopicsPerRun: number;
  monitorDiscoveryMaxPages: number;
  locusBufferMinUsdc: bigint;
  monitorRefillClaimWstETH: bigint;
  digestHourUtc: number;
  forumBaseUrl: string;
  forumLatestUrl: string;
  geminiModel: string;
  dashboardAdminToken?: string;
  dashboardHost: string;
  dashboardPort: number;
  eventLookbackBlocks: bigint;
}

export interface VaultState {
  contractKind: ContractKind;
  contractAddress: Address;
  owner: Address;
  agent: Address;
  vaultBalanceWstETH: bigint;
  principalBaseline: bigint;
  effectiveBaseline: bigint;
  currentPositionValue: bigint;
  claimableAmount: bigint;
  perTxCap: bigint;
  claimRecipientWhitelisted: boolean;
  demoSpendableDeltaStETH?: bigint;
}

export interface ContractEventRecord {
  contractKind: ContractKind;
  contractAddress: Address;
  eventName: string;
  txHash: Hex;
  blockNumber: bigint;
  timestamp?: string;
  args: Record<string, string | boolean>;
}

export interface ForumTopicRecord {
  topicId: number;
  title: string;
  slug: string;
  url: string;
  createdAt: string;
  lastPostedAt: string;
  highestPostNumber: number;
  postsCount: number;
  replyCount: number;
  likeCount: number;
  views: number;
  categoryId?: number;
  excerpt?: string;
}

export interface MonitoredTopicSnapshot {
  topicId: number;
  title: string;
  slug: string;
  url: string;
  createdAt: string;
  lastPostedAt: string;
  highestPostNumber: number;
  postsCount: number;
  replyCount: number;
  likeCount: number;
  views: number;
  categoryId?: number;
  excerpt?: string;
  lastSeenAt: string;
  lastAnalyzedAt?: string;
  lastChangeLevel?: Exclude<ChangeLevel, "NONE">;
  lastMaterialAlertedAt?: string;
  lastMaterialAlertedPostNumber?: number;
}

export interface MonitoredTopicResult {
  topicId: number;
  title: string;
  url: string;
  summary: string;
  changeLevel: Exclude<ChangeLevel, "NONE">;
  riskTags: string[];
  whyItMatters: string;
  recommendedAction: TopicRecommendedAction;
  createdAt: string;
  lastPostedAt: string;
  highestPostNumber: number;
  postsCount: number;
  replyCount: number;
  changePostDelta: number;
  isNewTopic: boolean;
}

export interface MonitorRunRecord {
  runId: string;
  runType: "hourly" | "manual_hourly" | "digest" | "manual_digest" | "preflight";
  contractKind: ContractKind;
  startedAt: string;
  completedAt?: string;
  status: MonitorRunStatus;
  summary: string;
  changedTopicCount: number;
  analyzedTopicCount: number;
  overflowTopicCount: number;
  topicResults: MonitoredTopicResult[];
  pendingApprovalStep?: string;
  approvalUrl?: string;
  treasuryAction?: "skipped" | "refilled";
  error?: string;
}

export interface MaterialAlertRecord {
  runId: string;
  sentAt: string;
  subject: string;
  text: string;
  html: string;
  topicResults: MonitoredTopicResult[];
}

export interface DigestRecord {
  runId: string;
  sentAt: string;
  subject: string;
  text: string;
  html: string;
  topicResults: MonitoredTopicResult[];
  summary: string;
}

export interface MonitorState {
  topicSnapshots: Record<string, MonitoredTopicSnapshot>;
  runHistory: MonitorRunRecord[];
  materialAlerts: MaterialAlertRecord[];
  digests: DigestRecord[];
  latestChangedTopics: MonitoredTopicResult[];
  latestPublicSummary?: string;
  latestStatus?: AgentStatus;
  lastDigestSentAt?: string;
  lastDigestDayKey?: string;
  lastHourlyRunAt?: string;
  lastHourlyRunHourKey?: string;
}

export interface RuntimeStateFile {
  recentTxs: RecentTx[];
  pendingApprovals?: PendingApprovalRecord[];
  lastRun?: Record<string, string>;
  monitor: MonitorState;
}

export interface DiffbotDiscussionRequest {
  url: string;
  fields?: string;
  timeout?: number;
  discussion?: boolean;
  paging?: boolean;
  maxPages?: number;
}

export interface GeminiMessage {
  role: "user" | "model";
  content: string;
}

export interface GeminiChatRequest {
  model: string;
  messages: GeminiMessage[];
  systemInstruction?: string;
  maxOutputTokens?: number;
  temperature?: number;
  topP?: number;
  topK?: number;
  thinking?: string | boolean | number;
  responseMimeType?: string;
  responseJsonSchema?: Record<string, unknown>;
  stopSequences?: string[];
}

export interface TreasuryRefillResult {
  action: "skipped" | "refilled";
  claimTxHash?: string;
  approvalRequestId?: string;
  swapTxHash?: string;
  topupTxHash?: string;
  claimedWstETH?: bigint;
  usdcReceived?: bigint;
  locusBalanceBefore?: bigint;
  locusBalanceAfter?: bigint;
}

export interface MonitorPreflightResult {
  contractKind: ContractKind;
  claimableAmount: bigint;
  perTxCap: bigint;
  monitorRefillClaimAmount?: bigint;
  approvalStatus: "skipped" | "ready" | "approval_required";
  approvalRequestId?: string;
  locusWalletAddress: string;
  locusBalance: string;
  wrappedEndpoints: string[];
  telegramChatId: string;
}

export interface DashboardPublicState {
  monitorContractKind: ContractKind;
  agentStatus: AgentStatus;
  generatedAt: string;
  production?: VaultState;
  demo?: VaultState;
  treasuryProtectionSummary: Record<ContractKind, string | undefined>;
  locusBalance?: string;
  locusWalletAddress?: string;
  telegramChatId?: string;
  latestPublicSummary?: string;
  lastHourlyRunAt?: string;
  lastDailyDigestAt?: string;
  latestChangedTopics: MonitoredTopicResult[];
  materialAlerts: MaterialAlertRecord[];
  digests: DigestRecord[];
  recentRuns: MonitorRunRecord[];
  recentTxs: RecentTx[];
  pendingApprovals: PendingApprovalRecord[];
  contractEvents: ContractEventRecord[];
}
