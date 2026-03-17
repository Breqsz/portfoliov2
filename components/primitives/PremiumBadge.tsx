"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { motionConfig } from "@/lib/motion";

interface PremiumBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function PremiumBadge({ children, className }: PremiumBadgeProps) {
  return (
    <motion.span
      className={cn(
        "cursor-default rounded-full border border-white/10 bg-white/[0.02] px-4 py-1.5 text-sm text-neutral-400 backdrop-blur-sm",
        "transition-colors duration-300 hover:border-white/20 hover:text-neutral-300",
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={motionConfig.easing.springSoft}
    >
      {children}
    </motion.span>
  );
}
