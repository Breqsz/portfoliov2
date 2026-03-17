"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FlagshipProjectShowcase } from "@/components/projects/FlagshipProjectShowcase";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { ProjectArchiveCard } from "@/components/projects/ProjectArchiveCard";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectsCTA } from "@/components/projects/ProjectsCTA";
import { GlowLine } from "@/components/primitives";
import {
  flagshipProjects,
  allProjects,
  type Project,
  type ProjectCategory,
} from "@/lib/data/projects";

function matchesCategory(project: Project, category: ProjectCategory): boolean {
  if (category === "All") return true;
  if (project.category === category) return true;
  return project.tags.includes(category);
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

  const filteredProjects = useMemo(
    () => (activeFilter === "All" ? allProjects : allProjects.filter((p) => matchesCategory(p, activeFilter))),
    [activeFilter]
  );

  const flagshipFiltered = useMemo(
    () => flagshipProjects.filter((p) => matchesCategory(p, activeFilter)),
    [activeFilter]
  );

  const archiveFiltered = useMemo(
    () => filteredProjects.filter((p) => !p.flagship),
    [filteredProjects]
  );

  const hasFlagship = flagshipFiltered.length > 0;
  const hasArchive = archiveFiltered.length > 0;

  return (
    <div className="min-h-screen">
      <ProjectsHero />

      <div className="px-6 lg:px-12 xl:px-16">
        <GlowLine className="mx-auto max-w-content" />
      </div>

      {/* Filter */}
      <section className="px-6 py-12 lg:px-12 xl:px-16" aria-label="Filter projects">
        <div className="mx-auto max-w-content">
          <ProjectFilter active={activeFilter} onChange={setActiveFilter} />
        </div>
      </section>

      {/* Flagship showcase */}
      {hasFlagship && (
        <section
          className="px-6 py-12 lg:px-12 xl:px-16"
          aria-labelledby="flagship-heading"
        >
          <div className="mx-auto max-w-content">
            <h2 id="flagship-heading" className="sr-only">
              Featured projects
            </h2>
            <div className="space-y-16">
              <AnimatePresence mode="wait">
                {flagshipFiltered.map((project, i) => (
                  <FlagshipProjectShowcase
                    key={project.slug}
                    project={project}
                    index={i}
                    layout={i % 2 === 1 ? "reverse" : "default"}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      )}

      {/* Project archive */}
      {hasArchive && (
        <>
          <div className="px-6 lg:px-12 xl:px-16">
            <GlowLine className="mx-auto max-w-content" />
          </div>
          <section
            id="project-list"
            className="px-6 py-16 lg:px-12 xl:px-16"
            aria-labelledby="archive-heading"
          >
            <div className="mx-auto max-w-content">
              <h2
                id="archive-heading"
                className="mb-10 text-xl font-semibold text-white sm:text-2xl"
              >
                More work
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {archiveFiltered.map((project, i) => (
                    <ProjectArchiveCard key={project.slug} project={project} index={i} />
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Empty state */}
      {!hasFlagship && !hasArchive && (
        <section className="px-6 py-24 lg:px-12 xl:px-16">
          <div className="mx-auto max-w-content text-center">
            <p className="ds-body-muted text-lg">
              No projects in this category yet. Try another filter.
            </p>
          </div>
        </section>
      )}

      <div className="px-6 lg:px-12 xl:px-16">
        <GlowLine className="mx-auto max-w-content" />
      </div>

      <ProjectsCTA />
    </div>
  );
}
