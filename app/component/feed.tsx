import { useEffect, useState } from "react";
import { getStatuses, type Status } from "~/api/mastodon";
import { Post } from "~/component/post";
import { FeedFilter } from "~/component/feed-filter";
import { ServerDropdown } from "~/component/server-dropdown";

export function Feed() {
  const [mastodonStatuses, setMastodonStatuses] = useState<Status[]>([]);

  useEffect(() => {
    getStatuses().then((statuses) => {
      setMastodonStatuses(statuses);
    });
  }, []);

  // useEffect will run when either:
  // 1. The component is mounts, or
  // 2. When any variables or functions in the dependency array are changed or run
  //
  // Note: That if no dependency array is explicitly defined, EVERYTHING is a dependency.
  // Any state changes or function calls will trigger the useEffect hook to run again.
  // If you explicitly define an empty dependency array, it will ONLY run when the component mounts,
  // because nothing else is a dependency, so nothing else will trigger it.

  return (
    <div className="w-xl mx-auto mt-20">
      <div>
        <ServerDropdown />
      </div>
      <h1 className="mt-5 text-6xl font-black text-slate-900 tracking-tighter">
        Your Feed
      </h1>
      <div className="mb-20">
        <FeedFilter />
      </div>
      {mastodonStatuses.map((postData, index) => {
        // The API response (when data is fetch in JSON) turns dates into strings.
        // JavaScript does not automatically turn API dates into Date objects.
        const dateObject = new Date(postData.created_at);
        return (
          <Post
            key={index}
            authorUsername={postData.account.display_name}
            content={postData.content}
            createdAt={dateObject}
            media_attachments={postData.media_attachments}
            avatar={postData.account.avatar}
            username={postData.account.username}
            favourites_count={postData.favourites_count}
            replies_count={postData.replies_count}
            reblogs_count={postData.reblogs_count}
          />
        );
      })}
    </div>
  );
}
