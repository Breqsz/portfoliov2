"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  title: string;
  className?: string;
  headingId?: string;
}

export function SectionHeading({
  number,
  title,
  className,
  headingId,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", className)}>
      {number && (
        <p className="ds-section-label">{number}</p>
      )}
      <h2
        id={headingId}
        className="mt-2 text-2xl font-semibold text-white sm:text-3xl"
      >
        {title}
      </h2>
    </div>
  );
}
