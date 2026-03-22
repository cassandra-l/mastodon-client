import { createPortal } from "react-dom";

interface PopUpProps {
  onClose: () => void;
}

export function PopUp({ onClose }: PopUpProps) {
  const modalContent = (
    <div className="fixed inset-0 z-9999 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-3xl"
        onClick={onClose}
      />

      {/*  Card */}
      <div className="relative backdrop-blur-2xl bg-white/80 dark:bg-slate-900 border border-white/80 dark:border-white/5 rounded-[40px] p-10 max-w-md w-full shadow-2xl flex flex-col items-center text-center">
        {/* Logo */}
        <div className="flex items-center justify-center text-white font-black w-16 h-16 text-3xl italic rounded-2xl bg-linear-to-br from-indigo-500 to-violet-500 mb-6 shadow-lg shadow-indigo-500/40">
          M
        </div>

        <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-2 tracking-tight">
          Sign in to continue
        </h2>

        <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium">
          Oops! Please sign into your account to interact with posts.
        </p>

        <div className="w-full space-y-4">
          {/* Input Box*/}
          <div className="relative">
            <input
              type="text"
              placeholder="Enter mastodon server address"
              className="w-full p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-400"
            />
          </div>

          <button className="w-full bg-linear-to-br from-indigo-500 to-violet-500 py-4 rounded-2xl text-white font-black tracking-widest uppercase text-sm shadow-lg shadow-indigo-500/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer">
            Sign In
          </button>
        </div>

        {/* Create Account */}
        <div className="mt-8 flex flex-col">
          <span className="text-slate-500 text-sm dark:text-slate-400 pr-1">
            Don't have an account?
          </span>
          <a
            href="https://joinmastodon.org/servers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-indigo-600 dark:text-indigo-400 font-bold hover:underline cursor-pointer"
          >
            Pick a server and register one.
          </a>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="mt-6 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors uppercase tracking-widest font-bold cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
