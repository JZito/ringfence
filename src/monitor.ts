import { randomUUID } from "node:crypto";

import { formatAmount, formatUsd, nowIso, stringifyForJson } from "./format.js";
import { fetchForumTopicDiscussion, fetchLatestForumTopics } from "./forum.js";
import { readRuntimeState, recordDigest, recordMaterialAlert, recordMonitorRun, updateRuntimeState } from "./history.js";
import { asChangeLevel, ensureRequiredLocusEndpoints } from "./guards.js";
import { callDiffbotDiscussion, callGeminiChat, getPendingApproval, getWrappedCatalog } from "./locus.js";
import { logStep } from "./logger.js";
import {
  clearLocusPendingApproval,
  ensureTreasuryConfig,
  formatLocusBalanceDisplay,
  getVerifiedLocusBalance,
  getLocusUsdcBalanceString,
  parseLocusUsdcBalance,
  protectionSummary,
  recordLocusPendingApproval,
  runMonitorPreflight,
  sendOperatorTelegramStep,
  runTreasuryRefillFlow,
} from "./runtime.js";
import { escapeTelegramHtml } from "./telegram.js";
import { readRecentContractEvents, readVaultState } from "./contracts.js";
import type {
  AgentStatus,
  ChangeLevel,
  ContractKind,
  DashboardPublicState,
  DigestRecord,
  ForumTopicRecord,
  MaterialAlertRecord,
  MonitoredTopicResult,
  MonitoredTopicSnapshot,
  MonitorRunRecord,
  MonitorRunStatus,
  RingfenceConfig,
  TopicRecommendedAction,
} from "./types.js";

interface TopicAnalysisFailure {
  topicId: number;
  title: string;
  url: string;
  message: string;
}

const GEMINI_TOPIC_RESULT_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["topicId", "title", "url", "summary", "changeLevel", "riskTags", "whyItMatters", "recommendedAction"],
  properties: {
    topicId: { type: "integer" },
    title: { type: "string" },
    url: { type: "string" },
    summary: { type: "string" },
    changeLevel: { type: "string", enum: ["MINOR", "MATERIAL"] },
    riskTags: { type: "array", items: { type: "string" }, maxItems: 6 },
    whyItMatters: { type: "string" },
    recommendedAction: { type: "string", enum: ["monitor", "review", "urgent_review"] },
  },
} as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function topicKey(topicId: number): string {
  return String(topicId);
}

function hourKeyFromIso(timestamp: string): string {
  return timestamp.slice(0, 13);
}

function dayKeyFromIso(timestamp: string): string {
  return timestamp.slice(0, 10);
}

function truncateText(value: string, maxLength: number): string {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength - 3)}...`;
}

function parseTimestamp(value: string): number {
  const parsed = Date.parse(value);
  if (Number.isNaN(parsed)) {
    throw new Error(`Invalid timestamp: ${value}`);
  }
  return parsed;
}

function normalizeRiskTags(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return [...new Set(value.map((item) => String(item).trim().toLowerCase()).filter(Boolean))].slice(0, 6);
}

function asRecommendedAction(value: unknown): TopicRecommendedAction {
  if (value === "monitor" || value === "review" || value === "urgent_review") {
    return value;
  }

  throw new Error(`Invalid recommended action: ${String(value)}`);
}

function buildTopicSnapshot(topic: ForumTopicRecord, seenAt: string): MonitoredTopicSnapshot {
  return {
    topicId: topic.topicId,
    title: topic.title,
    slug: topic.slug,
    url: topic.url,
    createdAt: topic.createdAt,
    lastPostedAt: topic.lastPostedAt,
    highestPostNumber: topic.highestPostNumber,
    postsCount: topic.postsCount,
    replyCount: topic.replyCount,
    likeCount: topic.likeCount,
    views: topic.views,
    categoryId: topic.categoryId,
    excerpt: topic.excerpt,
    lastSeenAt: seenAt,
  };
}

function mergeTopicSnapshot(previous: MonitoredTopicSnapshot | undefined, topic: ForumTopicRecord, seenAt: string) {
  const next = buildTopicSnapshot(topic, seenAt);
  return {
    ...previous,
    ...next,
    lastSeenAt: seenAt,
  } satisfies MonitoredTopicSnapshot;
}

export function detectChangedTopics(input: {
  topics: ForumTopicRecord[];
  snapshots: Record<string, MonitoredTopicSnapshot>;
  lookbackHours: number;
  now?: Date;
}): ForumTopicRecord[] {
  const { topics, snapshots, lookbackHours, now = new Date() } = input;
  const snapshotCount = Object.keys(snapshots).length;
  const cutoffMs = now.getTime() - lookbackHours * 60 * 60 * 1000;

  return topics.filter((topic) => {
    const snapshot = snapshots[topicKey(topic.topicId)];
    if (!snapshot) {
      if (snapshotCount === 0) {
        return parseTimestamp(topic.lastPostedAt) >= cutoffMs;
      }
      return true;
    }

    return (
      parseTimestamp(topic.lastPostedAt) > parseTimestamp(snapshot.lastPostedAt) ||
      topic.highestPostNumber > snapshot.highestPostNumber
    );
  });
}

export function deriveOverallChangeLevel(results: MonitoredTopicResult[]): ChangeLevel {
  if (results.some((result) => result.changeLevel === "MATERIAL")) {
    return "MATERIAL";
  }
  if (results.some((result) => result.changeLevel === "MINOR")) {
    return "MINOR";
  }
  return "NONE";
}

export function shouldSendMaterialAlert(
  snapshot: MonitoredTopicSnapshot | undefined,
  result: MonitoredTopicResult,
): boolean {
  if (result.changeLevel !== "MATERIAL") {
    return false;
  }
  if (!snapshot || snapshot.lastMaterialAlertedPostNumber === undefined) {
    return true;
  }

  return result.highestPostNumber > snapshot.lastMaterialAlertedPostNumber;
}

export function collectDigestTopicResults(input: {
  runHistory: MonitorRunRecord[];
  lastDigestSentAt?: string;
  now?: Date;
}): MonitoredTopicResult[] {
  const sinceMs = input.lastDigestSentAt
    ? parseTimestamp(input.lastDigestSentAt)
    : (input.now ?? new Date()).getTime() - 24 * 60 * 60 * 1000;
  const deduped = new Map<string, MonitoredTopicResult>();

  for (const run of input.runHistory) {
    if (run.runType !== "hourly" && run.runType !== "manual_hourly") {
      continue;
    }
    if (parseTimestamp(run.startedAt) <= sinceMs) {
      continue;
    }
    for (const result of run.topicResults) {
      const key = `${result.topicId}:${result.highestPostNumber}`;
      if (!deduped.has(key)) {
        deduped.set(key, result);
      }
    }
  }

  return [...deduped.values()].sort((left, right) => parseTimestamp(right.lastPostedAt) - parseTimestamp(left.lastPostedAt));
}

export function buildRunSummary(
  results: MonitoredTopicResult[],
  overflowTopicCount: number,
  analysisFailures: TopicAnalysisFailure[] = [],
): string {
  const changeLevel = deriveOverallChangeLevel(results);
  const headline =
    changeLevel === "MATERIAL"
      ? "Material Lido governance change detected."
      : changeLevel === "MINOR"
        ? "Recent Lido governance updates detected."
        : "No recent Lido governance changes detected.";

  const failureText =
    analysisFailures.length > 0
      ? ` ${analysisFailures.length} topic(s) failed upstream analysis: ${analysisFailures
          .slice(0, 2)
          .map((failure) => failure.title)
          .join("; ")}.`
      : "";

  if (results.length === 0) {
    const base = overflowTopicCount > 0
      ? `${headline} ${overflowTopicCount} additional changed topics were skipped because the hourly analysis cap was reached.`
      : headline;
    return `${base}${failureText}`.trim();
  }

  const titles = results.slice(0, 3).map((result) => result.title).join("; ");
  const overflowText =
    overflowTopicCount > 0 ? ` ${overflowTopicCount} additional changed topics were skipped this run.` : "";
  return `${headline} ${results.length} topic(s) analyzed: ${titles}.${overflowText}${failureText}`.trim();
}

function buildMaterialAlertSubject(topicResults: MonitoredTopicResult[]): string {
  if (topicResults.length === 1) {
    return `Ringfence alert: ${topicResults[0]!.title}`;
  }
  return `Ringfence alert: ${topicResults.length} material Lido governance changes`;
}

function renderTopicBlock(result: MonitoredTopicResult): string {
  const riskLine = result.riskTags.length > 0 ? `Risk tags: ${result.riskTags.join(", ")}` : "Risk tags: none";
  return [
    `${result.title}`,
    `${result.url}`,
    `Level: ${result.changeLevel}`,
    `Summary: ${result.summary}`,
    `Why it matters: ${result.whyItMatters}`,
    `Recommended action: ${result.recommendedAction}`,
    riskLine,
  ].join("\n");
}

function renderTopicBlockHtml(result: MonitoredTopicResult): string {
  return [
    `<b>${escapeTelegramHtml(result.title)}</b>`,
    `<a href="${escapeTelegramHtml(result.url)}">Open topic</a>`,
    `• <b>Level</b>: ${escapeTelegramHtml(result.changeLevel)}`,
    `• <b>Summary</b>: ${escapeTelegramHtml(result.summary)}`,
    `• <b>Why it matters</b>: ${escapeTelegramHtml(result.whyItMatters)}`,
    `• <b>Recommended action</b>: ${escapeTelegramHtml(result.recommendedAction)}`,
    `• <b>Risk tags</b>: ${escapeTelegramHtml(result.riskTags.length > 0 ? result.riskTags.join(", ") : "none")}`,
  ].join("\n");
}

function buildMaterialAlertBody(input: {
  topicResults: MonitoredTopicResult[];
  treasuryProtection: string;
  contractKind: ContractKind;
}): { text: string; html: string } {
  const lines = [
    `Ringfence detected ${input.topicResults.length} material Lido governance change(s).`,
    `Monitoring treasury contract: ${input.contractKind}`,
    `Principal protection: ${input.treasuryProtection}`,
    "",
  ];

  for (const result of input.topicResults) {
    lines.push(renderTopicBlock(result), "");
  }

  const text = lines.join("\n").trim();
  const html = [
    `<b>Monitoring treasury</b>: ${escapeTelegramHtml(input.contractKind)}`,
    `<b>Principal protection</b>: ${escapeTelegramHtml(input.treasuryProtection)}`,
    "",
    ...input.topicResults.flatMap((result, index) => (index === 0 ? [renderTopicBlockHtml(result)] : ["", renderTopicBlockHtml(result)])),
  ].join("\n").trim();
  return { text, html };
}

function buildDigestSubject(now: string): string {
  return `Ringfence daily digest ${dayKeyFromIso(now)}`;
}

function buildDigestBody(input: {
  results: MonitoredTopicResult[];
  treasuryProtection: string;
  contractKind: ContractKind;
  overflowCount: number;
}): { summary: string; text: string; html: string } {
  const headline =
    input.results.length === 0
      ? "No notable Lido governance changes were detected since the previous digest."
      : `Ringfence detected ${input.results.length} notable Lido governance change(s) since the previous digest.`;

  const lines = [
    headline,
    `Monitoring treasury contract: ${input.contractKind}`,
    `Principal protection: ${input.treasuryProtection}`,
  ];

  if (input.overflowCount > 0) {
    lines.push(`Additional changed topics skipped by the hourly analysis cap: ${input.overflowCount}`);
  }

  lines.push("");
  if (input.results.length === 0) {
    lines.push("No notable changes.");
  } else {
    for (const result of input.results) {
      lines.push(renderTopicBlock(result), "");
    }
  }

  const text = lines.join("\n").trim();
  const htmlLines = [
    `<b>Monitoring treasury</b>: ${escapeTelegramHtml(input.contractKind)}`,
    `<b>Principal protection</b>: ${escapeTelegramHtml(input.treasuryProtection)}`,
  ];
  if (input.overflowCount > 0) {
    htmlLines.push(`<b>Skipped changed topics</b>: ${escapeTelegramHtml(String(input.overflowCount))}`);
  }
  htmlLines.push("");
  if (input.results.length === 0) {
    htmlLines.push("No notable changes.");
  } else {
    for (const [index, result] of input.results.entries()) {
      if (index > 0) {
        htmlLines.push("");
      }
      htmlLines.push(renderTopicBlockHtml(result));
    }
  }
  return {
    summary: headline,
    text,
    html: htmlLines.join("\n").trim(),
  };
}

function extractGeminiJsonCandidate(data: unknown): unknown {
  if (typeof data === "string") {
    try {
      return JSON.parse(data);
    } catch {
      return data;
    }
  }
  if (!isRecord(data)) {
    return data;
  }
  if (
    typeof data.topicId === "number" &&
    typeof data.title === "string" &&
    typeof data.url === "string" &&
    typeof data.summary === "string"
  ) {
    return data;
  }
  if (typeof data.text === "string") {
    return extractGeminiJsonCandidate(data.text);
  }
  if (typeof data.content === "string") {
    return extractGeminiJsonCandidate(data.content);
  }
  if (Array.isArray(data.candidates)) {
    const first = data.candidates[0];
    if (isRecord(first) && isRecord(first.content) && Array.isArray(first.content.parts)) {
      for (const part of first.content.parts) {
        if (isRecord(part) && typeof part.text === "string") {
          return extractGeminiJsonCandidate(part.text);
        }
      }
    }
  }

  return data;
}

function parseGeminiTopicResult(data: unknown, topic: ForumTopicRecord, previous: MonitoredTopicSnapshot | undefined): MonitoredTopicResult {
  const parsed = extractGeminiJsonCandidate(data);
  if (!isRecord(parsed)) {
    throw new Error(`Gemini returned a non-object payload for topic ${topic.topicId}`);
  }

  const changeLevel = asChangeLevel(String(parsed.changeLevel));
  if (changeLevel === "NONE") {
    throw new Error(`Gemini returned NONE for changed topic ${topic.topicId}`);
  }

  return {
    topicId: typeof parsed.topicId === "number" ? parsed.topicId : topic.topicId,
    title: typeof parsed.title === "string" && parsed.title.trim() ? parsed.title.trim() : topic.title,
    url: typeof parsed.url === "string" && parsed.url.trim() ? parsed.url.trim() : topic.url,
    summary: truncateText(String(parsed.summary ?? ""), 1_200),
    changeLevel,
    riskTags: normalizeRiskTags(parsed.riskTags),
    whyItMatters: truncateText(String(parsed.whyItMatters ?? ""), 1_500),
    recommendedAction: asRecommendedAction(parsed.recommendedAction),
    createdAt: topic.createdAt,
    lastPostedAt: topic.lastPostedAt,
    highestPostNumber: topic.highestPostNumber,
    postsCount: topic.postsCount,
    replyCount: topic.replyCount,
    changePostDelta: Math.max(0, topic.highestPostNumber - (previous?.highestPostNumber ?? 0)),
    isNewTopic: !previous,
  };
}

function buildGeminiPrompt(topic: ForumTopicRecord, previous: MonitoredTopicSnapshot | undefined, diffbotData: unknown): string {
  const metadata = {
    topicId: topic.topicId,
    title: topic.title,
    url: topic.url,
    createdAt: topic.createdAt,
    lastPostedAt: topic.lastPostedAt,
    highestPostNumber: topic.highestPostNumber,
    postsCount: topic.postsCount,
    replyCount: topic.replyCount,
    likeCount: topic.likeCount,
    views: topic.views,
    excerpt: topic.excerpt,
    previousSnapshot: previous
      ? {
          lastPostedAt: previous.lastPostedAt,
          highestPostNumber: previous.highestPostNumber,
          postsCount: previous.postsCount,
          replyCount: previous.replyCount,
          lastChangeLevel: previous.lastChangeLevel,
        }
      : null,
  };

  return [
    "You are classifying recent Lido governance forum activity for a treasury-monitoring agent.",
    "Focus on security concerns, hacks, slashings, validator/operator issues, governance or process risk, parameter or economic changes, new proposals, and high-engagement discussion spikes.",
    "Return a single JSON object matching the required schema.",
    "Use MATERIAL when a human operator should be alerted immediately. Use MINOR for updates worth tracking but not urgent.",
    "",
    "Topic metadata:",
    stringifyForJson(metadata),
    "",
    "Diffbot discussion payload:",
    truncateText(stringifyForJson(diffbotData), 20_000),
  ].join("\n");
}

async function analyzeTopic(
  config: RingfenceConfig,
  topic: ForumTopicRecord,
  previous: MonitoredTopicSnapshot | undefined,
): Promise<
  | { result: MonitoredTopicResult }
  | { pendingApprovalStep: string; approvalUrl: string; pendingApprovalId: string }
> {
  const diffbotStep = `monitor-diffbot-${topic.topicId}`;
  logStep(diffbotStep, "start", { message: `Diffbot discussion scrape for ${topic.title}`, url: topic.url });
  const diffbotResponse = await callDiffbotDiscussion(config, {
    url: topic.url,
    paging: true,
    maxPages: 3,
    fields: "links,meta",
    timeout: 30_000,
  });
  const diffbotPending = getPendingApproval(diffbotResponse);
  if (diffbotPending) {
    recordLocusPendingApproval(diffbotStep, diffbotPending);
    return {
      pendingApprovalStep: diffbotStep,
      approvalUrl: diffbotPending.approval_url,
      pendingApprovalId: diffbotPending.pending_approval_id,
    };
  }
  clearLocusPendingApproval(diffbotStep);
  let discussionPayload: unknown;
  if (diffbotResponse.status >= 400 || diffbotResponse.body.success === false) {
    const diffbotError = JSON.stringify(diffbotResponse.body);
    logStep(diffbotStep, "info", {
      message: `Diffbot failed for ${topic.title}; using forum fallback`,
      topicId: topic.topicId,
      url: topic.url,
      error: diffbotError,
    });
    try {
      discussionPayload = await fetchForumTopicDiscussion(config, topic);
      logStep(diffbotStep, "ok", {
        message: `Forum fallback loaded for ${topic.title}`,
        topicId: topic.topicId,
        source: "forum_json_fallback",
      });
    } catch (fallbackError) {
      const fallbackMessage = fallbackError instanceof Error ? fallbackError.message : String(fallbackError);
      throw new Error(
        `Diffbot discussion failed for topic ${topic.topicId}: ${diffbotError}; forum fallback failed: ${fallbackMessage}`,
      );
    }
  } else {
    discussionPayload = diffbotResponse.body.data ?? diffbotResponse.body;
    logStep(diffbotStep, "ok", { message: `Diffbot scrape complete for ${topic.title}` });
  }

  const geminiStep = `monitor-gemini-${topic.topicId}`;
  logStep(geminiStep, "start", { message: `Gemini classification for ${topic.title}` });
  const geminiResponse = await callGeminiChat(config, {
    model: config.geminiModel,
    systemInstruction:
      "Classify Lido governance forum updates for a treasury monitor. Be conservative, concrete, and security-focused.",
    messages: [
      {
        role: "user",
        content: buildGeminiPrompt(topic, previous, discussionPayload),
      },
    ],
    maxOutputTokens: 1_024,
    temperature: 0.1,
    topP: 0.9,
    topK: 40,
    thinking: "low",
    responseMimeType: "application/json",
    responseJsonSchema: GEMINI_TOPIC_RESULT_SCHEMA as unknown as Record<string, unknown>,
  });
  const geminiPending = getPendingApproval(geminiResponse);
  if (geminiPending) {
    recordLocusPendingApproval(geminiStep, geminiPending);
    return {
      pendingApprovalStep: geminiStep,
      approvalUrl: geminiPending.approval_url,
      pendingApprovalId: geminiPending.pending_approval_id,
    };
  }
  clearLocusPendingApproval(geminiStep);
  if (geminiResponse.status >= 400 || geminiResponse.body.success === false) {
    throw new Error(`Gemini classification failed for topic ${topic.topicId}: ${JSON.stringify(geminiResponse.body)}`);
  }

  const result = parseGeminiTopicResult(geminiResponse.body.data, topic, previous);
  logStep(geminiStep, "ok", {
    message: `Gemini classified ${topic.title} as ${result.changeLevel}`,
    changeLevel: result.changeLevel,
    riskTags: result.riskTags,
  });

  return { result };
}

export function deriveAgentStatus(input: {
  status: MonitorRunStatus;
  summary: string;
  allTopicsFailedUpstream?: boolean;
}): AgentStatus {
  if (input.status === "PENDING_APPROVAL") {
    return "pending_approval";
  }
  if (input.status === "FAILED") {
    return input.allTopicsFailedUpstream || input.summary.includes("below the configured buffer")
      ? "degraded"
      : "failed";
  }
  return "healthy";
}

export function deriveStickyDashboardTopics(input: {
  latestChangedTopics: MonitoredTopicResult[];
  latestPublicSummary?: string;
  runHistory: MonitorRunRecord[];
}): {
  latestChangedTopics: MonitoredTopicResult[];
  latestPublicSummary?: string;
  isStickyFallback: boolean;
} {
  if (input.latestChangedTopics.length > 0) {
    return {
      latestChangedTopics: input.latestChangedTopics,
      latestPublicSummary: input.latestPublicSummary,
      isStickyFallback: false,
    };
  }

  const fallbackRun = input.runHistory.find((run) =>
    (run.runType === "hourly" || run.runType === "manual_hourly") && run.topicResults.length > 0,
  );

  if (!fallbackRun) {
    return {
      latestChangedTopics: input.latestChangedTopics,
      latestPublicSummary: input.latestPublicSummary,
      isStickyFallback: false,
    };
  }

  return {
    latestChangedTopics: fallbackRun.topicResults,
    latestPublicSummary: fallbackRun.summary,
    isStickyFallback: true,
  };
}

function persistHourlyRun(input: {
  run: MonitorRunRecord;
  discoveredTopics: ForumTopicRecord[];
  results: MonitoredTopicResult[];
  alertSentResults: MonitoredTopicResult[];
  agentStatus: AgentStatus;
}) {
  const { run, discoveredTopics, results, alertSentResults, agentStatus } = input;
  recordMonitorRun(run);
  const seenAt = run.completedAt ?? run.startedAt;

  updateRuntimeState((state) => {
    for (const topic of discoveredTopics) {
      const key = topicKey(topic.topicId);
      const previous = state.monitor.topicSnapshots[key];
      state.monitor.topicSnapshots[key] = mergeTopicSnapshot(previous, topic, seenAt);
    }

    for (const result of results) {
      const key = topicKey(result.topicId);
      const existing = state.monitor.topicSnapshots[key];
      if (!existing) {
        continue;
      }
      existing.lastAnalyzedAt = seenAt;
      existing.lastChangeLevel = result.changeLevel;
    }

    for (const result of alertSentResults) {
      const key = topicKey(result.topicId);
      const existing = state.monitor.topicSnapshots[key];
      if (!existing) {
        continue;
      }
      existing.lastMaterialAlertedAt = seenAt;
      existing.lastMaterialAlertedPostNumber = result.highestPostNumber;
    }

    state.monitor.latestChangedTopics = results;
    state.monitor.latestPublicSummary = run.summary;
    state.monitor.latestStatus = agentStatus;
    state.monitor.lastHourlyRunAt = seenAt;
    state.monitor.lastHourlyRunHourKey = hourKeyFromIso(run.startedAt);
  });
}

function persistDigestRun(input: { run: MonitorRunRecord; agentStatus: AgentStatus }) {
  recordMonitorRun(input.run);
  updateRuntimeState((state) => {
    state.monitor.latestPublicSummary = input.run.summary;
    state.monitor.latestStatus = input.agentStatus;
    state.monitor.lastDigestDayKey = dayKeyFromIso(input.run.startedAt);
  });
}

export async function runHourlyMonitor(
  config: RingfenceConfig,
  contractKind: ContractKind = config.monitorContractKind,
  runType: "hourly" | "manual_hourly" = "manual_hourly",
): Promise<MonitorRunRecord> {
  ensureTreasuryConfig(config);
  const startedAt = nowIso();
  const runId = randomUUID();
  const stateBefore = readRuntimeState();
  const discoveredTopics = await fetchLatestForumTopics(config);
  const changedTopics = detectChangedTopics({
    topics: discoveredTopics,
    snapshots: stateBefore.monitor.topicSnapshots,
    lookbackHours: config.monitorLookbackHours,
    now: new Date(startedAt),
  });
  const topicsToAnalyze = changedTopics.slice(0, config.monitorMaxTopicsPerRun);
  const overflowTopicCount = Math.max(0, changedTopics.length - topicsToAnalyze.length);
  const results: MonitoredTopicResult[] = [];
  const analysisFailures: TopicAnalysisFailure[] = [];
  let treasuryAction: "skipped" | "refilled" | undefined;

  try {
    if (topicsToAnalyze.length === 0) {
      const run: MonitorRunRecord = {
        runId,
        runType,
        contractKind,
        startedAt,
        completedAt: nowIso(),
        status: "NONE",
        summary: buildRunSummary([], 0),
        changedTopicCount: 0,
        analyzedTopicCount: 0,
        overflowTopicCount: 0,
        topicResults: [],
        treasuryAction: "skipped",
      };
      persistHourlyRun({
        run,
        discoveredTopics,
        results: [],
        alertSentResults: [],
        agentStatus: "healthy",
      });
      logStep("monitor-hourly", "ok", { message: run.summary, runId, contractKind });
      return run;
    }

    const catalog = await getWrappedCatalog(config);
    ensureRequiredLocusEndpoints(catalog.data.endpoints);

    const verifiedBalance = await getVerifiedLocusBalance(config);
    const locusBalanceBefore = parseLocusUsdcBalance(getLocusUsdcBalanceString(verifiedBalance.data));
    if (locusBalanceBefore < config.locusBufferMinUsdc) {
      const refill = await runTreasuryRefillFlow(config, contractKind);
      treasuryAction = refill.action;
    } else {
      treasuryAction = "skipped";
    }

    for (const topic of topicsToAnalyze) {
      const previous = stateBefore.monitor.topicSnapshots[topicKey(topic.topicId)];
      let analyzed: Awaited<ReturnType<typeof analyzeTopic>>;
      try {
        analyzed = await analyzeTopic(config, topic, previous);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        analysisFailures.push({
          topicId: topic.topicId,
          title: topic.title,
          url: topic.url,
          message,
        });
        logStep("monitor-topic-error", "error", {
          message,
          topicId: topic.topicId,
          title: topic.title,
          url: topic.url,
        });
        continue;
      }
      if ("pendingApprovalStep" in analyzed) {
        const run: MonitorRunRecord = {
          runId,
          runType,
          contractKind,
          startedAt,
          completedAt: nowIso(),
          status: "PENDING_APPROVAL",
          summary: `Monitoring is waiting on human approval for ${topic.title}.`,
          changedTopicCount: changedTopics.length,
          analyzedTopicCount: results.length,
          overflowTopicCount,
          topicResults: results,
          pendingApprovalStep: analyzed.pendingApprovalStep,
          approvalUrl: analyzed.approvalUrl,
          treasuryAction,
          error: analysisFailures.length > 0 ? analysisFailures.map((failure) => `${failure.topicId}:${failure.message}`).join(" | ") : undefined,
        };
        persistHourlyRun({
          run,
          discoveredTopics,
          results,
          alertSentResults: [],
          agentStatus: deriveAgentStatus({ status: run.status, summary: run.summary }),
        });
        return run;
      }
      results.push(analyzed.result);
    }

    if (results.length === 0 && analysisFailures.length > 0) {
      const run: MonitorRunRecord = {
        runId,
        runType,
        contractKind,
        startedAt,
        completedAt: nowIso(),
        status: "FAILED",
        summary: buildRunSummary([], overflowTopicCount, analysisFailures),
        changedTopicCount: changedTopics.length,
        analyzedTopicCount: 0,
        overflowTopicCount,
        topicResults: [],
        treasuryAction,
        error: analysisFailures.map((failure) => `${failure.topicId}:${failure.message}`).join(" | "),
      };
      persistHourlyRun({
        run,
        discoveredTopics,
        results: [],
        alertSentResults: [],
        agentStatus: deriveAgentStatus({
          status: run.status,
          summary: run.summary,
          allTopicsFailedUpstream: true,
        }),
      });
      logStep("monitor-hourly", "error", {
        message: run.summary,
        runId,
        contractKind,
      });
      return run;
    }

    const overallLevel = deriveOverallChangeLevel(results);
    const monitorState = readRuntimeState().monitor;
    const alertableResults = results.filter((result) =>
      shouldSendMaterialAlert(monitorState.topicSnapshots[topicKey(result.topicId)], result),
    );
    let alertedResults: MonitoredTopicResult[] = [];

    if (alertableResults.length > 0) {
      const contractState = await readVaultState(config, contractKind);
      const subject = buildMaterialAlertSubject(alertableResults);
      const body = buildMaterialAlertBody({
        topicResults: alertableResults,
        treasuryProtection: protectionSummary(contractState),
        contractKind,
      });
      await sendOperatorTelegramStep({
        config,
        step: "monitor-material-alert",
        subject,
        text: body.text,
        html: body.html,
      });

      const alert: MaterialAlertRecord = {
        runId,
        sentAt: nowIso(),
        subject,
        text: body.text,
        html: body.html,
        topicResults: alertableResults,
      };
      recordMaterialAlert(alert);
      alertedResults = alertableResults;
    }

    const run: MonitorRunRecord = {
      runId,
      runType,
      contractKind,
      startedAt,
      completedAt: nowIso(),
      status: overallLevel,
      summary: buildRunSummary(results, overflowTopicCount, analysisFailures),
      changedTopicCount: changedTopics.length,
      analyzedTopicCount: results.length,
      overflowTopicCount,
      topicResults: results,
      treasuryAction,
      error: analysisFailures.length > 0 ? analysisFailures.map((failure) => `${failure.topicId}:${failure.message}`).join(" | ") : undefined,
    };

    persistHourlyRun({
      run,
      discoveredTopics,
      results,
      alertSentResults: alertedResults,
      agentStatus: deriveAgentStatus({ status: run.status, summary: run.summary }),
    });
    logStep("monitor-hourly", "ok", {
      message: run.summary,
      runId,
      status: run.status,
      changedTopicCount: run.changedTopicCount,
      analyzedTopicCount: run.analyzedTopicCount,
      overflowTopicCount,
    });
    return run;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const run: MonitorRunRecord = {
      runId,
      runType,
      contractKind,
      startedAt,
      completedAt: nowIso(),
      status: "FAILED",
      summary: message,
      changedTopicCount: changedTopics.length,
      analyzedTopicCount: results.length,
      overflowTopicCount,
      topicResults: results,
      treasuryAction,
      error: message,
    };
    persistHourlyRun({
      run,
      discoveredTopics,
      results,
      alertSentResults: [],
      agentStatus: deriveAgentStatus({ status: run.status, summary: run.summary }),
    });
    logStep("monitor-hourly", "error", { message, runId, contractKind });
    throw error;
  }
}

export async function runDailyDigest(
  config: RingfenceConfig,
  contractKind: ContractKind = config.monitorContractKind,
  runType: "digest" | "manual_digest" = "manual_digest",
): Promise<MonitorRunRecord> {
  ensureTreasuryConfig(config);
  const startedAt = nowIso();
  const runId = randomUUID();
  const history = readRuntimeState();
  const results = collectDigestTopicResults({
    runHistory: history.monitor.runHistory,
    lastDigestSentAt: history.monitor.lastDigestSentAt,
    now: new Date(startedAt),
  });

  try {
    const contractState = await readVaultState(config, contractKind);
    const overflowCount = history.monitor.runHistory
      .filter((run) => (run.runType === "hourly" || run.runType === "manual_hourly") && (!history.monitor.lastDigestSentAt || parseTimestamp(run.startedAt) > parseTimestamp(history.monitor.lastDigestSentAt)))
      .reduce((sum, run) => sum + run.overflowTopicCount, 0);
    const digest = buildDigestBody({
      results,
      treasuryProtection: protectionSummary(contractState),
      contractKind,
      overflowCount,
    });
    const subject = buildDigestSubject(startedAt);
    await sendOperatorTelegramStep({
      config,
      step: "monitor-daily-digest",
      subject,
      text: digest.text,
      html: digest.html,
    });

    const digestRecord: DigestRecord = {
      runId,
      sentAt: nowIso(),
      subject,
      text: digest.text,
      html: digest.html,
      topicResults: results,
      summary: digest.summary,
    };
    recordDigest(digestRecord);
    const run: MonitorRunRecord = {
      runId,
      runType,
      contractKind,
      startedAt,
      completedAt: nowIso(),
      status: results.length > 0 ? deriveOverallChangeLevel(results) : "NONE",
      summary: digest.summary,
      changedTopicCount: results.length,
      analyzedTopicCount: results.length,
      overflowTopicCount: overflowCount,
      topicResults: results,
      treasuryAction: "skipped",
    };
    persistDigestRun({ run, agentStatus: "healthy" });
    logStep("monitor-digest", "ok", { message: digest.summary, runId, topicCount: results.length });
    return run;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const run: MonitorRunRecord = {
      runId,
      runType,
      contractKind,
      startedAt,
      completedAt: nowIso(),
      status: "FAILED",
      summary: message,
      changedTopicCount: results.length,
      analyzedTopicCount: results.length,
      overflowTopicCount: 0,
      topicResults: results,
      treasuryAction: "skipped",
      error: message,
    };
    persistDigestRun({ run, agentStatus: "failed" });
    logStep("monitor-digest", "error", { message, runId, contractKind });
    throw error;
  }
}

export async function buildDashboardPublicState(config: RingfenceConfig): Promise<DashboardPublicState> {
  const runtimeState = readRuntimeState();
  const latestRun = runtimeState.monitor.runHistory[0];
  const stickyTopics = deriveStickyDashboardTopics({
    latestChangedTopics: runtimeState.monitor.latestChangedTopics,
    latestPublicSummary: runtimeState.monitor.latestPublicSummary,
    runHistory: runtimeState.monitor.runHistory,
  });
  const [production, demo, productionEvents, demoEvents] = await Promise.all([
    config.contractAddresses.production ? readVaultState(config, "production").catch(() => undefined) : Promise.resolve(undefined),
    config.contractAddresses.demo ? readVaultState(config, "demo").catch(() => undefined) : Promise.resolve(undefined),
    config.contractAddresses.production ? readRecentContractEvents(config, "production", 5).catch(() => []) : Promise.resolve([]),
    config.contractAddresses.demo ? readRecentContractEvents(config, "demo", 5).catch(() => []) : Promise.resolve([]),
  ]);

  let locusBalance: string | undefined;
  let locusWalletAddress: string | undefined;
  if (config.locusApiKey && config.locusWalletAddress) {
    try {
      const balance = await getVerifiedLocusBalance(config);
      locusBalance = formatLocusBalanceDisplay(balance.data);
      locusWalletAddress = balance.data.wallet_address;
    } catch (error) {
      locusBalance = `error: ${(error as Error).message}`;
      locusWalletAddress = config.locusWalletAddress;
    }
  }

  return {
    monitorContractKind: config.monitorContractKind,
    agentStatus:
      runtimeState.monitor.latestStatus ??
      (latestRun ? deriveAgentStatus({ status: latestRun.status, summary: latestRun.summary }) : "healthy"),
    generatedAt: nowIso(),
    production,
    demo,
    treasuryProtectionSummary: {
      production: production ? protectionSummary(production) : undefined,
      demo: demo ? protectionSummary(demo) : undefined,
    },
    locusBalance,
    locusWalletAddress,
    latestPublicSummary: stickyTopics.latestPublicSummary,
    lastHourlyRunAt: runtimeState.monitor.lastHourlyRunAt,
    lastDailyDigestAt: runtimeState.monitor.lastDigestSentAt,
    latestChangedTopics: stickyTopics.latestChangedTopics,
    materialAlerts: runtimeState.monitor.materialAlerts,
    digests: runtimeState.monitor.digests,
    recentRuns: runtimeState.monitor.runHistory,
    recentTxs: runtimeState.recentTxs,
    pendingApprovals: runtimeState.pendingApprovals ?? [],
    contractEvents: [...productionEvents, ...demoEvents].sort((left, right) => {
      const leftTime = left.timestamp ? parseTimestamp(left.timestamp) : 0;
      const rightTime = right.timestamp ? parseTimestamp(right.timestamp) : 0;
      return rightTime - leftTime;
    }),
  };
}

export async function runDashboardPreflight(
  config: RingfenceConfig,
  contractKind: ContractKind = config.monitorContractKind,
) {
  return runMonitorPreflight(config, contractKind);
}
