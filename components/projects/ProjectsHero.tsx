"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motionConfig } from "@/lib/motion";
import { useLocale } from "@/lib/i18n/context";

export function ProjectsHero() {
  const { t } = useLocale();
  return (
    <header className="px-6 pt-24 pb-12 lg:px-12 xl:px-16">
      <motion.div
        className="mx-auto max-w-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: motionConfig.duration.reveal, ease: motionConfig.easing.soft }}
      >
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 rounded text-sm text-neutral-400 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] focus-visible:text-white"
          aria-label={t("projects.heroBackToHome")}
        >
          <ArrowLeft className="size-4" />
          {t("projects.heroBackToHome")}
        </Link>
        <p className="ds-section-label">{t("projects.selectedWork")}</p>
        <h1
          id="projects-page-heading"
          className="mt-2 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
        >
          {t("projects.heroTitle")}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
          {t("projects.heroDescription")}
        </p>
      </motion.div>
    </header>
  );
}
