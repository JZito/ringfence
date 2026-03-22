import type {
  DiffbotDiscussionRequest,
  GeminiChatRequest,
  LocusBalanceResponse,
  LocusCallResponse,
  LocusPendingApproval,
  RingfenceConfig,
  WrappedCatalogResponse,
} from "./types.js";

function requireLocusApiKey(config: RingfenceConfig): string {
  if (!config.locusApiKey) {
    throw new Error("LOCUS_API_KEY is required for Locus actions");
  }

  return config.locusApiKey;
}

async function locusFetch<T>(
  config: RingfenceConfig,
  path: string,
  init: RequestInit = {},
): Promise<{ status: number; body: T }> {
  const response = await fetch(`${config.locusApiBase}${path}`, {
    ...init,
    headers: {
      authorization: `Bearer ${requireLocusApiKey(config)}`,
      accept: "application/json",
      "content-type": "application/json",
      ...(init.headers ?? {}),
    },
  });

  const body = (await response.json().catch(() => ({}))) as T;
  return { status: response.status, body };
}

export async function getLocusBalance(config: RingfenceConfig): Promise<LocusBalanceResponse> {
  const response = await locusFetch<LocusBalanceResponse>(config, "/pay/balance", { method: "GET" });
  if (response.status !== 200 || !response.body.success) {
    throw new Error(`Failed to read Locus balance: ${JSON.stringify(response.body)}`);
  }

  return response.body;
}

export async function getWrappedCatalog(config: RingfenceConfig): Promise<WrappedCatalogResponse> {
  const response = await locusFetch<WrappedCatalogResponse>(config, "/wrapped", { method: "GET" });
  if (response.status !== 200 || !response.body.success) {
    throw new Error(`Failed to read Locus catalog: ${JSON.stringify(response.body)}`);
  }

  return response.body;
}

export async function callDiffbotDiscussion(config: RingfenceConfig, input: DiffbotDiscussionRequest) {
  return locusFetch<LocusCallResponse>(config, "/wrapped/diffbot/discussion", {
    method: "POST",
    body: JSON.stringify({
      discussion: true,
      paging: true,
      maxPages: 3,
      fields: "links,meta",
      timeout: 30_000,
      ...input,
    }),
  });
}

export async function callGeminiChat(config: RingfenceConfig, input: GeminiChatRequest) {
  return locusFetch<LocusCallResponse>(config, "/wrapped/gemini/chat", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function getPendingApproval(response: {
  status: number;
  body: LocusCallResponse;
}): LocusPendingApproval | undefined {
  const data = response.body.data;
  if (
    response.status === 202 &&
    data &&
    typeof data === "object" &&
    "pending_approval_id" in data &&
    "approval_url" in data
  ) {
    return data as LocusPendingApproval;
  }

  return undefined;
}
