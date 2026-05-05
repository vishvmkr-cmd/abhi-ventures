import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  RevealLabel,
  RevealSlideHeading,
} from "@/components/motion/RevealHeading";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, full stack apps, Stripe & Razorpay payments, API integrations, and UI/UX design by Abhi Ventures.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div>
        <RevealLabel
          text="Services"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400/90"
        />
        <RevealSlideHeading
          text="Engineering that ships"
          from="left"
          className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl"
          as="h1"
        />
        <FadeIn
          delay={0.1}
          className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
        >
          Fixed-scope projects or ongoing retainers—clear milestones, visible
          progress, and documentation your team can own.
        </FadeIn>
      </div>

      <div className="mt-16 space-y-16">
        {services.map((s, i) => (
          <FadeIn key={s.slug} delay={i * 0.04}>
            <article
              id={s.slug}
              className="scroll-mt-28 rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-lg shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900/35 dark:shadow-black/20 sm:p-10"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    {s.description}
                  </p>
                </div>
                {s.pricingFrom && (
                  <span className="shrink-0 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:border-emerald-500/30 dark:text-emerald-300">
                    {s.pricingFrom}
                  </span>
                )}
              </div>
              <h3 className="mt-8 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
                Key features
              </h3>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700 dark:border-zinc-800/80 dark:bg-zinc-950/50 dark:text-zinc-300"
                  >
                    <span className="mt-0.5 text-emerald-600 dark:text-emerald-400">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-md shadow-emerald-500/20 transition hover:brightness-110 dark:shadow-emerald-500/20"
                >
                  Discuss {s.title}
                </Link>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
