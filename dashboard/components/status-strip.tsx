import Image from "next/image";
import { relativeTime, relativeTimeUntil } from "../lib/format";
import type { AgentStatus, MaterialAlertRecord } from "../lib/types";
import { AgentStatusBadge } from "./status-badge";

interface StatusStripProps {
  agentStatus: AgentStatus;
  lastHourlyRunAt?: string;
  lastDailyDigestAt?: string;
  latestAlert?: MaterialAlertRecord;
}

export function StatusStrip({
  agentStatus,
  lastHourlyRunAt,
  lastDailyDigestAt,
  latestAlert,
}: StatusStripProps) {
  return (
    <div className={`bg-bg-card border rounded-lg px-5 py-3 flex items-center gap-4 flex-wrap ${agentStatus === "healthy" ? "border-accent-green/20 animate-border_glow" : "border-border shadow-glow"}`}>
      <Image
        src="/hoo_bot_pfp.png"
        alt="Hoo"
        width={36}
        height={36}
        className="rounded-full border border-border"
      />
      <div className="flex items-center gap-2">
        <span className="text-xs text-text-muted uppercase tracking-wider">Hoo</span>
        <AgentStatusBadge status={agentStatus} />
        <span className="text-[11px] text-text-muted italic hidden sm:inline">
          Watching Lido governance and funding itself from yield
        </span>
      </div>
      <div className="h-4 w-px bg-border" />
      <div className="flex items-center gap-2">
        <span className="text-xs text-text-muted">Contract</span>
        <span className="font-mono text-xs text-text-primary border border-border rounded px-2 py-0.5">
          production
        </span>
      </div>
      <div className="h-4 w-px bg-border hidden sm:block" />
      <div className="flex items-center gap-4 text-xs text-text-muted">
        <span>
          Last run:{" "}
          <span className="text-text-primary font-mono">
            {lastHourlyRunAt ? relativeTime(lastHourlyRunAt) : "never"}
          </span>
        </span>
        {lastHourlyRunAt && (
          <span>
            Next check:{" "}
            <span className="text-text-primary font-mono">
              {relativeTimeUntil(lastHourlyRunAt, 60)}
            </span>
          </span>
        )}
        <span>
          Last digest:{" "}
          <span className="text-text-primary font-mono">
            {lastDailyDigestAt ? relativeTime(lastDailyDigestAt) : "never"}
          </span>
        </span>
        {latestAlert && (
          <span>
            Last alert:{" "}
            <span className="text-accent-yellow font-mono">
              {relativeTime(latestAlert.sentAt)}
            </span>
          </span>
        )}
      </div>
    </div>
  );
}
