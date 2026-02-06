import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBookmark as regularBookmarkIcon } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as solidBookmarkIcon } from "@fortawesome/free-solid-svg-icons";

export function BookmarkButton() {
  const [bookmarked, setBookmarked] = useState<boolean>(false);

  function toggleBookmarked() {
    setBookmarked((previous) => {
      return !previous;
    });
  }

  return (
    <button
      title="Bookmark"
      onClick={toggleBookmarked}
      className="group inline-flex items-center gap-2 text-base cursor-pointer"
    >
      <span
        className={`
          rounded-2xl p-2.5 shadow-sm shadow-gray-200 dark:shadow-none hover:scale-110 transition-transform duration-150 active:scale-90 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30
        ${
          bookmarked
            ? "bg-indigo-100 dark:bg-indigo-900/30"
            : "bg-white/70 dark:bg-slate-800/50"
        }`}
      >
        {bookmarked ? (
          <FontAwesomeIcon
            className="text-indigo-600 group-hover:text-indigo-600"
            icon={solidBookmarkIcon}
          />
        ) : (
          <FontAwesomeIcon
            className="text-[#94A3B8] group-hover:text-indigo-600"
            icon={regularBookmarkIcon}
          />
        )}
      </span>
    </button>
  );
}
