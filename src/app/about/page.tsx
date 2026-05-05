import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  RevealBlurHeading,
  RevealLabel,
  RevealSlideHeading,
} from "@/components/motion/RevealHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Abhi Ventures builds reliable, scalable software for growing businesses.",
};

const highlights = [
  {
    title: "Reliability first",
    body: "Error budgets, retries, and observability are not afterthoughts—they shape how we design APIs and UIs.",
  },
  {
    title: "Scalable foundations",
    body: "We separate concerns early so your codebase survives the jump from ten to ten thousand daily active users.",
  },
  {
    title: "Clean engineering",
    body: "Readable TypeScript, consistent patterns, and reviews that catch risk before it hits production.",
  },
];

const skills = [
  "Product discovery & technical scoping",
  "Next.js / React SPAs",
  "Node.js services & workers",
  "PostgreSQL, Redis, Dynamo-style patterns",
  "Stripe & Razorpay billing flows",
  "AWS (Lambda, ECS, S3, CloudFront)",
  "CI/CD (GitHub Actions, Vercel)",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div>
        <RevealLabel
          text="About"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400/90"
        />
        <RevealSlideHeading
          text="Abhi Ventures"
          from="up"
          className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl"
          as="h1"
        />
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-5">
        <FadeIn className="lg:col-span-3">
          <div className="space-y-6 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            <p>
              Abhi Ventures is a software services studio focused on one
              outcome: products that perform in the real world. We partner with
              founders and product teams who need senior execution without
              building a large in-house org overnight.
            </p>
            <p>
              Our work spans marketing sites, customer-facing applications,
              payment infrastructure, and the integrations that glue your stack
              together. Every engagement is led with clear communication,
              documented decisions, and pragmatic tradeoffs you can defend to
              stakeholders.
            </p>
            <p>
              Whether you are validating a new market or hardening a platform
              for scale, we bring the same discipline: ship in small increments,
              measure, and iterate.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.08} className="lg:col-span-2">
          <div className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-md shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900/40 dark:shadow-none">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
              At a glance
            </p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Remote-first, global clients</li>
              <li>Typical stack: TypeScript, Next.js, Node, AWS</li>
              <li>Payments: Stripe, Razorpay</li>
              <li>Engagements from MVP to scale-up</li>
            </ul>
          </div>
        </FadeIn>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {highlights.map((h, i) => (
          <FadeIn key={h.title} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/60 dark:shadow-none">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {h.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {h.body}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="mt-16">
        <RevealBlurHeading
          text="Skills & experience"
          className="text-2xl font-semibold text-zinc-900 dark:text-white"
          as="h2"
        />
        <FadeIn delay={0.08}>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {skills.map((s) => (
              <li
                key={s}
                className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-300"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                {s}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>

      <FadeIn className="mt-16 text-center">
        <Link
          href="/contact"
          className="inline-flex rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 px-8 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20 transition hover:brightness-110 dark:shadow-emerald-500/20"
        >
          Work with us
        </Link>
      </FadeIn>
    </div>
  );
}
