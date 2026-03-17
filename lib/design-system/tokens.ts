/**
 * BREQ Design System - Visual Tokens
 * Theme-ready, scalable token definitions.
 */

export const tokens = {
  /** Semantic colors - use CSS vars for theme switching */
  color: {
    background: "var(--ds-bg)",
    surface: "var(--ds-surface)",
    surfaceElevated: "var(--ds-surface-elevated)",
    foreground: "var(--ds-fg)",
    foregroundMuted: "var(--ds-fg-muted)",
    foregroundMutedAlt: "var(--ds-fg-muted-alt)",
    accent: "var(--ds-accent)",
    accentMuted: "var(--ds-accent-muted)",
    border: "var(--ds-border)",
    borderInteractive: "var(--ds-border-interactive)",
    glow: "var(--ds-glow)",
    glowSoft: "var(--ds-glow-soft)",
  },
  /** Raw accent values for gradients */
  accent: {
    blue: "#3b82f6",
    purple: "#8b5cf6",
    blueMuted: "rgba(59, 130, 246, 0.15)",
    purpleMuted: "rgba(139, 92, 246, 0.1)",
  },
  /** Spacing scale (px) */
  space: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    8: 32,
    10: 40,
    12: 48,
    16: 64,
    20: 80,
    24: 96,
  },
  /** Border radius */
  radius: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    full: "9999px",
  },
  /** Container max-widths */
  container: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    content: "1152px", // max-w-6xl = 72rem
  },
  /** Typography scale */
  fontSize: {
    xs: ["0.75rem", { lineHeight: "1rem" }],
    sm: ["0.875rem", { lineHeight: "1.25rem" }],
    base: ["1rem", { lineHeight: "1.5rem" }],
    lg: ["1.125rem", { lineHeight: "1.75rem" }],
    xl: ["1.25rem", { lineHeight: "1.75rem" }],
    "2xl": ["1.5rem", { lineHeight: "2rem" }],
    "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
    "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
    "5xl": ["3rem", { lineHeight: "1.1" }],
    "6xl": ["3.75rem", { lineHeight: "1.1" }],
    "7xl": ["4.5rem", { lineHeight: "1.1" }],
  },
  /** Transitions */
  transition: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
  },
  /** Z-index layers */
  zIndex: {
    base: 0,
    dropdown: 10,
    sticky: 50,
    overlay: 100,
    modal: 200,
    toast: 300,
  },
} as const;
