/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        "ds-bg": "var(--ds-bg)",
        "ds-surface": "var(--ds-surface)",
        "ds-fg": "var(--ds-fg)",
        "ds-fg-muted": "var(--ds-fg-muted)",
        accent: {
          blue: "#3b82f6",
          purple: "#8b5cf6",
        },
      },
      maxWidth: {
        content: "72rem",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
      },
      backgroundImage: {
        "gradient-accent":
          "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(59, 130, 246, 0.12)",
        "glow-soft": "0 0 60px -20px rgba(59, 130, 246, 0.1)",
        "glow-card": "0 0 60px -24px rgba(59, 130, 246, 0.15)",
      },
      transitionDuration: {
        "350": "350ms",
      },
    },
  },
  plugins: [],
};
