export const SITE = {
  name: "Contractor Insurance School",
  legalName: "Contractors Choice Agency",
  domain: "contractorinsuranceschool.com",
  url: "https://contractorinsuranceschool.com",
  tagline: "Learn Contractor Insurance. Get the Right Coverage.",
  description:
    "Contractor Insurance School — the educational platform where contractors learn GL, professional liability, workers' comp, commercial auto, umbrella, bonds, and tools coverage. Taught by specialists. All 50 states. Get a quote in 15 minutes.",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8 am–5 pm MST",
  claimsSla: "Same-day claims reporting assistance",
  quoteSla: "Quotes in approximately 15 minutes",
  statesLicensed: 50,
} as const;

export const BRAND = {
  brandShort: "Contractor Insurance School",
  brandSub: "Contractors Choice Agency",
  nicheShort: "contractor",
  nicheCap: "Contractor",
  nichePlural: "contractors",
  nichePluralCap: "Contractors",
  operator: "contractor",
  operatorCap: "Contractor",
  industry: "contracting",
  industryCap: "Contracting",
  audience: "contractors",
  audienceCap: "Contractors",
  ownerTitle: "Licensed Insurance Agent",
  regionPill: "All 50 States",
  serviceSuffix: "for Contractors",
} as const;

export const NAV_LINKS = [
  { label: "Coverage Courses", href: "/services" },
  { label: "Coverage Area", href: "/coverage" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Get Covered", href: "/quote" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "General Liability",
    short: "GL Insurance",
    description:
      "The foundational policy every contractor must carry — third-party bodily injury, property damage, and completed operations. Learn what it covers and what it doesn't.",
    icon: "ShieldCheck",
    keywords: [
      "contractor general liability insurance school",
      "GL insurance contractor explained",
      "completed operations insurance contractor",
      "contractor liability coverage guide",
    ],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "Workers' Comp",
    description:
      "Wage replacement and medical benefits for injured crew members. Learn class codes, experience mods, audit mechanics, and how to control your premium.",
    icon: "HardHat",
    keywords: [
      "contractor workers compensation guide",
      "workers comp class codes contractor",
      "experience modification factor contractor",
      "workers comp contractor education",
    ],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto",
    short: "Commercial Auto",
    description:
      "Coverage for contractor vehicles, trucks, trailers, and hired/non-owned auto. When personal auto policies fall short — and how to structure your fleet coverage.",
    icon: "Truck",
    keywords: [
      "commercial auto insurance contractor",
      "contractor truck insurance explained",
      "hired non-owned auto contractor",
      "fleet insurance contractor",
    ],
  },
  {
    slug: "tools-equipment",
    title: "Tools & Equipment",
    short: "Tools & Equipment",
    description:
      "Inland marine coverage for contractor tools. Learn the difference between commercial property (which misses jobsite tools) and a proper tools floater.",
    icon: "Wrench",
    keywords: [
      "tools equipment insurance contractor school",
      "inland marine contractor guide",
      "contractor tools floater explained",
      "jobsite tool theft insurance",
    ],
  },
  {
    slug: "professional-liability",
    title: "Professional Liability",
    short: "E&O / Prof. Liability",
    description:
      "Errors and omissions for design-build, consulting, and professional services. Learn why GL doesn't cover professional errors — and when you need both policies.",
    icon: "FileCheck",
    keywords: [
      "professional liability contractor school",
      "contractor E&O insurance explained",
      "design build liability insurance",
      "errors omissions contractor guide",
    ],
  },
  {
    slug: "commercial-umbrella",
    title: "Commercial Umbrella",
    short: "Umbrella / Excess",
    description:
      "Excess liability above GL, auto, and employers liability. Learn how umbrella stacks, what GC subcontracts require, and when higher limits are worth the cost.",
    icon: "Umbrella",
    keywords: [
      "commercial umbrella contractor school",
      "excess liability contractor explained",
      "umbrella policy contractor guide",
      "follow-form umbrella contractor",
    ],
  },
  {
    slug: "surety-bonds",
    title: "Surety Bonds",
    short: "Bonds",
    description:
      "License bonds, performance bonds, and payment bonds — what they are, when they're required, and the critical difference between a bond and insurance.",
    icon: "Award",
    keywords: [
      "contractor surety bond school",
      "license bond contractor explained",
      "performance bond information contractor",
      "surety bond vs insurance contractor",
    ],
  },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];

export const LOCATIONS = [
  {
    slug: "texas",
    name: "Texas",
    region: "South Central",
    blurb:
      "Texas contractors operate across DFW, Houston, Austin, and San Antonio in one of the largest construction markets in the US. We teach and place contractor insurance programs specific to Texas requirements.",
  },
  {
    slug: "california",
    name: "California",
    region: "Pacific Coast",
    blurb:
      "California has strict contractor licensing and insurance mandates. We educate CA contractors on GL, workers' comp, and professional liability requirements across the Bay Area, Los Angeles, and San Diego.",
  },
  {
    slug: "florida",
    name: "Florida",
    region: "Southeast",
    blurb:
      "Florida's construction and storm-restoration market requires comprehensive contractor insurance programs. We serve Florida contractors statewide with education and placement across all trades.",
  },
  {
    slug: "southeast",
    name: "Southeast",
    region: "Multi-State",
    blurb:
      "The Southeast construction boom drives demand for specialty contractor programs. We educate and insure contractors across GA, NC, SC, TN, AL, and MS.",
  },
  {
    slug: "midwest",
    name: "Midwest",
    region: "Multi-State",
    blurb:
      "Midwest contractors handle diverse project types from commercial to residential. We teach and place contractor insurance across OH, IL, MI, IN, WI, MN, MO, and KS.",
  },
  {
    slug: "northeast",
    name: "Northeast",
    region: "Multi-State",
    blurb:
      "Northeast contractors work in demanding regulatory environments. We educate and insure contractors in NY, NJ, CT, MA, PA, and RI — with programs meeting the highest GC requirements.",
  },
  {
    slug: "mountain-west",
    name: "Mountain West",
    region: "Multi-State",
    blurb:
      "Mountain West construction markets in CO, AZ, NV, UT, and NM are among the fastest-growing. We write and teach contractor insurance programs across the entire region.",
  },
  {
    slug: "pacific-west",
    name: "Pacific West",
    region: "Multi-State",
    blurb:
      "Pacific West contractors in WA and OR work across residential, commercial, and infrastructure. We provide contractor insurance education and placement from Seattle to Portland.",
  },
] as const;

export type LocationSlug = (typeof LOCATIONS)[number]["slug"];

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Contractor specialist agents", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "Same-day claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 500, suffix: "+", label: "Contractors insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years as contractor specialists", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "This site taught me more about GL and completed operations in an hour than I learned in 10 years of running crews. Walked into my next GC negotiation actually understanding what I was signing.",
    name: "Marcus T.",
    role: "General Contractor",
    location: "Texas",
  },
  {
    quote:
      "I always thought professional liability was just for architects. The school module on design-build explained exactly why I needed it. Now I carry both GL and E&O and sleep better.",
    name: "Jennifer K.",
    role: "Design-Build Contractor",
    location: "Colorado",
  },
  {
    quote:
      "The workers' comp class codes module saved me real money — I was misclassified for two years. Fixed it, got a premium credit. These guys actually know contractor insurance.",
    name: "Roberto V.",
    role: "HVAC Contractor",
    location: "Florida",
  },
] as const;
