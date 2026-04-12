import type { Route } from "./+types/feed";
import { FeedPage } from "~/feed/feed";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MasClient" },
    {
      name: "description",
      content: "A web client for mastodon social network.",
    },
  ];
}

export default function FeedRoutes() {
  return <FeedPage />;
}
