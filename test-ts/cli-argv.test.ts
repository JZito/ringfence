import test from "node:test";
import assert from "node:assert/strict";

import { normalizeCliArgv } from "../src/cli-argv.js";

test("normalizeCliArgv strips the leading pnpm separator", () => {
  const normalized = normalizeCliArgv([
    "node",
    "src/index.ts",
    "--",
    "monitor",
    "hourly",
    "--contract",
    "demo",
  ]);

  assert.deepEqual(normalized, [
    "node",
    "src/index.ts",
    "monitor",
    "hourly",
    "--contract",
    "demo",
  ]);
});

test("normalizeCliArgv leaves normal argv untouched", () => {
  const argv = ["node", "src/index.ts", "state", "--contract", "demo"];
  assert.deepEqual(normalizeCliArgv(argv), argv);
});
