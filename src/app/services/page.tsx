import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { FadeIn } from "@/components/animations/FadeIn";
import { SERVICES, SITE } from "@/lib/site";
import {
  ShieldCheck, HardHat, FlaskConical, Truck, Wrench, FileCheck,
  Building2, Umbrella, PackageCheck, Factory, Gauge, Boxes, ArrowRight,
} from "lucide-react";

const ICONS = {
  ShieldCheck, HardHat, FlaskConical, Truck, Wrench, FileCheck, Building2, Umbrella,
  PackageCheck, Factory, Gauge, Boxes,
} as const;

export const metadata: Metadata = {
  title: "Glulam Manufacturer Insurance Coverage & Services",
  description:
    "Eight lines of insurance built for glulam timber manufacturers: products liability, general liability, workers' comp, commercial auto, property, inland marine, professional liability, and umbrella. Licensed all 50 states.",
  alternates: { canonical: `${SITE.url}/services` },
  openGraph: {
    title: "Glulam Manufacturer Insurance Coverage | Contractors Choice Agency",
    description:
      "Products liability, GL, workers' comp, commercial property, inland marine, professional liability, and umbrella — written specifically for glulam timber manufacturers.",
    url: `${SITE.url}/services`,
  },
};

export default function ServicesPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main>
        <section className="relative bg-warm-radial pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-tight text-center">
            <FadeIn>
              <span className="pill-clay">Coverage lines</span>
              <h1 className="mt-5 font-heading font-extrabold text-espresso text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Insurance built line-by-line for{" "}
                <span className="bg-gradient-to-r from-clay via-clay-light to-gold-dark bg-clip-text text-transparent">
                  glulam timber manufacturers
                </span>
                .
              </h1>
              <p className="mt-6 lead max-w-2xl mx-auto">
                Each policy below addresses a specific exposure in glulam manufacturing —
                from the products liability your GL excludes to the kiln and press equipment
                your property program needs to value correctly.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="bg-cream py-16 md:py-20">
          <div className="container-wide">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.map((s, i) => {
                const Icon = ICONS[s.icon as keyof typeof ICONS] ?? ShieldCheck;
                const featured = s.slug === "product-liability";
                return (
                  <FadeIn key={s.slug} delay={(i % 3) * 0.06}>
                    <Link
                      href={`/services/${s.slug}`}
                      className={`group relative block h-full p-7 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 ${
                        featured
                          ? "bg-espresso text-cream border-espresso shadow-warm-lg"
                          : "bg-white text-espresso border-adobe shadow-card hover:shadow-card-hover"
                      }`}
                    >
                      {featured && (
                        <span className="absolute -top-2.5 right-5 pill-gold !bg-gold !text-espresso !border-gold-dark">
                          Essential coverage
                        </span>
                      )}
                      <div
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl mb-4 ${
                          featured ? "bg-clay-gradient text-white" : "bg-clay/10 text-clay"
                        }`}
                      >
                        <Icon className="h-6 w-6" strokeWidth={2.2} />
                      </div>
                      <h2 className={`font-heading font-bold text-xl ${featured ? "text-cream" : "text-espresso"}`}>
                        {s.title}
                      </h2>
                      <p className={`mt-2 text-sm leading-relaxed ${featured ? "text-cream/80" : "text-mocha"}`}>
                        {s.description}
                      </p>
                      <span
                        className={`mt-5 inline-flex items-center gap-1 text-sm font-heading font-bold group-hover:gap-2 transition-all ${
                          featured ? "text-gold" : "text-clay"
                        }`}
                      >
                        Explore coverage
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        <CTABand
          title="Not sure which lines you need?"
          description="Most glulam manufacturers bundle products liability + property + workers' comp + inland marine into one coordinated program. We'll build the right mix in one call."
        />
      </main>
      <Footer />
    </>
  );
}
