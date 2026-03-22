import Image from "next/image";
import type { AgentStatus, MaterialAlertRecord } from "@/lib/types";
import { relativeTime } from "@/lib/format";
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
    <div className="bg-bg-card border border-border rounded-lg px-5 py-3 flex items-center gap-4 flex-wrap shadow-glow">
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
