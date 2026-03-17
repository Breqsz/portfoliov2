"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { featuredProjects } from "@/lib/data/projects";
import { SectionHeading, ContentContainer } from "@/components/primitives";
import { useLocale } from "@/lib/i18n/context";

const [flagship, ...secondary] = featuredProjects;

export function ProjectsSection() {
  const { t } = useLocale();
  return (
    <section
      id="projects"
      className="px-6 py-24 lg:px-12 xl:px-16"
      aria-labelledby="projects-heading"
    >
      <ContentContainer>
        <div className="mb-12">
          <SectionHeading
            number="01"
            title={t("projects.selectedWork")}
            className="mb-0"
            headingId="projects-heading"
          />
        </div>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ProjectCard {...flagship} featured />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {secondary.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/projects"
            data-cursor="link"
            data-cursor-label={t("projects.viewAll")}
            className="group inline-flex items-center gap-2 rounded text-base font-medium text-neutral-300 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
          >
            {t("projects.seeMoreProjects")}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.p>
      </ContentContainer>
    </section>
  );
}
