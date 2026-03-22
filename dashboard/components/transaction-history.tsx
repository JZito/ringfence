import { relativeTime } from "../lib/format";
import type { PendingApprovalRecord, RecentTx } from "../lib/types";
import { CopyableAddress } from "./copyable-address";
import { SectionShell } from "./section-shell";

interface TransactionHistoryProps {
  txs: RecentTx[];
  pendingApprovals: PendingApprovalRecord[];
}

export function TransactionHistory({ txs, pendingApprovals }: TransactionHistoryProps) {
  return (
    <SectionShell title="Onchain Activity" subtitle="Transaction hashes and pending approvals">
      {pendingApprovals.length > 0 && (
        <div className="mb-4 space-y-2">
          <h3 className="text-[10px] text-accent-yellow uppercase tracking-wider font-semibold">
            Pending Approvals
          </h3>
          {pendingApprovals.map((approval) => (
            <div
              key={approval.pendingApprovalId}
              className="border border-accent-yellow/20 rounded p-2 bg-accent-yellow/5"
            >
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-mono text-xs text-text-primary">{approval.step}</span>
                <span className="font-mono text-[11px] text-text-muted">
                  {relativeTime(approval.timestamp)}
                </span>
              </div>
              <a
                href={approval.approvalUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-accent-blue hover:text-text-primary transition-colors"
              >
                Approve in Locus
              </a>
            </div>
          ))}
        </div>
      )}

      {txs.length === 0 ? (
        <p className="text-sm text-text-muted">No transactions recorded yet.</p>
      ) : (
        <div className="space-y-2">
          {txs.map((tx) => (
            <div
              key={tx.hash}
              className="flex items-center justify-between gap-4 border-t border-border pt-2 first:border-t-0 first:pt-0"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-xs text-text-primary whitespace-nowrap">{tx.step}</span>
                <CopyableAddress value={tx.hash} type="tx" />
              </div>
              <span className="font-mono text-[11px] text-text-muted whitespace-nowrap" title={tx.timestamp}>
                {relativeTime(tx.timestamp)}
              </span>
            </div>
          ))}
        </div>
      )}
    </SectionShell>
  );
}
