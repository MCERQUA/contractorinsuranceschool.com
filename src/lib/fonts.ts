import { Archivo, Mulish } from "next/font/google";

// Body font — Mulish (clean humanist sans; legible for dense coverage copy)
export const bodyFont = Mulish({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Heading font — Archivo (geometric, engineered, structural — mass-timber feel)
export const headingFont = Archivo({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});
