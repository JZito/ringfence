"use client";

import { useState } from "react";
import type { MaterialAlertRecord, DigestRecord } from "@/lib/types";
import { relativeTime } from "@/lib/format";
import { SectionShell } from "./section-shell";

interface DigestArchiveProps {
  materialAlerts: MaterialAlertRecord[];
  digests: DigestRecord[];
}

function ExpandableItem({
  subject,
  sentAt,
  text,
  variant,
}: {
  subject: string;
  sentAt: string;
  text: string;
  variant: "alert" | "digest";
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-t border-border pt-2 first:border-t-0 first:pt-0">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left group"
      >
        <div className="flex items-start justify-between gap-2">
          <span
            className={`text-sm ${
              variant === "alert" ? "text-accent-yellow" : "text-text-primary"
            } group-hover:text-text-primary transition-colors`}
          >
            {subject}
          </span>
          <span className="text-[10px] text-text-muted font-mono whitespace-nowrap">
            {relativeTime(sentAt)}
          </span>
        </div>
      </button>
      {expanded && (
        <pre className="mt-2 text-xs text-text-muted font-mono whitespace-pre-wrap leading-relaxed max-h-[300px] overflow-y-auto">
          {text}
        </pre>
      )}
    </div>
  );
}

export function DigestArchive({ materialAlerts, digests }: DigestArchiveProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <SectionShell title="Material Alerts">
        {materialAlerts.length === 0 ? (
          <p className="text-sm text-text-muted">No material alerts sent yet.</p>
        ) : (
          <div className="space-y-2">
            {materialAlerts.map((alert) => (
              <ExpandableItem
                key={alert.runId}
                subject={alert.subject}
                sentAt={alert.sentAt}
                text={alert.text}
                variant="alert"
              />
            ))}
          </div>
        )}
      </SectionShell>

      <SectionShell title="Daily Digests">
        {digests.length === 0 ? (
          <p className="text-sm text-text-muted">No daily digests sent yet.</p>
        ) : (
          <div className="space-y-2">
            {digests.map((digest) => (
              <ExpandableItem
                key={digest.runId}
                subject={digest.subject}
                sentAt={digest.sentAt}
                text={digest.text}
                variant="digest"
              />
            ))}
          </div>
        )}
      </SectionShell>
    </div>
  );
}
