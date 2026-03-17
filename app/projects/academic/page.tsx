"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectArchiveCard } from "@/components/projects/ProjectArchiveCard";
import { GlowLine } from "@/components/primitives";
import { academicProjects } from "@/lib/data/projects";
import { useLocale } from "@/lib/i18n/context";

export default function AcademicProjectsPage() {
  const { t } = useLocale();
  return (
    <div className="min-h-screen">
      <section className="px-6 py-16 lg:px-12 xl:px-16" aria-labelledby="academic-heading">
        <div className="mx-auto max-w-content">
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 rounded text-sm text-neutral-400 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
          >
            <ArrowLeft className="size-4" />
            {t("academic.backToProjects")}
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="ds-section-label">Projetos acadêmicos e pessoais</p>
            <h1 id="academic-heading" className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              {t("academic.heading")}
            </h1>
            <p className="ds-body-muted mt-4 max-w-2xl">
              {t("academic.description")}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="px-6 lg:px-12 xl:px-16">
        <GlowLine className="mx-auto max-w-content" />
      </div>

      <section
        className="px-6 py-16 lg:px-12 xl:px-16"
        aria-label="Lista de projetos acadêmicos e pessoais"
      >
        <div className="mx-auto max-w-content">
          {academicProjects.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {academicProjects.map((project, i) => (
                <ProjectArchiveCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          ) : (
            <p className="ds-body-muted text-center text-lg">
              {t("academic.empty")}
            </p>
          )}
        </div>
      </section>

      <div className="px-6 lg:px-12 xl:px-16">
        <GlowLine className="mx-auto max-w-content" />
      </div>
    </div>
  );
}
