import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Glulam Manufacturer Insurance | Contractors Choice Agency",
    template: "%s | Glulam Manufacturer Insurance",
  },
  description: SITE.description,
  keywords: [
    "glulam manufacturer insurance",
    "glue laminated timber insurance",
    "glulam products liability",
    "mass timber manufacturer insurance",
    "engineered wood products liability",
    "glulam plant workers compensation",
    "glulam inland marine transit coverage",
    "timber manufacturer commercial property",
    "glulam beam manufacturer insurance",
    "structural timber manufacturer insurance",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "Glulam Manufacturer Insurance | Contractors Choice Agency",
    description:
      "Specialized insurance for glulam timber manufacturers — products liability, workers' comp, commercial property, inland marine. Licensed all 50 states. 15-min quotes.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Glulam Manufacturer Insurance — glulam timber plant coverage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glulam Manufacturer Insurance | Contractors Choice Agency",
    description:
      "Specialized insurance for glulam timber manufacturers. Products liability, workers' comp, commercial property, inland marine. 15-minute quotes.",
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
      "Products Liability Insurance for Glulam Manufacturers",
      "General Liability Insurance for Timber Manufacturers",
      "Workers' Compensation for Glulam Plant Workers",
      "Commercial Auto Insurance for Oversized Beam Transport",
      "Commercial Property Insurance for Glulam Plants",
      "Inland Marine / Transit Coverage for Architectural Glulam",
      "Professional Liability (E&O) for Timber Engineering",
      "Umbrella / Excess Liability Insurance",
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
