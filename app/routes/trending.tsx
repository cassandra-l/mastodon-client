import type { Route } from "./+types/trending";
import { TrendingPage } from "~/trending/trending";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Trending Mastodon posts" },
    { name: "description", content: "Trending Mastodon posts!" },
  ];
}

export default function Trending() {
  return <TrendingPage />;
}
