import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeartIcon } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeartIcon } from "@fortawesome/free-regular-svg-icons";

interface Props {
  favourites_count: number;
}

export function LikeButton(props: Props) {
  const [liked, setLiked] = useState<boolean>(false);
  const [count, setCount] = useState<number>(props.favourites_count);

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
      title="Like"
      onClick={toggleLike}
      className="group inline-flex items-center gap-2 text-base cursor-pointer"
    >
      <span
        className={
          "rounded-2xl p-2.5 bg-[#FFFFFF]/70 shadow-sm shadow-gray-200 group-hover:scale-110 transition-transform duration-150 active:scale-90 group-hover:bg-indigo-100"
        }
      >
        {liked ? (
          <FontAwesomeIcon
            className="text-indigo-500 group-hover:text-indigo-600"
            icon={solidHeartIcon}
          />
        ) : (
          <FontAwesomeIcon
            className="text-[#94A3B8] group-hover:text-indigo-600"
            icon={regularHeartIcon}
          />
        )}
      </span>
      <span className="text-[#94A3B8] group-hover:text-indigo-600">
        {count}
      </span>
    </button>
  );
}
