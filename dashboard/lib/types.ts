export type ContractKind = "production" | "demo";
export type AgentStatus = "healthy" | "degraded" | "pending_approval" | "failed";
export type MonitorRunStatus = "NONE" | "MINOR" | "MATERIAL" | "FAILED" | "PENDING_APPROVAL";
export type TopicRecommendedAction = "monitor" | "review" | "urgent_review";

export interface VaultState {
  contractKind: ContractKind;
  contractAddress: string;
  owner: string;
  agent: string;
  vaultBalanceWstETH: string;
  principalBaseline: string;
  effectiveBaseline: string;
  currentPositionValue: string;
  claimableAmount: string;
  perTxCap: string;
  claimRecipientWhitelisted: boolean;
}

export interface MonitoredTopicResult {
  topicId: number;
  title: string;
  url: string;
  summary: string;
  changeLevel: "MINOR" | "MATERIAL";
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

export interface ContractEventRecord {
  contractKind: ContractKind;
  contractAddress: string;
  eventName: string;
  txHash: string;
  blockNumber: string;
  timestamp?: string;
  args: Record<string, string | boolean>;
}

export interface DashboardPublicState {
  monitorContractKind: ContractKind;
  agentStatus: AgentStatus;
  generatedAt: string;
  production?: VaultState;
  treasuryProtectionSummary: Record<string, string | undefined>;
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
