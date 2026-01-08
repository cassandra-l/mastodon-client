import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faRetweet } from "@fortawesome/free-solid-svg-icons";

interface Props {
  reblogs_count: number;
}

export function ReblogButton(props: Props) {
  const [liked, setLiked] = useState<boolean>(false);
  const [count, setCount] = useState<number>(props.reblogs_count);

  function toggleLike() {
    setLiked((previous) => {
      return !previous;
    });

    setCount((previous_count) => {
      if (liked) {
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
      className="inline-flex items-center gap-2 text-base"
    >
      <span
        className={
          "rounded-2xl p-2.5 bg-[#FFFFFF]/70 shadow-sm shadow-gray-200 hover:scale-110 transition-transform duration-150 active:scale-90"
        }
      >
        {liked ? (
          <FontAwesomeIcon className="text-purple-500" icon={faRetweet} />
        ) : (
          <FontAwesomeIcon className="text-[#94A3B8]" icon={faRetweet} />
        )}
      </span>
      <span className="text-[#94A3B8]">{count}</span>
    </button>
  );
}
