"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { Mail, Github, Linkedin, FileDown } from "lucide-react";
import { contact } from "@/lib/data/contact";
import { ContentContainer } from "@/components/primitives";
import { useLocale } from "@/lib/i18n/context";

const CV_PT = "/images/curriculo_guilherme_portugues.pdf";
const CV_EN = "/images/cv_guilherme_en.pdf";

export function ContactSection() {
  const { t } = useLocale();
  return (
    <section
      id="contact"
      className="px-6 py-24 lg:px-12 xl:px-16"
      aria-labelledby="contact-heading"
    >
      <ContentContainer>
        <div className="ds-surface p-12 lg:p-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="ds-section-label">07</p>
            <h2 id="contact-heading" className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              {t("contact.headline")}
            </h2>
            <p className="ds-body mt-6 text-neutral-300">
              {t("contact.subhead")}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center gap-3 rounded-lg text-neutral-300 transition-all duration-300 hover:scale-[1.02] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                aria-label={`Email: ${contact.email}`}
              >
                <span className="ds-surface flex size-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:border-white/[0.12]">
                  <Mail className="size-5" />
                </span>
                <span className="font-medium">{contact.email}</span>
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg text-neutral-300 transition-all duration-300 hover:scale-[1.02] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                aria-label="GitHub (opens in new tab)"
              >
                <span className="ds-surface flex size-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:border-white/[0.12]">
                  <Github className="size-5" />
                </span>
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg text-neutral-300 transition-all duration-300 hover:scale-[1.02] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                aria-label="LinkedIn (opens in new tab)"
              >
                <span className="ds-surface flex size-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:border-white/[0.12]">
                  <Linkedin className="size-5" />
                </span>
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>

            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-4">
              <a
                href={CV_PT}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-neutral-200 transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              >
                <FileDown className="size-4" />
                {t("contact.downloadCVPt")}
              </a>
              <a
                href={CV_EN}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-blue-500/40 bg-blue-500/10 px-5 py-2.5 text-sm font-medium text-blue-400 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500/20 hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              >
                <FileDown className="size-4" />
                {t("contact.downloadCVEn")}
              </a>
            </div>

            <div className="mt-10 flex justify-center">
              <MagneticButton href={contact.whatsapp} variant="primary" target="_blank" rel="noopener noreferrer" aria-label="Abrir WhatsApp">
                {t("contact.letsConnect")}
              </MagneticButton>
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
