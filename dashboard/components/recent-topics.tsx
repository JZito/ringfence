import { relativeTime } from "../lib/format";
import type { MonitoredTopicResult } from "../lib/types";
import { SectionShell } from "./section-shell";

interface RecentTopicsProps {
  topics: MonitoredTopicResult[];
  isStickyFallback?: boolean;
}

export function RecentTopics({ topics, isStickyFallback = false }: RecentTopicsProps) {
  const visible = topics.slice(0, 5);

  return (
    <SectionShell
      title="Recent Topics"
      subtitle={
        isStickyFallback
          ? "Showing the most recent non-empty hourly monitoring result"
          : "Latest monitored governance discussions"
      }
    >
      {visible.length === 0 ? (
        <p className="text-sm text-text-muted">No governance activity detected in monitoring window</p>
      ) : (
        <div className="space-y-3">
          {visible.map((topic) => (
            <div
              key={topic.topicId}
              className="border-t border-border pt-3 first:border-t-0 first:pt-0"
            >
              <div className="flex items-start justify-between gap-2">
                <a
                  href={topic.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-accent-blue hover:text-text-primary transition-colors leading-snug"
                >
                  {topic.title}
                </a>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded border whitespace-nowrap ${
                    topic.changeLevel === "MATERIAL"
                      ? "text-accent-yellow border-accent-yellow/30 bg-accent-yellow/10"
                      : "text-accent-blue border-accent-blue/30 bg-accent-blue/10"
                  }`}
                >
                  {topic.changeLevel}
                </span>
              </div>
              <p className="text-xs text-text-muted mt-1 line-clamp-2">{topic.summary}</p>
              {topic.whyItMatters && (
                <p className="text-[11px] text-text-muted italic mt-1">
                  Why it matters: <span className="text-text-primary not-italic">{topic.whyItMatters}</span>
                </p>
              )}
              <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                {topic.riskTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-text-muted border border-border rounded px-1.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
                <span className="text-[10px] text-text-muted font-mono">
                  {relativeTime(topic.lastPostedAt)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </SectionShell>
  );
}
