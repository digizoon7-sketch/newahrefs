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
    name: "Ahrefs Extension",
    description: "Ahrefs Chrome extension only. Great for quick SERP checks.",
    monthlyUsd: 5,
    popular: false,
    features: [
      "Ahrefs SEO Toolbar",
      "SERP Metrics (DR/UR)",
      "Backlink Counts",
      "Keyword Difficulty",
      "Chrome Extension",
      "Basic Support",
    ],
  },
  {
    id: "standard",
    name: "Ahrefs + Extension",
    description: "Full Ahrefs access + Chrome extension for daily SEO work.",
    monthlyUsd: 25,
    popular: false,
    features: [
      "Ahrefs SEO Toolbar",
      "Site Explorer Access",
      "Keywords Explorer",
      "30 Credits / Day",
      "Rank Tracker",
      "Support Included",
    ],
  },
  {
    id: "power",
    name: "Ahrefs + 20+ Tools",
    description: "Ahrefs plus 20+ premium SEO tools in one bundle.",
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
];

export const PKR_RATE = 280;

export const COUPON_CODE = "AHREFS20";

export type ComparisonRow = {
  feature: string;
  groupBuy: string;
  direct: string;
};

/** Homepage comparison table (Group Buy vs Direct) — concise, easy to scan. */
export const COMPARISON_TABLE: ComparisonRow[] = [
  { feature: "Price", groupBuy: "Very affordable", direct: "Expensive for individuals" },
  { feature: "Cost efficiency", groupBuy: "Best value for money", direct: "High monthly cost" },
  { feature: "Accessibility", groupBuy: "Easy for beginners, bloggers, freelancers", direct: "Hard for low-budget users" },
  { feature: "Entry barrier", groupBuy: "Very low", direct: "High upfront commitment" },
  { feature: "Learning SEO", groupBuy: "Great for learning and practice", direct: "Too costly for beginners" },
  {
    feature: "Core features",
    groupBuy: "Access to important tools for keyword research, backlinks, and competitor analysis",
    direct: "Full access, but many features may be unnecessary for small users",
  },
  { feature: "Use case fit", groupBuy: "Best for niche sites, freelancers, and small projects", direct: "Better for large teams and agencies" },
  { feature: "Budget flexibility", groupBuy: "No heavy financial pressure", direct: "Regular monthly burden" },
  { feature: "Flexibility", groupBuy: "Easy to try without big commitment", direct: "Long-term payment pressure" },
  { feature: "Testing tool", groupBuy: "Good way to test Ahrefs before buying full plan", direct: "No budget-friendly trial path" },
  { feature: "Affordability", groupBuy: "Suitable for users in every budget range", direct: "Less accessible in price-sensitive markets" },
  { feature: "ROI for beginners", groupBuy: "High ROI because of low-cost useful SEO data", direct: "Lower ROI if the tool is not used fully" },
];

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
  return "power";
}
