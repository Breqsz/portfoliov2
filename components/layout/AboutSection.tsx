"use client";

import { motion } from "framer-motion";
import { ContentContainer } from "@/components/primitives";
import { DownloadCVButton } from "@/components/layout/DownloadCVButton";
import { useLocale } from "@/lib/i18n/context";

function highlightPhrases(text: string) {
  const parts = text.split(/(__[^_]+__)/g);
  return parts.map((part, i) =>
    part.startsWith("__") && part.endsWith("__") ? (
      <span key={i} className="font-medium text-neutral-300 bg-gradient-to-r from-blue-400/90 to-purple-400/90 bg-clip-text text-transparent">
        {part.slice(2, -2)}
      </span>
    ) : (
      part
    )
  );
}

export function AboutSection() {
  const { t } = useLocale();
  return (
    <motion.section
      id="about"
      className="px-6 py-24 lg:px-12 xl:px-16"
      aria-labelledby="about-heading"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <ContentContainer>
        <div className="grid gap-16 lg:grid-cols-[200px_1fr] lg:gap-24">
          <div>
            <p className="ds-section-label">05</p>
            <h2 id="about-heading" className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              {t("about.title")}
            </h2>
          </div>
          <div className="space-y-8">
            <p className="ds-body max-w-2xl text-lg text-neutral-300">
              {t("about.paragraph1")}
            </p>
            <p className="ds-body max-w-2xl text-lg leading-relaxed text-neutral-300">
              {highlightPhrases(t("about.paragraphWeb"))}
            </p>
            <p className="ds-body max-w-2xl text-lg text-neutral-300">
              {t("about.paragraph2")}
            </p>
            <p className="ds-body max-w-2xl text-lg text-neutral-300">
              {t("about.paragraphInterests")}
            </p>

            <div className="flex flex-col gap-6 pt-4">
              <div className="space-y-2">
                <p className="ds-body max-w-2xl text-lg font-medium uppercase tracking-wider text-neutral-300">
                  {t("about.english")}
                </p>
                <ul className="ds-body max-w-2xl space-y-1 text-lg text-neutral-300">
                  <li>{t("about.englishComprehension")}</li>
                  <li>{t("about.englishConversation")}</li>
                  <li>{t("about.englishWriting")}</li>
                </ul>
              </div>
              <DownloadCVButton />
            </div>
          </div>
        </div>
      </ContentContainer>
    </motion.section>
  );
}
