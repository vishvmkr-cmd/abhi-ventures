"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200/90 dark:border-zinc-800/80">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-emerald-400/15 blur-3xl dark:bg-emerald-500/10" />
        <div className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl dark:bg-cyan-500/10" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-emerald-300/10 blur-3xl dark:bg-emerald-400/5" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400/90"
        >
          Full stack studio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl"
        >
          Turning Ideas Into Powerful Digital Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
        >
          We design, develop, and launch modern websites, full stack apps, and
          payment-ready platforms for growing businesses.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 px-8 py-3 text-sm font-semibold text-zinc-950 shadow-xl shadow-emerald-500/20 transition hover:brightness-110 dark:shadow-emerald-500/25"
          >
            Start Your Project
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white/70 px-8 py-3 text-sm font-semibold text-zinc-900 backdrop-blur transition hover:border-zinc-400 hover:bg-white dark:border-zinc-700 dark:bg-zinc-950/50 dark:text-zinc-100 dark:hover:border-zinc-500 dark:hover:bg-zinc-900/80"
          >
            Explore Services
          </Link>
          <Link
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-sm font-medium text-zinc-600 underline-offset-4 hover:text-emerald-600 hover:underline dark:text-zinc-400 dark:hover:text-emerald-400 sm:ml-2"
          >
            Book a Call →
          </Link>
        </motion.div>
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
          className="mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-3"
        >
          {[
            { label: "Avg. kickoff", value: "72 hrs" },
            { label: "Stack", value: "Modern JS" },
            { label: "Engagement", value: "Fixed / T&M" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-zinc-200/90 bg-white/80 p-4 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:shadow-none"
            >
              <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
                {item.label}
              </dt>
              <dd className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {item.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
