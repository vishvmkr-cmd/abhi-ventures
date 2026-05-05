"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ChatbotPlaceholder() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            className="w-[min(100vw-3rem,320px)] rounded-2xl border border-zinc-200 bg-white/95 p-4 shadow-2xl shadow-zinc-900/10 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/95 dark:shadow-black/40"
          >
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Assistant
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Live chat is coming soon. For now, book a call or send your
              project details via the contact form—we respond within one
              business day.
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-3 text-xs font-medium text-emerald-600 hover:underline dark:text-emerald-400"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 text-zinc-950 shadow-lg shadow-emerald-500/25 transition hover:brightness-110 dark:shadow-emerald-500/30"
        aria-label="Open chat assistant placeholder"
      >
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
      </button>
    </div>
  );
}
