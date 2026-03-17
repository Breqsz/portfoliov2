"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { ContentContainer } from "@/components/primitives";
import { certificates } from "@/lib/data/certificates";
import { motionConfig } from "@/lib/motion";
import { useLocale } from "@/lib/i18n/context";

export function CertificatesSection() {
  const { t } = useLocale();
  return (
    <motion.section
      id="certificates"
      className="px-6 py-24 lg:px-12 xl:px-16"
      aria-labelledby="certificates-heading"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <ContentContainer>
        <div className="grid gap-16 lg:grid-cols-[200px_1fr] lg:gap-24">
          <div>
            <p className="ds-section-label">06</p>
            <h2
              id="certificates-heading"
              className="mt-2 text-2xl font-semibold text-white sm:text-3xl"
            >
              {t("certificates.title")}
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {certificates.map((cert, i) => (
              <motion.div
                key={`${cert.name}-${cert.year}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: motionConfig.duration.normal,
                  delay: i * 0.04,
                  ease: motionConfig.easing.soft,
                }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="group flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 backdrop-blur-sm transition-colors duration-300 hover:border-white/[0.1] hover:bg-white/[0.04]"
              >
                <Award className="size-4 shrink-0 text-blue-500/70" aria-hidden />
                <div>
                  <span className="font-medium text-white">{cert.name}</span>
                  <span className="ds-body-muted ml-2 text-sm">
                    {cert.year} · {cert.issuer}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ContentContainer>
    </motion.section>
  );
}
