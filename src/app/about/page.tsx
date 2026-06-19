import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Stats } from "@/components/sections/Stats";
import { CTABand } from "@/components/sections/CTABand";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE, CREDENTIALS } from "@/lib/site";
import { ArrowRight, HardHat, ShieldCheck, Award, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "About Glulam Manufacturer Insurance | Contractors Choice Agency",
  description:
    "Glulam Manufacturer Insurance is the timber-manufacturer-focused division of Contractors Choice Agency, founded in 2005 by former contractor Josh Cotner. Products liability, workers' comp, property, and inland marine for glulam plants. Licensed all 50 states.",
  alternates: { canonical: `${SITE.url}/about` },
};

const values = [
  { icon: HardHat, title: "Contractor-first, always", desc: "Josh spent years in the trades before starting the agency. We speak the language of manufacturing because we know what happens when coverage fails at claim time." },
  { icon: ShieldCheck, title: "Coverage that closes the gaps", desc: "Products liability exclusions, kiln/press equipment gaps, and inland marine for oversized beams — we address the exposures standard markets miss." },
  { icon: Award, title: "A-rated markets only", desc: "We shop carriers with the financial strength and timber manufacturing experience to be there when a beam failure or kiln fire claim hits." },
  { icon: Handshake, title: "Honest, no-pressure advice", desc: "If you don't need a line of coverage, we'll tell you. We earn trust by being straight about what your operation actually requires." },
];

const timeline = [
  { year: "2005", title: "Contractors Choice Agency founded", desc: "Josh Cotner opens CCA in Chandler, AZ, after years working in the trades — built to insure contractors and manufacturers the right way." },
  { year: "15 yrs", title: "Expanded to specialty manufacturer markets", desc: "After placing programs for dozens of specialty contractor categories, CCA extends expertise to timber manufacturing operations with unique risk profiles." },
  { year: "Today", title: "Dedicated glulam manufacturer division", desc: "Glulam Manufacturer Insurance focuses CCA's expertise on timber producers — plants where products liability, kiln fires, and oversized transit are the real risks." },
];

export default function AboutPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE.url}/about` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main>
        <section className="relative bg-warm-radial pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="pill-clay">About us</span>
              <h1 className="mt-5 font-heading font-extrabold text-espresso text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Built by a contractor,{" "}
                <span className="bg-gradient-to-r from-clay via-clay-light to-gold-dark bg-clip-text text-transparent">
                  for manufacturers
                </span>
                .
              </h1>
              <p className="mt-6 lead">
                Glulam Manufacturer Insurance is the timber-manufacturer-focused division of Contractors
                Choice Agency — founded in 2005 by Josh Cotner, a former contractor who knows exactly
                what happens when a products liability exclusion shows up in a claim denial.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link href="/quote" className="btn-primary">Get a quote <ArrowRight className="h-5 w-5" /></Link>
                <Link href="/contact" className="btn-secondary">Talk to our team</Link>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div className="rounded-t-[12rem] rounded-b-3xl overflow-hidden border-4 border-white shadow-warm-lg">
                <img
                  src="/images/mill-portrait.jpg"
                  alt="A glulam manufacturing plant manager on the production floor"
                  className="w-full h-[360px] md:h-[440px] object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Credentials bar */}
        <section className="bg-white border-y border-adobe">
          <div className="container-wide py-6">
            <FadeIn>
              <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                {CREDENTIALS.map((c) => (
                  <li key={c.label} className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-espresso">
                    <ShieldCheck className="h-4 w-4 text-sage" />
                    {c.label}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* Story / timeline */}
        <section className="bg-cream py-16 md:py-24">
          <div className="container-tight">
            <FadeIn className="max-w-2xl mb-12">
              <span className="eyebrow"><span className="h-px w-8 bg-clay" />Our story</span>
              <h2 className="mt-3 h-section">From the jobsite to the agency.</h2>
              <p className="mt-4 lead">
                Josh Cotner ran equipment, read specs, and filed certificates before founding CCA in 2005.
                That background is why we understand what's at stake when a glulam beam fails and the
                manufacturer's GL carrier cites a products exclusion.
              </p>
            </FadeIn>
            <div className="space-y-6">
              {timeline.map((t, i) => (
                <FadeIn key={t.title} delay={i * 0.08}>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-6 rounded-3xl bg-white border border-adobe shadow-card">
                    <div className="md:w-40 flex-shrink-0">
                      <span className="inline-flex px-4 py-2 rounded-full bg-clay-gradient text-white font-heading font-extrabold">
                        {t.year}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-espresso">{t.title}</h3>
                      <p className="mt-1 text-mocha leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <Stats />

        {/* Values */}
        <section className="bg-sonoran-sand py-16 md:py-24">
          <div className="container-wide">
            <FadeIn className="max-w-2xl mb-12">
              <span className="eyebrow"><span className="h-px w-8 bg-clay" />What we stand for</span>
              <h2 className="mt-3 h-section">Four things we won't compromise on.</h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v, i) => (
                <FadeIn key={v.title} delay={i * 0.06}>
                  <div className="h-full rounded-3xl bg-white border border-adobe p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sage/10 text-sage mb-4">
                      <v.icon className="h-6 w-6" strokeWidth={2.2} />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-espresso">{v.title}</h3>
                    <p className="mt-2 text-sm text-mocha leading-relaxed">{v.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
