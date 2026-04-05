export interface PageData {
  slug: string;
  title: string;
  description: string;
  content: string;
  cluster: string;
  isPillar: boolean;
  parentSlug?: string;
}

export const SITE_CONFIG = {
  name: "AhrefsGroupBuy",
  url: "https://ahrefsgroupbuy.com",
  description: "Premium Ahrefs Group Buy Access for SEO Professionals.",
  clusters: [
    {
      name: "Main",
      pillar: "ahrefs-group-buy-guide",
      supporting: [
        "what-is-ahrefs-group-buy",
        "is-ahrefs-group-buy-worth-it",
        "ahrefs-group-buy-review",
        "pros-and-cons-of-ahrefs-group-buy",
        "ahrefs-group-buy-for-beginners",
        "why-search-for-ahrefs-group-buy"
      ]
    },
    {
      name: "Trust",
      pillar: "best-ahrefs-group-buy-provider",
      supporting: [
        "trusted-ahrefs-group-buy-sites",
        "provider-review-guide",
        "ahrefs-group-buy-scam-or-legit",
        "how-to-choose-ahrefs-provider",
        "uptime-guarantee-comparison",
        "ahrefs-group-buy-reddit-reviews"
      ]
    },
    {
      name: "Pricing",
      pillar: "ahrefs-group-buy-pricing",
      supporting: [
        "cheap-ahrefs-group-buy-price",
        "cheap-ahrefs-access-guide",
        "ahrefs-cost-comparison",
        "low-cost-seo-tools",
        "ahrefs-monthly-price-breakdown",
        "best-cheap-ahrefs-options"
      ]
    },
    {
      name: "Risks",
      pillar: "ahrefs-group-buy-risks",
      supporting: [
        "ahrefs-group-buy-limitations",
        "daily-report-limits",
        "no-projects-limitation",
        "account-bans-prevention",
        "is-ahrefs-group-buy-safe",
        "common-group-buy-problems"
      ]
    },
    {
      name: "Alternatives",
      pillar: "best-plan-instead-of-ahrefs-group-buy",
      supporting: [
        "ahrefs-alternative-list",
        "best-seo-tool-alternatives",
        "group-buy-vs-official-ahrefs",
        "group-buy-vs-ahrefs-starter",
        "is-ahrefs-starter-better",
        "best-option-for-seo-tools"
      ]
    }
  ]
};

export const PAGES: Record<string, PageData> = {};

SITE_CONFIG.clusters.forEach(cluster => {
  // Add Pillar
  PAGES[cluster.pillar] = {
    slug: cluster.pillar,
    title: cluster.pillar.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    description: `Comprehensive guide about ${cluster.pillar.replace(/-/g, ' ')}.`,
    cluster: cluster.name,
    isPillar: true,
    content: `This is the pillar content for ${cluster.pillar}. It covers all aspects of the topic in detail.`
  };

  // Add Supporting
  cluster.supporting.forEach(slug => {
    PAGES[slug] = {
      slug: slug,
      title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      description: `In-depth look at ${slug.replace(/-/g, ' ')}.`,
      cluster: cluster.name,
      isPillar: false,
      parentSlug: cluster.pillar,
      content: `Detailed information about ${slug}. This supporting page provides specific insights related to the parent pillar.`
    };
  });
});
