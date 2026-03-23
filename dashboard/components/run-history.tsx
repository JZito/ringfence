"use client";

import { useState } from "react";
import { relativeTime } from "../lib/format";
import type { MonitorRunRecord } from "../lib/types";
import { RunStatusBadge, RunTypeBadge } from "./status-badge";
import { SectionShell } from "./section-shell";

interface RunHistoryProps {
  runs: MonitorRunRecord[];
}

export function RunHistory({ runs }: RunHistoryProps) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? runs : runs.slice(0, 8);

  return (
    <SectionShell title="Run History" subtitle="Bot activity log">
      {visible.length === 0 ? (
        <p className="text-sm text-text-muted">Awaiting first monitor cycle</p>
      ) : (
        <div className="space-y-2">
          {visible.map((run) => (
            <div
              key={run.runId}
              className="border-t border-border pt-2 first:border-t-0 first:pt-0"
            >
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-mono text-[11px] text-text-muted" title={run.startedAt}>
                  {relativeTime(run.startedAt)}
                </span>
                <RunTypeBadge runType={run.runType} />
                <RunStatusBadge status={run.status} />
                {run.treasuryAction && (
                  <span className="text-[10px] font-mono text-accent-green border border-accent-green/30 rounded px-1.5 py-0.5">
                    {run.treasuryAction}
                  </span>
                )}
              </div>
              <p className="text-xs text-text-muted mt-1 line-clamp-2">{run.summary}</p>
              {run.changedTopicCount > 0 && (
                <span className="text-[10px] text-text-muted">
                  {run.changedTopicCount} changed / {run.analyzedTopicCount} analyzed
                </span>
              )}
            </div>
          ))}
          {runs.length > 8 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-xs text-accent-blue hover:text-text-primary transition-colors"
            >
              {showAll ? "Show less" : `Show all (${runs.length})`}
            </button>
          )}
        </div>
      )}
    </SectionShell>
  );
}
