"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { skillCategories } from "@/lib/data/skills";

const marqueeTechs = Array.from(
  new Set(skillCategories.flatMap((c) => c.skills))
);

function MarqueeTrack() {
  return (
    <div className="flex shrink-0 gap-12 pr-12">
      {marqueeTechs.map((tech) => (
        <span
          key={tech}
          className="ds-body-muted shrink-0 text-sm font-medium tracking-wide text-white/40"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

export function SkillsMarquee() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative mt-16 overflow-hidden py-4" aria-hidden>
      <motion.div
        className="flex w-max shrink-0"
        animate={reducedMotion ? {} : { x: "-50%" }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <MarqueeTrack />
        <MarqueeTrack />
      </motion.div>
    </div>
  );
}
