"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { motionConfig } from "@/lib/motion";
import { toLegacyProject } from "@/lib/data/projects";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/lib/data/projects";

interface ProjectArchiveCardProps {
  project: Project;
  index: number;
}

/** Compact card for project archive grid. Uses ProjectCard with legacy mapping. */
export function ProjectArchiveCard({ project, index }: ProjectArchiveCardProps) {
  const legacy = toLegacyProject(project);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: motionConfig.duration.normal,
        delay: index * 0.05,
        ease: motionConfig.easing.soft,
      }}
    >
      <ProjectCard {...legacy} />
    </motion.div>
  );
}
