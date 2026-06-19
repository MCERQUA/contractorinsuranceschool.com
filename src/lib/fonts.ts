import { Sora, Inter } from "next/font/google";

// Body font — Inter (clean, legible for dense coverage copy)
export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Heading font — Sora (geometric, structural, modern framing feel)
export const headingFont = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});
