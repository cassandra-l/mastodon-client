import { useEffect, useState } from "react";
import { getTrendingTags, type Tag } from "~/api/mastodon";

export function RightSidebar() {
  const [trendingTags, setTrendingTags] = useState<Tag[]>([]);

  useEffect(() => {
    getTrendingTags().then((tags) => {
      setTrendingTags(tags);
    });
  }, []);
  return (
    <aside className="sticky top-20 h-screen pt-7 flex flex-col gap-6 w-67">
      <div className="text-[10px] backdrop-blur-3xl bg-white/60 dark:bg-slate-900/70 border border-indigo-100 dark:border-indigo-500/20 rounded-3xl p-8">
        <div className="text-[11px] uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] font-black mb-6">
          Profile Identity
        </div>
        <div className="uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 mb-2">
          Access your Fediverse
        </div>
        <div className="flex flex-col gap-3">
          <button className="w-full flex items-center justify-center uppercase font-black tracking-[0.2em] bg-indigo-50/50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-xl py-4 px-6 cursor-pointer hover:bg-indigo-100 dark:hover:bg-indigo-900/40 hover:scale-105 active:scale-90 transition-transform duration-300">
            Create an Account
          </button>
          <button className="w-full flex items-center justify-center uppercase font-black tracking-[0.2em] bg-linear-to-br from-indigo-500 to-violet-500 dark:bg-linear-to-br dark:from-indigo-500/70 dark:to-violet-500/70 py-4 px-6 rounded-xl text-white shadow-lg shadow-indigo-500/20 cursor-pointer hover:scale-105 active:scale-90 transition-transform duration-300">
            Log In to instance
          </button>
        </div>
      </div>
      <div className="text-[11px] backdrop-blur-3xl bg-white/60 dark:bg-slate-900/70 border border-indigo-100 dark:border-indigo-500/20 rounded-3xl p-8">
        <div className="uppercase text-slate-400 dark:text-slate-500 tracking-[0.2em] font-black mb-6">
          Trending tags
        </div>
        {trendingTags.map((tag) => {
          return (
            <div className="mt-3 truncate text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-300 cursor-pointer hover:underline">
              <a href={`/tags/${tag.name}`}>#{tag.name}</a>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
