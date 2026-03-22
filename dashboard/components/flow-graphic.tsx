import { FLOW_STEPS, STEP_TO_FLOW_ID } from "../lib/constants";
import type { RecentTx } from "../lib/types";

interface FlowGraphicProps {
  recentTxs: RecentTx[];
}

export function FlowGraphic({ recentTxs }: FlowGraphicProps) {
  const latestStep = recentTxs[0]?.step;
  const activeFlowId = (latestStep && STEP_TO_FLOW_ID[latestStep]) || "monitor";

  return (
    <div className="bg-bg-card border border-border rounded-lg px-5 py-4 shadow-glow">
      <div className="flex items-center justify-between gap-0 overflow-x-auto">
        {FLOW_STEPS.map((step, i) => {
          const isActive = step.id === activeFlowId;
          return (
            <div key={step.id} className="flex items-center flex-1 min-w-0">
              <div
                className={`
                  flex items-center justify-center px-3 py-2 rounded border text-[11px] font-mono whitespace-nowrap transition-all
                  ${isActive
                    ? "border-accent-green/50 bg-accent-green/10 text-accent-green shadow-glow animate-pulse_slow"
                    : "border-border bg-bg-primary text-text-muted"
                  }
                `}
              >
                {step.label}
              </div>
              {i < FLOW_STEPS.length - 1 && (
                <div className="flex-1 min-w-[12px] h-px bg-border mx-1 relative">
                  <div
                    className={`absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[5px] ${
                      isActive ? "border-l-accent-green/50" : "border-l-border"
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
