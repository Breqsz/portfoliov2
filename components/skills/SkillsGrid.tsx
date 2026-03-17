"use client";

import { motion } from "framer-motion";
import { Box, Server, Container, Shield, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { motionConfig } from "@/lib/motion";
import { skillCategories } from "@/lib/data/skills";

const icons = [Box, Server, Container, Shield, Users];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12, rotateY: -4 },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: {
      duration: motionConfig.duration.normal,
      ease: motionConfig.easing.soft,
    },
  },
};

export function SkillsGrid() {
  return (
    <motion.div
      className="grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-5"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {skillCategories.map((category, catIndex) => {
        const Icon = icons[catIndex];
        return (
          <motion.div
            key={category.id}
            variants={item}
            className={cn(
              "group cursor-default rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm",
              "transition-[border-color,background-color,box-shadow] duration-500",
              "hover:border-white/[0.1] hover:bg-white/[0.03] hover:shadow-glow-soft"
            )}
            style={{ transformOrigin: "center bottom" }}
            whileHover={{ y: -2 }}
          >
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-white/5 text-neutral-500 transition-colors duration-300 group-hover:bg-blue-500/10 group-hover:text-blue-400/80">
              {Icon && <Icon className="size-5" aria-hidden />}
            </div>
            <h3 className="font-semibold text-white">{category.title}</h3>
          </div>
          <ul className="mt-4 space-y-2">
            {category.skills.map((skill) => (
              <li key={skill} className="ds-body-muted transition-colors group-hover:text-neutral-400">
                {skill}
              </li>
            ))}
          </ul>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
