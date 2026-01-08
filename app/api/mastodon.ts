export type Visibility = "public" | "unlisted" | "private" | "direct"; // observed: "public"

// Core types
export interface Status {
  id: string;
  created_at: string;

  in_reply_to_id: string | null;
  in_reply_to_account_id: string | null;

  sensitive: boolean;
  spoiler_text: string;
  visibility: Visibility;
  language: string | null; // observed: "en"

  uri: string;
  url: string;

  replies_count: number;
  reblogs_count: number;
  favourites_count: number;
  quotes_count: number;

  edited_at: Date | null;

  content: string;

  reblog: Status | null; // observed: null

  account: Account;

  media_attachments: MediaAttachment[];

  mentions: Mention[];
  tags: Tag[];
  emojis: Emoji[];

  quote: Status | null; // observed: null
  card: Card | null;
  poll: Poll | null;

  quote_approval: QuoteApproval;
  application?: Application; // present on some statuses
}

export interface Account {
  id: string;
  username: string;
  acct: string;

  display_name: string;

  locked: boolean;
  bot: boolean;
  discoverable: boolean;
  indexable: boolean;
  group: boolean;

  created_at: Date;

  note: string;

  url: string;
  uri: string;

  avatar: string;
  avatar_static: string;

  header: string;
  header_static: string;

  followers_count: number;
  following_count: number;
  statuses_count: number;

  last_status_at: string | null; // observed: "2026-01-02" (date-only)

  hide_collections: boolean | null; // observed: boolean, and null

  noindex?: boolean; // present on some accounts

  emojis: Emoji[];

  fields: Field[];
  roles?: Role[]; // observed: [] on some accounts
}

export interface Field {
  name: string;
  value: string; // HTML string
  verified_at: Date | null;
}

export interface Emoji {
  shortcode: string;
  url: string;
  static_url: string;
  visible_in_picker: boolean;
}

export interface MediaAttachment {
  id: string;
  type: "image" | "video" | "gifv" | "audio" | "unknown"; // observed: "image"

  url: string;
  preview_url: string;

  remote_url: string | null;
  preview_remote_url: string | null;

  text_url: string | null;

  meta: MediaMeta | null;

  description: string | null;
  blurhash: string | null;
}

export interface MediaMeta {
  original?: MediaVariant;
  small?: MediaVariant;
  focus?: MediaFocus;
}

export interface MediaVariant {
  width: number;
  height: number;
  size: string; // e.g. "522x720"
  aspect: number;
}

export interface MediaFocus {
  x: number;
  y: number;
}

export interface Mention {
  // Not present in sample; keeping minimal/compatible.
  id?: string;
  username?: string;
  url?: string;
  acct?: string;
}

export interface Tag {
  name: string;
  url: string;
}

export interface Card {
  url: string;
  title: string;
  description: string;
  language: string | null;

  type: "link" | "photo" | "video" | "rich";
  author_name: string;
  author_url: string;

  provider_name: string;
  provider_url: string;

  html: string;
  width: number;
  height: number;

  image: string | null;
  image_description: string;
  embed_url: string;
  blurhash: string | null;

  published_at: Date | null;
  authors: CardAuthor[];
}

export interface CardAuthor {
  name?: string;
  url?: string;
  account?: Account;
}

export interface Poll {
  // Not present in sample; placeholder for compatibility.
  id: string;
}

export interface QuoteApproval {
  automatic: string[]; // observed: ["public"], ["followers"], or []
  manual: string[]; // observed: []
  current_user: "denied" | "approved" | "pending" | string; // observed: "denied"
}

export interface Application {
  name: string;
  website: string | null;
}

export interface Role {
  // Not present with shape in sample; placeholder.
  name?: string;
}

export async function getStatuses(): Promise<Status[]> {
  const response = await fetch(
    "https://mastodon.social/api/v1/trends/statuses"
  );
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const result = (await response.json()) as Status[];
  return result;
}
