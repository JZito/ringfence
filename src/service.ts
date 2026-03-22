import { createServer, type IncomingMessage, type ServerResponse } from "node:http";

import { nowIso, stringifyForJson } from "./format.js";
import { readRuntimeState } from "./history.js";
import { logStep } from "./logger.js";
import { buildDashboardPublicState, runDailyDigest, runDashboardPreflight, runHourlyMonitor } from "./monitor.js";
import type { ContractKind, RingfenceConfig } from "./types.js";

function parseContractKind(value: string | null, fallback: ContractKind): ContractKind {
  if (value === "production" || value === "demo") {
    return value;
  }

  return fallback;
}

function readBody(request: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    request.on("data", (chunk) => {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    });
    request.on("end", () => {
      resolve(Buffer.concat(chunks).toString("utf8"));
    });
    request.on("error", reject);
  });
}

function sendJson(response: ServerResponse, statusCode: number, payload: unknown) {
  response.writeHead(statusCode, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
  });
  response.end(`${stringifyForJson(payload)}\n`);
}

function sendHtml(response: ServerResponse, html: string) {
  response.writeHead(200, {
    "content-type": "text/html; charset=utf-8",
    "cache-control": "no-store",
  });
  response.end(html);
}

function unauthorized(response: ServerResponse) {
  sendJson(response, 401, { error: "unauthorized" });
}

function serverError(response: ServerResponse, error: unknown) {
  const message = error instanceof Error ? error.message : String(error);
  sendJson(response, 500, { error: message });
}

function isAdminAuthorized(config: RingfenceConfig, request: IncomingMessage, url: URL): boolean {
  if (!config.dashboardAdminToken) {
    return false;
  }

  const headerToken = request.headers["x-admin-token"];
  const queryToken = url.searchParams.get("token");
  const headerValue = Array.isArray(headerToken) ? headerToken[0] : headerToken;
  return headerValue === config.dashboardAdminToken || queryToken === config.dashboardAdminToken;
}

function renderPublicPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Ringfence Governance Monitor</title>
    <style>
      :root {
        color-scheme: light;
        --bg: #f7f4eb;
        --panel: #fffdf8;
        --line: #d9cfba;
        --text: #1f1b16;
        --muted: #6c6254;
        --accent: #22543d;
        --warn: #9b2c2c;
        --amber: #9c6b00;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        background: radial-gradient(circle at top, #fff9ec 0%, var(--bg) 50%, #efe7d5 100%);
        color: var(--text);
        font-family: Georgia, "Iowan Old Style", serif;
      }
      main {
        max-width: 1180px;
        margin: 0 auto;
        padding: 32px 20px 48px;
      }
      h1, h2, h3 { margin: 0 0 12px; }
      h1 { font-size: 2.4rem; }
      h2 { font-size: 1.25rem; }
      p, li, pre { line-height: 1.45; }
      .lede { color: var(--muted); max-width: 72ch; }
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 16px;
      }
      .panel {
        background: var(--panel);
        border: 1px solid var(--line);
        border-radius: 18px;
        padding: 18px;
        box-shadow: 0 12px 24px rgba(48, 40, 28, 0.06);
      }
      .mono {
        font-family: "SFMono-Regular", Menlo, monospace;
        font-size: 0.88rem;
        word-break: break-word;
      }
      .status {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border-radius: 999px;
        padding: 6px 12px;
        border: 1px solid var(--line);
        font-size: 0.9rem;
      }
      .status.healthy { color: var(--accent); }
      .status.degraded, .status.pending_approval { color: var(--amber); }
      .status.failed { color: var(--warn); }
      .list {
        display: grid;
        gap: 10px;
      }
      .item {
        border-top: 1px solid var(--line);
        padding-top: 10px;
      }
      .item:first-child {
        border-top: none;
        padding-top: 0;
      }
      .muted { color: var(--muted); }
      .pill {
        display: inline-block;
        border: 1px solid var(--line);
        border-radius: 999px;
        padding: 3px 8px;
        margin: 0 6px 6px 0;
        font-size: 0.8rem;
      }
      .summary {
        white-space: pre-wrap;
      }
      a { color: var(--accent); }
      button {
        border: 1px solid var(--text);
        background: var(--text);
        color: #fffdf8;
        border-radius: 999px;
        padding: 8px 14px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <main>
      <div style="display:flex;justify-content:space-between;gap:16px;align-items:flex-start;flex-wrap:wrap;">
        <div>
          <h1>Ringfence Governance Monitor</h1>
          <p class="lede">Ringfence watches the Lido governance forum, classifies recent discussions for treasury-relevant risk, and funds its own monitoring budget from bounded spendable value while keeping principal protected.</p>
        </div>
        <div id="status" class="status">loading</div>
      </div>
      <div class="grid" id="top-grid"></div>
      <div class="grid" style="margin-top:16px;">
        <section class="panel">
          <h2>Latest Changed Topics</h2>
          <div id="topics" class="list"></div>
        </section>
        <section class="panel">
          <h2>Daily Digests</h2>
          <div id="digests" class="list"></div>
        </section>
      </div>
      <div class="grid" style="margin-top:16px;">
        <section class="panel">
          <h2>Material Alerts</h2>
          <div id="alerts" class="list"></div>
        </section>
        <section class="panel">
          <h2>Recent Runs</h2>
          <div id="runs" class="list"></div>
        </section>
      </div>
      <div class="grid" style="margin-top:16px;">
        <section class="panel">
          <h2>Recent Treasury Activity</h2>
          <div id="txs" class="list"></div>
        </section>
        <section class="panel">
          <h2>Pending Approvals</h2>
          <div id="approvals" class="list"></div>
        </section>
      </div>
      <div class="grid" style="margin-top:16px;">
        <section class="panel">
          <h2>Contract Events</h2>
          <div id="events" class="list"></div>
        </section>
      </div>
    </main>
    <script>
      function escapeHtml(value) {
        return String(value)
          .replaceAll('&', '&amp;')
          .replaceAll('<', '&lt;')
          .replaceAll('>', '&gt;');
      }
      function renderList(id, items, render, empty) {
        const root = document.getElementById(id);
        if (!items || items.length === 0) {
          root.innerHTML = '<div class="muted">' + empty + '</div>';
          return;
        }
        root.innerHTML = items.map((item) => '<div class="item">' + render(item) + '</div>').join('');
      }
      function renderVaultCard(label, state, protection) {
        if (!state) {
          return '<div class="panel"><h2>' + label + '</h2><div class="muted">not configured</div></div>';
        }
        const demoDelta = state.demoSpendableDeltaStETH !== undefined
          ? '<div><span class="muted">Demo delta</span><div class="mono">' + state.demoSpendableDeltaStETH + '</div></div>'
          : '';
        return '<div class="panel">'
          + '<h2>' + label + '</h2>'
          + '<div class="list">'
          + '<div class="item"><span class="muted">Address</span><div class="mono">' + escapeHtml(state.contractAddress) + '</div></div>'
          + '<div class="item"><span class="muted">Vault wstETH</span><div class="mono">' + escapeHtml(state.vaultBalanceWstETH) + '</div></div>'
          + '<div class="item"><span class="muted">Principal baseline</span><div class="mono">' + escapeHtml(state.principalBaseline) + '</div></div>'
          + '<div class="item"><span class="muted">Current value</span><div class="mono">' + escapeHtml(state.currentPositionValue) + '</div></div>'
          + '<div class="item"><span class="muted">Claimable</span><div class="mono">' + escapeHtml(state.claimableAmount) + '</div></div>'
          + demoDelta
          + '<div class="item"><span class="muted">Protection</span><div>' + escapeHtml(protection || 'unknown') + '</div></div>'
          + '</div>'
          + '</div>';
      }
      async function loadState() {
        const response = await fetch('/api/public/state', { cache: 'no-store' });
        const state = await response.json();
        const status = document.getElementById('status');
        status.className = 'status ' + state.agentStatus;
        status.textContent = 'Agent status: ' + state.agentStatus;

        document.getElementById('top-grid').innerHTML = [
          '<div class="panel"><h2>Monitor</h2><div class="list">'
            + '<div class="item"><span class="muted">Funding contract</span><div>' + escapeHtml(state.monitorContractKind) + '</div></div>'
            + '<div class="item"><span class="muted">Latest summary</span><div class="summary">' + escapeHtml(state.latestPublicSummary || 'none') + '</div></div>'
            + '<div class="item"><span class="muted">Last hourly run</span><div>' + escapeHtml(state.lastHourlyRunAt || 'never') + '</div></div>'
            + '<div class="item"><span class="muted">Last daily digest</span><div>' + escapeHtml(state.lastDailyDigestAt || 'never') + '</div></div>'
            + '<div class="item"><span class="muted">Locus balance</span><div>' + escapeHtml(state.locusBalance || 'not configured') + '</div></div>'
            + '<div class="item"><span class="muted">Locus wallet</span><div class="mono">' + escapeHtml(state.locusWalletAddress || 'not configured') + '</div></div>'
            + '<div class="item"><span class="muted">Telegram chat</span><div class="mono">' + escapeHtml(state.telegramChatId || 'not configured') + '</div></div>'
            + '<div class="item"><span class="muted">Generated</span><div>' + escapeHtml(state.generatedAt) + '</div></div>'
            + '</div></div>',
          renderVaultCard('Production Vault', state.production, state.treasuryProtectionSummary.production),
          renderVaultCard('Demo Harness', state.demo, state.treasuryProtectionSummary.demo),
        ].join('');

        renderList('topics', state.latestChangedTopics, (topic) => {
          const tags = (topic.riskTags || []).map((tag) => '<span class="pill">' + escapeHtml(tag) + '</span>').join('');
          return '<div><strong>' + escapeHtml(topic.title) + '</strong> <span class="pill">' + escapeHtml(topic.changeLevel) + '</span></div>'
            + '<div><a href="' + escapeHtml(topic.url) + '" target="_blank" rel="noreferrer">open topic</a></div>'
            + '<div>' + escapeHtml(topic.summary) + '</div>'
            + '<div class="muted">Why it matters: ' + escapeHtml(topic.whyItMatters) + '</div>'
            + '<div class="muted">Recommended action: ' + escapeHtml(topic.recommendedAction) + '</div>'
            + '<div>' + tags + '</div>';
        }, 'No changed topics recorded yet.');

        renderList('digests', state.digests, (digest) => {
          return '<div><strong>' + escapeHtml(digest.subject) + '</strong></div>'
            + '<div class="muted">' + escapeHtml(digest.sentAt) + '</div>'
            + '<pre class="mono summary">' + escapeHtml(digest.text) + '</pre>';
        }, 'No daily digests sent yet.');

        renderList('alerts', state.materialAlerts, (alert) => {
          return '<div><strong>' + escapeHtml(alert.subject) + '</strong></div>'
            + '<div class="muted">' + escapeHtml(alert.sentAt) + '</div>'
            + '<pre class="mono summary">' + escapeHtml(alert.text) + '</pre>';
        }, 'No material alerts sent yet.');

        renderList('runs', state.recentRuns, (run) => {
          return '<div><strong>' + escapeHtml(run.runType) + '</strong> <span class="pill">' + escapeHtml(run.status) + '</span></div>'
            + '<div class="muted">' + escapeHtml(run.startedAt) + '</div>'
            + '<div>' + escapeHtml(run.summary) + '</div>';
        }, 'No runs recorded yet.');

        renderList('txs', state.recentTxs, (tx) => {
          return '<div><strong>' + escapeHtml(tx.step) + '</strong></div>'
            + '<div class="mono">' + escapeHtml(tx.hash) + '</div>'
            + '<div class="muted">' + escapeHtml(tx.timestamp) + '</div>';
        }, 'No transactions recorded yet.');

        renderList('approvals', state.pendingApprovals, (approval) => {
          return '<div><strong>' + escapeHtml(approval.step) + '</strong></div>'
            + '<div class="mono">' + escapeHtml(approval.pendingApprovalId) + '</div>'
            + '<div><a href="' + escapeHtml(approval.approvalUrl) + '" target="_blank" rel="noreferrer">approval url</a></div>'
            + '<div class="muted">' + escapeHtml(approval.timestamp) + '</div>';
        }, 'No pending approvals.');

        renderList('events', state.contractEvents, (event) => {
          return '<div><strong>' + escapeHtml(event.contractKind) + ' :: ' + escapeHtml(event.eventName) + '</strong></div>'
            + '<div class="mono">' + escapeHtml(event.txHash) + '</div>'
            + '<div class="muted">' + escapeHtml(event.timestamp || 'unknown') + '</div>';
        }, 'No recent contract events.');
      }
      loadState().catch((error) => {
        document.getElementById('top-grid').innerHTML = '<div class="panel"><strong>Failed to load dashboard state</strong><div class="muted">' + escapeHtml(error.message || String(error)) + '</div></div>';
      });
      setInterval(() => { loadState().catch(() => {}); }, 30000);
    </script>
  </body>
</html>`;
}

function renderAdminPage(config: RingfenceConfig): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Ringfence Admin</title>
    <style>
      body { font-family: Menlo, monospace; margin: 0; padding: 24px; background: #f5f1e7; color: #1f1b16; }
      .panel { max-width: 720px; background: #fffdf8; border: 1px solid #d9cfba; border-radius: 16px; padding: 20px; }
      button, select { font: inherit; padding: 8px 12px; margin-right: 8px; }
      pre { white-space: pre-wrap; }
    </style>
  </head>
  <body>
    <div class="panel">
      <h1>Ringfence Admin</h1>
      <p>Protected manual controls for the governance monitor.</p>
      <label>Contract
        <select id="contract">
          <option value="demo" ${config.monitorContractKind === "demo" ? "selected" : ""}>demo</option>
          <option value="production" ${config.monitorContractKind === "production" ? "selected" : ""}>production</option>
        </select>
      </label>
      <div style="margin-top:16px;">
        <button onclick="callAdmin('/api/admin/monitor/preflight')">Preflight</button>
        <button onclick="callAdmin('/api/admin/monitor/hourly')">Run Hourly</button>
        <button onclick="callAdmin('/api/admin/monitor/digest')">Send Digest</button>
      </div>
      <pre id="output">ready</pre>
    </div>
    <script>
      const url = new URL(window.location.href);
      const token = url.searchParams.get('token') || '';
      async function callAdmin(path) {
        const contract = document.getElementById('contract').value;
        const response = await fetch(path + '?contract=' + encodeURIComponent(contract) + '&token=' + encodeURIComponent(token), {
          method: 'POST',
          headers: { 'content-type': 'application/json', 'x-admin-token': token },
          body: JSON.stringify({ contract }),
        });
        const text = await response.text();
        document.getElementById('output').textContent = text;
      }
    </script>
  </body>
</html>`;
}

export async function startDashboardService(config: RingfenceConfig) {
  let activeTask: Promise<unknown> | undefined;

  async function runExclusive<T>(label: string, task: () => Promise<T>): Promise<T> {
    if (activeTask) {
      throw new Error("Another monitor task is already running");
    }

    const execution = task();
    activeTask = execution;
    try {
      return await execution;
    } finally {
      activeTask = undefined;
      logStep("monitor-service", "info", { message: `${label} finished` });
    }
  }

  async function schedulerTick() {
    const state = readRuntimeState();
    const now = new Date();
    const hourKey = now.toISOString().slice(0, 13);
    const dayKey = now.toISOString().slice(0, 10);

    if (state.monitor.lastHourlyRunHourKey !== hourKey) {
      await runExclusive("scheduled-hourly", () =>
        runHourlyMonitor(config, config.monitorContractKind, "hourly"),
      );
    }

    const refreshed = readRuntimeState();
    if (now.getUTCHours() >= config.digestHourUtc && refreshed.monitor.lastDigestDayKey !== dayKey) {
      await runExclusive("scheduled-digest", () => runDailyDigest(config, config.monitorContractKind, "digest"));
    }
  }

  const server = createServer(async (request, response) => {
    const url = new URL(request.url ?? "/", `http://${request.headers.host ?? `${config.dashboardHost}:${config.dashboardPort}`}`);

    try {
      if (request.method === "GET" && url.pathname === "/") {
        sendHtml(response, renderPublicPage());
        return;
      }

      if (request.method === "GET" && url.pathname === "/admin") {
        if (!isAdminAuthorized(config, request, url)) {
          unauthorized(response);
          return;
        }
        sendHtml(response, renderAdminPage(config));
        return;
      }

      if (request.method === "GET" && url.pathname === "/api/public/state") {
        sendJson(response, 200, await buildDashboardPublicState(config));
        return;
      }

      if (request.method === "GET" && url.pathname === "/api/public/runs") {
        sendJson(response, 200, readRuntimeState().monitor.runHistory);
        return;
      }

      if (request.method === "GET" && url.pathname === "/api/public/digests") {
        sendJson(response, 200, readRuntimeState().monitor.digests);
        return;
      }

      if (request.method === "POST" && url.pathname.startsWith("/api/admin/monitor/")) {
        if (!isAdminAuthorized(config, request, url)) {
          unauthorized(response);
          return;
        }

        const rawBody = await readBody(request);
        const body = rawBody ? (JSON.parse(rawBody) as { contract?: string }) : {};
        const contractKind = parseContractKind(body.contract ?? url.searchParams.get("contract"), config.monitorContractKind);

        if (url.pathname === "/api/admin/monitor/preflight") {
          sendJson(response, 200, await runExclusive("manual-preflight", () => runDashboardPreflight(config, contractKind)));
          return;
        }
        if (url.pathname === "/api/admin/monitor/hourly") {
          sendJson(response, 200, await runExclusive("manual-hourly", () => runHourlyMonitor(config, contractKind, "manual_hourly")));
          return;
        }
        if (url.pathname === "/api/admin/monitor/digest") {
          sendJson(response, 200, await runExclusive("manual-digest", () => runDailyDigest(config, contractKind, "manual_digest")));
          return;
        }
      }

      sendJson(response, 404, { error: "not_found", path: url.pathname });
    } catch (error) {
      serverError(response, error);
    }
  });

  await new Promise<void>((resolve, reject) => {
    server.once("error", reject);
    server.listen(config.dashboardPort, config.dashboardHost, () => {
      resolve();
    });
  });

  logStep("monitor-service", "ok", {
    message: `Dashboard listening on http://${config.dashboardHost}:${config.dashboardPort}`,
    host: config.dashboardHost,
    port: config.dashboardPort,
    startedAt: nowIso(),
  });

  void schedulerTick().catch((error) => {
    logStep("monitor-service", "error", { message: error instanceof Error ? error.message : String(error) });
  });
  setInterval(() => {
    void schedulerTick().catch((error) => {
      logStep("monitor-service", "error", { message: error instanceof Error ? error.message : String(error) });
    });
  }, 60_000);

  return server;
}
