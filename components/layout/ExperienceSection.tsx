"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { ContentContainer } from "@/components/primitives";
import { experience } from "@/lib/data/experience";
import { motionConfig } from "@/lib/motion";
import { useLocale } from "@/lib/i18n/context";

export function ExperienceSection() {
  const { t } = useLocale();
  return (
    <motion.section
      id="experience"
      className="px-6 py-24 lg:px-12 xl:px-16"
      aria-labelledby="experience-heading"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <ContentContainer>
        <div className="grid gap-16 lg:grid-cols-[200px_1fr] lg:gap-24">
          <div>
            <p className="ds-section-label">04</p>
            <h2
              id="experience-heading"
              className="mt-2 text-2xl font-semibold text-white sm:text-3xl"
            >
              {t("experience.title")}
            </h2>
          </div>
          <div className="space-y-12">
            {experience.map((item, i) => (
              <motion.article
                key={item.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: motionConfig.duration.normal,
                  delay: i * 0.1,
                  ease: motionConfig.easing.soft,
                }}
                className="relative pl-8 before:absolute before:left-0 before:top-2 before:size-3 before:rounded-full before:bg-blue-500/60 before:content-['']"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02]">
                    <Briefcase className="size-5 text-blue-500/80" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.company}</h3>
                    <p className="text-sm text-neutral-400">{item.role} · {item.period}</p>
                    <p className="ds-body-muted mt-1">{item.description}</p>
                    <ul className="mt-4 space-y-2">
                      {item.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="ds-body-muted flex items-start gap-2"
                        >
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-500/60" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </ContentContainer>
    </motion.section>
  );
}
