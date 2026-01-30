import { useState } from "react";

export function ServerDropdown() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [server, setServer] = useState("mastodon.social");

  return (
    // Compact Pill
    <div className="flex items-center bg-slate-100/50 backdrop-blur-2xl border border-white/40 shadow-sm rounded-full p-1 w-fit">
      <span className="relative bg-emerald-500 rounded-full h-2 w-2 m-3">
        <span className="absolute animate-ping rounded-full h-2 w-2 bg-emerald-400"></span>
      </span>
      <p className="text-[11px] font-black text-[#94A3B8] uppercase tracking-wider">
        Connected:
        <span className="text-indigo-600"> mastodon.social</span>
      </p>
    </div>
  );
}
