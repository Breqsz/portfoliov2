"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TypewriterName } from "@/components/ui/TypewriterName";
import { InfoTile, PremiumBadge } from "@/components/primitives";
import { site } from "@/lib/data/site";
import { motionConfig } from "@/lib/motion";
import { useLocale } from "@/lib/i18n/context";

export function Hero() {
  const { t } = useLocale();
  return (
    <section
      id="home"
      className="relative grid min-h-screen overflow-hidden px-6 pt-20 lg:grid-cols-[1fr,minmax(320px,480px)] lg:items-center lg:gap-16 lg:px-12 xl:px-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-1/3 -top-1/3 h-[80%] w-[80%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 right-0 h-[60%] w-[60%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute size-px rounded-full bg-blue-500/20"
            style={{
              left: `${10 + (i * 9) % 80}%`,
              top: `${20 + (i * 7) % 60}%`,
            }}
            animate={{ y: [0, -40], opacity: [0.2, 0] }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              repeatDelay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col justify-center py-20 lg:py-0">
        <motion.p
          className="ds-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: motionConfig.duration.slow, ease: motionConfig.easing.soft }}
        >
          {t("hero.eyebrow")}
        </motion.p>
        <motion.h1
          className="ds-display mt-4 max-w-2xl text-4xl leading-[1.2] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl pb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: motionConfig.duration.reveal, delay: 0.05, ease: motionConfig.easing.subtle }}
        >
          <span className="block">
            <TypewriterName />
          </span>
          <span className="mt-1.5 block pb-2 bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
            {t("hero.tagline")}
          </span>
        </motion.h1>
        <motion.p
          className="ds-body mt-6 max-w-lg sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: motionConfig.duration.reveal, delay: 0.1, ease: motionConfig.easing.subtle }}
        >
          {t("hero.subhead")}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {site.identityChips.map((chip) => (
            <PremiumBadge key={chip}>{chip}</PremiumBadge>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: motionConfig.duration.reveal, delay: 0.25, ease: motionConfig.easing.subtle }}
        >
          <MagneticButton href="#projects" cursorLabel={t("hero.ctaViewWork")}>
            {t("hero.ctaViewWork")}
          </MagneticButton>
          <MagneticButton href="#contact" variant="ghost" className="text-neutral-300" cursorLabel={t("hero.ctaGetInTouch")}>
            {t("hero.ctaGetInTouch")}
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 hidden flex-col gap-4 lg:flex"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: motionConfig.duration.reveal, delay: 0.35, ease: motionConfig.easing.smooth }}
      >
        <InfoTile label={t("hero.labelCurrentlyFocusedOn")} value={<span className="text-lg font-medium">{t("hero.currentFocus")}</span>} className="p-6" />
        <div className="grid grid-cols-2 gap-4">
          <InfoTile label={t("hero.labelFeaturedProjects")} value={<span className="text-2xl font-semibold tabular-nums">{site.projectCount}</span>} />
          <InfoTile label={t("hero.labelAvailability")} value={<span className="inline-flex items-center gap-1.5 text-xl font-semibold tracking-wide text-emerald-400"><span className="size-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" aria-hidden />{t("hero.availability")}</span>} />
        </div>
        <InfoTile label={t("hero.labelLocation")} value={<span className="text-sm text-neutral-300">{t("hero.availabilityDetail")}</span>} className="p-4" />
        <InfoTile label={t("hero.labelStack")} value={<span className="text-sm text-neutral-400">{site.stackPreview}</span>} />
      </motion.div>

      <motion.div
        className="relative z-10 mt-12 flex flex-wrap gap-3 lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <InfoTile label={t("hero.labelFocus")} value={<span className="text-sm font-medium">{t("hero.currentFocus")}</span>} className="rounded-xl px-4 py-3" />
        <InfoTile label={t("hero.labelAvailability")} value={<span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400"><span className="size-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden />{t("hero.availability")}</span>} className="rounded-xl px-4 py-3" />
        <InfoTile label={t("hero.labelLocation")} value={<span className="text-xs text-neutral-300">{t("hero.availabilityDetail")}</span>} className="rounded-xl px-4 py-3" />
        <InfoTile label={t("hero.labelStack")} value={<span className="text-sm text-neutral-400">{site.stackPreview}</span>} className="rounded-xl px-4 py-3" />
      </motion.div>
    </section>
  );
}
