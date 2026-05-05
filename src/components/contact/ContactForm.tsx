"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";

const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim();

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const details = String(fd.get("details") ?? "").trim();

    if (!name || !email || !details) {
      setStatus("error");
      setMessage("Please fill in all fields.");
      return;
    }

    setStatus("loading");
    setMessage("");

    const payload = { name, email, details };

    try {
      if (contactEndpoint) {
        const res = await fetch(contactEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const data = (await res.json().catch(() => ({}))) as {
            error?: string;
          };
          setStatus("error");
          setMessage(
            data.error ??
              "Could not send your message. Try email or try again later.",
          );
          return;
        }

        setStatus("success");
        setMessage("Thanks—we will get back to you shortly.");
        form.reset();
        return;
      }

      const subject = encodeURIComponent(`Project inquiry from ${name}`);
      const body = encodeURIComponent(
        `${details}\n\n—\nReply to: ${email}`,
      );
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      setMessage(
        "Opening your email app. If nothing opens, email us directly.",
      );
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please email us directly.");
    }
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none ring-emerald-500/30 transition placeholder:text-zinc-400 focus:border-emerald-500/60 focus:ring-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:ring-emerald-500/40 dark:focus:border-emerald-500/50";

  return (
    <motion.form
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-xl shadow-zinc-900/5 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/40 dark:shadow-black/30 sm:p-8"
    >
      <div>
        <label
          htmlFor="name"
          className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-500"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className={inputClass}
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-500"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={inputClass}
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label
          htmlFor="details"
          className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-500"
        >
          Project details
        </label>
        <textarea
          id="details"
          name="details"
          required
          rows={5}
          className={`${inputClass} resize-y`}
          placeholder="Goals, timeline, budget range, links—anything that helps us respond with clarity."
        />
      </div>
      {message && (
        <p
          className={`text-sm ${
            status === "success"
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-red-600 dark:text-red-400"
          }`}
          role="status"
        >
          {message}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20 transition enabled:hover:brightness-110 disabled:opacity-60 dark:shadow-emerald-500/25"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </motion.form>
  );
}
