import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  RevealLabel,
  RevealLettersHeading,
} from "@/components/motion/RevealHeading";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { portfolioProjects } from "@/lib/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected work from Abhi Ventures—full stack apps, commerce, and integrations.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div>
        <RevealLabel
          text="Portfolio"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400/90"
        />
        <RevealLettersHeading
          text="Recent engagements"
          className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl"
          as="h1"
        />
        <FadeIn
          delay={0.12}
          className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
        >
          Representative projects across SaaS, commerce, and fintech. Names
          anonymized where required by NDAs—capabilities are the same.
        </FadeIn>
      </div>
      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {portfolioProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
