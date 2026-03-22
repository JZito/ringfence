"use client";

import { DigestArchive } from "../components/digest-archive";
import { FlowGraphic } from "../components/flow-graphic";
import { GovernanceSummary } from "../components/governance-summary";
import { RecentTopics } from "../components/recent-topics";
import { RefreshIndicator } from "../components/refresh-indicator";
import { RunHistory } from "../components/run-history";
import { StatusStrip } from "../components/status-strip";
import { TransactionHistory } from "../components/transaction-history";
import { TreasuryCard } from "../components/treasury-card";
import { useDashboardState } from "../hooks/use-dashboard-state";

function LoadingSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-14 bg-bg-card rounded-lg border border-border" />
      <div className="h-64 bg-bg-card rounded-lg border border-border" />
      <div className="h-12 bg-bg-card rounded-lg border border-border" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-48 bg-bg-card rounded-lg border border-border" />
        <div className="h-48 bg-bg-card rounded-lg border border-border" />
      </div>
    </div>
  );
}

function ErrorBanner({ error, onRetry }: { error: string; onRetry: () => void }) {
  return (
    <div className="bg-accent-red/10 border border-accent-red/30 rounded-lg p-4 flex items-center justify-between">
      <div>
        <p className="text-sm text-accent-red font-medium">Failed to load dashboard state</p>
        <p className="text-xs text-text-muted mt-1 font-mono">{error}</p>
      </div>
      <button
        onClick={onRetry}
        className="text-xs text-accent-red hover:text-text-primary border border-accent-red/30 rounded px-3 py-1.5 transition-colors"
      >
        Retry
      </button>
    </div>
  );
}

export default function DashboardPage() {
  const { data, error, isLoading, lastFetchedAt, secondsUntilRefresh, refresh } =
    useDashboardState();

  return (
    <main className="max-w-[1200px] mx-auto px-4 py-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-text-primary tracking-tight">
          Ringfence Monitor
        </h1>
        <RefreshIndicator
          lastFetchedAt={lastFetchedAt}
          secondsUntilRefresh={secondsUntilRefresh}
          isLoading={isLoading}
          onRefresh={refresh}
        />
      </div>

      {error && <ErrorBanner error={error} onRetry={refresh} />}

      {!data && isLoading ? (
        <LoadingSkeleton />
      ) : data ? (
        <div className="space-y-4">
          <StatusStrip
            agentStatus={data.agentStatus}
            lastHourlyRunAt={data.lastHourlyRunAt}
            lastDailyDigestAt={data.lastDailyDigestAt}
            latestAlert={data.materialAlerts[0]}
          />

          <TreasuryCard
            vault={data.production}
            protection={data.treasuryProtectionSummary.production}
            locusBalance={data.locusBalance}
            locusWalletAddress={data.locusWalletAddress}
          />

          <FlowGraphic recentTxs={data.recentTxs} />

          <GovernanceSummary
            latestPublicSummary={data.latestPublicSummary}
            latestChangedTopics={data.latestChangedTopics}
            recentRuns={data.recentRuns}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RunHistory runs={data.recentRuns} />
            <TransactionHistory
              txs={data.recentTxs}
              pendingApprovals={data.pendingApprovals}
            />
          </div>

          <RecentTopics topics={data.latestChangedTopics} />

          <DigestArchive
            materialAlerts={data.materialAlerts}
            digests={data.digests}
          />
        </div>
      ) : null}
    </main>
  );
}
