# Framing Contractor Insurance — Build QA

**Domain:** framingcontractorinsurance.com
**Niche:** Insurance for wood framing & rough-carpentry contractors (CCA division)
**Identity:** "Timber Frame" — forest-green (primary) / copper (secondary) / amber (accent); Sora + Inter; stud-wall + blueprint-grid motif.

## Build checklist
- [x] Next.js 15 (app router) + React 19 + Tailwind + TS + motion + lenis
- [x] 6–10 section homepage (Hero, TrustBar, ServicesGrid, WhyChooseUs, Process, CoverageMap, Stats, Testimonials, FAQ, FinalCTA)
- [x] 8 service pages (general-liability, workers-compensation, commercial-auto, builders-risk, inland-marine-equipment, property, umbrella-excess-liability, contractors-bonds)
- [x] 8 location pages (regions)
- [x] Blog with 5 niche posts
- [x] Quote + contact forms → Netlify webhook (tenant=josh&site=framingcontractorinsurance.com)
- [x] 20 FAQs on homepage + each service + each location page (FAQPage JSON-LD)
- [x] Full SEO: sitemap.ts, robots.ts, llms.txt, per-page OG/Twitter, JSON-LD (InsuranceAgency, InsuranceService, FAQPage, BreadcrumbList, BlogPosting)
- [x] ≥10 generated images (11 via HF FLUX.1-schnell)
- [x] `npm run build` GREEN
- [x] All files committed (incl. package.json, netlify.toml)

## Key niche facts (accuracy anchors)
- Workers' comp class code: **NCCI 5403 (Carpentry)**.
- GL pain point: height exclusions (work over 1–2 stories / roof / truss) — we place height-friendly GL.
- Common losses: jobsite lumber theft (builder's risk / installation floater) and tool theft (tools & equipment / inland marine floater).
- Builder's risk = the structure/materials; tools floater = the gear. They are not the same.
- Typical GL cost: $1,500–$4,500/yr for $1M/$2M. Full program ≈ $6k–$20k/yr.
- Certificates & additional-insured endorsements turned around fast for GCs.
- Agency: Contractors Choice Agency, Chandler AZ, founded 2005, NPN 8608479, licensed all 50 states.
