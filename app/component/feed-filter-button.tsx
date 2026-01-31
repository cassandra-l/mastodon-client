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
      className="relative flex-1 flex items-center justify-center gap-2 py-3 transition-colors duration-300 cursor-pointer group"
    >
      <FontAwesomeIcon
        icon={props.icon}
        className={
          props.isActive
            ? "text-indigo-600"
            : "text-[#94A3B8] group-hover:text-[#475569]"
        }
      />
      <span
        className={`text-[10px] font-black tracking-widest uppercase ${
          props.isActive
            ? "text-indigo-700"
            : "text-[#94A3B8] group-hover:text-[#475569]"
        }`}
      >
        {props.label}
      </span>
    </button>
  );
}
