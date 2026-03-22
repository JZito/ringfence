import { fetchLatestForumTopics } from "./forum.js";
import { callDiffbotDiscussion, callGeminiChat, getPendingApproval } from "./locus.js";
import { logStep } from "./logger.js";
import {
  clearLocusPendingApproval,
  ensureMonitorProviderCatalog,
  formatLocusBalanceDisplay,
  getVerifiedLocusBalance,
  recordLocusPendingApproval,
  requireTelegramConfig,
  sendOperatorTelegramStep,
} from "./runtime.js";
import { escapeTelegramHtml } from "./telegram.js";
import type { RingfenceConfig } from "./types.js";

function truncateText(value: string, maxLength: number): string {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength - 3)}...`;
}

function stringifyPayload(value: unknown): string {
  return JSON.stringify(value, (_, currentValue) => (typeof currentValue === "bigint" ? currentValue.toString() : currentValue), 2);
}

function extractGeminiText(data: unknown): string {
  if (typeof data === "string") {
    return data;
  }
  if (!data || typeof data !== "object") {
    return stringifyPayload(data);
  }

  const record = data as Record<string, unknown>;
  if (typeof record.text === "string") {
    return record.text;
  }
  if (typeof record.content === "string") {
    return record.content;
  }
  if (Array.isArray(record.candidates)) {
    for (const candidate of record.candidates) {
      if (!candidate || typeof candidate !== "object") {
        continue;
      }
      const content = (candidate as Record<string, unknown>).content;
      if (!content || typeof content !== "object") {
        continue;
      }
      const parts = (content as Record<string, unknown>).parts;
      if (!Array.isArray(parts)) {
        continue;
      }
      for (const part of parts) {
        if (part && typeof part === "object" && typeof (part as Record<string, unknown>).text === "string") {
          return (part as Record<string, unknown>).text as string;
        }
      }
    }
  }

  return stringifyPayload(data);
}

function formatSmokeSummaryHtml(summary: string): string {
  return summary
    .trim()
    .split("\n")
    .map((line) => {
      const trimmed = line.trim();
      if (!trimmed) {
        return "";
      }
      if (/^[A-Za-z][A-Za-z ]+:\s*$/.test(trimmed)) {
        return `<b>${escapeTelegramHtml(trimmed.replace(/:\s*$/, ""))}</b>`;
      }
      if (/^-\s+/.test(trimmed)) {
        return `• ${escapeTelegramHtml(trimmed.replace(/^-\s+/, ""))}`;
      }
      return escapeTelegramHtml(trimmed);
    })
    .join("\n");
}

async function pickSmokeUrl(config: RingfenceConfig, explicitUrl?: string): Promise<string> {
  if (explicitUrl) {
    return explicitUrl;
  }

  const topics = await fetchLatestForumTopics(config);
  if (topics.length > 0) {
    return topics[0]!.url;
  }

  return config.forumBaseUrl;
}

export async function runLocusSmoke(
  config: RingfenceConfig,
  input: {
    topicUrl?: string;
    skipNotify?: boolean;
  } = {},
) {
  logStep("locus-smoke", "start", { message: "Running Locus-only smoke test" });

  const balance = await getVerifiedLocusBalance(config);
  const endpoints = await ensureMonitorProviderCatalog(config);
  const topicUrl = await pickSmokeUrl(config, input.topicUrl);

  logStep("locus-smoke", "info", {
    message: "Verified Locus wallet and wrapped API catalog",
    walletAddress: balance.data.wallet_address,
    balance: formatLocusBalanceDisplay(balance.data),
    endpoints,
    topicUrl,
  });

  const diffbotStep = "locus-smoke-diffbot";
  const diffbotResponse = await callDiffbotDiscussion(config, {
    url: topicUrl,
    paging: true,
    maxPages: 2,
    fields: "links,meta",
    timeout: 30_000,
  });
  const diffbotPending = getPendingApproval(diffbotResponse);
  if (diffbotPending) {
    recordLocusPendingApproval(diffbotStep, diffbotPending);
    logStep(diffbotStep, "info", {
      message: "Diffbot smoke call is waiting on approval",
      approvalUrl: diffbotPending.approval_url,
      pendingApprovalId: diffbotPending.pending_approval_id,
    });
    return { status: "pending_approval", step: diffbotStep, approvalUrl: diffbotPending.approval_url };
  }
  clearLocusPendingApproval(diffbotStep);
  if (diffbotResponse.status >= 400 || diffbotResponse.body.success === false) {
    throw new Error(`Diffbot smoke call failed: ${JSON.stringify(diffbotResponse.body)}`);
  }

  const diffbotExcerpt = truncateText(stringifyPayload(diffbotResponse.body.data ?? diffbotResponse.body), 12_000);
  logStep(diffbotStep, "ok", {
    message: "Diffbot smoke call completed",
    topicUrl,
  });

  const geminiStep = "locus-smoke-gemini";
  const geminiResponse = await callGeminiChat(config, {
    model: config.geminiModel,
    systemInstruction:
      "Summarize the supplied Lido governance forum content in plain text for Telegram delivery. Do not use markdown, headings with #, code fences, or tables.",
    messages: [
      {
        role: "user",
        content: [
          "Summarize this Lido governance forum content for a Telegram update.",
          "Return plain text only. No markdown.",
          "Use this shape exactly:",
          "Summary:",
          "- bullet 1",
          "- bullet 2",
          "- bullet 3",
          "",
          "Concerns:",
          "- bullet 1",
          "- bullet 2",
          "- bullet 3",
          "",
          "Call out any security concerns, slashing risk, or serious governance concerns.",
          "If nothing material stands out, say so clearly under Concerns.",
          "",
          diffbotExcerpt,
        ].join("\n"),
      },
    ],
    maxOutputTokens: 768,
    temperature: 0.1,
    thinking: "low",
  });
  const geminiPending = getPendingApproval(geminiResponse);
  if (geminiPending) {
    recordLocusPendingApproval(geminiStep, geminiPending);
    logStep(geminiStep, "info", {
      message: "Gemini smoke call is waiting on approval",
      approvalUrl: geminiPending.approval_url,
      pendingApprovalId: geminiPending.pending_approval_id,
    });
    return { status: "pending_approval", step: geminiStep, approvalUrl: geminiPending.approval_url };
  }
  clearLocusPendingApproval(geminiStep);
  if (geminiResponse.status >= 400 || geminiResponse.body.success === false) {
    throw new Error(`Gemini smoke call failed: ${JSON.stringify(geminiResponse.body)}`);
  }

  const geminiSummary = extractGeminiText(geminiResponse.body.data);
  logStep(geminiStep, "ok", {
    message: "Gemini smoke call completed",
    summaryPreview: truncateText(geminiSummary, 280),
  });

  if (input.skipNotify) {
    return {
      status: "ok",
      walletAddress: balance.data.wallet_address,
      balance: formatLocusBalanceDisplay(balance.data),
      topicUrl,
      geminiSummary,
      notification: "skipped",
    };
  }

  requireTelegramConfig(config);
  const notificationText = ["Topic URL:", topicUrl, "", geminiSummary].join("\n");
  const notificationHtml = [
    `<b>Topic</b>`,
    `<a href="${escapeTelegramHtml(topicUrl)}">Open forum thread</a>`,
    "",
    formatSmokeSummaryHtml(geminiSummary),
  ].join("\n");
  await sendOperatorTelegramStep({
    config,
    step: "locus-smoke-telegram",
    subject: "Ringfence Locus smoke test",
    text: notificationText,
    html: notificationHtml,
  });

  logStep("locus-smoke", "ok", {
    message: "Locus-only smoke test completed",
    walletAddress: balance.data.wallet_address,
    balance: formatLocusBalanceDisplay(balance.data),
    topicUrl,
    notificationStatus: "sent",
  });

  return {
    status: "ok",
    walletAddress: balance.data.wallet_address,
    balance: formatLocusBalanceDisplay(balance.data),
    topicUrl,
    geminiSummary,
    notification: "sent",
  };
}
