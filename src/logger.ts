import { stringifyForJson } from "./format.js";

export type StepStatus = "start" | "ok" | "error" | "info";

export function logStep(step: string, status: StepStatus, details: Record<string, unknown> = {}): void {
  const summary = typeof details.message === "string" ? details.message : undefined;
  const line = summary ? `[${status.toUpperCase()}] ${step}: ${summary}` : `[${status.toUpperCase()}] ${step}`;
  console.log(line);
  console.log(stringifyForJson({ step, status, ...details }));
}
