# Design System — gluelammanufacturerinsurance.com
## "Engineered Timber" — light, corporate, industrial-precision

Distinct from every other site in the 2026-06-17 batch AND from the sibling
gluelaminsurance.com (walnut brown / forest green / honey amber + Fraunces+Inter
— the *contractor* site). This is the **manufacturer** site: deeper, more
industrial, more "engineering-precision" — mass-timber plant vibe.

### Why this direction
Glulam manufacturers are heavy-industry B2B: plants, kilns, hydraulic presses,
CNC lines, lumber yards, delivery fleets. The audience is mill owners, plant
managers, operations/finance leads. The site must feel **established, engineered,
trustworthy, and warm (wood)** — not playful, not consumer-y. "Engineered Timber"
pairs deep industrial navy (authority / machinery / steel) with warm glulam amber
(kiln / wood / laminated beams). The signature motif is the **laminated layer** —
stacked horizontal bands that read as the cross-section of a glue-laminated beam.
Unique to glulam; ties the whole brand together.

### Palette (exact hexes)
| Token | Hex | Use |
|------|-----|-----|
| `paper` | `#FBF8F3` | page background (warm off-white) |
| `stone` | `#F1ECE3` | alt section background |
| `linen` | `#FFFFFF` | cards |
| `navy` (primary) | `#173A5E` | primary brand — buttons, nav, heading accents |
| `navy-dark` | `#0F2841` | hover / deep navy |
| `navy-light` | `#2C547F` | tints |
| `amber` (secondary) | `#C2772A` | CTA highlight, warm pop, kiln/wood |
| `amber-dark` | `#9C5C1B` | amber hover |
| `amber-light` | `#E0A45A` | amber tint |
| `copper` (accent) | `#8A3D14` | sparingly — deep hover, hairline accents |
| `ink` | `#16222E` | headings text |
| `graphite` | `#43505E` | body text |
| `slate` | `#6B7785` | muted text |
| `birch` | `#E4DDCF` | warm borders/dividers |
| `birch-dark` | `#D2C8B4` | stronger borders |

Navy + amber is the hero duo (industrial B2B — steel + wood). Copper is a minor
deep accent only. No green (sibling + Alpine + sage own green). No purple/violet/teal
(other batch sites own those).

### Typography
- **Headings: "Archivo"** (400/600/700/800) — geometric, engineered, structural.
  Mass-timber engineering-drawing feel. Distinct from Sora/Outfit/Fraunces/Bricolage.
- **Body: "Mulish"** (400/500/600/700) — clean humanist sans, excellent
  legibility for dense coverage copy. Distinct from Inter/DM Sans/Source Sans/Manrope.
- Tight heading letter-spacing (-0.02em), generous body line-height.

### Motif / shape language — "lam-line" (laminated layers)
- **Laminate band**: thin stacked horizontal lines (navy/amber, varying widths)
  that read as the laminations of a glulam beam cross-section. Section dividers,
  horizon/band accent, footer top edge.
- **Beam card**: cards with a thin stacked-layer top edge (3-4 hairline stripes)
  instead of tucsonfoam's adobe-arch.
- **Finger-joint chevron**: subtle zigzag accent (finger joints between lamstock),
  used sparingly on dividers / process timeline.
- **Wood-grain texture**: faint diagonal grain on hero/CTA bands (CSS gradient).
- Generous radius (1rem–2rem), modern but squarer than tucsonfoam (industrial, not
  adobe). Cards `rounded-2xl`/`rounded-3xl`, buttons pill `rounded-full`.

### Component treatment (keep token NAMES, remap VALUES)
Same component architecture as tucsonfoam (proven). Remap palette tokens:
`clay→navy`, `sage→amber`, `gold→amber-light`. Shadow tokens `warm→beam`/`card`.
Buttons: `.btn-primary`=navy, `.btn-amber`=amber (replaces btn-sage),
`.btn-secondary`=white w/ navy border.

### Image treatment
Warm industrial photography — kiln amber + steel navy lighting, real machinery,
real lumber, hi-vis + hard-hat workers. Consistent warm-neutral grade across all 9
generated images. OG image branded navy/amber with lam-line divider.

### Motion
`motion` scroll-reveal, slow zoom on hero, animated laminate band, animated stat
counters, FAQ accordion, lenis smooth scroll, sticky responsive nav. Polished, not
gimmicky. `prefers-reduced-motion` respected.
