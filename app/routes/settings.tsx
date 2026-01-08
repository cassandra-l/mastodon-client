import type { Route } from "./+types/settings";
import { SettingsPage } from "../settings/settings";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Settings" },
    {
      name: "description",
      content: "This is the page where you adjust your account settings",
    },
  ];
}

export default function SettingsRoute() {
  return <SettingsPage />;
}
