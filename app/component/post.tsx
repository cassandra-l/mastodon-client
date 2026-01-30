import type { JSX } from "react";
import type { MediaAttachment } from "~/api/mastodon";
import { timeAgo } from "~/component/timestamp";
import { MediaCarousel } from "~/component/carousel";
import { CommentButton } from "~/component/comment-button";
import { ReblogButton } from "~/component/reblog-button";
import { BookmarkButton } from "~/component/bookmark-button";
import { LikeButton } from "~/component/like-button";

interface Props {
  authorUsername: string;
  content: string;
  createdAt: Date;
  media_attachments: MediaAttachment[];
  avatar: string;
  username: string;
  favourites_count: number;
  replies_count: number;
  reblogs_count: number;
}

export function Post(props: Props): JSX.Element {
  return (
    <div className="mb-10 rounded-[40px] p-8 bg-[#FFFFFF]/70 border border-[#FFFFFF]/50 hover:-translate-y-2 transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-[#6366F1]/30 cursor-pointer">
      <div className="py-2 flex justify-between items-center">
        <div className="flex justify-between items-center">
          <img className="rounded-full w-15 mr-2" src={props.avatar} />
          <div className="flex flex-col p-2">
            <div className="font-bold">{props.authorUsername}</div>
            <div className="text-[#6366F1]/75 text-xs font-bold uppercase">
              @{props.username}
            </div>
          </div>
        </div>
        <div className="italic text-[#94A3B8] text-xs font-bold bg-[#000000]/5 px-3 py-1 rounded-full">
          {timeAgo(props.createdAt)}
        </div>
      </div>
      <div
        className="wrap-break-word [&_p]:mb-3 [&_a]:text-[#6366F1]/75 [&_a:hover]:underline"
        dangerouslySetInnerHTML={{ __html: props.content }}
      ></div>
      <MediaCarousel attachments={props.media_attachments} />
      <div className="mt-7 border-t-[0.5px] border-gray-300"></div>
      <div className="mt-6 flex justify-between gap-4">
        <LikeButton favourites_count={props.favourites_count} />
        <CommentButton replies_count={props.replies_count} />
        <ReblogButton reblogs_count={props.reblogs_count} />
        <BookmarkButton />
      </div>
    </div>
  );
}
