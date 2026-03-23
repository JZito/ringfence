import { formatWstETH } from "../lib/format";
import type { VaultState } from "../lib/types";
import { CopyableAddress } from "./copyable-address";
import { SectionShell } from "./section-shell";

interface TreasuryCardProps {
  vault?: VaultState;
  locusBalance?: string;
  locusWalletAddress?: string;
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex justify-between items-baseline gap-4">
      <span className="text-xs text-text-muted whitespace-nowrap">{label}</span>
      <div className="text-right">{children}</div>
    </div>
  );
}

export function TreasuryCard({
  vault,
  locusBalance,
  locusWalletAddress,
}: TreasuryCardProps) {
  return (
    <SectionShell title="Treasury Overview" subtitle="Onchain state — the agent can only access yield, never principal">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h3 className="text-xs text-text-muted uppercase tracking-wider">Production Vault</h3>
          {vault ? (
            <div className="space-y-2">
              <Row label="Address">
                <CopyableAddress value={vault.contractAddress} />
              </Row>
              <Row label="Vault wstETH Balance">
                <span className="font-mono text-sm text-text-primary">{formatWstETH(vault.vaultBalanceWstETH)} wstETH</span>
              </Row>
              <Row label="Principal Baseline">
                <span className="font-mono text-sm text-text-primary">{formatWstETH(vault.principalBaseline)}</span>
              </Row>
              <Row label="Current Position Value">
                <span className="font-mono text-sm text-text-primary">{formatWstETH(vault.currentPositionValue)}</span>
              </Row>
              <Row label="Claimable Amount">
                <span className={`font-mono text-sm ${vault.claimableAmount !== "0" ? "text-accent-green" : "text-text-muted"}`}>
                  {vault.claimableAmount !== "0"
                    ? `${formatWstETH(vault.claimableAmount)} wstETH`
                    : "Awaiting yield accrual"}
                </span>
                <div className="text-[10px] text-text-muted mt-0.5">Derived from current oracle rate</div>
              </Row>
              <Row label="Per-Tx Cap">
                <span className="font-mono text-sm text-text-muted">{formatWstETH(vault.perTxCap)} wstETH</span>
              </Row>
            </div>
          ) : (
            <div className="text-text-muted text-sm">No vault configured</div>
          )}
        </div>
        <div className="space-y-3">
          <h3 className="text-xs text-text-muted uppercase tracking-wider">Locus Buffer</h3>
          <div className="space-y-2">
            <Row label="USDC Balance">
              <span className="font-mono text-sm text-text-primary">
                {locusBalance ?? "not configured"}
              </span>
            </Row>
            {locusWalletAddress && (
              <Row label="Wallet">
                <CopyableAddress value={locusWalletAddress} />
              </Row>
            )}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
