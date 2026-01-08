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
      className="inline-flex items-center gap-2 text-base"
    >
      <span
        className={
          "rounded-2xl p-2.5 bg-[#FFFFFF]/70 shadow-sm shadow-gray-200 hover:scale-110 transition-transform duration-150 active:scale-90"
        }
      >
        {bookmarked ? (
          <FontAwesomeIcon
            className="text-purple-500"
            icon={solidBookmarkIcon}
          />
        ) : (
          <FontAwesomeIcon
            className="text-[#94A3B8]"
            icon={regularBookmarkIcon}
          />
        )}
      </span>
    </button>
  );
}
