"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { motionConfig } from "@/lib/motion";

type BentoSpan = "sm" | "default" | "lg" | "full";

interface BentoTileProps {
  children: React.ReactNode;
  span?: BentoSpan;
  index?: number;
  className?: string;
}

const spanClasses: Record<BentoSpan, string> = {
  sm: "lg:col-span-1",
  default: "lg:col-span-2",
  lg: "lg:col-span-3",
  full: "lg:col-span-4",
};

export function BentoTile({
  children,
  span = "default",
  index = 0,
  className,
}: BentoTileProps) {
  return (
    <motion.div
      custom={index}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        ...motionConfig.easing.springSoft,
        delay: index * 0.06,
      }}
      whileHover={{ y: -2 }}
      className={cn(
        "ds-surface ds-surface-hover group p-6",
        "hover:shadow-glow-soft",
        spanClasses[span],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
