"use client";

import { motion, type Variant } from "framer-motion";
import { cn } from "@/lib/utils";
import { motionConfig } from "@/lib/motion";

type RevealVariant = "default" | "blur" | "stagger" | "cta" | "fadeOnly";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
  variant?: RevealVariant;
}

const variants: Record<
  RevealVariant,
  { hidden: Variant; visible: Variant; transition?: object }
> = {
  default: {
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
    transition: {
      duration: motionConfig.duration.reveal,
      delay: 0.05,
      ease: motionConfig.easing.subtle,
    },
  },
  fadeOnly: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: {
      duration: motionConfig.duration.normal,
      delay: 0.05,
      ease: motionConfig.easing.subtle,
    },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
    },
    transition: {
      duration: motionConfig.duration.slow,
      ease: motionConfig.easing.smooth,
    },
  },
  stagger: {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
    transition: {
      duration: motionConfig.duration.normal,
      ease: motionConfig.easing.soft,
    },
  },
  cta: {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    transition: {
      duration: motionConfig.duration.normal,
      ease: motionConfig.easing.out,
    },
  },
};

export function SectionReveal({
  children,
  className,
  delay = 0,
  once = true,
  amount = 0.1,
  variant = "default",
}: SectionRevealProps) {
  const v = variants[variant];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={
        variant === "stagger"
          ? ({ hidden: {}, visible: v.visible } as const)
          : {
              hidden: v.hidden,
              visible: {
                ...v.visible,
                transition: {
                  ...(v.transition as object),
                  ...(delay !== undefined ? { delay } : {}),
                },
              } as Variant,
            }
      }
      transition={variant !== "stagger" ? v.transition : undefined}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChild({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: motionConfig.duration.normal,
            ease: motionConfig.easing.soft,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
