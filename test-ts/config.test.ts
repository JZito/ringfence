import test from "node:test";
import assert from "node:assert/strict";

import { loadConfig } from "../src/config.js";

function withEnv<T>(entries: Record<string, string | undefined>, run: () => T): T {
  const previous = new Map<string, string | undefined>();

  for (const [key, value] of Object.entries(entries)) {
    previous.set(key, process.env[key]);
    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }

  try {
    return run();
  } finally {
    for (const [key, value] of previous.entries()) {
      if (value === undefined) {
        delete process.env[key];
      } else {
        process.env[key] = value;
      }
    }
  }
}

test("loadConfig prefers Railway PORT over DASHBOARD_PORT", { concurrency: false }, () => {
  const config = withEnv(
    {
      PORT: "4815",
      DASHBOARD_PORT: "3000",
      OWNER_PRIVATE_KEY: undefined,
      AGENT_PRIVATE_KEY: undefined,
      OWNER_ADDRESS: undefined,
    },
    () => loadConfig(),
  );

  assert.equal(config.dashboardPort, 4815);
});

test("loadConfig falls back to DASHBOARD_PORT when PORT is unset", { concurrency: false }, () => {
  const config = withEnv(
    {
      PORT: undefined,
      DASHBOARD_PORT: "3010",
      OWNER_PRIVATE_KEY: undefined,
      AGENT_PRIVATE_KEY: undefined,
      OWNER_ADDRESS: undefined,
    },
    () => loadConfig(),
  );

  assert.equal(config.dashboardPort, 3010);
});
