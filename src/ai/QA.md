# QA — Glulam Manufacturer Insurance Site

## Site
gluelammanufacturerinsurance.com
Scaffolded from: tucsonfoam.com (content replaced 2026-06-17)

## Build status
Run `npm run build` to verify

## Services (slugs match SERVICES in site.ts)
1. product-liability — Products Liability Insurance (FEATURED)
2. property — Commercial Property Insurance
3. equipment-breakdown — Boiler & Machinery / Equipment Breakdown
4. general-liability — General Liability Insurance
5. workers-compensation — Workers' Compensation
6. commercial-auto — Commercial Auto Insurance
7. inland-marine-equipment — Inland Marine & Stock Throughput
8. umbrella-excess-liability — Umbrella / Excess Liability

## Locations (slugs match LOCATIONS in site.ts)
1. pacific-northwest — Oregon & Washington
2. southeast — Alabama, Georgia, Arkansas
3. rocky-mountain — Montana, Idaho, Colorado
4. great-lakes — Minnesota, Wisconsin, Michigan
5. northeast — New England, NY, PA
6. california-nevada — CA & NV
7. texas-southwest — TX, NM, AZ
8. appalachia — TN, KY, VA, WV

## Blog posts (src/content/posts/)
1. glulam-products-liability-explained.mdx (2026-06-10)
2. workers-comp-mill-workers.mdx (2026-06-05)
3. inland-marine-glulam-transport.mdx (2026-05-28)
4. commercial-property-glulam-plant.mdx (2026-05-20)

## Known follow-ups
- Images/photos need glulam-specific imagery (currently spray foam images)
- OG image needs updating (currently /images/og-image.jpg — spray foam)
- Schema.org structured data has been updated but could add LocalBusiness for each location
- WhyChooseUs component still uses dynamic `item.icon` rendering — icons are imported in content.ts
- Process component uses dynamic `step.icon` — same note
