/**
 * Global motion configuration for BREQ portfolio.
 * Premium easing and timing for a refined, tactile feel.
 */

export const motionConfig = {
  /** Soft, premium easing - feels Apple/Linear-like */
  easing: {
    smooth: [0.32, 0.72, 0, 1] as const,
    soft: [0.4, 0, 0.2, 1] as const,
    subtle: [0.25, 0.46, 0.45, 0.94] as const,
    out: [0.16, 1, 0.3, 1] as const,
    spring: { type: "spring" as const, stiffness: 400, damping: 30 },
    springSoft: { type: "spring" as const, stiffness: 300, damping: 25 },
  },
  duration: {
    instant: 0.1,
    fast: 0.2,
    normal: 0.35,
    slow: 0.5,
    reveal: 0.6,
  },
} as const;
