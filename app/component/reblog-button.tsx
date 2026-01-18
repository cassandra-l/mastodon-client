import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faRetweet } from "@fortawesome/free-solid-svg-icons";

interface Props {
  reblogs_count: number;
}

export function ReblogButton(props: Props) {
  const [reblog, setReblog] = useState<boolean>(false);
  const [count, setCount] = useState<number>(props.reblogs_count);

  function toggleLike() {
    setReblog((previous) => {
      return !previous;
    });

    setCount((previous_count) => {
      if (reblog) {
        return previous_count - 1;
      } else {
        return previous_count + 1;
      }
    });
  }

  return (
    <button
      type="button"
      title="Reblog"
      onClick={toggleLike}
      className="group inline-flex items-center gap-2 text-base cursor-pointer"
    >
      <span
        className={
          "rounded-2xl p-2.5 bg-[#FFFFFF]/70 shadow-sm shadow-gray-200 group-hover:scale-110 transition-transform duration-150 active:scale-90 group-hover:bg-indigo-100"
        }
      >
        {reblog ? (
          <FontAwesomeIcon
            className="text-indigo-600 group-hover:text-indigo-600"
            icon={faRetweet}
          />
        ) : (
          <FontAwesomeIcon
            className="text-[#94A3B8] group-hover:text-indigo-600"
            icon={faRetweet}
          />
        )}
      </span>
      <span className="text-[#94A3B8] group-hover:text-indigo-600">
        {count}
      </span>
    </button>
  );
}
