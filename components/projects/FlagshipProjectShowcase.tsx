"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { motionConfig } from "@/lib/motion";
import { useLocale } from "@/lib/i18n/context";
import type { Project } from "@/lib/data/projects";

interface FlagshipProjectShowcaseProps {
  project: Project;
  index: number;
  layout?: "default" | "reverse";
}

const btnBase =
  "inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]";

export function FlagshipProjectShowcase({
  project,
  index,
  layout = "default",
}: FlagshipProjectShowcaseProps) {
  const { t } = useLocale();
  const isReverse = layout === "reverse";
  const categoryLabel = t(`projects.categoryLabels.${project.category}`);
  const statusLabel = project.status ? t(`projects.statusLabels.${project.status}`) : project.status;
  const problemLabel = t("projects.problemLabel");
  const approachLabel = t("projects.approachLabel");

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: motionConfig.duration.reveal,
        delay: index * 0.08,
        ease: motionConfig.easing.soft,
      }}
      className="group"
      {...(project.liveUrl && project.liveUrl !== "#" ? { "data-cursor": "project" as const } : {})}
    >
      <div
        className={cn(
          "grid gap-0 overflow-hidden rounded-2xl border border-white/[0.06] bg-[var(--ds-surface)] transition-[border-color,box-shadow] duration-500 hover:border-white/[0.1] hover:shadow-glow-card",
          "lg:grid-cols-2"
        )}
      >
        {/* Media / visual block */}
        <div
          className={cn(
            "relative aspect-[16/10] lg:aspect-auto lg:min-h-[360px]",
            isReverse && "lg:order-2"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-purple-500/10" />
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-8">
              <div className="flex flex-wrap justify-center gap-2">
                {project.stack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-neutral-400 ring-1 ring-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="text-xs text-neutral-500">{project.year ?? "—"}</span>
            </div>
          )}
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span className="rounded-full bg-blue-500/20 px-2.5 py-1 text-xs font-medium text-blue-400">
              {categoryLabel}
            </span>
            {project.status !== "live" && (
              <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-neutral-500">
                {statusLabel}
              </span>
            )}
          </div>
        </div>

        {/* Content block */}
        <div
          className={cn(
            "relative flex flex-col justify-between p-8 lg:p-10",
            isReverse && "lg:order-1"
          )}
        >
          <div>
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">{project.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-neutral-400">{project.summary}</p>

            {project.problem && (
              <div className="mt-6 space-y-2">
                <p className="text-xs font-medium uppercase tracking-wider text-blue-500/80">
                  {problemLabel}
                </p>
                <p className="text-sm leading-relaxed text-neutral-500">{project.problem}</p>
              </div>
            )}

            {project.solution && (
              <div className="mt-4 space-y-2">
                <p className="text-xs font-medium uppercase tracking-wider text-blue-500/80">
                  {approachLabel}
                </p>
                <p className="text-sm leading-relaxed text-neutral-500">{project.solution}</p>
              </div>
            )}

            {project.highlights && project.highlights.length > 0 && (
              <ul className="mt-6 space-y-2">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-neutral-400"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-500/60" />
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(btnBase, "border border-white/10 bg-white/5 text-neutral-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white")}
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="size-4" />
                GitHub
              </a>
            )}
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(btnBase, "border border-blue-500/40 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300")}
                aria-label={`View live demo of ${project.title}`}
              >
                {t("projects.viewProject")}
                <ExternalLink className="size-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
