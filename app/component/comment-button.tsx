import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faComment as solidCommentIcon } from "@fortawesome/free-solid-svg-icons";
import { faComment as regularCommentIcon } from "@fortawesome/free-regular-svg-icons";

interface Props {
  replies_count: number;
}

export function CommentButton(props: Props) {
  const [comment, setComment] = useState<boolean>(false);
  const [count, setCount] = useState<number>(props.replies_count);

  function toggleComment() {
    setComment((prev) => !prev);
    setCount((c) => (comment ? c - 1 : c + 1));
  }

  return (
    <button
      type="button"
      title="Comment"
      onClick={toggleComment}
      className="group inline-flex items-center gap-2 cursor-pointer"
    >
      <span
        className={[
          "rounded-2xl p-2.5 bg-[#FFFFFF]/70 shadow-sm shadow-gray-200 text-base leading-none transition-transform duration-150 ease-out  group-hover:bg-indigo-100",
          !comment && "group-hover:scale-110",
        ].join(" ")}
      >
        {comment ? (
          <FontAwesomeIcon
            className="text-[#94A3B8] group-hover:text-indigo-600"
            icon={solidCommentIcon}
          />
        ) : (
          <FontAwesomeIcon
            className="text-[#94A3B8] group-hover:text-indigo-600"
            icon={regularCommentIcon}
          />
        )}
      </span>
      <span className="text-[#94A3B8] group-hover:text-indigo-600">
        {count}
      </span>
    </button>
  );
}
