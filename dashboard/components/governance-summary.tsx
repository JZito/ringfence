import type { MonitoredTopicResult, MonitorRunRecord } from "@/lib/types";
import { SectionShell } from "./section-shell";

interface GovernanceSummaryProps {
  latestPublicSummary?: string;
  latestChangedTopics: MonitoredTopicResult[];
  recentRuns: MonitorRunRecord[];
}

export function GovernanceSummary({
  latestPublicSummary,
  latestChangedTopics,
  recentRuns,
}: GovernanceSummaryProps) {
  const latestRun = recentRuns[0];
  const topTopic = latestChangedTopics[0];
  const alertLevel = latestRun?.status ?? "NONE";

  return (
    <SectionShell title="Current Governance Summary">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-xs text-text-muted">Alert Level</span>
          <span
            className={`font-mono text-xs px-2 py-0.5 rounded border ${
              alertLevel === "MATERIAL"
                ? "text-accent-yellow border-accent-yellow/30 bg-accent-yellow/10"
                : alertLevel === "FAILED"
                  ? "text-accent-red border-accent-red/30 bg-accent-red/10"
                  : "text-text-muted border-border"
            }`}
          >
            {alertLevel}
          </span>
        </div>

        {latestPublicSummary ? (
          <p className="text-sm text-text-primary leading-relaxed whitespace-pre-wrap">
            {latestPublicSummary}
          </p>
        ) : (
          <p className="text-sm text-text-muted">No governance summary available yet.</p>
        )}

        {topTopic && (
          <div className="border-t border-border pt-3 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-muted">Latest material topic</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${
                  topTopic.changeLevel === "MATERIAL"
                    ? "text-accent-yellow border-accent-yellow/30"
                    : "text-accent-blue border-accent-blue/30"
                }`}
              >
                {topTopic.changeLevel}
              </span>
            </div>
            <a
              href={topTopic.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-accent-blue hover:text-text-primary transition-colors block"
            >
              {topTopic.title}
            </a>
            <p className="text-xs text-text-muted">{topTopic.summary}</p>
            <div className="flex flex-wrap gap-1.5">
              {topTopic.riskTags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono text-text-muted border border-border rounded px-1.5 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-xs text-text-muted">
              Recommended: <span className="text-text-primary">{topTopic.recommendedAction}</span>
            </div>
          </div>
        )}
      </div>
    </SectionShell>
  );
}
