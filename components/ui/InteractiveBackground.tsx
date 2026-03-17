"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { LightPillar } from "@/components/ui/LightPillar";

const gridSize = 64;

export function InteractiveBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* LightPillar WebGL - bem discreto para não competir com conteúdo */}
      {!reducedMotion && (
        <div className="absolute inset-0 opacity-[0.22]" style={{ mixBlendMode: "screen" }}>
          <LightPillar
            topColor="#5227FF"
            bottomColor="#FF9FFC"
            intensity={0.5}
            rotationSpeed={0.2}
            glowAmount={0.0008}
            pillarWidth={3}
            pillarHeight={0.4}
            noiseIntensity={0.35}
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
          className="absolute inset-0 opacity-[0.02]"
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

      {/* Blur orbs - bem suaves para não competir com seções */}
      {!reducedMotion && (
        <>
          <motion.div
            className="absolute h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-[100px]"
            style={{ left: "10%", top: "20%" }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 15, 0],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute h-[260px] w-[260px] rounded-full bg-purple-500/10 blur-[80px]"
            style={{ right: "15%", top: "50%" }}
            animate={{
              x: [0, -25, 15, 0],
              y: [0, 25, -10, 0],
              opacity: [0.18, 0.28, 0.18],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[15%] left-[20%] h-[220px] w-[220px] rounded-full bg-blue-500/5 blur-[90px]"
            animate={{
              x: [0, 15, -25, 0],
              y: [0, -15, 20, 0],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {/* Gradient mesh - bem discreto */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -left-1/2 top-0 h-full w-full bg-[radial-gradient(ellipse_80%_60%_at_30%_20%,rgba(59,130,246,0.03),transparent_50%)]"
          animate={reducedMotion ? {} : { opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-1/2 top-1/2 h-full w-full bg-[radial-gradient(ellipse_60%_80%_at_70%_50%,rgba(139,92,246,0.02),transparent_50%)]"
          animate={reducedMotion ? {} : { opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Partículas leves - opacidade reduzida */}
      {!reducedMotion && (
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute size-1 rounded-full bg-blue-500/10"
            style={{
              left: `${15 + (i * 7) % 70}%`,
              top: `${10 + (i * 11) % 80}%`,
            }}
            animate={{
              y: [0, -80],
              opacity: [0.1, 0],
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
