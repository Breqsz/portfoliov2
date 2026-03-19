"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { motionConfig } from "@/lib/motion";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
  variant?: "default" | "ghost" | "primary";
  target?: string;
  rel?: string;
  /** Label shown by custom cursor on hover (e.g. "Ver projetos") */
  cursorLabel?: string;
}

export function MagneticButton({
  children,
  className,
  strength = 0.35,
  onClick,
  href,
  variant = "default",
  target,
  rel,
  cursorLabel,
}: MagneticButtonProps) {
  const reducedMotion = useReducedMotion();
  const magnetic = useMagneticEffect({
    strength: reducedMotion ? 0 : strength,
    // "Smooth" - menos rigidez e um leve aumento de amortecimento
    // para reduzir sensação de "tranco" no hover.
    stiffness: 270,
    damping: 34,
  });

  const sharedStyles = {
    x: reducedMotion ? 0 : magnetic.x,
    y: reducedMotion ? 0 : magnetic.y,
  };

  const baseClasses = cn(
    "group relative flex min-h-[44px] items-center overflow-hidden rounded-xl px-6 py-3.5 text-sm font-medium",
    // Deixa o Framer controlar a animação de transform/translate.
    "transition-[border-color,box-shadow,background-color] duration-300",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]",
    "active:scale-[0.99]"
  );

  const variantClasses = {
    default:
      "border border-white/[0.12] bg-white/[0.03] text-white hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_0_40px_-12px_rgba(59,130,246,0.2)]",
    ghost:
      "border border-white/[0.08] bg-transparent text-neutral-300 hover:border-white/15 hover:bg-white/[0.03] hover:text-white",
    primary:
      "border border-blue-500/40 bg-blue-500/10 text-blue-400 hover:border-blue-500/60 hover:bg-blue-500/15 hover:shadow-[0_0_40px_-12px_rgba(59,130,246,0.25)]",
  };

  const buttonContent = (
    <>
      <motion.span
        className="relative z-10 flex items-center justify-center gap-2"
        transition={{ duration: motionConfig.duration.fast }}
      >
        {children}
      </motion.span>
      {/* Hover glow - delayed expansion for premium feel */}
      <span
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 shadow-[inset_0_0_60px_-20px_rgba(59,130,246,0.15)] transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
    </>
  );

  const commonProps = {
    onMouseMove: magnetic.handleMouseMove,
    onMouseLeave: magnetic.handleMouseLeave,
    style: sharedStyles,
    className: cn(baseClasses, variantClasses[variant], className),
  };

  if (href) {
    return (
      <motion.a
        ref={magnetic.ref as React.RefObject<HTMLAnchorElement>}
        {...commonProps}
        href={href}
        data-cursor="link"
        {...(cursorLabel ? { "data-cursor-label": cursorLabel } : {})}
        target={target}
        rel={rel}
        onClick={(e) => {
          if (href.startsWith("#")) {
            e.preventDefault();
            document.querySelector(href)?.scrollIntoView({
              behavior: "smooth",
            });
          }
          onClick?.();
        }}
        // Evita conflito com o "y" vindo do efeito magnético (spring).
        whileHover={reducedMotion ? {} : {}}
        whileTap={reducedMotion ? {} : { scale: 0.99 }}
        transition={{ duration: motionConfig.duration.fast, ease: motionConfig.easing.smooth }}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={magnetic.ref as React.RefObject<HTMLButtonElement>}
      {...commonProps}
      type="button"
      onClick={onClick}
      whileHover={reducedMotion ? {} : {}}
      whileTap={reducedMotion ? {} : { scale: 0.99 }}
      transition={{ duration: motionConfig.duration.fast, ease: motionConfig.easing.smooth }}
    >
      {buttonContent}
    </motion.button>
  );
}
