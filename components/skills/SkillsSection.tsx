"use client";

import { SkillsGrid } from "@/components/skills/SkillsGrid";
import { SkillsMarquee } from "@/components/skills/SkillsMarquee";
import { ContentContainer } from "@/components/primitives";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { useLocale } from "@/lib/i18n/context";

export function SkillsSection() {
  const { t } = useLocale();
  return (
    <section
      id="skills"
      className="px-6 py-24 lg:px-12 xl:px-16"
      aria-labelledby="skills-heading"
    >
      <SectionReveal>
        <ContentContainer className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="ds-section-label">03</p>
            <h2 id="skills-heading" className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              {t("stack.title")}
            </h2>
          </div>
          <SkillsGrid />
          <SkillsMarquee />
        </ContentContainer>
      </SectionReveal>
    </section>
  );
}
