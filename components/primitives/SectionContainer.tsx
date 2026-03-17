"use client";

import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionContainer({ children, className }: SectionContainerProps) {
  return (
    <div
      className={cn(
        "px-6 py-24 lg:px-12 xl:px-16",
        className
      )}
    >
      {children}
    </div>
  );
}
