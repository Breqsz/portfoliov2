"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data/navigation";
import { site } from "@/lib/data/site";
import { motionConfig } from "@/lib/motion";
import { useLocale } from "@/lib/i18n/context";
import { useCursorPreference } from "@/lib/CursorPreferenceContext";
import { MousePointer2 } from "lucide-react";

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href.startsWith("#") ? `/${href}` : href}
      data-cursor="link"
      onClick={(e) => {
        if (href.startsWith("#")) {
          e.preventDefault();
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }
        onClick?.();
      }}
      className="group relative block py-2 text-sm font-medium text-neutral-400 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:text-white focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded"
    >
      {label}
      <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500/80 to-purple-500/80 transition-all duration-300 ease-out group-hover:w-full" />
    </Link>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale, t } = useLocale();
  const { cursorEnabled, setCursorEnabled } = useCursorPreference();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 w-full border-b bg-[#0a0a0a]/70 backdrop-blur-xl transition-colors duration-500",
        scrolled ? "border-white/[0.08]" : "border-white/[0.04]"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-6" aria-label="Main navigation">
        <Link
          href="/"
          data-cursor="link"
          className="rounded text-lg font-semibold tracking-tight text-white transition-opacity duration-300 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
          aria-label={`${site.name} - Home`}
        >
          {site.name}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={t(`nav.${link.labelKey}`)} />
          ))}
          <div className="flex items-center gap-1 rounded-lg border border-white/[0.08] bg-white/[0.02] p-0.5">
            <button
              type="button"
              onClick={() => setCursorEnabled(!cursorEnabled)}
              data-cursor="link"
              data-cursor-label={cursorEnabled ? t("nav.cursorOff") : t("nav.cursorOn")}
              className={cn(
                "rounded-md p-1.5 text-xs transition-colors",
                cursorEnabled ? "bg-white/10 text-white" : "text-neutral-500 hover:text-neutral-400"
              )}
              aria-label={cursorEnabled ? "Desativar cursor animado" : "Ativar cursor animado"}
              title={cursorEnabled ? "Desativar cursor animado" : "Ativar cursor animado"}
            >
              <MousePointer2 className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => setLocale("pt")}
              data-cursor="link"
              data-cursor-label={t("nav.switchToPt")}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
                locale === "pt" ? "bg-white/10 text-white" : "text-neutral-400 hover:text-white"
              )}
              aria-label="Português"
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              data-cursor="link"
              data-cursor-label={t("nav.switchToEn")}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
                locale === "en" ? "bg-white/10 text-white" : "text-neutral-400 hover:text-white"
              )}
              aria-label="English"
            >
              EN
            </button>
          </div>
        </div>

        <motion.button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          className="flex size-10 items-center justify-center rounded-xl text-neutral-400 transition-colors duration-300 hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: motionConfig.duration.fast }}
              >
                <X className="size-5" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: motionConfig.duration.fast }}
              >
                <Menu className="size-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: motionConfig.duration.normal, ease: motionConfig.easing.soft }}
            className="overflow-hidden border-t border-white/[0.06] bg-[#0a0a0a]/95 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-1 px-6 py-4"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.03, duration: motionConfig.duration.fast }}
                >
                  <NavLink href={link.href} label={t(`nav.${link.labelKey}`)} onClick={() => setMobileOpen(false)} />
                </motion.div>
              ))}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => { setCursorEnabled(!cursorEnabled); setMobileOpen(false); }}
                  data-cursor="link"
                  data-cursor-label={cursorEnabled ? t("nav.cursorOff") : t("nav.cursorOn")}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors",
                    cursorEnabled ? "bg-white/10 text-white" : "text-neutral-500"
                  )}
                  aria-label={cursorEnabled ? "Desativar cursor animado" : "Ativar cursor animado"}
                >
                  <MousePointer2 className="size-4" />
                  <span>{cursorEnabled ? t("nav.cursorOn") : t("nav.cursorOff")}</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setLocale("pt"); setMobileOpen(false); }}
                  data-cursor="link"
                  data-cursor-label={t("nav.switchToPt")}
                  className={cn(
                    "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                    locale === "pt" ? "bg-white/10 text-white" : "text-neutral-400 hover:text-white"
                  )}
                >
                  PT
                </button>
                <button
                  type="button"
                  onClick={() => { setLocale("en"); setMobileOpen(false); }}
                  data-cursor="link"
                  data-cursor-label={t("nav.switchToEn")}
                  className={cn(
                    "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                    locale === "en" ? "bg-white/10 text-white" : "text-neutral-400 hover:text-white"
                  )}
                >
                  EN
                </button>
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
