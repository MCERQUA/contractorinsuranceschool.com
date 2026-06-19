import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { FAQ } from "@/components/sections/FAQ";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE, LOCATIONS } from "@/lib/site";
import { AZ_REGIONS } from "@/lib/content";
import Link from "next/link";
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Glulam Manufacturer Insurance — National Coverage, All 50 States",
  description:
    "Contractors Choice Agency writes glulam manufacturer insurance in all 50 states — Pacific Northwest, Southeast, Rocky Mountain, Great Lakes, Northeast, and everywhere timber manufacturing operates.",
  alternates: { canonical: `${SITE.url}/coverage` },
};

export default function CoveragePage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Coverage Area", item: `${SITE.url}/coverage` },
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
              <span className="pill-clay">Coverage Area</span>
              <h1 className="mt-5 font-heading font-extrabold text-espresso text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                National reach.{" "}
                <span className="bg-gradient-to-r from-clay via-clay-light to-gold-dark bg-clip-text text-transparent">
                  All 50 states, all timber markets.
                </span>
              </h1>
              <p className="mt-6 lead max-w-2xl mx-auto">
                Contractors Choice Agency places glulam manufacturer insurance programs in all 50 states —
                from Pacific Northwest Douglas-fir mills to Southeast SYP producers to Mountain West timber operations.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Regions list */}
        <section className="bg-sonoran-sand py-16 md:py-20">
          <div className="container-tight">
            <FadeIn className="max-w-2xl mb-10">
              <span className="eyebrow"><span className="h-px w-8 bg-clay" />Where we write</span>
              <h2 className="mt-3 h-section">Timber manufacturing regions we serve.</h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 gap-4">
              {AZ_REGIONS.map((region, i) => (
                <FadeIn key={region.name} delay={(i % 2) * 0.06}>
                  <div className="flex items-start gap-3 rounded-2xl bg-white border border-adobe p-5">
                    <MapPin className="h-5 w-5 text-clay flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-heading font-bold text-espresso">{region.name}</p>
                      <p className="text-sm text-mocha">{region.note}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn className="mt-10">
              <div className="rounded-3xl bg-espresso text-cream p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <p className="font-heading font-extrabold text-2xl">Featured regions</p>
                  <p className="text-cream/75 mt-1">Dedicated pages for key glulam manufacturing regions.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {LOCATIONS.map((l) => (
                    <Link
                      key={l.slug}
                      href={`/locations/${l.slug}`}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/10 text-cream font-heading font-semibold border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      {l.name} <ArrowRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Nationwide */}
        <section className="bg-cream py-16">
          <div className="container-tight">
            <FadeIn>
              <div className="rounded-[2rem] bg-warm-radial border border-adobe p-8 md:p-12 text-center">
                <CheckCircle2 className="h-10 w-10 text-sage mx-auto" />
                <h2 className="mt-4 font-heading font-extrabold text-espresso text-2xl md:text-3xl">
                  Licensed and writing in all 50 states
                </h2>
                <p className="mt-3 text-mocha max-w-2xl mx-auto leading-relaxed">
                  Whether your plant is in the Pacific Northwest, Southeast, Great Plains,
                  or anywhere in between — one agent, one coordinated program. NPN #8608479.
                </p>
                <Link href="/quote" className="btn-primary mt-6">
                  Get a quote <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        <FAQ
          eyebrow="Coverage questions"
          title={
            <>
              Coverage area{" "}
              <span className="text-clay">questions</span>
            </>
          }
          items={[
            {
              q: "Do you only insure glulam manufacturers in certain regions?",
              a: "No. Contractors Choice Agency is licensed in all 50 states and writes glulam manufacturer programs for plants anywhere in the country — Pacific Northwest, Southeast, Rocky Mountain, Great Lakes, Northeast, and everywhere in between.",
            },
            {
              q: "Can you write coverage if we ship to multiple states?",
              a: "Yes. We structure programs so your products liability, commercial property, workers' comp, and transit coverage coordinate across state lines without gaps.",
            },
            {
              q: "Do you understand the specific risks of Pacific Northwest timber manufacturing?",
              a: "Yes. We work with specialty timber markets that understand Douglas-fir and softwood glulam production, PNW kiln-dry operations, and the long-span architectural glulam market.",
            },
          ]}
          background="cream"
        />

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
