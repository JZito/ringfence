import test from "node:test";
import assert from "node:assert/strict";

import {
  buildRunSummary,
  collectDigestTopicResults,
  deriveAgentStatus,
  deriveStickyDashboardTopics,
  deriveOverallChangeLevel,
  detectChangedTopics,
  shouldSendMaterialAlert,
} from "../src/monitor.js";
import type { ForumTopicRecord, MonitorRunRecord, MonitoredTopicResult, MonitoredTopicSnapshot } from "../src/types.js";

function topic(overrides: Partial<ForumTopicRecord> = {}): ForumTopicRecord {
  return {
    topicId: 1,
    title: "Lido governance thread",
    slug: "lido-governance-thread",
    url: "https://research.lido.fi/t/lido-governance-thread/1",
    createdAt: "2026-03-20T10:00:00.000Z",
    lastPostedAt: "2026-03-21T10:00:00.000Z",
    highestPostNumber: 3,
    postsCount: 3,
    replyCount: 2,
    likeCount: 5,
    views: 100,
    ...overrides,
  };
}

function snapshot(overrides: Partial<MonitoredTopicSnapshot> = {}): MonitoredTopicSnapshot {
  return {
    topicId: 1,
    title: "Lido governance thread",
    slug: "lido-governance-thread",
    url: "https://research.lido.fi/t/lido-governance-thread/1",
    createdAt: "2026-03-20T10:00:00.000Z",
    lastPostedAt: "2026-03-21T09:00:00.000Z",
    highestPostNumber: 2,
    postsCount: 2,
    replyCount: 1,
    likeCount: 3,
    views: 80,
    lastSeenAt: "2026-03-21T09:05:00.000Z",
    ...overrides,
  };
}

function result(overrides: Partial<MonitoredTopicResult> = {}): MonitoredTopicResult {
  return {
    topicId: 1,
    title: "Lido governance thread",
    url: "https://research.lido.fi/t/lido-governance-thread/1",
    summary: "Summary",
    changeLevel: "MINOR",
    riskTags: ["governance"],
    whyItMatters: "Why it matters",
    recommendedAction: "monitor",
    createdAt: "2026-03-20T10:00:00.000Z",
    lastPostedAt: "2026-03-21T10:00:00.000Z",
    highestPostNumber: 3,
    postsCount: 3,
    replyCount: 2,
    changePostDelta: 1,
    isNewTopic: false,
    ...overrides,
  };
}

function run(overrides: Partial<MonitorRunRecord> = {}): MonitorRunRecord {
  return {
    runId: "run-1",
    runType: "hourly",
    contractKind: "demo",
    startedAt: "2026-03-21T12:00:00.000Z",
    completedAt: "2026-03-21T12:01:00.000Z",
    status: "MINOR",
    summary: "summary",
    changedTopicCount: 1,
    analyzedTopicCount: 1,
    overflowTopicCount: 0,
    topicResults: [result()],
    treasuryAction: "skipped",
    ...overrides,
  };
}

test("detectChangedTopics applies the initial lookback window", () => {
  const recent = topic({ topicId: 1, lastPostedAt: "2026-03-21T10:00:00.000Z" });
  const stale = topic({ topicId: 2, slug: "old", url: "https://research.lido.fi/t/old/2", lastPostedAt: "2026-03-10T10:00:00.000Z" });

  const changed = detectChangedTopics({
    topics: [recent, stale],
    snapshots: {},
    lookbackHours: 72,
    now: new Date("2026-03-21T12:00:00.000Z"),
  });

  assert.deepEqual(changed.map((entry) => entry.topicId), [1]);
});

test("detectChangedTopics flags updated topics after the first successful run", () => {
  const changed = detectChangedTopics({
    topics: [topic()],
    snapshots: { "1": snapshot() },
    lookbackHours: 72,
    now: new Date("2026-03-21T12:00:00.000Z"),
  });

  assert.equal(changed.length, 1);
  assert.equal(changed[0]?.topicId, 1);
});

test("deriveOverallChangeLevel prioritizes MATERIAL over MINOR", () => {
  assert.equal(deriveOverallChangeLevel([]), "NONE");
  assert.equal(deriveOverallChangeLevel([result()]), "MINOR");
  assert.equal(deriveOverallChangeLevel([result(), result({ topicId: 2, changeLevel: "MATERIAL" })]), "MATERIAL");
});

test("shouldSendMaterialAlert deduplicates unchanged material topics", () => {
  assert.equal(shouldSendMaterialAlert(undefined, result({ changeLevel: "MATERIAL" })), true);
  assert.equal(
    shouldSendMaterialAlert(snapshot({ lastMaterialAlertedPostNumber: 3 }), result({ changeLevel: "MATERIAL", highestPostNumber: 3 })),
    false,
  );
  assert.equal(
    shouldSendMaterialAlert(snapshot({ lastMaterialAlertedPostNumber: 2 }), result({ changeLevel: "MATERIAL", highestPostNumber: 3 })),
    true,
  );
});

test("collectDigestTopicResults returns unique topic changes since the previous digest", () => {
  const runs = [
    run({
      runId: "run-2",
      startedAt: "2026-03-21T16:00:00.000Z",
      topicResults: [result({ topicId: 1, highestPostNumber: 4 })],
    }),
    run({
      runId: "run-3",
      startedAt: "2026-03-21T17:00:00.000Z",
      topicResults: [result({ topicId: 1, highestPostNumber: 4 }), result({ topicId: 2, title: "Another topic", url: "https://research.lido.fi/t/another/2", highestPostNumber: 2 })],
    }),
    run({
      runId: "run-4",
      startedAt: "2026-03-20T11:00:00.000Z",
      topicResults: [result({ topicId: 3, title: "Old topic", url: "https://research.lido.fi/t/old/3" })],
    }),
  ];

  const digestResults = collectDigestTopicResults({
    runHistory: runs,
    lastDigestSentAt: "2026-03-21T15:00:00.000Z",
    now: new Date("2026-03-21T18:00:00.000Z"),
  });

  assert.deepEqual(
    digestResults.map((entry) => `${entry.topicId}:${entry.highestPostNumber}`),
    ["1:4", "2:2"],
  );
});

test("buildRunSummary includes upstream analysis failures without discarding successful results", () => {
  const summary = buildRunSummary(
    [result({ changeLevel: "MATERIAL", title: "Topic A" })],
    1,
    [{ topicId: 2, title: "Topic B", url: "https://research.lido.fi/t/topic-b/2", message: "Diffbot failed" }],
  );

  assert.match(summary, /Material Lido governance change detected/);
  assert.match(summary, /1 topic\(s\) analyzed: Topic A/);
  assert.match(summary, /1 additional changed topics were skipped this run/);
  assert.match(summary, /1 topic\(s\) failed upstream analysis: Topic B/);
});

test("deriveAgentStatus keeps successful runs healthy despite partial upstream failures", () => {
  assert.equal(
    deriveAgentStatus({
      status: "MATERIAL",
      summary: "Material Lido governance change detected. 1 topic(s) failed upstream analysis: Topic B.",
    }),
    "healthy",
  );
});

test("deriveAgentStatus marks all-upstream analysis failures as degraded", () => {
  assert.equal(
    deriveAgentStatus({
      status: "FAILED",
      summary: "No recent Lido governance changes detected. 5 topic(s) failed upstream analysis: Topic B.",
      allTopicsFailedUpstream: true,
    }),
    "degraded",
  );
});

test("deriveStickyDashboardTopics falls back to the most recent non-empty hourly run", () => {
  const sticky = deriveStickyDashboardTopics({
    latestChangedTopics: [],
    latestPublicSummary: "No recent Lido governance changes detected.",
    runHistory: [
      run({
        runId: "run-empty",
        startedAt: "2026-03-21T18:00:00.000Z",
        status: "NONE",
        summary: "No recent Lido governance changes detected.",
        topicResults: [],
      }),
      run({
        runId: "run-material",
        startedAt: "2026-03-21T17:00:00.000Z",
        status: "MATERIAL",
        summary: "Material Lido governance change detected.",
        topicResults: [result({ topicId: 99, title: "Sticky topic", changeLevel: "MATERIAL" })],
      }),
    ],
  });

  assert.equal(sticky.isStickyFallback, true);
  assert.equal(sticky.latestPublicSummary, "Material Lido governance change detected.");
  assert.deepEqual(sticky.latestChangedTopics.map((topic) => topic.topicId), [99]);
});
