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

function buildPageUrl(config: RingfenceConfig, page: number): string {
  const url = new URL(config.forumLatestUrl);
  if (page > 0) {
    url.searchParams.set("page", page.toString());
  }
  return url.toString();
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
