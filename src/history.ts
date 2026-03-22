import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

import { nowIso } from "./format.js";
import type {
  DigestRecord,
  MaterialAlertRecord,
  MonitorRunRecord,
  MonitorState,
  PendingApprovalRecord,
  RecentTx,
  RuntimeStateFile,
} from "./types.js";

const RUNTIME_STATE_PATH = resolve(process.cwd(), "config/runtime-state.json");
const MAX_TX_HISTORY = 25;
const MAX_PENDING_APPROVALS = 10;
const MAX_RUN_HISTORY = 50;
const MAX_ALERT_HISTORY = 20;
const MAX_DIGEST_HISTORY = 20;

function emptyMonitorState(): MonitorState {
  return {
    topicSnapshots: {},
    runHistory: [],
    materialAlerts: [],
    digests: [],
    latestChangedTopics: [],
  };
}

function emptyState(): RuntimeStateFile {
  return {
    recentTxs: [],
    pendingApprovals: [],
    monitor: emptyMonitorState(),
  };
}

function normalizeState(state: RuntimeStateFile): RuntimeStateFile {
  return {
    recentTxs: state.recentTxs ?? [],
    pendingApprovals: state.pendingApprovals ?? [],
    lastRun: state.lastRun ?? {},
    monitor: {
      ...emptyMonitorState(),
      ...(state.monitor ?? {}),
      topicSnapshots: state.monitor?.topicSnapshots ?? {},
      runHistory: state.monitor?.runHistory ?? [],
      materialAlerts: state.monitor?.materialAlerts ?? [],
      digests: state.monitor?.digests ?? [],
      latestChangedTopics: state.monitor?.latestChangedTopics ?? [],
    },
  };
}

export function readRuntimeState(): RuntimeStateFile {
  if (!existsSync(RUNTIME_STATE_PATH)) {
    return emptyState();
  }

  return normalizeState(JSON.parse(readFileSync(RUNTIME_STATE_PATH, "utf8")) as RuntimeStateFile);
}

export function writeRuntimeState(state: RuntimeStateFile): void {
  writeFileSync(RUNTIME_STATE_PATH, `${JSON.stringify(state, null, 2)}\n`, "utf8");
}

export function updateRuntimeState(mutator: (state: RuntimeStateFile) => void): RuntimeStateFile {
  const state = readRuntimeState();
  mutator(state);
  writeRuntimeState(state);
  return state;
}

export function recordTx(step: string, hash: string): void {
  updateRuntimeState((state) => {
    const nextEntry: RecentTx = { step, hash, timestamp: nowIso() };
    state.recentTxs = [nextEntry, ...state.recentTxs].slice(0, MAX_TX_HISTORY);
  });
}

export function recordLastRunValue(key: string, value: string): void {
  updateRuntimeState((state) => {
    state.lastRun = { ...(state.lastRun ?? {}), [key]: value };
  });
}

export function recordPendingApproval(
  step: string,
  pendingApprovalId: string,
  approvalUrl: string,
  message?: string,
): void {
  updateRuntimeState((state) => {
    const nextEntry: PendingApprovalRecord = {
      step,
      pendingApprovalId,
      approvalUrl,
      timestamp: nowIso(),
      message,
    };

    state.pendingApprovals = [
      nextEntry,
      ...(state.pendingApprovals ?? []).filter((entry) => entry.step !== step),
    ].slice(0, MAX_PENDING_APPROVALS);
  });
}

export function clearPendingApproval(step: string): void {
  updateRuntimeState((state) => {
    state.pendingApprovals = (state.pendingApprovals ?? []).filter((entry) => entry.step !== step);
  });
}

export function recordMonitorRun(run: MonitorRunRecord): void {
  updateRuntimeState((state) => {
    state.monitor.runHistory = [run, ...state.monitor.runHistory].slice(0, MAX_RUN_HISTORY);
  });
}

export function recordMaterialAlert(alert: MaterialAlertRecord): void {
  updateRuntimeState((state) => {
    state.monitor.materialAlerts = [alert, ...state.monitor.materialAlerts].slice(0, MAX_ALERT_HISTORY);
  });
}

export function recordDigest(digest: DigestRecord): void {
  updateRuntimeState((state) => {
    state.monitor.digests = [digest, ...state.monitor.digests].slice(0, MAX_DIGEST_HISTORY);
    state.monitor.lastDigestSentAt = digest.sentAt;
  });
}
