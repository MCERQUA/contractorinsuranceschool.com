// Centralized site data — used across nav, footer, schema, CTAs
// Glulam Manufacturer Insurance — glue-laminated timber / engineered wood product MFRS

export const SITE = {
  name: "Glulam Manufacturer Insurance",
  legalName: "Glulam Manufacturer Insurance (by Contractors Choice Agency)",
  domain: "gluelammanufacturerinsurance.com",
  url: "https://gluelammanufacturerinsurance.com",
  tagline: "Insurance for Glue-Laminated Timber Manufacturers",
  description:
    "Specialized commercial insurance for glue-laminated timber (glulam) and engineered wood product manufacturers — production lines, kilns, hydraulic & RF presses, lumber yards, product liability, equipment breakdown, commercial auto, and workers' comp. Licensed all 50 states.",
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
    slug: "product-liability",
    title: "Product Liability Insurance",
    short: "For engineered wood products",
    description:
      "The coverage that defines a glulam manufacturer's risk. Protects against structural-failure, delamination, fire-performance, moisture, and code-compliance claims on the beams and panels you ship to market.",
    icon: "PackageCheck",
    keywords: ["glulam product liability", "engineered wood product liability", "delamination insurance claim", "mass timber product liability"],
  },
  {
    slug: "professional-liability",
    title: "Professional Liability (E&O)",
    short: "For design & engineering guidance",
    description:
      "Errors & omissions coverage for manufacturers who provide connection, span, load, or installation guidance — the design liability that product and general liability policies were never built to cover.",
    icon: "FileCheck",
    keywords: ["manufacturers E&O insurance", "professional liability manufacturer", "glulam engineering liability", "design guidance errors omissions"],
  },
  {
    slug: "property",
    title: "Property Insurance",
    short: "Plants, kilns, lumber yards & stock",
    description:
      "All-risk property coverage for the manufacturing plant, dry kilns, planer and press lines, lumber yards, and finished-goods inventory — built for combustible-dust and hot-work exposures.",
    icon: "Factory",
    keywords: ["lumber mill property insurance", "kiln insurance", "manufacturing plant insurance", "combustible dust property coverage"],
  },
  {
    slug: "equipment-breakdown",
    title: "Boiler & Machinery / Equipment Breakdown",
    short: "Kilns, presses, CNC & boilers",
    description:
      "Covers the sudden breakdown of the equipment your production depends on — hydraulic and radio-frequency curing presses, dry kilns, planers, CNC routers, boilers, and dust collection.",
    icon: "Gauge",
    keywords: ["boiler and machinery insurance manufacturer", "equipment breakdown kiln press", "RF press breakdown insurance", "machinery breakdown coverage"],
  },
  {
    slug: "general-liability",
    title: "General Liability Insurance",
    short: "Manufacturing & premises operations",
    description:
      "Third-party bodily injury and property damage protection for your manufacturing operations, plant premises, delivery, and on-site installation — including products-completed operations.",
    icon: "ShieldCheck",
    keywords: ["general liability manufacturer", "products completed operations", "manufacturing premises liability", "glulam GL insurance"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "For mill & production crews",
    description:
      "Coverage for the real injury patterns in a glulam plant — saw, planer, and press incidents, forklift and load-handling injuries, adhesive and heat exposures, and amputation-class claims.",
    icon: "HardHat",
    keywords: ["workers comp manufacturing", "sawmill workers compensation", "machine guarding insurance", "lumber mill workers comp"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto Insurance",
    short: "Flatbeds hauling oversize beams",
    description:
      "Coverage for the tractors, flatbeds, and step-decks that move 60–100-foot glulam columns to jobsites — including oversize-load permits, escort vehicles, and loading/unloading liability.",
    icon: "Truck",
    keywords: ["commercial auto manufacturer", "flatbed trucking insurance glulam", "oversize load insurance", "delivery fleet insurance manufacturer"],
  },
  {
    slug: "inland-marine-equipment",
    title: "Inland Marine & Stock Throughput",
    short: "Equipment, floaters & goods in transit",
    description:
      "Mobile equipment, installation floaters, and stock-throughput coverage that follows lumber from the yard, through production, to the jobsite — with no gaps across transit and storage.",
    icon: "Boxes",
    keywords: ["inland marine manufacturer", "stock throughput insurance", "installation floater", "goods in transit insurance lumber"],
  },
  {
    slug: "umbrella-excess-liability",
    title: "Umbrella / Excess Liability",
    short: "Limits to $10M+",
    description:
      "Layered limits above your GL, auto, and employers liability — essential when a single structural product failure or multi-party jobsite loss could otherwise exhaust your primary coverage.",
    icon: "Umbrella",
    keywords: ["umbrella liability manufacturer", "excess liability engineered wood", "commercial umbrella manufacturer", "high limit product liability"],
  },
] as const;

export const LOCATIONS = [
  {
    slug: "pacific-northwest",
    name: "Pacific Northwest",
    region: "Oregon · Washington",
    blurb:
      "The Douglas-fir heartland of North American glulam. We insure PNW plants running long-span architectural beams, curved members, and high-volume structural production lines.",
  },
  {
    slug: "southeast",
    name: "U.S. Southeast",
    region: "Alabama · Georgia · Arkansas",
    blurb:
      "Southern-yellow-pine glulam country. Coverage built for Southeast producers running kiln-dried SYP lamstock, high-cycle pressing, and heavy residential and commercial output.",
  },
  {
    slug: "rocky-mountain",
    name: "Rocky Mountain West",
    region: "Montana · Idaho · Colorado",
    blurb:
      "From lodgepole-pine and spruce mills to fast-growing mass-timer demand along the Front Range. Programs sized for Mountain West plants serving resort and municipal construction.",
  },
  {
    slug: "great-lakes",
    name: "Great Lakes & Upper Midwest",
    region: "Minnesota · Wisconsin · Michigan",
    blurb:
      "Hardwood and softwood engineered-wood producers across the Lakes region. Coverage for kiln operations, finger-jointing lines, and cold-climate lumber handling.",
  },
  {
    slug: "northeast",
    name: "Northeast & Mid-Atlantic",
    region: "New England · NY · PA",
    blurb:
      "Northeast glulam and EWP plants supplying dense urban mass-timber projects, institutional builds, and historic restoration — coverage that meets the region's demanding specifiers.",
  },
  {
    slug: "california-nevada",
    name: "California & Nevada",
    region: "CA · NV",
    blurb:
      "Seismic-zone and wildfire-exposure underwriting for West Coast producers. Programs that account for California's strict code environment and high-value architectural work.",
  },
  {
    slug: "texas-southwest",
    name: "Texas & the Southwest",
    region: "TX · NM · AZ",
    blurb:
      "Fast-growing Texas and Southwest demand for structural glulam in commercial and agricultural builds. Coverage for plants serving the region's booming construction market.",
  },
  {
    slug: "appalachia",
    name: "Appalachia & the Mid-South",
    region: "TN · KY · VA · WV",
    blurb:
      "Appalachian hardwood and softwood EWP manufacturers. Programs for producers running kilns, presses, and planer lines serving the Mid-South and Eastern Seaboard.",
  },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Former manufacturer on staff", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 120, suffix: "+", label: "Manufacturers insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring industry operations", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "We ship structural glulam into schools and arenas, so a product-liability claim is the thing that keeps me up at night. CCA built a program that actually understood delamination exposure and ICC-ES reporting — and placed limits our old broker said were impossible.",
    name: "Walter K.",
    role: "Plant Owner",
    location: "Oregon",
  },
  {
    quote:
      "When an RF curing press went down mid-run, the equipment-breakdown claim was paid fast and our line was back up without losing the whole season. They get that downtime is the real cost in this business.",
    name: "Renee D.",
    role: "Operations Manager",
    location: "Georgia",
  },
  {
    quote:
      "Three carriers had declined us over combustible-dust and kiln-fire exposure. CCA knew NFPA 664, documented our housekeeping program, and got us an A-rated property policy. Night and day from the generic quotes we'd seen.",
    name: "Doug P.",
    role: "Risk Manager",
    location: "Arkansas",
  },
] as const;
