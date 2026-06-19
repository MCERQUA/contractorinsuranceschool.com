# Design System — Framing Contractor Insurance ("Timber Frame")

Light, corporate, trades-industrial. Distinct from sibling CCA sites.

## Palette (Tailwind token NAMES are shared across the component architecture; VALUES remapped here)
- **Primary — forest green** (`clay`): `#1F4D3A` (deep framing green), dark `#163A2C`, light `#2E6B52`
- **Secondary — copper / terracotta** (`sage`): `#B5651D`, dark `#8F4E14`, light `#D08A3E`
- **Accent — amber** (`gold`): `#E0A45A`
- Backgrounds: `cream #FBF8F3`, `sand #F2EDE3`, white
- Text: `espresso #1A2620` (headings), `cocoa #3F4A44` (body), `mocha #6B7872` (muted)
- Border: `adobe #E2DCD0`

## Typography
- Headings: **Sora** (geometric, structural) via next/font
- Body: **Inter**

## Motifs
- **Stud-wall band** (`horizon-band`): stacked green→copper→amber framing layers
- **Blueprint grid** (`grain`): faint engineering grid texture for hero/CTA bands
- Frame top-edge accent on cards (`card-arch::before`): green→copper→amber

## Components & motion
- motion (Framer) staggered hero entrances, scroll-reveal (`FadeIn`), count-up stats (`Counter`)
- lenis smooth scroll (`SmoothScroll`)
- All animations honor `prefers-reduced-motion`

## Generated imagery (11, HF FLUX.1-schnell)
hero, framing-walls, truss-roof, jobsite, crew-portrait, commercial-build,
scaffold-safety, lumber-package, blueprint-tools, nail-gun-action, og-image.
Warm natural-wood tones with forest-green/copper accents; photorealistic, no text.
