"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { DashboardPublicState } from "@/lib/types";
import { fetchDashboardState } from "@/lib/api";
import { REFRESH_INTERVAL_MS } from "@/lib/constants";

interface UseDashboardStateResult {
  data: DashboardPublicState | null;
  error: string | null;
  isLoading: boolean;
  lastFetchedAt: Date | null;
  secondsUntilRefresh: number;
  refresh: () => void;
}

export function useDashboardState(): UseDashboardStateResult {
  const [data, setData] = useState<DashboardPublicState | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lastFetchedAt, setLastFetchedAt] = useState<Date | null>(null);
  const [secondsUntilRefresh, setSecondsUntilRefresh] = useState(
    Math.floor(REFRESH_INTERVAL_MS / 1000)
  );
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const countdownRef = useRef<ReturnType<typeof setInterval>>();

  const doFetch = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await fetchDashboardState();
      setData(result);
      setError(null);
      setLastFetchedAt(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setIsLoading(false);
      setSecondsUntilRefresh(Math.floor(REFRESH_INTERVAL_MS / 1000));
    }
  }, []);

  const refresh = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    doFetch();
    intervalRef.current = setInterval(doFetch, REFRESH_INTERVAL_MS);
  }, [doFetch]);

  useEffect(() => {
    doFetch();
    intervalRef.current = setInterval(doFetch, REFRESH_INTERVAL_MS);
    countdownRef.current = setInterval(() => {
      setSecondsUntilRefresh((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, [doFetch]);

  return { data, error, isLoading, lastFetchedAt, secondsUntilRefresh, refresh };
}
