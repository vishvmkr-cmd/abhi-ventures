import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  RevealLabel,
  RevealWordsHeading,
} from "@/components/motion/RevealHeading";
import { services } from "@/lib/data/services";

const preview = services.slice(0, 3);

export function ServicesPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div>
        <RevealLabel
          text="What we ship"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400/90"
        />
        <RevealWordsHeading
          text="Services built for revenue and reliability"
          className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
          as="h2"
        />
        <FadeIn
          delay={0.12}
          className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400"
        >
          From marketing sites to payments and APIs—one partner for the full
          stack, with engineering discipline at the core.
        </FadeIn>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {preview.map((s, i) => (
          <FadeIn key={s.slug} delay={i * 0.08}>
            <article className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white/80 p-6 shadow-lg shadow-zinc-900/5 transition hover:border-emerald-400/40 hover:shadow-emerald-500/10 dark:border-zinc-800 dark:bg-zinc-900/40 dark:shadow-black/20 dark:hover:border-emerald-500/30 dark:hover:shadow-emerald-500/5">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {s.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {s.short}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-500">
                {s.features.slice(0, 2).map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 dark:bg-emerald-400/80" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/services#${s.slug}`}
                className="mt-6 inline-flex text-sm font-semibold text-emerald-600 transition group-hover:translate-x-0.5 dark:text-emerald-400"
              >
                View details →
              </Link>
            </article>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.15} className="mt-10 text-center">
        <Link
          href="/services"
          className="inline-flex rounded-full border border-zinc-300 px-6 py-2.5 text-sm font-medium text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:text-white"
        >
          View all services
        </Link>
      </FadeIn>
    </section>
  );
}
