import { FadeIn } from "@/components/motion/FadeIn";
import {
  RevealLabel,
  RevealMaskHeading,
} from "@/components/motion/RevealHeading";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section className="border-y border-zinc-200/90 bg-zinc-100/80 py-20 dark:border-zinc-800/80 dark:bg-zinc-900/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div>
          <RevealLabel
            text="Proof, not promises"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400/90"
          />
          <RevealMaskHeading
            text="Teams trust us with their roadmap"
            className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
            as="h2"
          />
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.author} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-lg shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-950/60 dark:shadow-black/25">
                <blockquote className="flex-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-zinc-200 pt-4 dark:border-zinc-800">
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {t.author}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500">
                    {t.role}, {t.company}
                  </p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
