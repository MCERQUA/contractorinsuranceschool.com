import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Framing Contractor Insurance | Contractors Choice Agency",
    template: "%s | Framing Contractor Insurance",
  },
  description: SITE.description,
  keywords: [
    "framing contractor insurance",
    "rough carpentry insurance",
    "framing subcontractor insurance",
    "framer general liability",
    "framing workers compensation class 5403",
    "builder's risk framing",
    "contractor tools and equipment insurance",
    "framing crew insurance",
    "carpentry contractor insurance",
    "framer commercial auto insurance",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "Framing Contractor Insurance | Contractors Choice Agency",
    description:
      "Specialized insurance for framing & rough-carpentry contractors — general liability, workers' comp (class 5403), builder's risk, tools & equipment, commercial auto. Licensed all 50 states. 15-min quotes.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Framing Contractor Insurance — coverage for wood framing & rough carpentry crews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Framing Contractor Insurance | Contractors Choice Agency",
    description:
      "Specialized insurance for framing contractors. GL, workers' comp, builder's risk, tools & equipment, commercial auto. 15-minute quotes.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: "+18449675247",
    email: SITE.email,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.2622,
      longitude: -111.7826,
    },
    employee: {
      "@type": "Person",
      name: "Josh Cotner",
      jobTitle: "Founder & Insurance Agent",
    },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: [
      "General Liability Insurance for Framing Contractors",
      "Workers' Compensation for Framing Crews (Class 5403)",
      "Commercial Auto Insurance for Contractor Trucks & Trailers",
      "Builder's Risk Insurance for Framing Projects",
      "Tools & Equipment / Inland Marine for Framers",
      "Commercial Property Insurance for Framers' Shops & Yards",
      "Umbrella / Excess Liability Insurance",
      "Contractor License & Surety Bonds",
    ],
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
