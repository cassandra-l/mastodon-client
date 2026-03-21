import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faLocationDot,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import { FeedFilterButton } from "./feed-filter-button";

export function FeedFilter() {
  const [filter, setFilter] = useState("Federated");

  return (
    <div className="pt-10 flex flex-col gap-10">
      <div>
        {/* <h2 className="text-[11px] font-bold tracking-[0.2em] text-[#94A3B8] uppercase mb-4">
          Filter Timeline
        </h2> */}

        {/* Grey Container */}
        <div className="relative flex p-1.5 bg-slate-100/50 dark:bg-slate-900/40 backdrop-blur-2xl rounded-full border border-white/40 dark:border-white/5 shadow-sm">
          {/* Sliding Pill*/}
          <div
            className={`absolute top-1.5 bottom-1.5 left-1.5 w-[calc(33.3333%-4px)] bg-white dark:bg-slate-800 dark:border dark:border-white/10 rounded-full shadow-sm transition-transform duration-300 ease-in-out ${
              filter === "Local"
                ? "translate-x-full"
                : filter === "Trending"
                  ? "translate-x-[200%]"
                  : "translate-x-0"
            }`}
          />
          <FeedFilterButton
            icon={faGlobe}
            label="Federated"
            isActive={filter === "Federated"}
            clickHandler={() => setFilter("Federated")}
          />

          <FeedFilterButton
            icon={faLocationDot}
            label="Local"
            isActive={filter === "Local"}
            clickHandler={() => setFilter("Local")}
          />

          <FeedFilterButton
            icon={faFire}
            label="Trending"
            isActive={filter === "Trending"}
            clickHandler={() => setFilter("Trending")}
          />
        </div>
      </div>
    </div>
  );
}
