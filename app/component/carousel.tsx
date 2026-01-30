import { useState } from "react";
import type { MediaAttachment } from "~/api/mastodon";

interface Props {
  attachments: MediaAttachment[];
}

export function MediaCarousel(props: Props) {
  const images = props.attachments.filter(
    (a) => a.type === "image" || a.type === "gifv",
  );

  const [index, setIndex] = useState<number>(0);
  const total = images.length;

  if (total === 0) return null;

  return (
    <div className="relative mt-3 overflow-hidden rounded-2xl aspect-square bg-black">
      <img
        src={images[index].url}
        className="h-full w-full object-cover ease-in-out hover:scale-105 transition-transform duration-700"
      />

      {index > 0 && (
        <button
          onClick={() => setIndex(index - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-2 py-1 text-white"
        >
          ‹
        </button>
      )}

      {index < total - 1 && (
        <button
          onClick={() => setIndex(index + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-2 py-1 text-white"
        >
          ›
        </button>
      )}

      {total > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-[#000000]/5 p-2.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={[
                "h-2 w-2 rounded-full",
                i === index ? "bg-white" : "bg-white/40",
              ].join(" ")}
            />
          ))}
        </div>
      )}
    </div>
  );
}
