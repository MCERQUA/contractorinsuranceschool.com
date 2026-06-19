// Rich, niche-accurate content blocks for Framing Contractor Insurance.

import {
  PhoneCall, FileSearch, FileSignature, ShieldCheck,
  Building2, Truck, HardHat, Wrench,
} from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

/* ============================================================
   PROCESS — how getting insured with us works
   ============================================================ */
export const PROCESS = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Tell us about your framing operation",
    description:
      "15-min call or form. Crew size, annual framing revenue, typical project size, subs vs. W-2, and the lines your old carrier excluded.",
  },
  {
    step: "02",
    icon: FileSearch,
    title: "We shop specialty trades markets",
    description:
      "Markets that actually write framing contractors at class 5403 — not generic handyman carriers that exclude falls over 6 feet or subcontracted work.",
  },
  {
    step: "03",
    icon: FileSignature,
    title: "Bind a program built for framers",
    description:
      "GL + workers' comp + builder's risk + tools floater + auto, coordinated so there are no gaps between your operations and the structure you're framing.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Certificates & claims that move fast",
    description:
      "When a GC needs an additional-insured certificate before you roll, or a fall claim happens, you reach a person with context — not a queue. 2-hour response.",
  },
] as const;

/* ============================================================
   WHY CHOOSE US
   ============================================================ */
export const WHY_CHOOSE = [
  {
    icon: ShieldCheck,
    title: "GL that covers falls over 6 feet",
    description:
      "Many cheap contractor policies exclude work over one or two stories. We place general liability that covers the real framing exposure — two- and three-story framing, roof work, and subcontracted operations.",
  },
  {
    icon: HardHat,
    title: "Workers' comp coded right at 5403",
    description:
      "Framing crews get mis-classed constantly. We assign the correct carpentry class codes and document your fall-protection program so your rate reflects your real — not worst-case — exposure.",
  },
  {
    icon: Building2,
    title: "Builder's risk for the structure you frame",
    description:
      "The lumber package, installed materials, and labor you've put into a frame are a real loss exposure. We write builder's risk that covers fire, theft, wind, and vandalism during construction.",
  },
  {
    icon: Wrench,
    title: "Tools & equipment floaters that pay",
    description:
      "Nail guns, miter saws, generators, and compressors walk off jobsites every day. We schedule your gear at replacement cost so a theft doesn't come out of your pocket.",
  },
  {
    icon: Truck,
    title: "Certificates & additional insureds, fast",
    description:
      "GCs and developers require certificates before you set the first plate. We turn additional-insured and waiver-of-subrogation endorsements around in minutes, not days.",
  },
  {
    icon: HardHat,
    title: "Run by a former contractor",
    description:
      "Josh Cotner knows how framing operations run and exactly what happens when coverage fails at claim time. You'll never have to explain a jobsite to us.",
  },
] as const;

/* ============================================================
   HOMEPAGE FAQ — 20 questions
   ============================================================ */
export const HOME_FAQS: FAQItem[] = [
  {
    q: "What kind of insurance does a framing contractor need?",
    a: "A framing contractor typically needs a bundle built around the job: general liability, workers' compensation (class 5403 carpentry), builder's risk for the structure being framed, a tools & equipment floater for nail guns and saws, commercial auto for trucks and trailers, and an umbrella for higher-limit GC requirements. Most framers also need contractor license and surety bonds to stay legal and competitive.",
  },
  {
    q: "How much does framing contractor insurance cost?",
    a: "Most framing contractors pay between $1,500 and $4,500 a year for a $1M/$2M general liability policy, depending on payroll, revenue, crew size, claims history, and whether you frame over two stories. Workers' comp is rated on payroll at the 5403 carpentry class. We quote the whole program in about 15 minutes and show you every market's price side by side.",
  },
  {
    q: "What is the workers' comp class code for framing?",
    a: "Wood framing and rough carpentry is most often coded under NCCI class 5403 (Carpentry). Some operations split out roof truss setting, siding, or interior finish carpentry into their own codes. Correct classification matters — wrong codes mean overpaying on premium or, worse, an audit bill and denied claim.",
  },
  {
    q: "Does general liability cover falls from height?",
    a: "It should — but many budget contractor policies exclude work over one or two stories or exclude roof work entirely. Framing is a height business, so we place GL that specifically covers two- and three-story framing, truss setting, and roof work without height exclusions.",
  },
  {
    q: "Do I need builder's risk if the GC already carries it?",
    a: "Sometimes the project's master builder's risk covers your installed work, but gaps are common — especially around materials you've delivered but not yet installed, or theft from an unsecured jobsite. We review the GC's program and either confirm you're covered or write a framers-installation floater so your materials and labor are protected.",
  },
  {
    q: "Does my policy cover my nail guns, saws, and compressors?",
    a: "General liability and property do not cover your tools off-premises. Tools are an inland marine (tools & equipment) coverage. We schedule your gear — nail guns, miter saws, generators, air compressors, lasers — at replacement cost so theft from the jobsite or truck is covered.",
  },
  {
    q: "Are my subcontractors covered under my insurance?",
    a: "Your GL does not extend to independent subcontractors — they should carry their own coverage and name you additional insured. If your subs are uninsured and cause a loss, you can be pulled in. We help you set up certificate tracking and additional-insured requirements so subcontracted work doesn't become your liability.",
  },
  {
    q: "Can you get me a certificate of insurance today?",
    a: "Yes. Once your program is bound we turn around additional-insured certificates, waivers of subrogation, and primary/non-contributory endorsements — usually within minutes. We know GCs won't let you start framing without proof of coverage.",
  },
  {
    q: "What happens if lumber is stolen from my jobsite?",
    a: "Lumber packages and installed materials are covered under builder's risk or an installation floater, while your tools are covered under a tools & equipment policy. We help you structure both so jobsite theft — one of the most common framing losses — doesn't come out of your margin.",
  },
  {
    q: "Do you insure framing contractors in all 50 states?",
    a: "Yes. Contractors Choice Agency is licensed in all 50 states and writes framing contractors from Texas and the Sun Belt to the Pacific Northwest, Rocky Mountain West, and Northeast.",
  },
  {
    q: "How fast can I get a quote?",
    a: "Typically 15 minutes on a call for a standard framing program. Complex operations — wall-panel plants, large multifamily, heavy subcontracted work — may take a day or two to place with the right markets, but we move fast and tell you the timeline up front.",
  },
  {
    q: "Will my rate go up if a framer gets hurt on the job?",
    a: "A single workers' comp claim can affect your experience modifier and future premium. The best protection is correct class coding, a documented safety and fall-protection program, and a claims partner who manages the claim aggressively — all of which we help with. Good loss control keeps your experience mod down.",
  },
  {
    q: "What limits do framing contractors typically carry?",
    a: "Most residential framers carry $1M per occurrence / $2M general aggregate for GL, plus an umbrella of $2M–$5M. Commercial and multifamily GCs often require $2M or $5M limits and additional insured status. We size limits to what your contracts actually demand.",
  },
  {
    q: "Do I need commercial auto for my work truck?",
    a: "Yes. A personal auto policy typically excludes business use and will deny a claim when you're hauling lumber or tools to a jobsite. Commercial auto covers your trucks, dump trailers, and lumber haulers, including hired/non-owned vehicles when employees drive their own trucks for you.",
  },
  {
    q: "What if I frame in wildfire or hurricane zones?",
    a: "Building in the WUI or on the coast adds underwriting complexity — wind, named-storm, and wildfire exposures affect builder's risk and property pricing. We have markets that write these zones and structure your program so you're covered during the build, not just after.",
  },
  {
    q: "Can you insure framers with prior claims or cancellations?",
    a: "Often, yes. If you've had a fall claim, a cancellation, or been declined, we have excess-and-surplus (E&S) markets for contractors other brokers won't touch. Bring your loss runs and we'll find a path.",
  },
  {
    q: "Do you cover wall-panel and truss manufacturing too?",
    a: "Yes. If you've added off-site wall-panel or floor-truss fabrication, that's a different exposure (manufacturing property and products liability). We can extend your program to cover a panel plant or coordinate a separate manufacturing policy.",
  },
  {
    q: "What is additional insured status and why do GCs want it?",
    a: "Additional insured status extends your liability coverage to the GC or developer for your operations. GCs require it — along with a waiver of subrogation and primary/non-contributory endorsement — so that if a claim arises from your framing work, your policy responds first. We issue these endorsements routinely.",
  },
  {
    q: "How are framing insurance premiums calculated?",
    a: "General liability is usually rated on payroll or subcontractor cost; workers' comp on payroll by class code; tools & equipment on scheduled value; commercial auto on vehicles and drivers; builder's risk on the project value. We document your operation accurately so you're rated on real exposure, not a worst-case guess.",
  },
  {
    q: "Why use a specialty framing insurance broker?",
    a: "Framing is a height- and tool-heavy trade with fall, nail-gun, saw, and theft exposures that generic small-business carriers routinely exclude or misprice. A specialty broker knows the class codes, the height exclusions to avoid, the markets that write framers, and how to manage a framing claim — which means better coverage at a fairer price.",
  },
];

/* ============================================================
   GENERAL FAQs — reused as the tail on service & location pages
   so every page carries 20 FAQs (composed via buildPageFaqs)
   ============================================================ */
export const GENERAL_FAQS: FAQItem[] = [
  {
    q: "How much does this coverage cost for a framing contractor?",
    a: "Most framers pay $1,500–$4,500 a year for $1M/$2M general liability, with workers' comp rated on payroll at class 5403 and tools floaters based on scheduled gear. We quote the full program in about 15 minutes and show every market's price.",
  },
  {
    q: "Do you insure framing contractors in all 50 states?",
    a: "Yes. Contractors Choice Agency is licensed in all 50 states and writes framing crews from the Sun Belt and Texas to the Pacific Northwest, Rocky Mountain West, and Northeast.",
  },
  {
    q: "How fast can I get a quote and a certificate?",
    a: "About 15 minutes for a standard program. Once bound, we turn around additional-insured certificates, waivers of subrogation, and primary/non-contributory endorsements usually within minutes.",
  },
  {
    q: "What workers' comp class code applies to framing?",
    a: "Wood framing and rough carpentry is typically coded under NCCI class 5403 (Carpentry). Correct classification keeps you from overpaying or facing an audit surprise — and ensures claims aren't denied for misclassification.",
  },
  {
    q: "Does the policy cover falls from height?",
    a: "We place general liability that specifically covers two- and three-story framing, truss setting, and roof work. Many budget contractor policies exclude work above one or two stories — we make sure yours does not.",
  },
  {
    q: "Are my tools covered on the jobsite?",
    a: "Tools are covered under a tools & equipment (inland marine) policy, not GL or property. We schedule nail guns, saws, generators, and compressors at replacement cost so jobsite and truck theft is covered.",
  },
  {
    q: "What limits should a framing contractor carry?",
    a: "Most residential framers carry $1M/$2M GL with a $2M–$5M umbrella. Commercial and multifamily GCs often require $2M–$5M limits plus additional-insured status. We size limits to your actual contract requirements.",
  },
  {
    q: "Do I need commercial auto for my work truck?",
    a: "Yes — personal auto excludes business use and will deny claims when you haul lumber or tools. Commercial auto covers your trucks, trailers, and lumber haulers, including hired/non-owned vehicles.",
  },
  {
    q: "Can you cover framers with prior claims or cancellations?",
    a: "Often, yes. We have excess-and-surplus (E&S) markets for contractors with loss runs, cancellations, or tough exposures that standard markets decline.",
  },
  {
    q: "How do you handle subcontracted framing work?",
    a: "Your GL doesn't cover independent subs — they should carry their own and name you additional insured. We set up certificate tracking and additional-insured requirements so subcontracted work doesn't become your liability.",
  },
  {
    q: "What happens if there's a claim?",
    a: "You reach a person with context, not a queue. We respond within 2 hours, help you document the loss, and manage the claim with the carrier so it's paid correctly and your operation keeps moving.",
  },
  {
    q: "Why use a specialty framing insurance broker?",
    a: "Framing has fall, nail-gun, saw, and theft exposures that generic carriers exclude or misprice. A specialty broker knows the class codes, the height exclusions to avoid, the markets that write framers, and how to manage a framing claim.",
  },
];

/** Compose a 20-item FAQ list for any page: specific FAQs first, then general fill. */
export function buildPageFaqs(specific: FAQItem[], count = 20): FAQItem[] {
  const seen = new Set<string>();
  const out: FAQItem[] = [];
  for (const f of [...specific, ...GENERAL_FAQS]) {
    const key = f.q.toLowerCase().slice(0, 60);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(f);
    if (out.length >= count) break;
  }
  return out;
}

/* ============================================================
   LOCATION FAQ EXTRAS — composed with GENERAL_FAQS on location pages
   ============================================================ */
export const LOCATION_FAQ_BASE: FAQItem[] = [
  {
    q: "Are you licensed to insure framing contractors in this region?",
    a: "Yes. Contractors Choice Agency is licensed in all 50 states, so we can bind and service framing contractor coverage in this region and coordinate certificates for work that crosses state lines.",
  },
  {
    q: "Do regional building codes affect my framing coverage?",
    a: "They can. Wind, seismic, wildfire, and energy-code requirements vary regionally and influence both how you frame and how the risk is underwritten. We account for the region's code environment when structuring your program.",
  },
  {
    q: "Can you meet local GC and developer insurance requirements here?",
    a: "Yes. We routinely issue the additional-insured status, waivers of subrogation, and primary/non-contributory endorsements that local general contractors and developers require before you set the first plate.",
  },
  {
    q: "Do you handle seasonal framing cycles in this market?",
    a: "We do. We right-size coverage and payroll reporting for seasonal crew scaling and can structure policies to match your region's build season, including short-term project and installed-material coverage.",
  },
  {
    q: "How do storm and weather exposure affect my premium here?",
    a: "Wind, named-storm, hail, and freeze exposures vary by region and affect builder's risk, property, and auto pricing. We shop markets that write your region and structure deductibles so you're protected without overpaying.",
  },
  {
    q: "Can you add a project-specific builder's risk for a local build?",
    a: "Yes. For larger or unusual local projects we can write a project-specific builder's risk policy that covers the structure and materials during construction, in addition to your ongoing program.",
  },
  {
    q: "Do you provide certificates to local building departments and GCs?",
    a: "Yes. We supply the certificates of insurance, license bonds, and additional-insured endorsements that local building departments, GCs, and developers require — turned around fast.",
  },
  {
    q: "Who services my policy if my crew works across multiple regions?",
    a: "We do — coast to coast. Because we're licensed everywhere, a single program can follow your crews across regional lines, with one point of contact for certificates, endorsements, and claims.",
  },
];

/* ============================================================
   SERVICE DETAIL — per-service editorial content
   ============================================================ */
export interface ServiceDetail {
  heroBlurb: string;
  whatsCovered: string[];
  whoItsFor: string[];
  whyCca: string[];
  faqs: FAQItem[];
}

export const SERVICE_DETAIL: Record<string, ServiceDetail> = {
  "general-liability": {
    heroBlurb:
      "Third-party bodily injury and property damage protection for your framing crews, jobsites, and subcontracted work — including products-completed operations and the additional-insured certificates that get you onto the project.",
    whatsCovered: [
      "Bodily injury to visitors, other trades, and the public on your jobsite",
      "Property damage caused by your framing operations or subcontracted work",
      "Products-completed operations for framing you've finished",
      "Defense costs and legal fees when you're named in a lawsuit",
      "Additional-insured status for the GCs and developers you frame for",
      "Fire damage to property you're working on (with proper limits)",
    ],
    whoItsFor: [
      "Residential framing contractors and rough carpentry crews",
      "Commercial and multifamily framing subcontractors",
      "Crews that frame over two stories or set roof trusses",
      "Framers who subcontract portions of their work",
      "Any framer whose GC requires additional-insured certificates",
    ],
    whyCca: [
      "GL placed WITHOUT the height exclusions that haunt budget policies",
      "Additional-insured and waiver-of-subrogation endorsements issued fast",
      "Limits scaled to what your commercial contracts actually require",
    ],
    faqs: [
      {
        q: "What does general liability cover for a framing contractor?",
        a: "GL covers third-party bodily injury and property damage caused by your framing operations — a visitor hurt on your jobsite, damage you cause to adjacent property, or a completed-operations claim after the frame is up. It does not cover your own injuries (that's workers' comp) or your own tools (that's a tools floater).",
      },
      {
        q: "Does framing GL cover work above two stories?",
        a: "It should. Many low-cost contractor policies exclude work over one or two stories or exclude roof work entirely. Because framing is a height trade, we place GL that specifically covers two- and three-story framing, truss setting, and roof work.",
      },
      {
        q: "What's the difference between GL and workers' comp for framers?",
        a: "GL covers third parties (other people and their property). Workers' comp covers your own employees if they're hurt on the job. You need both — GCs require GL certificates, and state law requires workers' comp for your W-2 crew.",
      },
      {
        q: "Why do GCs require me to add them as additional insured?",
        a: "Additional-insured status extends your GL to the GC for your operations, so if a claim arises from your framing work your policy responds first. It's a standard contract requirement, along with a waiver of subrogation and primary/non-contributory language. We issue these routinely.",
      },
      {
        q: "Does GL cover fire damage to the building I'm framing?",
        a: "Partially. GL typically includes limited coverage for fire damage to property in your care (often a $50,000 or $100,000 sublimit), but the structure itself should be covered under builder's risk. We coordinate both so the frame is protected during construction.",
      },
      {
        q: "Are framing subcontractors covered under my GL?",
        a: "No. Independent subcontractors need their own GL and should name you additional insured. If an uninsured sub causes a loss, you can be pulled in. We help set up certificate tracking so subcontracted work doesn't become your liability.",
      },
      {
        q: "What GL limits do framing contractors need?",
        a: "Most residential framers carry $1M per occurrence / $2M general aggregate. Commercial and multifamily GCs often require $2M or $5M limits — we add an umbrella to reach them when needed.",
      },
      {
        q: "How is framing GL premium calculated?",
        a: "GL for contractors is usually rated on payroll and subcontractor cost, sometimes on revenue. Accurate classification and documented loss control keep the premium fair. We document your real operation so you're not rated on a worst-case guess.",
      },
    ],
  },
  "workers-compensation": {
    heroBlurb:
      "Coverage for the injury patterns unique to framing crews — falls from height, nail-gun and saw lacerations, struck-by and material-handling injuries — with correct class 5403 coding so you're not overpaying or underinsured.",
    whatsCovered: [
      "Medical treatment for on-the-job framing injuries",
      "Disability and lost-wage benefits for injured crew members",
      "Fall-from-height and scaffold injuries",
      "Nail-gun, saw, and laceration claims",
      "Struck-by and material-handling injuries",
      "Employers' liability (Part Two) protection",
    ],
    whoItsFor: [
      "Framing contractors with W-2 employees",
      "Crews working at height on trusses, walls, and roofs",
      "Sole proprietors who elect to cover themselves",
      "Any framer required by state law to carry workers' comp",
    ],
    whyCca: [
      "Correct NCCI class 5403 coding — not generic construction codes",
      "Fall-protection documentation that supports better rates",
      "Aggressive claims management to protect your experience modifier",
    ],
    faqs: [
      {
        q: "What is the workers' comp class code for framing?",
        a: "Wood framing and rough carpentry is most often coded under NCCI class 5403 (Carpentry). Some operations split out roof truss setting, siding, or interior finish work into separate codes. Correct coding keeps your premium fair and prevents audit surprises.",
      },
      {
        q: "How much is workers' comp for a framing contractor?",
        a: "Workers' comp is rated on payroll by class code. Framing (5403) carries a higher rate than office work because of the fall and tool exposure, but good loss control and a clean experience modifier meaningfully reduce it. We quote based on your actual payroll and history.",
      },
      {
        q: "Do owner-operators need to carry workers' comp on themselves?",
        a: "It depends on your state and business structure. Many states exempt sole proprietors and single-member LLC owners, but you can elect coverage, and if you have any W-2 employees you must carry it. We'll tell you exactly what your state requires.",
      },
      {
        q: "Will one claim make my rates unaffordable?",
        a: "A serious claim affects your experience modifier, but the impact is bounded and improves over time. The best defense is correct class coding, a documented fall-protection program, and aggressive claim management — all of which we provide to keep your mod down.",
      },
      {
        q: "How do you handle fall-from-height claims?",
        a: "Falls are the most common serious framing injury. We respond within 2 hours, make sure the injured framer gets care fast, and manage the claim with the carrier to control cost and get the crew member back to work. Good handling protects both the worker and your modifier.",
      },
      {
        q: "What if my crew works in multiple states?",
        a: "Workers' comp follows where the work is performed, and each state has its own rules and rates. Because we're licensed in all 50 states, we structure a program that covers your crews across state lines without gaps.",
      },
      {
        q: "Are 1099 subcontractors covered under my workers' comp?",
        a: "Generally no — true independent contractors carry their own. But many states apply a 'statutory employee' test, and misclassifying W-2 workers as 1099 can leave you liable. We help you classify workers correctly and document it.",
      },
      {
        q: "How do audits work for framing workers' comp?",
        a: "At policy end, the carrier audits your actual payroll by class code and true-ups the premium. If your payroll was underreported you'll owe more; if overreported, you'll get a return. We help you classify payroll correctly up front to avoid audit shock.",
      },
    ],
  },
  "commercial-auto": {
    heroBlurb:
      "Coverage for the pickup trucks, dump trailers, and lumber haulers that move your crew and materials between jobsites — including hired/non-owned vehicles and loading liability.",
    whatsCovered: [
      "Liability for at-fault accidents in work trucks and trailers",
      "Physical damage (comprehensive & collision) to owned vehicles",
      "Lumber and material-hauling trailers",
      "Hired and non-owned auto for employees driving their own trucks",
      "Uninsured and underinsured motorist coverage",
      "Loading and unloading liability",
    ],
    whoItsFor: [
      "Framers with owned pickup trucks, dump trailers, or haulers",
      "Crews that transport lumber, trusses, and materials",
      "Operations whose employees drive personal trucks for work",
      "Any framer whose personal auto policy would deny a work claim",
    ],
    whyCca: [
      "Business-use rating that won't deny your jobsite driving",
      "Trailer and lumber-hauling exposure factored in",
      "Fleet and single-vehicle programs available",
    ],
    faqs: [
      {
        q: "Why can't I use my personal auto policy for my work truck?",
        a: "Personal auto policies typically exclude business use and will deny a claim when you're hauling lumber, tools, or a crew to a jobsite. Commercial auto is rated for business use and covers the real way framers drive.",
      },
      {
        q: "What is hired and non-owned auto, and do framers need it?",
        a: "Hired auto covers rental vehicles; non-owned auto covers employees driving their own personal vehicles for your business. If any crew member runs materials in their own truck, you want non-owned coverage — it protects your business when their personal policy falls short.",
      },
      {
        q: "Are the lumber and tools in my truck covered by auto?",
        a: "Liability for an at-fault crash is covered, but the cargo (lumber, tools) generally is not. Lumber in transit is an installation floater / inland marine matter, and tools are a tools & equipment matter. We coordinate all three.",
      },
      {
        q: "Do I need commercial auto for a dump trailer?",
        a: "Yes. Trailers need their own physical damage coverage and the truck towing them needs adequate liability. We schedule trailers and make sure the combined rig is properly insured.",
      },
      {
        q: "How is commercial auto rated for framing contractors?",
        a: "Premium is based on the vehicles (type, value, use), drivers (records and experience), and radius of operation. Clean driving records and accurate vehicle scheduling keep the cost down.",
      },
      {
        q: "What if an employee gets in an accident in a company truck?",
        a: "Commercial auto covers at-fault liability and physical damage for company vehicles. We respond fast, coordinate the claim, and get the truck repaired or replaced so the crew keeps moving.",
      },
      {
        q: "Do you insure framing fleets or just single trucks?",
        a: "Both. Whether you run a single work truck or a fleet of haulers and trailers, we structure a commercial auto program that covers every vehicle and driver.",
      },
      {
        q: "Does commercial auto cover loading and unloading lumber?",
        a: "Many policies include some loading/unloading liability, but the cargo itself is an inland marine matter. We make sure the liability gap is closed and pair the auto policy with a tools and materials floater.",
      },
    ],
  },
  "builders-risk": {
    heroBlurb:
      "Course-of-construction coverage for the building you're framing — lumber packages, installed materials, and labor — against fire, wind, theft, and vandalism while the project is open to loss.",
    whatsCovered: [
      "Lumber packages and framing materials on site",
      "Installed framing, sheathing, and labor in place",
      "Fire, wind, theft, and vandalism during construction",
      "Soft costs and delayed opening (optional)",
      "Materials in transit and at staging areas",
      "Scaffolding, temporary structures, and forms",
    ],
    whoItsFor: [
      "Framers responsible for the materials they install",
      "Contractors whose GC's master policy leaves gaps",
      "Owners and builders on custom or spec homes",
      "Crews framing in wildfire, wind, or high-theft areas",
    ],
    whyCca: [
      "Closes the gap between delivered materials and installed work",
      "Written for the project's real value and construction timeline",
      "Covers the exposures GC master policies often miss",
    ],
    faqs: [
      {
        q: "What does builder's risk cover for a framing project?",
        a: "Builder's risk (course of construction) covers the structure and materials during construction — fire, wind, theft, vandalism, and some weather damage to the lumber package and installed framing. It protects the value of what you're building while it's most exposed.",
      },
      {
        q: "If the GC carries builder's risk, do I need my own?",
        a: "Not always, but gaps are common. The GC's master policy may not cover materials you've delivered but not yet installed, or may carry a large deductible that falls on you. We review the GC's program and add an installation floater if there's a gap.",
      },
      {
        q: "Does builder's risk cover lumber stolen from the jobsite?",
        a: "Yes — theft of materials from the site is a covered cause of loss under most builder's risk forms, subject to the policy terms and deductible. Given how common lumber theft is, this is one of the most valuable parts of the coverage.",
      },
      {
        q: "Who buys builder's risk — the framer, the GC, or the owner?",
        a: "It varies by contract. Often the owner or GC carries a master policy. When you're responsible for materials and labor you've put in place, an installation floater or your own builder's risk makes sure you're protected regardless of what the GC carries.",
      },
      {
        q: "Does builder's risk cover wind and weather?",
        a: "Most forms cover wind and weather damage to the structure under construction, though named-storm and hurricane coverage may carry separate deductibles in coastal zones. We structure the policy for your region's weather exposure.",
      },
      {
        q: "What are soft costs in builder's risk?",
        a: "Soft costs are the additional expenses from a construction delay — extra interest, real estate taxes, rent, and re-engineering. Soft-cost coverage is optional but valuable on larger projects where a fire or storm could push back completion.",
      },
      {
        q: "How is the builder's risk limit determined?",
        a: "The limit should equal the completed value of the project (materials, labor, and profit) at the time of loss. We help you set the limit correctly so the structure is fully insured throughout the build.",
      },
      {
        q: "Does builder's risk cover fire damage during framing?",
        a: "Yes. Fire is a covered peril, and a framed structure full of combustible lumber is exactly when the exposure peaks. Builder's risk covers fire damage to the structure and materials during construction.",
      },
    ],
  },
  "inland-marine-equipment": {
    heroBlurb:
      "Scheduled tools-and-equipment coverage for the pneumatic nailers, miter saws, generators, and compressors that walk off jobsites — plus installation floaters that cover materials in transit to the frame.",
    whatsCovered: [
      "Pneumatic nail guns, miter saws, and circular saws",
      "Generators, air compressors, and lasers",
      "Theft from jobsites, trucks, and trailers",
      "Materials in transit to the jobsite (installation floater)",
      "Mobile equipment and small tools",
      "Replacement cost on scheduled gear",
    ],
    whoItsFor: [
      "Framers with significant investment in power tools",
      "Crews whose gear lives on trucks and jobsites",
      "Contractors responsible for materials in transit",
      "Any framer who's had tools stolen",
    ],
    whyCca: [
      "Tools scheduled at replacement cost — not depreciated",
      "Theft coverage that follows your gear wherever it goes",
      "Installation floaters that close the transit gap",
    ],
    faqs: [
      {
        q: "Does general liability cover my stolen nail guns and saws?",
        a: "No. GL and commercial property do not cover tools off-premises. Tools are an inland marine (tools & equipment) coverage. We schedule your nail guns, saws, generators, and compressors so theft is covered.",
      },
      {
        q: "How is a tools floater different from commercial property?",
        a: "Commercial property covers gear at a fixed location like your shop. A tools & equipment (inland marine) floater follows your tools wherever they go — jobsite, truck, trailer — which is where framing tools actually live and get stolen.",
      },
      {
        q: "Is tools coverage replacement cost or actual cash value?",
        a: "We write tools & equipment at replacement cost so a stolen nailer or saw is replaced new, not depreciated to pennies. That's the difference between staying on schedule and buying gear out of pocket.",
      },
      {
        q: "What is an installation floater and why do framers need it?",
        a: "An installation floater covers materials (lumber, trusses, hardware) while in transit to the jobsite and until they're installed and covered by builder's risk. It closes the gap between the supplier's truck and the structure.",
      },
      {
        q: "How do I value my tools for a floater?",
        a: "We build a schedule listing each major tool and its replacement value. You can update the schedule as you add gear. Accurate scheduling keeps premiums fair and claims fast.",
      },
      {
        q: "Are tools stolen from my truck covered?",
        a: "Yes — a tools & equipment floater covers theft from your truck, trailer, and jobsite, subject to the policy terms and deductible. Given how often tools are stolen from vehicles, this is essential for framers.",
      },
      {
        q: "Does the floater cover borrowed or rented tools?",
        a: "It can. We can extend coverage to borrowed and rented equipment, which matters if you rent lifts, compressors, or specialty tools for a job. Tell us what you use and we'll structure it.",
      },
      {
        q: "How fast are tools claims paid?",
        a: "Once you provide a police report (for theft) and the schedule, tools claims are typically paid quickly so you can replace gear and get back to work. We help you document to keep it moving.",
      },
    ],
  },
  "property": {
    heroBlurb:
      "All-risk commercial property coverage for the framer's shop, storage yard, wall-panel facility, and lumber/inventory — built for the combustible loading and hot-work exposures of a wood operation.",
    whatsCovered: [
      "Shop, office, and storage buildings",
      "Wall-panel and truss fabrication facilities",
      "Lumber and material inventory",
      "Office equipment and records",
      "Equipment breakdown for shop machinery",
      "Business interruption during restoration",
    ],
    whoItsFor: [
      "Framers with a shop, yard, or prefab facility",
      "Contractors carrying lumber and material inventory",
      "Operations with wall-panel or truss production",
      "Any framer whose business depends on a fixed location",
    ],
    whyCca: [
      "Combustible-loading and hot-work exposure priced correctly",
      "Equipment and inventory at replacement cost",
      "Business interruption with adequate restoration period",
    ],
    faqs: [
      {
        q: "What does commercial property cover for a framing business?",
        a: "It covers your shop, yard, prefab facility, lumber and material inventory, and office equipment against fire, theft, wind, and other covered perils — the fixed-location assets your business depends on.",
      },
      {
        q: "Does commercial property cover my lumber inventory?",
        a: "Yes. Lumber and material inventory stored at your yard or shop can be scheduled and covered at your location. Materials on the jobsite are a builder's risk / installation floater matter — we coordinate both.",
      },
      {
        q: "Will a property policy cover a wall-panel plant?",
        a: "Yes, and we tailor it — wall-panel and truss fabrication add manufacturing property and equipment-breakdown exposures. We schedule the production equipment and include business interruption for the restoration period.",
      },
      {
        q: "Why does combustible loading matter for my shop?",
        a: "A shop full of lumber and sawdust is a higher fire exposure than a typical office, and that affects underwriting and pricing. We document your housekeeping and fire-protection program to get the best terms.",
      },
      {
        q: "Is equipment breakdown included?",
        a: "It can be. Equipment breakdown covers internal mechanical and electrical failures of shop machinery — saws, compressors, panel equipment — that standard property excludes. We include it for operations with significant machinery.",
      },
      {
        q: "Does property cover business interruption if my shop burns?",
        a: "Business interruption coverage pays your lost income and ongoing expenses during restoration. For a framing business, that can mean the difference between surviving a fire and closing. We size the restoration period to your real recovery time.",
      },
      {
        q: "Replacement cost or actual cash value for my property?",
        a: "We recommend replacement cost so a loss restores your shop and equipment new, not depreciated. For specialized or older equipment, ACV can leave you dramatically underinsured.",
      },
      {
        q: "How is commercial property rated for framers?",
        a: "Premium reflects construction type, protection (sprinklers, alarms), occupancy, lumber inventory value, and fire exposure. Good housekeeping and documented protection programs improve both terms and price.",
      },
    ],
  },
  "umbrella-excess-liability": {
    heroBlurb:
      "Layered limits above your GL, auto, and employers' liability — essential when a fall, a framed-structure fire, or a multi-party jobsite loss could otherwise exhaust your primary coverage.",
    whatsCovered: [
      "Additional limits above GL, commercial auto, and employers' liability",
      "Limits from $2M up to $10M+ for catastrophic claims",
      "Protection for multi-party jobsite losses",
      "Coverage that follows the underlying policy form",
      "Defense contributions on large complex claims",
    ],
    whoItsFor: [
      "Framers whose GC contracts require higher limits",
      "Crews on commercial and multifamily projects",
      "Contractors with significant assets to protect",
      "Any framer whose primary limits no longer match exposure",
    ],
    whyCca: [
      "Limits layered cleanly above your underlying program",
      "Up to $10M+ available for high-exposure operations",
      "Priced for framing contractors, not generic small business",
    ],
    faqs: [
      {
        q: "What does an umbrella policy cover for a framing contractor?",
        a: "An umbrella adds liability limits above your general liability, commercial auto, and employers' liability. If a serious fall, fire, or jobsite loss exhausts your primary policy, the umbrella pays the layers above — protecting your assets and your contracts.",
      },
      {
        q: "How much umbrella coverage does a framer need?",
        a: "It's driven by your largest realistic loss and your contract requirements. Many commercial and multifamily GCs require $2M–$5M total limits. We model your worst-case scenarios and size the umbrella to what your work actually demands.",
      },
      {
        q: "Does the umbrella sit over workers' comp too?",
        a: "It sits over employers' liability (Part Two of workers' comp), not the workers' comp benefit itself. That matters for serious injury claims that exceed primary employers' liability limits.",
      },
      {
        q: "Why would a GC require an umbrella?",
        a: "Large projects and commercial contracts shift risk down to subcontractors and require proof of high limits — often $2M–$5M. Carrying an umbrella lets you bid that work and protects you from a catastrophic claim.",
      },
      {
        q: "How is umbrella premium calculated?",
        a: "Umbrella premium is a fraction of your underlying liability cost and reflects your operations, underlying limits, and the umbrella layer chosen. It's one of the most cost-effective ways to add protection.",
      },
      {
        q: "Can I add umbrella limits mid-policy if a contract requires it?",
        a: "Often yes. If a new project requires higher limits, we can frequently increase the umbrella (subject to underwriting) so you can take the work. Tell us the requirement and we'll move.",
      },
      {
        q: "Does the umbrella cover jobsite fires and product claims?",
        a: "Yes. An umbrella responds to the same types of claims your underlying GL covers — including framed-structure fires and completed-operations claims — once primary limits are exhausted.",
      },
      {
        q: "What's the difference between umbrella and excess liability?",
        a: "A true umbrella can drop down to cover some claims not covered by underlying policies; a straight excess policy simply adds limits on top of the same coverage. We place the form that fits your exposure and budget.",
      },
    ],
  },
  "contractors-bonds": {
    heroBlurb:
      "The bonds that keep you legal and competitive — state contractor license bonds, permit bonds, and bid/performance bonds for the GCs and developers who require them before you set the first plate.",
    whatsCovered: [
      "State contractor license bonds (CSLB, TREC, ROC, and more)",
      "Permit and code-compliance bonds",
      "Bid bonds for project pursuit",
      "Performance and payment bonds",
      "Supply bonds for material commitments",
      "Court and miscellaneous bonds",
    ],
    whoItsFor: [
      "Framers required to hold a state contractor license bond",
      "Contractors bidding bonded public or commercial work",
      "Crews needing permit bonds to pull jobsite permits",
      "Any framer whose GC requires a performance bond",
    ],
    whyCca: [
      "License bonds written for your state's specific requirements",
      "Bid and performance bond capacity for larger projects",
      "Bonds coordinated with your insurance program under one roof",
    ],
    faqs: [
      {
        q: "What's the difference between a bond and insurance?",
        a: "Insurance protects you against loss. A surety bond is a three-party guarantee — the surety guarantees you'll fulfill an obligation (your license, a contract, a permit). If you don't, the surety pays the obligee and then seeks reimbursement from you.",
      },
      {
        q: "Do framing contractors need a license bond?",
        a: "In most states, yes — holding a contractor license requires a license bond (surety bond) that guarantees compliance with state contracting law. The amount and form vary by state. We write license bonds for every state we serve.",
      },
      {
        q: "What is a performance bond and when is it required?",
        a: "A performance bond guarantees you'll complete a project per the contract. Public projects and many commercial GCs require performance and payment bonds, especially above certain contract values. We secure the bonding capacity to pursue that work.",
      },
      {
        q: "How much does a contractor license bond cost?",
        a: "License bond cost is a small percentage of the bond amount and depends on your credit, license history, and the state's required amount. Most run a few hundred dollars a year. We quote quickly.",
      },
      {
        q: "Can you help me get bonded for a bigger project?",
        a: "Yes. We work with sureties to establish bonding capacity — single-job and program (aggregate) limits — so you can bid bonded work. We'll help you present your financials and track record to qualify.",
      },
      {
        q: "What's a bid bond?",
        a: "A bid bond guarantees that if you win a bid, you'll enter the contract and provide a performance bond. It protects the project owner from bidders who back out. We issue bid bonds to support your pursuit of bonded projects.",
      },
      {
        q: "Do permit bonds cost a lot?",
        a: "Permit and code-compliance bonds are typically inexpensive and required by local building departments to pull permits. We turn them around fast so your schedule isn't held up.",
      },
      {
        q: "Can I get my bonds and insurance from the same place?",
        a: "Yes — and it's simpler. We write your license, performance, and permit bonds alongside your insurance program, with one point of contact for certificates, endorsements, and renewals.",
      },
    ],
  },
};

/* ============================================================
   COVERAGE REGIONS — for coverage page
   ============================================================ */
export const AZ_REGIONS = [
  { name: "Texas & the Southwest", note: "TX, NM, AZ — the busiest framing markets in the country" },
  { name: "U.S. Southeast", note: "FL, GA, NC, SC — hurricane-zone and high-volume residential framing" },
  { name: "Rocky Mountain West", note: "CO, ID, UT — Front-Range and Intermountain residential construction" },
  { name: "Pacific Northwest", note: "OR, WA — wet-climate, seismic-zone framing operations" },
  { name: "Desert West", note: "AZ, NV — Phoenix and Las Vegas high-volume residential production" },
  { name: "Great Lakes & Midwest", note: "MI, OH, IL, IN — suburban and rural residential markets" },
  { name: "Northeast & Mid-Atlantic", note: "NY, NJ, PA, New England — dense residential and remodel work" },
  { name: "California & West Coast", note: "CA — seismic-zone, WUI, and Title 24 framing environments" },
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
   Quote form select options (framing-specific)
   ============================================================ */
export const QUOTE_SERVICE_TYPES = [
  "General Liability Insurance",
  "Workers' Compensation",
  "Commercial Auto Insurance",
  "Builder's Risk Insurance",
  "Tools & Equipment / Inland Marine",
  "Commercial Property Insurance",
  "Umbrella / Excess Liability",
  "Contractor License & Surety Bonds",
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
