// Rich, niche-accurate content blocks for Glulam Manufacturer Insurance.

import {
  PhoneCall, FileSearch, FileSignature, ShieldCheck,
  Building2, Truck, HardHat, Package,
} from "lucide-react";

/* ============================================================
   PROCESS — how getting insured with us works
   ============================================================ */
export const PROCESS = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Tell us about your plant operation",
    description:
      "15-min call or form. Crew size, production volume, equipment value, and the coverage lines your old carrier excluded.",
  },
  {
    step: "02",
    icon: FileSearch,
    title: "We shop specialty timber markets",
    description:
      "Niche markets that actually write glulam products liability — not generic manufacturer markets that carve it out.",
  },
  {
    step: "03",
    icon: FileSignature,
    title: "Bind a program built for timber",
    description:
      "Products liability + property + workers' comp + transit, coordinated so there are no gaps between your completed-operations and products coverage.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Claims support that moves fast",
    description:
      "When a beam failure claim arrives or a kiln fire occurs, you reach a person with context — not a queue. 2-hour response.",
  },
] as const;

/* ============================================================
   WHY CHOOSE US
   ============================================================ */
export const WHY_CHOOSE = [
  {
    icon: ShieldCheck,
    title: "Products liability that covers your manufactured beams",
    description:
      "Standard GL excludes products. We place products liability that covers structural claims arising from your glulam members after they leave the plant.",
  },
  {
    icon: HardHat,
    title: "Kiln and press room workers' comp",
    description:
      "Kiln-dry chamber operators, hydraulic press workers, and CNC saw operators face unique OSHA exposure profiles. Our programs reflect that.",
  },
  {
    icon: Truck,
    title: "Transit coverage for oversized members",
    description:
      "A 60-foot architectural glulam beam in transit is a unique inland marine risk. We build programs that cover it from your plant to the job site crane.",
  },
  {
    icon: Building2,
    title: "Commercial property for manufacturing operations",
    description:
      "Kilns, presses, CNC equipment, and lumber inventory don't fit generic property forms. We schedule your equipment at replacement cost.",
  },
  {
    icon: Package,
    title: "We place the hard timber risks",
    description:
      "Been declined over products claims, a loss run on a failed beam, or OSHA citations? We have E&S markets for manufacturers others won't touch.",
  },
  {
    icon: HardHat,
    title: "Run by a former contractor",
    description:
      "Josh Cotner knows how manufacturing operations work and what happens when coverage fails at claim time.",
  },
] as const;

/* ============================================================
   HOMEPAGE FAQ
   ============================================================ */
export const HOME_FAQS = [
  {
    q: "Do I need products liability if I already have general liability?",
    a: "Almost certainly yes. Standard GL policies contain 'your product' exclusions that void coverage once your glulam member leaves your plant and causes damage or injury in a structure. Products liability is the coverage that fills that gap.",
  },
  {
    q: "What's the biggest coverage gap for glulam manufacturers?",
    a: "Products liability exclusions in GL policies, followed by inadequate inland marine during transport. Most manufacturers discover these gaps only when a beam failure or transit loss occurs and their claim is denied.",
  },
  {
    q: "Do you insure glulam manufacturers in all 50 states?",
    a: "Yes. Contractors Choice Agency is licensed in all 50 states and has markets for glulam and mass-timber manufacturers whether your plant is in Oregon, the Southeast, or anywhere in between.",
  },
  {
    q: "How do you handle workers' comp for kiln and press room workers?",
    a: "Kiln-dry chamber operators, press room workers, and forklift/overhead crane operators each carry distinct OSHA exposure classifications. We match the right classification codes to your actual workflow so you're not overpaying or underinsured.",
  },
  {
    q: "Can you cover our engineering and specification work?",
    a: "Yes — if you produce custom-engineered glulam specs, load tables, or connection details, professional liability (E&O) covers claims arising from errors in those calculations that cause a structural failure.",
  },
  {
    q: "How fast can we get a quote?",
    a: "Typically 15 minutes on a call. For larger programs we may need a day or two to get the right markets involved, but we move fast and we tell you the timeline up front.",
  },
] as const;

/* ============================================================
   SERVICE DETAIL — per-service editorial content
   ============================================================ */
export interface ServiceDetail {
  heroBlurb: string;
  whatsCovered: string[];
  whoItsFor: string[];
  whyCca: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICE_DETAIL: Record<string, ServiceDetail> = {
  "product-liability": {
    heroBlurb:
      "Coverage for defective glulam products causing property damage or bodily injury in a completed building — the #1 risk for manufacturers. Standard GL excludes it.",
    whatsCovered: [
      "Bodily injury caused by your manufactured glulam members after they leave the plant",
      "Property damage arising from defective product — delamination, adhesive failure, dimensional error",
      "Defense costs when named in a contractor or building owner lawsuit",
      "Completed operations coverage extending years after delivery",
      "Products recall costs when a defective batch must be retrieved",
    ],
    whoItsFor: [
      "Glulam manufacturers supplying commercial and industrial buildings",
      "Plants producing architectural glulam for sports facilities and arenas",
      "Bridge and transportation structure beam suppliers",
      "Custom architectural glulam producers",
      "Any manufacturer whose GL policy has a 'your product' exclusion",
    ],
    whyCca: [
      "We place products liability with specialty timber markets — not generic woodworking carriers",
      "Combined GL + Products programs with unified limits available",
      "E&S market access for manufacturers with prior loss runs on beam failures",
    ],
    faqs: [
      {
        q: "Doesn't my general liability cover product failures?",
        a: "No — standard commercial GL policies contain a 'your product' exclusion. Once your glulam member leaves the plant and causes damage or injury in a structure, the GL policy excludes the claim. Products liability is specifically designed to cover this exposure.",
      },
      {
        q: "What limits do glulam manufacturers typically need?",
        a: "It depends on production volume and the types of structures your beams go into. Sports arenas and commercial construction often require $2M+ per occurrence from subcontractors and manufacturers. We can layer up to $25M+ with umbrella/excess coverage for large-volume producers.",
      },
    ],
  },
  "property": {
    heroBlurb:
      "All-risk commercial property coverage for glulam manufacturing plants — kilns, hydraulic presses, CNC equipment, and lumber inventory — built for combustible-dust and hot-work exposures.",
    whatsCovered: [
      "Manufacturing facility structure and outbuildings",
      "Kiln-dry chambers and heating systems",
      "Hydraulic and radio-frequency curing presses",
      "CNC machining centers and planers",
      "Finished-goods inventory and in-process lumber",
      "Business interruption during restoration period",
    ],
    whoItsFor: [
      "Glulam plant owners with significant equipment investment",
      "Manufacturers with kiln-dry operations",
      "Plants with CNC and precision machining equipment",
      "Operations with large lumber yard inventory",
    ],
    whyCca: [
      "Equipment scheduled at replacement cost — not ACV with depreciation arguments",
      "Business interruption with extended restoration period for specialty equipment lead times",
      "Equipment breakdown endorsement included — covers internal mechanical failure",
    ],
    faqs: [
      {
        q: "Why do I need replacement cost instead of actual cash value?",
        a: "A 10-year-old hydraulic press valued at ACV might receive $180,000 on a $400,000 replacement cost. For specialized glulam equipment with long lead times, ACV leaves you dramatically underinsured.",
      },
      {
        q: "Does commercial property cover kiln fires?",
        a: "Yes — fire is a covered peril. The key additions are equipment breakdown (for internal failures) and business interruption with an adequate restoration period, since replacing a kiln system can take 6-12 months.",
      },
    ],
  },
  "equipment-breakdown": {
    heroBlurb:
      "Covers sudden breakdown of the equipment your production depends on — hydraulic and radio-frequency curing presses, dry kilns, planers, CNC routers, boilers, and dust collection systems.",
    whatsCovered: [
      "Hydraulic press mechanical and electrical failure",
      "RF curing press breakdown",
      "Kiln-dry chamber system failure",
      "CNC router and planer breakdown",
      "Boiler and pressure vessel failure",
      "Dust collection system breakdown",
    ],
    whoItsFor: [
      "Plants with hydraulic or RF curing presses",
      "Operations running continuous kiln-dry chambers",
      "Manufacturers with CNC machining equipment",
      "Any plant where equipment downtime means production stoppage",
    ],
    whyCca: [
      "Standalone or packaged with commercial property program",
      "Fast claim handling — downtime is measured in production value",
      "Coordinates with business interruption coverage",
    ],
    faqs: [
      {
        q: "Isn't equipment breakdown covered by my property policy?",
        a: "Standard commercial property covers external causes — fire, theft, windstorm. It specifically excludes equipment breakdown from internal causes: hydraulic system failure, motor burnout, electrical fault. Equipment breakdown coverage fills this gap.",
      },
    ],
  },
  "general-liability": {
    heroBlurb:
      "Third-party bodily injury and property damage protection for your plant premises, manufacturing operations, and delivery activities — including premises liability and completed operations.",
    whatsCovered: [
      "Third-party bodily injury on plant premises",
      "Property damage caused during delivery",
      "Completed-operations claims from installed glulam",
      "Contractor and visitor bodily injury",
      "Defense costs and legal fees",
    ],
    whoItsFor: [
      "Glulam plants with visitors, vendors, and delivery operations",
      "Manufacturers supplying contractors who require GL certificates",
      "Any plant that needs premises liability coverage",
    ],
    whyCca: [
      "GL structured with products-completed operations to match long claim tails",
      "Coordinated with products liability so there are no gaps",
      "Limits scaled for your contract requirements",
    ],
    faqs: [
      {
        q: "Do I need separate products liability or does GL cover my products?",
        a: "You need separate products liability. Standard GL policies contain 'your product' exclusions that remove coverage for claims arising from your manufactured glulam after it leaves your plant. GL covers your premises and operations; products liability covers the manufactured product.",
      },
    ],
  },
  "workers-compensation": {
    heroBlurb:
      "Coverage for the real injury patterns in a glulam plant — saw, planer, and press incidents, forklift and overhead crane injuries, adhesive and kiln-heat exposures, and amputation-class claims.",
    whatsCovered: [
      "Medical treatment for on-the-job injuries",
      "Disability and lost-wage benefits for injured workers",
      "Kiln-heat and formaldehyde adhesive exposure claims",
      "Overhead crane and forklift injuries",
      "Saw and planer operator injuries",
      "Employers' liability (Part Two) protection",
    ],
    whoItsFor: [
      "Glulam plants with W-2 production workers",
      "Kiln operators and press room crews",
      "Saw and CNC machine operators",
      "Forklift and overhead crane operators",
    ],
    whyCca: [
      "Classification codes structured for actual glulam plant job categories",
      "Kiln and adhesive exposure reflected in rating — not generic manufacturing codes",
      "Fast claim handling so injured workers get care without dispute",
    ],
    faqs: [
      {
        q: "What classification codes apply to glulam plant workers?",
        a: "Glulam plants typically have multiple classification codes: kiln operators, press room workers, saw/CNC operators, forklift/crane operators, and office staff. Correct code assignment matters — wrong codes mean overpayment or undercoverage and audit surprises.",
      },
    ],
  },
  "commercial-auto": {
    heroBlurb:
      "Coverage for the tractors, flatbeds, and step-decks that move 60-100-foot glulam columns to jobsites — including oversize-load permits, escort vehicles, and loading/unloading liability.",
    whatsCovered: [
      "Liability for at-fault accidents in delivery trucks and flatbeds",
      "Physical damage to owned vehicles",
      "Oversize load and escort vehicle coverage",
      "Hired and non-owned auto for employees",
      "Uninsured and underinsured motorist coverage",
      "Loading and unloading liability",
    ],
    whoItsFor: [
      "Plants with owned flatbed or step-deck trailers",
      "Operations hauling oversized architectural glulam",
      "Plants using third-party carriers with company employees supervising delivery",
    ],
    whyCca: [
      "Oversize load exposure factored into program",
      "Coordinates with inland marine for transit-phase coverage",
      "Fleet and single-vehicle programs available",
    ],
    faqs: [
      {
        q: "Is oversize glulam transit covered under commercial auto?",
        a: "Commercial auto covers the vehicle and at-fault liability. The load itself — the glulam beam — is an inland marine/transit coverage matter. We coordinate both policies so the vehicle and the cargo are both covered during transport.",
      },
    ],
  },
  "inland-marine-equipment": {
    heroBlurb:
      "Mobile equipment, installation floaters, and stock-throughput coverage that follows lumber from the yard, through production, to the jobsite — with no gaps across transit and storage.",
    whatsCovered: [
      "Architectural glulam members during long-haul transport",
      "Off-site storage at staging yards and job sites",
      "Crane lift operations at the installation site",
      "Mobile plant equipment when operated off-site",
      "In-transit damage from any external cause",
      "Replacement value for custom members",
    ],
    whoItsFor: [
      "Producers of architectural glulam with long-haul deliveries",
      "Plants supplying custom oversized members to job sites",
      "Manufacturers with staging or distribution yard operations",
    ],
    whyCca: [
      "Door-to-crane coverage — from loading dock to final lift",
      "All-risk coverage on custom members at replacement value",
      "Off-site storage included — coverage doesn't end at delivery",
    ],
    faqs: [
      {
        q: "Does standard cargo insurance cover oversized architectural glulam?",
        a: "Standard cargo policies often have weight limits, loading exclusions, and no coverage for crane operations. Inland marine coverage is specifically designed for high-value, oversized, custom freight like architectural glulam members.",
      },
    ],
  },
  "professional-liability": {
    heroBlurb:
      "Errors and omissions coverage for custom engineering calculations, load-bearing specs, span tables, and connection details — claims arising from errors in those that cause structural failure.",
    whatsCovered: [
      "Claims arising from errors in custom engineering specifications",
      "Load-bearing and span table calculation errors",
      "Connection detail specification errors",
      "Defense costs for professional negligence allegations",
      "Subcontractor errors when you've specified the design",
    ],
    whoItsFor: [
      "Glulam manufacturers who produce custom-engineered members",
      "Plants providing load tables and engineering specifications",
      "Manufacturers supplying architects and structural engineers with custom specs",
    ],
    whyCca: [
      "E&O structured for the specification and engineering claims unique to timber manufacturing",
      "Coordinates with GL and products liability",
      "Limits matched to contract requirements of largest clients",
    ],
    faqs: [
      {
        q: "Is custom engineering exposure covered by GL or products liability?",
        a: "Neither, typically. Professional liability (E&O) covers claims arising from errors in engineering calculations and specifications — a different exposure from GL premises liability or products liability for defective manufactured goods.",
      },
    ],
  },
  "umbrella-excess-liability": {
    heroBlurb:
      "Layered limits above your GL, auto, and employers liability — essential when a single structural product failure or multi-party claim could exhaust your primary coverage.",
    whatsCovered: [
      "Additional limits above GL, commercial auto, and employers liability",
      "Limits from $5M up to $25M+ for catastrophic claims",
      "Protection for multi-party structural failure claims",
      "Coverage follows the underlying policy form",
      "Defense contributions on large complex claims",
    ],
    whoItsFor: [
      "Manufacturers with commercial clients that mandate higher limits",
      "Plants producing glulam for public buildings and arenas",
      "High-volume producers with significant asset exposure",
      "Any manufacturer whose GL limits no longer match their exposure",
    ],
    whyCca: [
      "Limits layered cleanly above your underlying program",
      "Up to $25M+ available for large-volume producers",
      "Priced for manufacturers, not generic small-business umbrella rates",
    ],
    faqs: [
      {
        q: "How much umbrella coverage do glulam manufacturers typically need?",
        a: "It's driven by your largest realistic loss scenario and by what your commercial clients require. A structural failure claim in a sports arena or public building can easily exceed $5M. We model catastrophic scenarios for your operation and size the umbrella accordingly.",
      },
    ],
  },
};

/* ============================================================
   COVERAGE REGIONS — for coverage page
   ============================================================ */
export const AZ_REGIONS = [
  { name: "Pacific Northwest", note: "Oregon & Washington — glulam manufacturing heartland" },
  { name: "Rocky Mountain West", note: "Montana, Idaho, Colorado — mountain-state timber operations" },
  { name: "U.S. Southeast", note: "Georgia, North Carolina, Arkansas — southern yellow pine glulam" },
  { name: "Great Lakes & Upper Midwest", note: "Minnesota, Wisconsin, Michigan — hardwood and softwood EWP" },
  { name: "Northeast & Mid-Atlantic", note: "New England, NY, PA — urban mass-timber markets" },
  { name: "California & Nevada", note: "West Coast seismic-zone and architectural production" },
  { name: "Texas & Southwest", note: "Fast-growing commercial and agricultural glulam demand" },
  { name: "Appalachia & Mid-South", note: "TN, KY, VA, WV — Appalachian hardwood and softwood EWP" },
];

/* ============================================================
   US STATES — for quote form select
   ============================================================ */
export const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

/* ============================================================
   Quote form select options (glulam-specific)
   ============================================================ */
export const QUOTE_SERVICE_TYPES = [
  "Products Liability Insurance",
  "General Liability Insurance",
  "Workers' Compensation",
  "Commercial Auto Insurance",
  "Commercial Property Insurance",
  "Inland Marine / Transit Coverage",
  "Professional Liability (E&O)",
  "Umbrella / Excess Liability",
  "Full program / bundle (recommended)",
  "Not sure — help me figure it out",
];

export const YEARS_OPTIONS = [
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "6–10 years",
  "10+ years",
];
