"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motionConfig } from "@/lib/motion";

export function ProjectsHero() {
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
          aria-label="Back to home"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>
        <p className="ds-section-label">Selected work</p>
        <h1
          id="projects-page-heading"
          className="mt-2 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
        >
          Projects & case studies
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
          A curated selection of products and systems I&apos;ve built—spanning full-stack web
          applications, cloud infrastructure, and security tooling. Each project reflects how I
          approach technical problems, design for scale, and ship real products.
        </p>
      </motion.div>
    </header>
  );
}
