import type { AgentStatus, MonitorRunStatus } from "../lib/types";

type BadgeVariant = "green" | "yellow" | "blue" | "red" | "muted";

const AGENT_STATUS_MAP: Record<AgentStatus, { label: string; variant: BadgeVariant }> = {
  healthy: { label: "Active", variant: "green" },
  degraded: { label: "Degraded", variant: "yellow" },
  pending_approval: { label: "Awaiting Approval", variant: "yellow" },
  failed: { label: "Failed", variant: "red" },
};

const RUN_STATUS_MAP: Record<MonitorRunStatus, { variant: BadgeVariant }> = {
  NONE: { variant: "muted" },
  MINOR: { variant: "blue" },
  MATERIAL: { variant: "yellow" },
  FAILED: { variant: "red" },
  PENDING_APPROVAL: { variant: "yellow" },
};

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  green: "text-accent-green border-accent-green/30 bg-accent-green/10",
  yellow: "text-accent-yellow border-accent-yellow/30 bg-accent-yellow/10",
  blue: "text-accent-blue border-accent-blue/30 bg-accent-blue/10",
  red: "text-accent-red border-accent-red/30 bg-accent-red/10",
  muted: "text-text-muted border-border bg-bg-primary/50",
};

const DOT_CLASSES: Record<BadgeVariant, string> = {
  green: "bg-accent-green",
  yellow: "bg-accent-yellow",
  blue: "bg-accent-blue",
  red: "bg-accent-red",
  muted: "bg-text-muted",
};

export function AgentStatusBadge({ status }: { status: AgentStatus }) {
  const config = AGENT_STATUS_MAP[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${VARIANT_CLASSES[config.variant]}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${DOT_CLASSES[config.variant]} ${status === "healthy" ? "animate-pulse_slow" : ""}`} />
      {config.label}
    </span>
  );
}

export function RunStatusBadge({ status }: { status: MonitorRunStatus }) {
  const config = RUN_STATUS_MAP[status];
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-medium border ${VARIANT_CLASSES[config.variant]}`}
    >
      {status}
    </span>
  );
}

export function RunTypeBadge({ runType }: { runType: string }) {
  const label = runType.replace(/_/g, " ").replace("manual ", "");
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono text-text-muted border border-border">
      {label}
    </span>
  );
}
