import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { TechStack } from "@/components/home/TechStack";
import { FadeIn } from "@/components/motion/FadeIn";
import { RevealTiltHeading } from "@/components/motion/RevealHeading";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Testimonials />
      <TechStack />
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-white via-zinc-50 to-emerald-50/40 p-8 shadow-lg shadow-zinc-900/5 sm:p-12 dark:border-zinc-800 dark:from-zinc-900/80 dark:via-zinc-900/90 dark:to-zinc-950 dark:shadow-black/20">
            <RevealTiltHeading
              text="Ready to ship your next release?"
              className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-3xl"
              as="h2"
            />
            <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
              Tell us about your product, users, and timeline. We will reply
              with a concise plan and next steps—no fluff.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 px-6 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20 transition hover:brightness-110 dark:shadow-emerald-500/20"
              >
                Get in touch
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex rounded-full border border-zinc-300 px-6 py-2.5 text-sm font-medium text-zinc-700 transition hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500"
              >
                See portfolio
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
