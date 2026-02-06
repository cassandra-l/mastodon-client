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
    <div className="bg-white/70 border border-white/50 dark:bg-slate-900/70 dark:border-white/5 backdrop-blur-3xl mb-10 rounded-[40px] p-8 hover:-translate-y-2 transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-[#6366F1]/30 dark:hover:shadow-[#6366F1]/10 cursor-pointer">
      <div className="py-2 flex justify-between items-center">
        <div className="flex justify-between items-center">
          <img className="rounded-full w-15 mr-2" src={props.avatar} />
          <div className="flex flex-col p-2">
            <div className="font-bold">{props.authorUsername}</div>
            <div className="text-[#6366F1] dark:text-[#6366F1]/60 text-xs font-bold uppercase">
              @{props.username}
            </div>
          </div>
        </div>
        <div className="italic text-[#94A3B8] text-xs font-bold bg-[#000000]/5 px-3 py-1 rounded-full dark:text-slate-500 dark:bg-slate-800/50 border border-slate-100 dark:border-white/5">
          {timeAgo(props.createdAt)}
        </div>
      </div>
      <div
        className="wrap-break-word [&_p]:mb-3 [&_a]:text-[#6366F1] dark:[&_a]:text-[#6366F1]/60 [&_a:hover]:underline dark:text-slate-300"
        dangerouslySetInnerHTML={{ __html: props.content }}
      ></div>
      <MediaCarousel attachments={props.media_attachments} />
      <div className="mt-7 border-t-[0.5px] border-gray-300 dark:border-white/8"></div>
      <div className="mt-6 flex justify-between gap-4">
        <LikeButton favourites_count={props.favourites_count} />
        <CommentButton replies_count={props.replies_count} />
        <ReblogButton reblogs_count={props.reblogs_count} />
        <BookmarkButton />
      </div>
    </div>
  );
}
