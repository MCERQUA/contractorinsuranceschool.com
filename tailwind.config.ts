import type { Config } from "tailwindcss";

/* ============================================================
   CONTRACTOR INSURANCE SCHOOL — "Dark Tech Education" palette
   Stitch design system: dark slate + emerald + JetBrains Mono labels
   clay = emerald-500 (interactive) · sage = slate-800 (card surface)
   cream = slate-900 (page bg) · sand = slate-800 · espresso = white
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // === Backgrounds (dark inverted scheme) ===
        cream: "#0f172a",             // dark slate-950 — main page background
        sand: "#1e293b",              // slate-800 — alternate section bg
        white: "#ffffff",
        // === Primary — Emerald (token name: clay) ===
        clay: {
          DEFAULT: "#10b981",         // emerald-500 — all CTAs, links, accents
          dark: "#059669",            // emerald-600
          light: "#34d399",           // emerald-400
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
        // === Secondary — Slate surface (token name: sage) ===
        sage: {
          DEFAULT: "#1e293b",         // slate-800 — card/section backgrounds
          dark: "#0f172a",            // slate-950
          light: "#334155",           // slate-700
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
        },
        // === Accent — Emerald shades (token name: gold) ===
        gold: {
          DEFAULT: "#10b981",
          dark: "#059669",
          light: "#34d399",
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
        },
        // === Text (inverted for dark bg) ===
        espresso: "#f1f5f9",          // slate-100 — headlines, primary text
        cocoa: "#cbd5e1",             // slate-300 — body text
        mocha: "#94a3b8",             // slate-400 — muted text
        // === Borders / dividers ===
        adobe: "#334155",             // slate-700 — card borders
        adobeDark: "#475569",         // slate-600
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        arch: "0.75rem",
        arch2: "1rem",
        "4xl": "0.75rem",
        "5xl": "1rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #0f172a 0%, #1e293b 40%, #0f172a 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(16,185,129,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(16,185,129,0.04) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
        "sage-gradient": "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
        "gold-gradient": "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
        "school-hero": "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)",
        "school-surface": "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)",
      },
      boxShadow: {
        warm: "0 4px 20px -8px rgba(16,185,129,0.20), 0 2px 8px -4px rgba(0,0,0,0.3)",
        "warm-lg": "0 12px 40px -15px rgba(16,185,129,0.25), 0 6px 20px -8px rgba(0,0,0,0.4)",
        card: "0 1px 4px -1px rgba(0,0,0,0.3), 0 1px 2px -1px rgba(0,0,0,0.2)",
        "card-hover": "0 8px 24px -8px rgba(16,185,129,0.30), 0 4px 12px -4px rgba(0,0,0,0.3)",
        "emerald-glow": "0 0 20px rgba(16,185,129,0.25)",
        arch: "0 0 0 1px rgba(51,65,85,1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "arch-rise": {
          "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
