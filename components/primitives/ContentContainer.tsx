"use client";

import { cn } from "@/lib/utils";

interface ContentContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function ContentContainer({ children, className }: ContentContainerProps) {
  return (
    <div className={cn("mx-auto max-w-content px-6 lg:px-12 xl:px-16", className)}>
      {children}
    </div>
  );
}
