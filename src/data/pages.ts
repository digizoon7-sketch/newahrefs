export interface SEOPage {
  slug: string;
  title: string;
  description: string;
  content: string;
  cluster: string;
  isPillar: boolean;
  parentSlug?: string;
}

export const PAGES: Record<string, SEOPage> = {
  "ahrefs-group-buy-guide": {
    slug: "ahrefs-group-buy-guide",
    title: "Ahrefs Group Buy Guide: Everything You Need to Know",
    description: "The ultimate guide to Ahrefs group buy access. Learn how to get premium SEO tools at a fraction of the cost.",
    cluster: "Main Intent",
    isPillar: true,
    content: "Detailed guide content about Ahrefs group buy..."
  },
  "best-providers": {
    slug: "best-providers",
    title: "Best Ahrefs Group Buy Providers in 2026",
    description: "Compare the top-rated Ahrefs group buy providers. We rank them based on uptime, speed, and support.",
    cluster: "Trust & Providers",
    isPillar: true,
    content: "Comparison of best providers..."
  },
  "pricing-and-plans": {
    slug: "pricing-and-plans",
    title: "Ahrefs Group Buy Pricing & Plans",
    description: "Affordable Ahrefs access starting from $10/month. View our Lite, Standard, and Advanced plans.",
    cluster: "Pricing & Cheap Access",
    isPillar: true,
    content: "Detailed pricing breakdown..."
  },
  "risks-and-limitations": {
    slug: "risks-and-limitations",
    title: "Risks and Limitations of Group Buy Tools",
    description: "Is Ahrefs group buy safe? Learn about the potential risks and how to mitigate them.",
    cluster: "Risks & Limitations",
    isPillar: true,
    content: "Risk assessment content..."
  },
  "best-alternatives": {
    slug: "best-alternatives",
    title: "Best Ahrefs Alternatives for SEOs",
    description: "Looking for something else? Explore the best Ahrefs alternatives for backlink audit and keyword research.",
    cluster: "Alternatives & Comparisons",
    isPillar: true,
    content: "Alternatives comparison..."
  }
};

// Supporting pages for Cluster 1
const cluster1Supporting = [
  "how-to-use-ahrefs-group-buy",
  "ahrefs-group-buy-for-agencies",
  "is-ahrefs-group-buy-legal",
  "ahrefs-group-buy-chrome-extension",
  "ahrefs-group-buy-uptime-stats",
  "ahrefs-group-buy-support"
];

cluster1Supporting.forEach(slug => {
  PAGES[slug] = {
    slug,
    title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    description: `Learn more about ${slug.replace(/-/g, ' ')} for your SEO needs.`,
    cluster: "Main Intent",
    isPillar: false,
    parentSlug: "ahrefs-group-buy-guide",
    content: `Detailed content for ${slug}...`
  };
});

// Adding more supporting pages for other clusters...
const otherClusters = [
  { parent: "best-providers", cluster: "Trust & Providers", slugs: ["top-10-providers", "provider-reviews", "uptime-guarantee", "customer-support-comparison", "fastest-ahrefs-access", "reliable-seo-tools"] },
  { parent: "pricing-and-plans", cluster: "Pricing & Cheap Access", slugs: ["cheap-ahrefs-access", "ahrefs-lite-vs-standard", "annual-discounts", "payment-methods", "refund-policy", "trial-access"] },
  { parent: "risks-and-limitations", cluster: "Risks & Limitations", slugs: ["account-bans", "data-privacy", "tool-limitations", "shared-account-security", "browser-compatibility", "proxy-requirements"] },
  { parent: "best-alternatives", cluster: "Alternatives & Comparisons", slugs: ["semrush-vs-ahrefs", "moz-vs-ahrefs", "ubersuggest-vs-ahrefs", "majestic-vs-ahrefs", "serpstat-vs-ahrefs", "spyfu-vs-ahrefs"] }
];

otherClusters.forEach(group => {
  group.slugs.forEach(slug => {
    PAGES[slug] = {
      slug,
      title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      description: `In-depth analysis of ${slug.replace(/-/g, ' ')} in the context of Ahrefs group buy.`,
      cluster: group.cluster,
      isPillar: false,
      parentSlug: group.parent,
      content: `Detailed content for ${slug}...`
    };
  });
});
