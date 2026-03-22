"use client";

import { relativeTime } from "@/lib/format";

interface RefreshIndicatorProps {
  lastFetchedAt: Date | null;
  secondsUntilRefresh: number;
  isLoading: boolean;
  onRefresh: () => void;
}

export function RefreshIndicator({
  lastFetchedAt,
  secondsUntilRefresh,
  isLoading,
  onRefresh,
}: RefreshIndicatorProps) {
  return (
    <div className="flex items-center gap-3 text-xs text-text-muted">
      {lastFetchedAt && (
        <span>
          Updated {relativeTime(lastFetchedAt.toISOString())}
        </span>
      )}
      <span className="font-mono tabular-nums">
        {isLoading ? "fetching..." : `${secondsUntilRefresh}s`}
      </span>
      <button
        onClick={onRefresh}
        disabled={isLoading}
        className="text-text-muted hover:text-text-primary transition-colors disabled:opacity-50"
        title="Refresh now"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={isLoading ? "animate-spin" : ""}
        >
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
          <path d="M16 16h5v5" />
        </svg>
      </button>
    </div>
  );
}
