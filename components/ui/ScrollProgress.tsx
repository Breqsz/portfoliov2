"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useLocale } from "@/lib/i18n/context";

export function ScrollProgress() {
  const { t } = useLocale();
  const [progress, setProgress] = useState(0);
  const [showBackTop, setShowBackTop] = useState(false);
  const reducedMotion = useReducedMotion();

  const updateProgress = useCallback(() => {
    if (typeof window === "undefined") return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) {
      setProgress(0);
      return;
    }
    setProgress(Math.min((scrollTop / docHeight) * 100, 100));
    setShowBackTop(scrollTop > 400);
  }, []);

  useEffect(() => {
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, [updateProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <>
      {/* Progress bar - fixed at bottom, full width */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[9997] h-0.5 bg-white/[0.06]"
        aria-hidden
      >
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500/80 to-purple-500/80"
          style={{ width: `${progress}%` }}
          transition={{ duration: reducedMotion ? 0 : 0.15 }}
        />
      </div>

      {/* Back to top - seta discreta */}
      <AnimatePresence>
        {showBackTop && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            data-cursor="link"
            data-cursor-label={t("nav.backToTop")}
            className="fixed bottom-6 left-1/2 z-[9997] flex -translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white/70 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            aria-label={t("nav.backToTop")}
          >
            <ChevronUp className="size-5" strokeWidth={2} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
