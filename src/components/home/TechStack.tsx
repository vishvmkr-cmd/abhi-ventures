import {
  SiReact,
  SiNodedotjs,
  SiStripe,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiRazorpay,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  RevealBlurHeading,
  RevealLabel,
} from "@/components/motion/RevealHeading";

const items = [
  { name: "React", Icon: SiReact, color: "text-sky-500 dark:text-sky-400" },
  {
    name: "Next.js",
    Icon: SiNextdotjs,
    color: "text-zinc-800 dark:text-zinc-100",
  },
  {
    name: "Node.js",
    Icon: SiNodedotjs,
    color: "text-emerald-600 dark:text-emerald-400",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    name: "Tailwind",
    Icon: SiTailwindcss,
    color: "text-cyan-600 dark:text-cyan-400",
  },
  {
    name: "PostgreSQL",
    Icon: SiPostgresql,
    color: "text-indigo-600 dark:text-indigo-300",
  },
  { name: "AWS", Icon: FaAws, color: "text-amber-600 dark:text-amber-400" },
  {
    name: "Stripe",
    Icon: SiStripe,
    color: "text-violet-600 dark:text-violet-300",
  },
  {
    name: "Razorpay",
    Icon: SiRazorpay,
    color: "text-blue-600 dark:text-blue-300",
  },
] as const;

export function TechStack() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div>
        <RevealLabel
          text="Tech stack"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400/90"
        />
        <RevealBlurHeading
          text="Tools we build with every day"
          className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
          as="h2"
        />
        <FadeIn
          delay={0.08}
          className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400"
        >
          Opinionated defaults, pragmatic swaps—we pick what keeps your
          product fast, observable, and easy to hire for.
        </FadeIn>
      </div>
      <FadeIn delay={0.1} className="mt-10">
        <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
          {items.map(({ name, Icon, color }) => (
            <div
              key={name}
              className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white/90 px-4 py-2.5 text-sm text-zinc-800 shadow-md shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-200 dark:shadow-black/20"
            >
              <Icon className={`h-5 w-5 ${color}`} aria-hidden />
              <span className="font-medium">{name}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
