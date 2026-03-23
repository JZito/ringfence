import { BASE_EXPLORER_URL } from "./constants";

export function truncateAddress(addr: string): string {
  if (addr.length <= 12) return addr;
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
}

export function formatWstETH(raw: string): string {
  return formatBigIntString(raw, 18, 6);
}

export function formatUSDC(raw: string): string {
  return formatBigIntString(raw, 6, 4);
}

function formatBigIntString(raw: string, decimals: number, precision: number): string {
  try {
    const value = BigInt(raw);
    const divisor = BigInt(10 ** decimals);
    const whole = value / divisor;
    const remainder = value % divisor;
    if (remainder === 0n) return whole.toString();
    const fracStr = remainder.toString().padStart(decimals, "0").slice(0, precision).replace(/0+$/, "");
    return fracStr ? `${whole}.${fracStr}` : whole.toString();
  } catch {
    return raw;
  }
}

export function relativeTime(iso: string): string {
  const now = Date.now();
  const then = new Date(iso).getTime();
  if (isNaN(then)) return iso;
  const diffMs = now - then;
  if (diffMs < 0) return "just now";
  const seconds = Math.floor(diffMs / 1000);
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export function basescanTxUrl(hash: string): string {
  return `${BASE_EXPLORER_URL}/tx/${hash}`;
}

export function basescanAddressUrl(addr: string): string {
  return `${BASE_EXPLORER_URL}/address/${addr}`;
}

export function relativeTimeUntil(lastRunIso: string, intervalMinutes: number): string {
  const then = new Date(lastRunIso).getTime();
  if (isNaN(then)) return "unknown";
  const nextRun = then + intervalMinutes * 60_000;
  const diffMs = nextRun - Date.now();
  if (diffMs <= 0) return "imminent";
  const minutes = Math.ceil(diffMs / 60_000);
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    return `in ${hours}h ${minutes % 60}m`;
  }
  return `in ${minutes}m`;
}
