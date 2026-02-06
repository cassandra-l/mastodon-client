import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: IconProp;
  label: string;
  isActive: boolean;
  clickHandler: () => void;
}

export function FeedFilterButton(props: Props) {
  return (
    <button
      onClick={() => props.clickHandler()}
      className="relative flex-1 flex items-center justify-center gap-2 py-3 transition-all duration-500 ease-in-out cursor-pointer group hover:scale-105"
    >
      <FontAwesomeIcon
        icon={props.icon}
        className={
          props.isActive
            ? "text-indigo-600 dark:text-indigo-400"
            : "text-[#94A3B8] dark:text-slate-500 group-hover:text-[#475569] dark:group-hover:text-white/60"
        }
      />
      <span
        className={`text-[10px] font-black tracking-widest uppercase ${
          props.isActive
            ? "text-indigo-700 dark:text-indigo-400"
            : "text-[#94A3B8] dark:text-slate-500 group-hover:text-[#475569]  dark:group-hover:text-white/60"
        }`}
      >
        {props.label}
      </span>
    </button>
  );
}
