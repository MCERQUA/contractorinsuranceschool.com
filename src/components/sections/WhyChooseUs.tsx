"use client";

import { ShieldCheck } from "lucide-react";
import { WHY_CHOOSE } from "@/lib/content";
import { FadeIn } from "@/components/animations/FadeIn";

export function WhyChooseUs() {
  return (
    <section id="why" className="relative bg-sonoran-sand py-20 md:py-28">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Sticky heading column */}
          <FadeIn className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="eyebrow">
              <span className="h-px w-8 bg-clay" />
              Why framers switch to us
            </span>
            <h2 className="mt-3 h-section">
              The coverage gaps that{" "}
              <span className="text-clay">cost framing contractors</span> the most.
            </h2>
            <p className="mt-4 lead">
              Most agents hand a framer a generic contractor policy and call it done. Then a fall
              claim hits and the height exclusion kicks in — or the lumber walks off the site and
              there&rsquo;s no coverage at all. We underwrite the parts of your operation everyone
              else leaves out.
            </p>

            <div className="mt-8 rounded-3xl bg-white border border-adobe shadow-card p-6">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-clay-gradient text-white">
                  <ShieldCheck className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <div>
                  <p className="font-heading font-bold text-espresso">
                    Run by people who know the trades
                  </p>
                  <p className="text-sm text-mocha mt-1 leading-relaxed">
                    Contractors Choice Agency was founded in 2005 by people from the trades. We&rsquo;ve
                    walked framing jobsites, read the height exclusions, and know what a stolen nailer
                    or a fall claim really costs a crew.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Reasons grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {WHY_CHOOSE.map((item, i) => (
              <FadeIn key={item.title} delay={(i % 2) * 0.06}>
                <div className="h-full rounded-3xl bg-white border border-adobe p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sage/10 text-sage mb-4">
                    <item.icon className="h-6 w-6" strokeWidth={2.2} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-espresso leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-mocha leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
