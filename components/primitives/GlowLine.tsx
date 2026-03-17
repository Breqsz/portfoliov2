"use client";

import { cn } from "@/lib/utils";

interface GlowLineProps {
  className?: string;
}

export function GlowLine({ className }: GlowLineProps) {
  return (
    <div
      className={cn(
        "h-px w-full bg-gradient-to-r from-transparent via-blue-500/25 to-transparent",
        "animate-gradient-flow",
        className
      )}
      aria-hidden
    />
  );
}
