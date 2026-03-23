import type { ForumTopicRecord, RingfenceConfig } from "./types.js";

interface ForumTopicPayload {
  id: number;
  title: string;
  slug: string;
  created_at: string;
  last_posted_at: string;
  highest_post_number: number;
  posts_count: number;
  reply_count: number;
  like_count: number;
  views: number;
  category_id?: number;
  excerpt?: string;
}

interface ForumLatestPayload {
  topic_list?: {
    topics?: ForumTopicPayload[];
  };
}

interface ForumTopicPostPayload {
  username: string;
  name?: string;
  created_at: string;
  updated_at?: string;
  cooked: string;
  post_number: number;
  reply_to_post_number?: number | null;
  reads?: number;
  reply_count?: number;
  quote_count?: number;
}

interface ForumRelatedTopicPayload {
  id: number;
  title: string;
  slug: string;
  last_posted_at: string;
  highest_post_number: number;
  reply_count: number;
  like_count: number;
  views: number;
}

interface ForumTopicDetailPayload extends ForumTopicPayload {
  post_stream?: {
    posts?: ForumTopicPostPayload[];
  };
  related_topics?: ForumRelatedTopicPayload[];
}

function buildPageUrl(config: RingfenceConfig, page: number): string {
  const url = new URL(config.forumLatestUrl);
  if (page > 0) {
    url.searchParams.set("page", page.toString());
  }
  return url.toString();
}

function buildTopicJsonUrl(config: RingfenceConfig, topic: ForumTopicRecord): string {
  return new URL(`/t/${topic.slug}/${topic.topicId}.json`, config.forumBaseUrl).toString();
}

function normalizeTopic(config: RingfenceConfig, topic: ForumTopicPayload): ForumTopicRecord {
  return {
    topicId: topic.id,
    title: topic.title,
    slug: topic.slug,
    url: `${config.forumBaseUrl}/t/${topic.slug}/${topic.id}`,
    createdAt: topic.created_at,
    lastPostedAt: topic.last_posted_at,
    highestPostNumber: topic.highest_post_number,
    postsCount: topic.posts_count,
    replyCount: topic.reply_count,
    likeCount: topic.like_count,
    views: topic.views,
    categoryId: topic.category_id,
    excerpt: topic.excerpt,
  };
}

function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex: string) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, decimal: string) => String.fromCodePoint(parseInt(decimal, 10)))
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'");
}

function htmlToText(value: string): string {
  return decodeHtmlEntities(value)
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<li>/gi, "- ")
    .replace(/<\/li>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n[ \t]+/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export async function fetchLatestForumTopics(config: RingfenceConfig): Promise<ForumTopicRecord[]> {
  const deduped = new Map<number, ForumTopicRecord>();

  for (let page = 0; page < config.monitorDiscoveryMaxPages; page += 1) {
    const response = await fetch(buildPageUrl(config, page), {
      headers: { accept: "application/json" },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch ${config.forumLatestUrl}: ${response.status}`);
    }

    const payload = (await response.json()) as ForumLatestPayload;
    const topics = payload.topic_list?.topics ?? [];
    for (const topic of topics) {
      deduped.set(topic.id, normalizeTopic(config, topic));
    }
  }

  return [...deduped.values()].sort((left, right) => right.lastPostedAt.localeCompare(left.lastPostedAt));
}

export async function fetchForumTopicDiscussion(config: RingfenceConfig, topic: ForumTopicRecord): Promise<Record<string, unknown>> {
  const topicJsonUrl = buildTopicJsonUrl(config, topic);
  const response = await fetch(topicJsonUrl, {
    headers: { accept: "application/json" },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${topicJsonUrl}: ${response.status}`);
  }

  const payload = (await response.json()) as ForumTopicDetailPayload;
  return {
    source: "forum_json_fallback",
    topic: normalizeTopic(config, payload),
    posts: (payload.post_stream?.posts ?? []).map((post) => ({
      postNumber: post.post_number,
      author: post.username,
      displayName: post.name || undefined,
      createdAt: post.created_at,
      updatedAt: post.updated_at ?? post.created_at,
      replyToPostNumber: post.reply_to_post_number ?? undefined,
      reads: post.reads,
      replyCount: post.reply_count,
      quoteCount: post.quote_count,
      html: post.cooked,
      text: htmlToText(post.cooked),
    })),
    relatedTopics: (payload.related_topics ?? []).slice(0, 5).map((related) => ({
      topicId: related.id,
      title: related.title,
      url: `${config.forumBaseUrl}/t/${related.slug}/${related.id}`,
      lastPostedAt: related.last_posted_at,
      highestPostNumber: related.highest_post_number,
      replyCount: related.reply_count,
      likeCount: related.like_count,
      views: related.views,
    })),
  };
}
