"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { motionConfig } from "@/lib/motion";
import { useLocale } from "@/lib/i18n/context";

export function ProjectsCTA() {
  const { t } = useLocale();
  return (
    <motion.section
      className="px-6 py-24 lg:px-12 xl:px-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: motionConfig.duration.reveal }}
    >
      <div className="mx-auto max-w-content rounded-2xl border border-white/[0.06] bg-white/[0.02] p-12 backdrop-blur-sm lg:p-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            {t("projects.ctaHeading")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-400">
            {t("projects.ctaDescription")}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <MagneticButton href="/#contact" variant="primary">
              {t("projects.ctaConnect")}
            </MagneticButton>
            <MagneticButton href="/" variant="ghost" className="text-neutral-300">
              {t("projects.ctaBackToHome")}
            </MagneticButton>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
