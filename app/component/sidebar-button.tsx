import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";

interface Props {
  path: string;
  label: string;
  icon: IconProp;
}

export function SidebarButton(props: Props) {
  return (
    <NavLink to={props.path}>
      {({ isActive }) => (
        <div
          className={`uppercase text-[11px] font-bold tracking-[0.2em] rounded-2xl p-3  transition-colors duration-150 ${isActive ? "bg-indigo-50 dark:bg-indigo-900/30 dark:border dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-2xl p-3.5" : "text-slate-400 hover:text-slate-600"}`}
        >
          <FontAwesomeIcon icon={props.icon} className="mr-3" />
          <span>{props.label}</span>
        </div>
      )}
    </NavLink>
  );
}
