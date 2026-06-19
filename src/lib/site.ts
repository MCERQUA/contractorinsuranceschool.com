// Centralized site data — used across nav, footer, schema, CTAs
// Framing Contractor Insurance — wood framing / rough carpentry contractors

export const SITE = {
  name: "Framing Contractor Insurance",
  legalName: "Framing Contractor Insurance (by Contractors Choice Agency)",
  domain: "framingcontractorinsurance.com",
  url: "https://framingcontractorinsurance.com",
  tagline: "Insurance for Wood Framing & Rough Carpentry Contractors",
  description:
    "Specialized commercial insurance for framing contractors and rough carpentry crews — general liability, workers' comp (class 5403), builder's risk, tools & equipment floaters, commercial auto, and commercial property. Fall, nail-gun, and saw exposures underwritten right. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "General Liability Insurance",
    short: "For framing & rough carpentry operations",
    description:
      "Third-party bodily injury and property damage protection for your framing crews, jobsites, and subcontracted work — including products-completed operations and the GC certificates that get you onto the project.",
    icon: "ShieldCheck",
    keywords: ["framing contractor general liability", "rough carpentry insurance", "framing subcontractor GL", "CG 00 01 framing", "framer liability insurance"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "Class 5403 carpentry — fall & saw exposures",
    description:
      "Coverage for the injury patterns unique to framing crews — falls from height, nail-gun and saw lacerations, struck-by and material-handling injuries — with correct class 5403 coding so you're not overpaying or underinsured.",
    icon: "HardHat",
    keywords: ["framing contractor workers comp", "class 5403 workers compensation", "carpentry workers comp", "framer fall injury insurance", "nail gun injury workers comp"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto Insurance",
    short: "Trucks, trailers & lumber delivery",
    description:
      "Coverage for the pickup trucks, dump trailers, and lumber haulers that move your crew and materials between jobsites — including hired/non-owned and loading liability.",
    icon: "Truck",
    keywords: ["framing contractor commercial auto", "contractor truck insurance", "lumber delivery insurance", "trailer insurance carpenter", "hired non owned auto contractor"],
  },
  {
    slug: "builders-risk",
    title: "Builder's Risk Insurance",
    short: "The structure & materials you're framing",
    description:
      "Course-of-construction coverage for the building you're framing — lumber packages, installed materials, and labor — against fire, wind, theft, and vandalism while the project is open to loss.",
    icon: "Building2",
    keywords: ["builders risk framing contractor", "course of construction insurance", "framing phase insurance", "lumber theft insurance jobsite", "soft cost builders risk"],
  },
  {
    slug: "inland-marine-equipment",
    title: "Tools & Equipment / Inland Marine",
    short: "Nail guns, saws, compressors & trailers",
    description:
      "Scheduled tools-and-equipment coverage for the pneumatic nailers, miter saws, generators, and compressors that walk off jobsites — plus installation floaters that cover materials in transit to the frame.",
    icon: "Wrench",
    keywords: ["framing tools insurance", "contractor tools and equipment floater", "inland marine carpenter", "stolen tools insurance", "installation floater framing"],
  },
  {
    slug: "property",
    title: "Commercial Property Insurance",
    short: "Shop, yard, office & inventory",
    description:
      "All-risk property coverage for the framer's shop, storage yard, prefab wall-panel facility, and lumber/inventory — built for the combustible loading and hot-work exposures of a wood operation.",
    icon: "Factory",
    keywords: ["framer commercial property insurance", "carpenter shop insurance", "wall panel plant insurance", "lumber yard property insurance", "contractor property coverage"],
  },
  {
    slug: "umbrella-excess-liability",
    title: "Umbrella / Excess Liability",
    short: "Limits to $10M+",
    description:
      "Layered limits above your GL, auto, and employers' liability — essential when a fall, a framed-structure fire, or a multi-party jobsite loss could otherwise exhaust your primary coverage.",
    icon: "Umbrella",
    keywords: ["framing contractor umbrella insurance", "excess liability carpenter", "contractor umbrella policy", "high limit liability framing", "jobsite liability umbrella"],
  },
  {
    slug: "contractors-bonds",
    title: "Contractor's License & Surety Bonds",
    short: "License, permit & performance bonds",
    description:
      "The bonds that keep you legal and competitive — state contractor license bonds, permit bonds, and bid/performance bonds for the GCs and developers who require them before you set the first plate.",
    icon: "FileCheck",
    keywords: ["framing contractor license bond", "contractor surety bond", "performance bond carpenter", "permit bond framing", "bid bond contractor"],
  },
] as const;

export const LOCATIONS = [
  {
    slug: "texas-southwest",
    name: "Texas & the Southwest",
    region: "TX · NM · AZ",
    blurb:
      "The busiest framing market in the country. We insure Texas and Southwest framing crews running high-volume residential production, master-planned communities, and fast turnaround on slab-on-grade builds.",
  },
  {
    slug: "southeast",
    name: "U.S. Southeast",
    region: "Florida · Georgia · Carolinas",
    blurb:
      "Hurricane-zone framing underwriting for Southeast crews — wind and named-storm exposure, Florida building code compliance, and high-volume coastal and inland residential production.",
  },
  {
    slug: "rocky-mountain",
    name: "Rocky Mountain West",
    region: "Colorado · Idaho · Utah",
    blurb:
      "Front-Range and Intermountain West framing operations. Programs sized for crews serving the region's booming residential and multifamily construction with snow and elevation exposures.",
  },
  {
    slug: "pacific-northwest",
    name: "Pacific Northwest",
    region: "Oregon · Washington",
    blurb:
      "PNW framing contractors running wet-climate, seismic-zone builds. Coverage that accounts for tight energy-code framing, engineered lumber, and year-round wet jobsite conditions.",
  },
  {
    slug: "desert-west",
    name: "Desert West",
    region: "Arizona · Nevada",
    blurb:
      "Phoenix, Las Vegas, and Tucson framing operations. Programs for high-volume desert residential production, slab construction, and rapid crew mobilization across master-planned developments.",
  },
  {
    slug: "great-lakes",
    name: "Great Lakes & Midwest",
    region: "Michigan · Ohio · Illinois · Indiana",
    blurb:
      "Midwest framing contractors serving suburban and rural residential markets. Coverage for seasonal build cycles, freeze/thaw framing conditions, and crew variability.",
  },
  {
    slug: "northeast",
    name: "Northeast & Mid-Atlantic",
    region: "NY · NJ · PA · New England",
    blurb:
      "Northeast framers running dense residential, remodel, and addition work. Coverage that meets the region's strict licensing, winter build limitations, and historic-district requirements.",
  },
  {
    slug: "california-west",
    name: "California & West Coast",
    region: "California",
    blurb:
      "Seismic-zone and wildfire-exposure underwriting for California framing contractors. Programs built for Title 24 framing, WUI builds, and the state's demanding CSLB licensing environment.",
  },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Former framer on staff", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 600, suffix: "+", label: "Framing crews insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring trades contractors", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Every general contractor we frame for needs a GL certificate with us named additional insured before we can roll. CCA turns those around in minutes and built a program that actually covers our falls and nail-gun claims — not the generic handyman policy our last broker sold us.",
    name: "Marcus T.",
    role: "Framing Company Owner",
    location: "Texas",
  },
  {
    quote:
      "When a lumber package walked off our jobsite overnight, the tools-and-equipment floater CCA set up paid out fast and we kept the schedule. They get that a framing crew lives and dies by its gear and its materials.",
    name: "Daniela R.",
    role: "Operations Manager",
    location: "Florida",
  },
  {
    quote:
      "Our workers' comp was coded as generic construction and we were getting killed on premium. CCA re-classed us properly under 5403, documented our fall-protection program, and dropped our rate while increasing coverage. Wish we'd switched years ago.",
    name: "Tyler J.",
    role: "Crew Owner",
    location: "Colorado",
  },
] as const;
