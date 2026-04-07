import { SITE_CONFIG } from "@/config/site";

/** Your brand + URLs — single source for the reference-style homepage. */
export const brand = {
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  description: SITE_CONFIG.description,
};

export const hero = {
  badge: `#1 ${SITE_CONFIG.name} Service`,
  headlineBefore: "AHREFS ACCESS",
  headlineAccent: "AT 90% OFF.",
  subhead:
    "Stop paying $99/mo. Get full Ahrefs access through our premium group buy system. Same data, same tools, just a fraction of the price.",
  trustLine: "Trusted by 12,000+ SEO professionals",
};

export const homeToolStrip = [
  "Site Explorer",
  "Keywords Explorer",
  "Site Audit",
  "Rank Tracker",
  "Content Gap",
] as const;

export type MarketingPlan = {
  id: string;
  name: string;
  description: string;
  monthlyUsd: number;
  popular: boolean;
  features: string[];
  tools?: string[];
};

/** Same tiers & copy as your existing Pricing.tsx */
export const MARKETING_PLANS: MarketingPlan[] = [
  {
    id: "lite",
    name: "Lite Extension",
    description: "Perfect for beginners and casual SEO analysis.",
    monthlyUsd: 5,
    popular: false,
    features: [
      "Ahrefs SEO Toolbar",
      "SERP Metrics (DR/UR)",
      "Backlink Counts",
      "Keyword Difficulty",
      "Chrome & Firefox",
      "Email Support",
    ],
  },
  {
    id: "standard",
    name: "Standard Dash",
    description: "Essential tools for growing websites and bloggers.",
    monthlyUsd: 25,
    popular: false,
    features: [
      "Ahrefs SEO Toolbar",
      "Site Explorer Access",
      "Keywords Explorer",
      "30 Credits / Day",
      "Rank Tracker",
      "Priority Support",
    ],
  },
  {
    id: "power",
    name: "Power Bundle",
    description: "The ultimate toolkit for SEO professionals and agencies.",
    monthlyUsd: 35,
    popular: true,
    features: [
      "Everything in Standard",
      "20+ Premium SEO Tools",
      "Canva Pro & Grammarly",
      "Indexification API",
      "VIP Discord Access",
      "24/7 Live Chat",
    ],
    tools: [
      "SEMrush",
      "Canva Pro",
      "Grammarly",
      "Moz Pro",
      "SpyFu",
      "Ubersuggest",
      "Envato",
      "Indexification",
      "Keyword Tool",
      "WordAI",
      "SpinRewriter",
      "Quillbot",
      "PicMonkey",
      "StockUnlimited",
      "Crello",
      "DesignBold",
      "Storybase",
      "BuzzSumo",
      "Alexa",
      "Woorank",
    ],
  },
  {
    id: "agency",
    name: "Agency Elite",
    description: "Scale your agency with unlimited power and support.",
    monthlyUsd: 99,
    popular: false,
    features: [
      "Everything in Power",
      "White-label Reports",
      "API Access",
      "Unlimited Users",
      "Dedicated Manager",
      "Custom Integration",
    ],
  },
];

export const PKR_RATE = 280;

export const COUPON_CODE = "AHREFS20";

/** Same narrative as SharedAccess — official vs your service (visual bars). */
export const COMPARISON_BARS = [
  // Keep labels short (homepage bar layout) and map to the “group buy vs direct” comparison.
  { label: "Price", official: 18, us: 96 },
  { label: "Cost efficiency", official: 22, us: 95 },
  { label: "Accessibility", official: 30, us: 93 },
  { label: "Entry barrier", official: 24, us: 94 },
  { label: "Learning friendly", official: 28, us: 92 },
  { label: "Core features", official: 55, us: 90 },
  { label: "Use case fit", official: 45, us: 91 },
  { label: "Flexibility", official: 34, us: 93 },
  { label: "Budget flexibility", official: 26, us: 94 },
  { label: "Testing path", official: 24, us: 92 },
  { label: "Affordability", official: 20, us: 96 },
  { label: "Beginner ROI", official: 30, us: 93 },
] as const;

export const problemBullets = [
  "Expensive tools costing $99+/month each",
  "Not affordable for beginners or freelancers",
  "Multiple subscriptions to manage",
  "Limited features on free versions",
] as const;

export const solutionBullets = [
  "Get same premium tools at 90% low price",
  "Instant shared access via our secure dashboard",
  "One single subscription for all tools",
  "Full premium features unlocked",
] as const;

export const toolsShowcase = [
  { name: "Ahrefs", color: "bg-blue-50" },
  { name: "SEMrush", color: "bg-orange-50" },
  { name: "Canva Pro", color: "bg-teal-50" },
  { name: "Grammarly", color: "bg-green-50" },
  { name: "Moz Pro", color: "bg-blue-50" },
  { name: "SpyFu", color: "bg-indigo-50" },
  { name: "Ubersuggest", color: "bg-orange-50" },
  { name: "Envato", color: "bg-lime-50" },
] as const;

export const limitations = [
  {
    title: "Daily Credits",
    desc: "Each user gets a specific number of daily credits for Site Explorer and Keyword Explorer to ensure stability for everyone.",
    limitLabel: "30-50 Credits/Day",
  },
  {
    title: "Shared Projects",
    desc: "Project tracking is shared among users. We recommend using Site Explorer for individual site analysis.",
    limitLabel: "Shared Project Space",
  },
  {
    title: "Session Stability",
    desc: "Our system maintains stable sessions, but very rare interruptions can occur during high-traffic periods.",
    limitLabel: "99.9% Uptime",
  },
  {
    title: "Fair Usage",
    desc: "Automated scraping or bot-like behaviour is not allowed — it keeps access stable for every member.",
    limitLabel: "Fair Use Policy",
  },
] as const;

export function planForProjects(count: number): string {
  if (count <= 1) return "lite";
  if (count <= 5) return "standard";
  if (count <= 20) return "power";
  return "agency";
}
