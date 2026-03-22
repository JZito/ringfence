import type { RingfenceConfig } from "./types.js";

const TELEGRAM_MESSAGE_LIMIT = 3_900;
export type TelegramParseMode = "HTML" | "MarkdownV2";

interface TelegramResponse<T = Record<string, unknown>> {
  ok: boolean;
  result?: T;
  description?: string;
  error_code?: number;
}

function requireTelegramBotToken(config: RingfenceConfig): string {
  if (!config.telegramBotToken) {
    throw new Error("TELEGRAM_BOT_TOKEN is required for Telegram notifications");
  }

  return config.telegramBotToken;
}

function requireTelegramChatId(config: RingfenceConfig): string {
  if (!config.telegramChatId) {
    throw new Error("TELEGRAM_CHAT_ID is required for Telegram notifications");
  }

  return config.telegramChatId;
}

export function splitTelegramMessage(text: string, limit = TELEGRAM_MESSAGE_LIMIT): string[] {
  const normalized = text.trim();
  if (!normalized) {
    return [];
  }
  if (normalized.length <= limit) {
    return [normalized];
  }

  const chunks: string[] = [];
  let remaining = normalized;

  while (remaining.length > limit) {
    let splitIndex = remaining.lastIndexOf("\n", limit);
    if (splitIndex < Math.floor(limit / 2)) {
      splitIndex = remaining.lastIndexOf(" ", limit);
    }
    if (splitIndex < Math.floor(limit / 2)) {
      splitIndex = limit;
    }

    chunks.push(remaining.slice(0, splitIndex).trim());
    remaining = remaining.slice(splitIndex).trim();
  }

  if (remaining.length > 0) {
    chunks.push(remaining);
  }

  return chunks;
}

export function normalizeTelegramPlainText(text: string): string {
  return text
    .replaceAll("\r\n", "\n")
    .replaceAll(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, "$1: $2")
    .replaceAll(/^#{1,6}\s*/gm, "")
    .replaceAll(/^\s*[*•]\s+/gm, "- ")
    .replaceAll(/\*\*(.+?)\*\*/g, "$1")
    .replaceAll(/__(.+?)__/g, "$1")
    .replaceAll(/`([^`]+)`/g, "$1")
    .replaceAll(/\n{3,}/g, "\n\n")
    .trim();
}

export function escapeTelegramHtml(text: string): string {
  return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function splitTelegramLines(text: string, limit: number): string[] {
  const normalized = text.trim();
  if (!normalized) {
    return [];
  }

  const lines = normalized.split("\n");
  const chunks: string[] = [];
  let current = "";

  function pushCurrent() {
    const trimmed = current.trim();
    if (trimmed) {
      chunks.push(trimmed);
    }
    current = "";
  }

  for (const line of lines) {
    const nextLine = line.trimEnd();
    if (!nextLine) {
      if (current && !current.endsWith("\n\n")) {
        current += "\n";
      }
      continue;
    }

    if (!current) {
      if (nextLine.length <= limit) {
        current = nextLine;
        continue;
      }
    } else if (current.length + 1 + nextLine.length <= limit) {
      current += `\n${nextLine}`;
      continue;
    } else {
      pushCurrent();
    }

    let remaining = nextLine;
    while (remaining.length > limit) {
      chunks.push(remaining.slice(0, limit).trim());
      remaining = remaining.slice(limit).trim();
    }
    current = remaining;
  }

  pushCurrent();
  return chunks;
}

export async function sendTelegramMessage(input: {
  config: RingfenceConfig;
  text: string;
  parseMode?: TelegramParseMode;
}): Promise<{ messageCount: number }> {
  const token = requireTelegramBotToken(input.config);
  const chatId = requireTelegramChatId(input.config);
  const normalizedText =
    input.parseMode === "HTML" ? input.text.trim() : normalizeTelegramPlainText(input.text);
  const chunks =
    input.parseMode === "HTML"
      ? splitTelegramLines(normalizedText, TELEGRAM_MESSAGE_LIMIT)
      : splitTelegramMessage(normalizedText);

  if (chunks.length === 0) {
    throw new Error("Telegram message body is empty");
  }

  for (const [index, chunk] of chunks.entries()) {
    const text = chunks.length > 1 ? `(${index + 1}/${chunks.length})\n${chunk}` : chunk;
    const response = await fetch(`${input.config.telegramApiBase}/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: input.parseMode,
        disable_web_page_preview: true,
      }),
    });

    const body = (await response.json().catch(() => ({}))) as TelegramResponse;
    if (!response.ok || !body.ok) {
      throw new Error(`Telegram sendMessage failed: ${response.status} ${JSON.stringify(body)}`);
    }
  }

  return { messageCount: chunks.length };
}
