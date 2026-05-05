import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "@/lib/data/portfolio";
import { FadeIn } from "@/components/motion/FadeIn";

type Props = {
  project: PortfolioProject;
  index: number;
};

export function ProjectCard({ project, index }: Props) {
  return (
    <FadeIn delay={index * 0.06}>
      <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white/90 shadow-lg shadow-zinc-900/5 transition hover:border-emerald-400/35 dark:border-zinc-800 dark:bg-zinc-900/40 dark:shadow-black/25 dark:hover:border-emerald-500/25">
        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width:768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-transparent dark:from-zinc-950/90" />
        </div>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
            {project.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:border-zinc-700/80 dark:bg-zinc-950/60 dark:text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
          <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex text-sm font-semibold text-emerald-600 transition hover:underline dark:text-emerald-400"
          >
            View live / demo →
          </Link>
        </div>
      </article>
    </FadeIn>
  );
}
