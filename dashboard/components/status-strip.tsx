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
    <div
      className={`bg-bg-card border rounded-lg px-5 py-5 md:px-6 md:py-6 flex flex-col md:flex-row gap-5 md:gap-6 ${
        agentStatus === "healthy" ? "border-accent-green/20 animate-border_glow" : "border-border shadow-glow"
      }`}
    >
      <div className="shrink-0">
        <Image
          src="/telegram_bot_pfp_05.png"
          alt="Ringfence monitor portrait"
          width={160}
          height={160}
          className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl border border-border object-cover shadow-glow"
        />
      </div>

      <div className="flex-1 min-w-0 space-y-4">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <AgentStatusBadge status={agentStatus} />
            <span className="font-mono text-xs text-text-primary border border-border rounded px-2.5 py-1">
              production
            </span>
          </div>

          <div className="space-y-1.5">
            <h2 className="text-lg sm:text-xl font-semibold text-text-primary tracking-tight">
              Watching Lido governance and funding itself from yield
            </h2>
            <p className="text-sm text-text-muted max-w-3xl leading-relaxed">
              Ringfence tracks treasury-relevant governance shifts, surfaces material risk, and keeps
              the monitor funded without touching principal.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
          <div className="rounded-xl border border-border bg-bg-primary/40 px-3 py-2.5">
            <div className="text-[10px] uppercase tracking-wider text-text-muted">Last run</div>
            <div className="mt-1 font-mono text-sm text-text-primary">
              {lastHourlyRunAt ? relativeTime(lastHourlyRunAt) : "never"}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-bg-primary/40 px-3 py-2.5">
            <div className="text-[10px] uppercase tracking-wider text-text-muted">Next check</div>
            <div className="mt-1 font-mono text-sm text-text-primary">
              {lastHourlyRunAt ? relativeTimeUntil(lastHourlyRunAt, 60) : "unknown"}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-bg-primary/40 px-3 py-2.5">
            <div className="text-[10px] uppercase tracking-wider text-text-muted">Last digest</div>
            <div className="mt-1 font-mono text-sm text-text-primary">
              {lastDailyDigestAt ? relativeTime(lastDailyDigestAt) : "never"}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-bg-primary/40 px-3 py-2.5">
            <div className="text-[10px] uppercase tracking-wider text-text-muted">Last alert</div>
            <div className={`mt-1 font-mono text-sm ${latestAlert ? "text-accent-yellow" : "text-text-primary"}`}>
              {latestAlert ? relativeTime(latestAlert.sentAt) : "none"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
