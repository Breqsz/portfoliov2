"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { LightPillar } from "@/components/ui/LightPillar";

const gridSize = 64;

export function InteractiveBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* LightPillar WebGL background - full viewport, subtle blend */}
      {!reducedMotion && (
        <div className="absolute inset-0 opacity-50" style={{ mixBlendMode: "screen" }}>
          <LightPillar
            topColor="#5227FF"
            bottomColor="#FF9FFC"
            intensity={0.7}
            rotationSpeed={0.3}
            glowAmount={0.002}
            pillarWidth={3}
            pillarHeight={0.4}
            noiseIntensity={0.5}
            pillarRotation={25}
            interactive={false}
            mixBlendMode="screen"
            quality="high"
          />
        </div>
      )}

      {/* Slow moving grid */}
      {!reducedMotion && (
        <motion.div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: `${gridSize}px ${gridSize}px`,
          }}
          animate={{ backgroundPosition: ["0px 0px", `${gridSize}px ${gridSize}px`] }}
          transition={{ duration: 90, repeat: Infinity, repeatType: "loop", ease: "linear" }}
        />
      )}

      {/* Blur orbs - soft floating */}
      {!reducedMotion && (
        <>
          <motion.div
            className="absolute h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[100px]"
            style={{ left: "10%", top: "20%" }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 15, 0],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute h-[320px] w-[320px] rounded-full bg-purple-500/15 blur-[80px]"
            style={{ right: "15%", top: "50%" }}
            animate={{
              x: [0, -25, 15, 0],
              y: [0, 25, -10, 0],
              opacity: [0.35, 0.5, 0.35],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[15%] left-[20%] h-[280px] w-[280px] rounded-full bg-blue-500/10 blur-[90px]"
            animate={{
              x: [0, 15, -25, 0],
              y: [0, -15, 20, 0],
              opacity: [0.3, 0.45, 0.3],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {/* Soft moving gradient mesh */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -left-1/2 top-0 h-full w-full bg-[radial-gradient(ellipse_80%_60%_at_30%_20%,rgba(59,130,246,0.06),transparent_50%)]"
          animate={reducedMotion ? {} : { opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-1/2 top-1/2 h-full w-full bg-[radial-gradient(ellipse_60%_80%_at_70%_50%,rgba(139,92,246,0.04),transparent_50%)]"
          animate={reducedMotion ? {} : { opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Drifting particles - lightweight, disabled when reduced motion */}
      {!reducedMotion && (
      <div className="absolute inset-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute size-1 rounded-full bg-blue-500/20"
            style={{
              left: `${15 + (i * 7) % 70}%`,
              top: `${10 + (i * 11) % 80}%`,
            }}
            animate={{
              y: [0, -80],
              opacity: [0.2, 0],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              repeatDelay: (i % 4) * 0.8,
            }}
          />
        ))}
      </div>
      )}

      {/* Subtle noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
