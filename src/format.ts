import { formatUnits, parseUnits } from "viem";

export function formatAmount(amount: bigint, decimals = 18, precision = 6): string {
  const formatted = formatUnits(amount, decimals);
  const whole = formatted.split(".")[0] ?? formatted;
  const fraction = formatted.split(".")[1] ?? "";
  const trimmedFraction = fraction.slice(0, precision).replace(/0+$/, "");
  return trimmedFraction ? `${whole}.${trimmedFraction}` : whole;
}

export function parseTokenAmount(amount: string, decimals = 18): bigint {
  return parseUnits(amount, decimals);
}

export function truncateHash(value: string): string {
  if (value.length <= 12) {
    return value;
  }

  return `${value.slice(0, 6)}...${value.slice(-4)}`;
}

export function nowIso(): string {
  return new Date().toISOString();
}

export function formatUsd(amountMicroUsdc: bigint): string {
  return formatAmount(amountMicroUsdc, 6, 4);
}

export function stringifyForJson(value: unknown): string {
  return JSON.stringify(
    value,
    (_, currentValue) => (typeof currentValue === "bigint" ? currentValue.toString() : currentValue),
    2,
  );
}
