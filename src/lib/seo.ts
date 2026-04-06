import { SITE_CONFIG, type PageData } from "@/config/site";

function stripTrailingSlash(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export function canonicalForSlug(slug: string) {
  const base = stripTrailingSlash(SITE_CONFIG.url);
  return `${base}/${slug}`;
}

export function canonicalHome() {
  return stripTrailingSlash(SITE_CONFIG.url);
}

export function jsonLdOrganization() {
  const url = canonicalHome();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url,
  };
}

export function jsonLdWebsite() {
  const url = canonicalHome();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url,
  };
}

export function jsonLdBreadcrumbs(page: PageData) {
  const homeUrl = canonicalHome() + "/";
  const pageUrl = canonicalForSlug(page.slug);

  const itemListElement: Array<{ "@type": "ListItem"; position: number; name: string; item: string }> = [
    { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
  ];

  // Keep it simple + stable: Home → Cluster → Page
  itemListElement.push({
    "@type": "ListItem",
    position: 2,
    name: page.cluster,
    item: canonicalForSlug(page.isPillar ? page.slug : page.parentSlug ?? page.slug),
  });

  itemListElement.push({
    "@type": "ListItem",
    position: 3,
    name: page.title,
    item: pageUrl,
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

export function jsonLdWebPage(page: PageData) {
  const pageUrl = canonicalForSlug(page.slug);
  return {
    "@context": "https://schema.org",
    "@type": page.isPillar ? "WebPage" : "Article",
    headline: page.title,
    description: page.metaDescription ?? page.description,
    url: pageUrl,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: canonicalHome(),
    },
    inLanguage: "en",
  };
}

