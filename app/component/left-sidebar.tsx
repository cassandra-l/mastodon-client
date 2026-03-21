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
    <aside className="sticky top-0 h-screen pl-8 pt-24 pr-8 bg-white/60 border dark:bg-slate-900/70 border-white/40 dark:border-white/5 backdrop-blur-3xl">
      <h2 className="flex gap-2 items-center mb-7">
        <span className="flex items-center justify-center text-white font-black w-12 h-12 text-2xl italic rounded-2xl bg-linear-to-br from-indigo-500 to-violet-500 dark:bg-linear-to-br dark:from-indigo-500/70 dark:to-violet-500/70">
          M
        </span>
        <span className="font-bold italic text-2xl dark:text-slate-200 tracking-tight">
          Mas Client
        </span>
      </h2>

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
