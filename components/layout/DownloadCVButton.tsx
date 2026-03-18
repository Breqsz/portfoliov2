"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FileDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/i18n/context";
import { motionConfig } from "@/lib/motion";

const CV_PT = "/images/curriculo_guilherme_portugues.pdf";
const CV_EN = "/images/cv_guilherme_en.pdf";

export function DownloadCVButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const { t } = useLocale();

  const handleDownload = useCallback((url: string) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = url.includes("curriculo") ? "curriculo_guilherme_pt.pdf" : "cv_guilherme_en.pdf";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setOpen(false);
  }, []);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-blue-500/50 bg-blue-500/20 px-5 py-3 text-sm font-semibold text-blue-100",
          "transition-[border-color,background-color,color,box-shadow] duration-300",
          "hover:border-blue-500/60 hover:bg-blue-500/25 hover:text-white hover:shadow-[0_0_32px_-8px_rgba(59,130,246,0.35)]",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]",
          "active:scale-[0.98]",
          className
        )}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={motionConfig.easing.springSoft}
      >
        <FileDown className="size-4 shrink-0" />
        {t("about.ctaDownload")}
      </motion.button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          aria-modal="true"
          aria-labelledby="cv-dialog-title"
          role="dialog"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="relative w-full max-w-sm rounded-2xl border border-white/[0.08] bg-[var(--ds-surface)] p-6 shadow-xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-lg p-1 text-neutral-400 transition-colors hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
              aria-label="Fechar"
            >
              <X className="size-5" />
            </button>
            <h3 id="cv-dialog-title" className="pr-8 text-lg font-semibold text-white">
              {t("about.cvDialogTitle")}
            </h3>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => handleDownload(CV_PT)}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
              >
                {t("about.cvOptionPt")}
              </button>
              <button
                type="button"
                onClick={() => handleDownload(CV_EN)}
                className="rounded-lg border border-blue-500/40 bg-blue-500/10 px-4 py-2.5 text-sm font-medium text-blue-400 transition-colors hover:bg-blue-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
              >
                {t("about.cvOptionEn")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
