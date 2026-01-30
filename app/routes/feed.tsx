import type { Route } from "./+types/feed";
import { FeedPage } from "~/feed/feed";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mastodon posts" },
    { name: "description", content: "Mastodon posts!" },
  ];
}

export default function FeedRoutes() {
  return <FeedPage />;
}
