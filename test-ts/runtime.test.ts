import test from "node:test";
import assert from "node:assert/strict";

import {
  assertSupportedRouting,
  ensureRequiredLocusEndpoints,
  isQuoteStale,
  selectClaimAmount,
  validateSwapTransactionRequest,
} from "../src/guards.js";
import { getLocusUsdcBalanceString } from "../src/runtime.js";
import { normalizeTelegramPlainText, splitTelegramMessage } from "../src/telegram.js";

test("selectClaimAmount uses the tighter of claimable and cap", () => {
  const amount = selectClaimAmount({
    claimableAmount: 10n,
    perTxCap: 7n,
    minClaimAmountWstETH: 1n,
    maxClaimAmountWstETH: 0n,
  });

  assert.equal(amount, 7n);
});

test("selectClaimAmount applies configured max threshold", () => {
  const amount = selectClaimAmount({
    claimableAmount: 10n,
    perTxCap: 9n,
    minClaimAmountWstETH: 1n,
    maxClaimAmountWstETH: 5n,
  });

  assert.equal(amount, 5n);
});

test("assertSupportedRouting rejects non-classic routes", () => {
  assert.throws(() => assertSupportedRouting("DUTCH_V2"), /CLASSIC/);
});

test("isQuoteStale expires quotes older than thirty seconds", () => {
  const now = 50_000;
  assert.equal(isQuoteStale(19_999, now), true);
  assert.equal(isQuoteStale(20_001, now), false);
});

test("ensureRequiredLocusEndpoints validates Diffbot and Gemini", () => {
  assert.throws(() => ensureRequiredLocusEndpoints(["diffbot/discussion"]), /gemini/);
  assert.doesNotThrow(() => ensureRequiredLocusEndpoints(["diffbot/discussion", "gemini/chat"]));
});

test("validateSwapTransactionRequest rejects empty data", () => {
  assert.throws(
    () =>
      validateSwapTransactionRequest({
        to: "0x0000000000000000000000000000000000000001",
        from: "0x0000000000000000000000000000000000000002",
        data: "0x",
        value: "0",
        chainId: 8453,
      }),
    /empty transaction data/,
  );
});

test("getLocusUsdcBalanceString accepts live Locus usdc_balance payloads", () => {
  assert.equal(
    getLocusUsdcBalanceString({
      wallet_address: "0x1700c22b839332237da353cdbe6665e7555b918e",
      usdc_balance: "9.979444",
      chain: "base",
    }),
    "9.979444",
  );
});

test("splitTelegramMessage chunks long messages without dropping content", () => {
  const text = ["alpha".repeat(300), "beta".repeat(300), "gamma".repeat(300)].join("\n");
  const parts = splitTelegramMessage(text, 1000);

  assert.equal(parts.length > 1, true);
  assert.equal(parts.every((part) => part.length <= 1000), true);
  assert.equal(parts.join("").replaceAll(/\s+/g, ""), text.replaceAll(/\s+/g, ""));
});

test("normalizeTelegramPlainText strips markdown syntax for plain-text delivery", () => {
  const normalized = normalizeTelegramPlainText([
    "### Summary",
    "* **Item one**",
    "* [topic](https://example.com/topic)",
    "",
    "### Concerns",
    "* `none`",
  ].join("\n"));

  assert.equal(
    normalized,
    ["Summary", "- Item one", "- topic: https://example.com/topic", "", "Concerns", "- none"].join("\n"),
  );
});
