import {
  faBell,
  faCog,
  faFire,
  faNewspaper,
  faMagnifyingGlass,
  faEnvelopeOpen,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import { SidebarButton } from "./sidebar-button";

export function LeftSidebar() {
  return (
    <aside className="sticky top-0 h-screen pl-8 pt-20 pr-8 bg-white border border-white/40">
      <h2 className="mb-6 font-bold italic text-2xl">Mastodon Client</h2>

      <nav className="flex flex-col gap-4">
        <SidebarButton label="Feed" path="/" icon={faNewspaper} />
        <SidebarButton label="Search" path="/search" icon={faMagnifyingGlass} />
        <SidebarButton
          label="Notifications"
          path="/notifications"
          icon={faBell}
        />
        <SidebarButton label="Create" path="/create" icon={faPlus} />
        <SidebarButton label="Settings" path="/settings" icon={faCog} />
      </nav>
    </aside>
  );
}
