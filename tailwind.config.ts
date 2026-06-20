import type { Config } from "tailwindcss";

/* ============================================================
   CONTRACTOR INSURANCE INFO — "Editorial Information Hub" palette
   Stitch design system: clean white + electric blue + slate
   clay = blue-600 (interactive) · sage = slate-900 (dark sections)
   cream = white · sand = slate-50 · espresso = slate-900
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
        // === Backgrounds ===
        cream: "#ffffff",             // pure white page background
        sand: "#f8fafc",              // slate-50 alt section bg
        white: "#ffffff",
        // === Primary — Electric Blue (token name: clay) ===
        clay: {
          DEFAULT: "#2563eb",         // blue-600 — all CTAs, links, accents
          dark: "#1d4ed8",            // blue-700
          light: "#3b82f6",           // blue-500
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        // === Secondary — Near-black slate (token name: sage) ===
        sage: {
          DEFAULT: "#0f172a",         // slate-950 — dark hero/CTA sections
          dark: "#020617",            // almost black
          light: "#1e293b",           // slate-800
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
        },
        // === Accent — Blue shades (token name: gold) ===
        gold: {
          DEFAULT: "#2563eb",
          dark: "#1d4ed8",
          light: "#3b82f6",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
        },
        // === Text ===
        espresso: "#0f172a",          // slate-950 — headlines, dark text
        cocoa: "#334155",             // slate-700 — body text
        mocha: "#64748b",             // slate-500 — muted text
        // === Borders / dividers ===
        adobe: "#e2e8f0",             // slate-200 — editorial borders
        adobeDark: "#cbd5e1",         // slate-300
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "0.5rem",
        arch2: "0.75rem",
        "4xl": "0.5rem",
        "5xl": "0.75rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #ffffff 0%, #f8fafc 40%, #f1f5f9 70%, #ffffff 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(37,99,235,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(15,23,42,0.03) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
        "sage-gradient": "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        "gold-gradient": "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
        "info-hero": "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        "info-surface": "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)",
      },
      boxShadow: {
        warm: "0 4px 20px -8px rgba(37,99,235,0.15), 0 2px 8px -4px rgba(15,23,42,0.08)",
        "warm-lg": "0 12px 40px -15px rgba(37,99,235,0.20), 0 6px 20px -8px rgba(15,23,42,0.10)",
        card: "0 1px 4px -1px rgba(15,23,42,0.06), 0 1px 2px -1px rgba(15,23,42,0.04)",
        "card-hover": "0 8px 24px -8px rgba(37,99,235,0.18), 0 4px 12px -4px rgba(15,23,42,0.08)",
        arch: "0 0 0 1px rgba(226,232,240,1)",
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
