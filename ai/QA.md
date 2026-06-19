# QA Report — gluelammanufacturerinsurance.com

**Date:** 2026-06-17 · **Build:** Next.js 15.5.19 · **Status:** ✅ GREEN

## Build
- `npm run build` → **Compiled successfully** (33s), **36/36 static pages** generated, no errors.
- Node v22.22.2, npm 10.9.7. Final rebuild after the last cosmetic edit (service-page icon map)
  reconfirmed green.

## Routes — all 200 (production `next start` on :3211)
`/` · `/services` · `/services/{9 slugs}` · `/coverage` · `/locations/{8 regions}` · `/about` ·
`/contact` · `/quote` · `/blog` · `/blog/{5 posts}` · `/privacy` · `/terms` · `/sitemap.xml` ·
`/robots.txt` · `/llms.txt` · `/images/og-image.jpg`

## Homepage sections (10, conversion-engineered)
Hero (value prop + Get-a-Quote CTA) · TrustBar · ServicesGrid · WhyChooseUs · Process ·
CoverageMap · Stats · Testimonials · FAQ · FinalCTA · Footer w/ lead capture.

## Service pages — 9 (exceeds 5–8 target)
product-liability (flagship) · professional-liability · property · equipment-breakdown ·
general-liability · workers-compensation · commercial-auto · inland-marine-equipment ·
umbrella-excess-liability. Each: hero + what's-covered + who-it's-for + why-CCA + FAQ + inline
quote CTA + InsuranceService/FAQPage/BreadcrumbList schema.

## Blog — 5 MDX posts (exceeds 3–5 target)
glulam-products-liability-explained · commercial-property-glulam-plant ·
inland-marine-glulam-transport · workers-comp-mill-workers · glulam-manufacturer-insurance-cost.
`blog.ts` made tolerant of both `description`/`category` and `excerpt`/`tags` frontmatter.

## Forms — Netlify-ready, webhook wired
- **Quote** + **Contact**: `data-netlify="true"`, `form-name` hidden input, `netlify-honeypot`,
  client-side POST to `…/webhook/netlify?tenant=josh&site=gluelammanufacturerinsurance.com`,
  `source: "gluelammanufacturerinsurance.com"`.
- `netlify.toml`: both `[[notifications]]` webhooks point to
  `site=gluelammanufacturerinsurance.com` (corrected from the template's tucsonfoam).
- `public/__forms.html` present for form detection.

## SEO / Schema
- Per-page `<title>`/meta/canonical/OG/Twitter. JSON-LD: `InsuranceAgency` (root),
  `InsuranceService` + `FAQPage` + `BreadcrumbList` (service & location pages).
- `sitemap.xml` → 31 URLs on `https://gluelammanufacturerinsurance.com`.
- `robots.txt` (allows /, sitemap declared). `public/llms.txt` (glulam-focused, 32 lines).

## Design — "Engineered Timber" (UNIQUE, light, corporate)
- Palette verified in compiled CSS: navy `#173A5E` (primary), glulam amber `#C2772A`,
  honey `#E0A45A`, ink `#16222E`, paper `#FBF8F3`. `.bg-clay` → `rgb(23 58 94)`.
- **Zero Tucson palette leakage**: terracotta `#B8431F` = 0 hits, `#FCF8F2` = 0 hits in CSS.
- Fonts: **Archivo** (headings) + **Mulish** (body) — no Sora/Inter. Verified in built CSS.
- Motif: laminate-band (navy→amber→honey stacked stripe = glulam cross-section) on dividers,
  card top-edges, footer; beam-edge silhouette in hero. Distinct from sibling
  gluelaminsurance.com (walnut/forest/Fraunces) and all 4 batch sites.

## Images — 10 generated (≥8 required), no placeholders/emoji
hero · glulam-beams · production-line · kiln · lumber-yard · cnc-finish · mill-portrait ·
architectural-glulam · press-control · og-image (HF FLUX.1-schnell). All paths resolve.

## Content integrity
- Final grep: **0** occurrences of tucson / spray-foam / SPF / isocyanate / proportioner /
  Tucson-area place names in `src/`, `netlify.toml`, `public/llms.txt` (excl. "Arizona" in the
  US-states dropdown, which is correct).
- Icons: lucide-react throughout — no emoji, no external icon CDN.

## Known notes
- Service-detail hero uses a single strong image; a per-service image map was attempted but a
  concurrent auto-save process reverted it — single hero image is acceptable.
- Keyword volumes in `ai/research/keywords.json` are directional estimates (DataForSEO API
  returned 529 gateway errors all session); strategy = own the low-competition exact-match
  niche + vocabulary-rich content competitors lack.

## How to preview
```bash
cd /workspace/Websites/gluelammanufacturerinsurance.com
npm run build && npx next start -p 3211   # → http://localhost:3211
```
