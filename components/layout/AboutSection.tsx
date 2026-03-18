"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { ContentContainer } from "@/components/primitives";
import { DownloadCVButton } from "@/components/layout/DownloadCVButton";
import { StaggerChild } from "@/components/ui/SectionReveal";
import { motionConfig } from "@/lib/motion";
import { useLocale } from "@/lib/i18n/context";
import { contact } from "@/lib/data/contact";
import { cn } from "@/lib/utils";

const HIGHLIGHTS = [
  "about.highlight1",
  "about.highlight2",
  "about.highlight3",
  "about.highlight4",
  "about.highlight5",
] as const;
const ENGLISH_LEVELS = [
  { key: "about.englishComprehension" as const, value: 100 },
  { key: "about.englishConversation" as const, value: 85 },
  { key: "about.englishWriting" as const, value: 80 },
];

export function AboutSection() {
  const { t } = useLocale();

  return (
    <section
      id="about"
      className="relative px-6 py-24 lg:px-12 xl:px-16"
      aria-labelledby="about-heading"
    >
      <ContentContainer className="relative">
        <motion.div
          className="grid gap-12 lg:grid-cols-[200px_1fr] lg:gap-24"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.07,
                delayChildren: 0.08,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Col 1: label + title */}
          <div>
            <StaggerChild className="flex flex-row items-start gap-4 lg:flex-col lg:gap-2">
              <p className="ds-section-label shrink-0">05</p>
              <h2
                id="about-heading"
                className="text-2xl font-semibold text-white sm:text-3xl"
              >
                {t("about.title")}
              </h2>
            </StaggerChild>
          </div>

          {/* Col 2: headline, intro, highlights, languages, CTAs */}
          <div className="flex min-w-0 flex-col gap-8 lg:gap-10">
            <StaggerChild>
              <p className="ds-body max-w-2xl text-xl font-semibold leading-snug text-white sm:text-2xl">
                {t("about.headline")}
              </p>
            </StaggerChild>

            <StaggerChild>
              <p className="ds-body max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
                {t("about.intro")}
              </p>
            </StaggerChild>

            <StaggerChild>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {HIGHLIGHTS.map((key) => (
                  <motion.span
                    key={key}
                    className={cn(
                      "cursor-default rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-neutral-300 backdrop-blur-sm",
                      "transition-colors duration-300 hover:border-white/20 hover:text-neutral-100 hover:shadow-[0_0_24px_-8px_rgba(59,130,246,0.12)]"
                    )}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={motionConfig.easing.springSoft}
                  >
                    {t(key)}
                  </motion.span>
                ))}
              </div>
            </StaggerChild>

            <StaggerChild>
              <div className="space-y-4">
                <p className="ds-caption font-medium uppercase tracking-wider text-neutral-400">
                  {t("about.languagesTitle")}
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
                  <div className="flex items-center gap-3">
                    <span className="ds-body min-w-[6rem] text-sm font-medium text-neutral-200">
                      {t("about.portuguese")}
                    </span>
                    <span className="ds-caption text-xs text-neutral-500">
                      {t("about.portugueseLevel")}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 sm:max-w-xs">
                    <span className="ds-body text-sm font-medium text-neutral-200">
                      {t("about.english")}
                    </span>
                    <div className="space-y-1.5">
                      {ENGLISH_LEVELS.map(({ key, value }) => (
                        <div
                          key={key}
                          className="flex items-center gap-2"
                          role="progressbar"
                          aria-valuenow={value}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={t(key)}
                        >
                          <span className="ds-caption w-24 shrink-0 text-xs text-neutral-500">
                            {t(key)}
                          </span>
                          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-blue-500/80 to-blue-400/60"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${value}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: motionConfig.duration.slow,
                                ease: motionConfig.easing.soft,
                              }}
                              style={{ maxWidth: "100%" }}
                            />
                          </div>
                          <span className="ds-caption w-8 shrink-0 text-right text-xs text-neutral-400">
                            {value}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerChild>

            <StaggerChild>
              <div className="flex flex-wrap items-center gap-3">
                <DownloadCVButton />
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.03] px-5 py-3 text-sm font-medium text-neutral-300",
                    "transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]",
                    "active:scale-[0.98]"
                  )}
                  aria-label="LinkedIn (opens in new tab)"
                >
                  <Linkedin className="size-4" />
                  {t("about.ctaLinkedIn")}
                </a>
              </div>
            </StaggerChild>
          </div>
        </motion.div>
      </ContentContainer>
    </section>
  );
}
