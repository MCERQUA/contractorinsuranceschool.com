import type { Config } from "tailwindcss";

/* ============================================================
   FRAMING CONTRACTOR INSURANCE — "Timber Frame" palette
   Token NAMES are inherited from the shared component architecture;
   VALUES are remapped to forest-green (primary) / copper (secondary) / amber (accent).
   clay = forest green · sage = copper · gold = amber · cream = paper · sand = stone
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
        cream: "#FBF8F3",          // page background (warm paper)
        sand: "#F2EDE3",           // alt section bg (stone)
        white: "#FFFFFF",          // cards
        // === Primary — Forest Green (token name: clay) ===
        clay: {
          DEFAULT: "#1F4D3A",      // primary — deep framing forest green
          dark: "#163A2C",
          light: "#2E6B52",
          50: "#ECF3F0",
          100: "#CFE2D9",
          200: "#A3C5B3",
          300: "#6FA689",
          400: "#3E8362",
          500: "#2E6B52",
          600: "#1F4D3A",
          700: "#163A2C",
          800: "#0F2A20",
          900: "#091A13",
        },
        // === Secondary — Copper / Terracotta (token name: sage) ===
        sage: {
          DEFAULT: "#B5651D",      // secondary — copper / warm terracotta
          dark: "#8F4E14",
          light: "#D08A3E",
          50: "#FBF1E9",
          100: "#F5DFC9",
          200: "#ECC091",
          300: "#DFA45A",
          400: "#CE8534",
          500: "#B5651D",
          600: "#8F4E14",
          700: "#6F3C10",
        },
        // === Accent — Amber (token name: gold) ===
        gold: {
          DEFAULT: "#E0A45A",      // accent — warm amber highlight
          dark: "#C2853A",
          light: "#ECC391",
          50: "#FBF3E8",
          100: "#F7E6CE",
          200: "#ECC391",
          300: "#E0A45A",
          400: "#D9A441",
          500: "#C2853A",
          600: "#9C671B",
        },
        // === Text ===
        espresso: "#1A2620",       // headings (deep green-charcoal ink)
        cocoa: "#3F4A44",          // body (graphite-green)
        mocha: "#6B7872",          // muted (slate)
        // === Borders / dividers ===
        adobe: "#E2DCD0",          // warm birch border
        adobeDark: "#D0C8B8",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #FBF8F3 0%, #F4EFE4 40%, #FBF1E6 70%, #FBF8F3 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(181,101,29,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(31,77,58,0.07) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #1F4D3A 0%, #2E6B52 100%)",
        "sage-gradient": "linear-gradient(135deg, #B5651D 0%, #D08A3E 100%)",
        "gold-gradient": "linear-gradient(135deg, #E0A45A 0%, #ECC391 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(31, 77, 58, 0.20), 0 4px 12px -6px rgba(26, 38, 32, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(31, 77, 58, 0.25), 0 10px 30px -10px rgba(26, 38, 32, 0.10)",
        card: "0 2px 8px -2px rgba(26, 38, 32, 0.06), 0 1px 3px -1px rgba(26, 38, 32, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(31, 77, 58, 0.22), 0 8px 20px -8px rgba(26, 38, 32, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(31, 77, 58, 0.10)",
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
