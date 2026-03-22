import type { DashboardPublicState } from "./types";

export async function fetchDashboardState(): Promise<DashboardPublicState> {
  const res = await fetch("/api/public/state", { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}
