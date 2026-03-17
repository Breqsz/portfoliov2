"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { motionConfig } from "@/lib/motion";
import type { ProjectCategory } from "@/lib/data/projects";

interface ProjectFilterProps {
  active: ProjectCategory;
  onChange: (category: ProjectCategory) => void;
  counts?: Partial<Record<ProjectCategory, number>>;
  className?: string;
}

export function ProjectFilter({ active, onChange, counts, className }: ProjectFilterProps) {
  const categories: ProjectCategory[] = [
    "All",
    "Web",
    "Full Stack",
    "Cloud",
    "Security",
    "Experimental",
    "Product",
  ];

  return (
    <div
      role="tablist"
      aria-label="Filter projects by category"
      className={cn("flex flex-wrap gap-2", className)}
    >
      {categories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isActive}
            aria-controls="project-list"
            id={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
            onClick={() => onChange(cat)}
            className={cn(
              "relative rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]",
              isActive
                ? "text-white"
                : "text-neutral-400 hover:text-neutral-300"
            )}
          >
            {isActive && (
              <motion.span
                layoutId="project-filter-active"
                className="absolute inset-0 rounded-xl border border-white/[0.08] bg-white/[0.04]"
                transition={motionConfig.easing.springSoft}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {cat}
              {counts?.[cat] != null && (
                <span className={cn("text-xs", isActive ? "text-neutral-400" : "text-neutral-500")}>
                  {counts[cat]}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
