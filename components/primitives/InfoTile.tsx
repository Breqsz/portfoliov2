"use client";

import { cn } from "@/lib/utils";

interface InfoTileProps {
  label?: string;
  value: React.ReactNode;
  className?: string;
}

export function InfoTile({ label, value, className }: InfoTileProps) {
  return (
    <div
      className={cn(
        "ds-surface ds-surface-hover p-5",
        className
      )}
    >
      {label && (
        <p className="ds-caption font-medium tracking-wider">{label}</p>
      )}
      <div className="mt-2 text-white">{value}</div>
    </div>
  );
}
