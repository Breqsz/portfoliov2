"use client";

import { Github, Linkedin } from "lucide-react";
import { contact } from "@/lib/data/contact";
import { site } from "@/lib/data/site";
import { useLocale } from "@/lib/i18n/context";

export function Footer() {
  const { t } = useLocale();
  return (
    <footer className="border-t border-white/[0.06] bg-[var(--ds-bg)] px-6 py-12 pb-[max(3rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <p className="ds-body-muted text-sm">
          © {new Date().getFullYear()} {site.name}. {t("footer.tagline")}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded ds-body-muted transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] focus-visible:text-white"
            aria-label="GitHub (opens in new tab)"
          >
            <Github className="size-5" />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded ds-body-muted transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] focus-visible:text-white"
            aria-label="LinkedIn (opens in new tab)"
          >
            <Linkedin className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
