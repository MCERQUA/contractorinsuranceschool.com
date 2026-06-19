import type { Config } from "tailwindcss";

/* ============================================================
   GLULAM MANUFACTURER INSURANCE — "Engineered Timber" palette
   Token NAMES are inherited from the shared component architecture;
   VALUES are remapped to navy (primary) / amber (secondary) / honey (accent).
   clay = navy · sage = amber · gold = honey · cream = paper · sand = stone
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
        sand: "#F1ECE3",           // alt section bg (stone)
        white: "#FFFFFF",          // cards
        // === Primary — Mill Navy (token name: clay) ===
        clay: {
          DEFAULT: "#173A5E",      // primary — deep industrial navy
          dark: "#0F2841",
          light: "#2C547F",
          50: "#EEF2F7",
          100: "#D6E0EC",
          200: "#AEC3DA",
          300: "#7E9DBF",
          400: "#4E72A0",
          500: "#2C547F",
          600: "#173A5E",
          700: "#0F2841",
          800: "#0A1D33",
          900: "#061322",
        },
        // === Secondary — Glulam Amber (token name: sage) ===
        sage: {
          DEFAULT: "#C2772A",      // secondary — kiln amber / glue-lam wood
          dark: "#9C5C1B",
          light: "#E0A45A",
          50: "#FBF1E6",
          100: "#F5DFC4",
          200: "#ECC391",
          300: "#E0A45A",
          400: "#CE8A38",
          500: "#C2772A",
          600: "#9C5C1B",
          700: "#7C4814",
        },
        // === Accent — Honey (token name: gold) ===
        gold: {
          DEFAULT: "#E0A45A",      // accent — warm honey highlight
          dark: "#C2772A",
          light: "#ECC391",
          50: "#FBF3E8",
          100: "#F7E6CE",
          200: "#ECC391",
          300: "#E0A45A",
          400: "#D9A441",
          500: "#C2772A",
          600: "#9C5C1B",
        },
        // === Text ===
        espresso: "#16222E",       // headings (deep navy-charcoal ink)
        cocoa: "#43505E",          // body (graphite)
        mocha: "#6B7785",          // muted (slate)
        // === Borders / dividers ===
        adobe: "#E4DDCF",          // warm birch border
        adobeDark: "#D2C8B4",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        // Beam-ish rounded shapes — modern, slightly squared vs adobe arch
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #FBF8F3 0%, #F6EFE3 40%, #FBF1E6 70%, #FBF8F3 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(194,119,42,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(23,58,94,0.07) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #173A5E 0%, #2C547F 100%)",
        "sage-gradient": "linear-gradient(135deg, #C2772A 0%, #E0A45A 100%)",
        "gold-gradient": "linear-gradient(135deg, #E0A45A 0%, #ECC391 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(23, 58, 94, 0.20), 0 4px 12px -6px rgba(22, 34, 46, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(23, 58, 94, 0.25), 0 10px 30px -10px rgba(22, 34, 46, 0.10)",
        card: "0 2px 8px -2px rgba(22, 34, 46, 0.06), 0 1px 3px -1px rgba(22, 34, 46, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(23, 58, 94, 0.22), 0 8px 20px -8px rgba(22, 34, 46, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(23, 58, 94, 0.10)",
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
