import { SITE_CONFIG, type PageData, type SiteContentAuthor } from "@/config/site";
import { getArticleDatesForSlug } from "@/lib/articleDates";
import { getContentAuthorForSlug } from "@/lib/contentAuthorPick";

function stripTrailingSlash(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

function baseUrl() {
  // Prefer the actual runtime origin (preview/staging/custom domain).
  if (typeof window !== "undefined" && window.location?.origin) {
    return stripTrailingSlash(window.location.origin);
  }
  return stripTrailingSlash(SITE_CONFIG.url);
}

export function canonicalForSlug(slug: string) {
  return `${baseUrl()}/${slug}`;
}

export function canonicalHome() {
  return baseUrl();
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

function jsonLdContentAuthorPerson(a: SiteContentAuthor) {
  const home = canonicalHome();
  const person: Record<string, unknown> = {
    "@type": "Person",
    name: a.name,
    url: a.url || home,
  };
  if (a.jobTitle) person.jobTitle = a.jobTitle;
  if (a.image) person.image = a.image;
  if (a.sameAs?.length) person.sameAs = a.sameAs;
  person.worksFor = {
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: home,
  };
  return person;
}

export function jsonLdWebPage(page: PageData) {
  const pageUrl = canonicalForSlug(page.slug);
  const home = canonicalHome();
  const { datePublished, dateModified } = getArticleDatesForSlug(page.slug);
  const author = getContentAuthorForSlug(page.slug);
  return {
    "@context": "https://schema.org",
    "@type": page.isPillar ? "WebPage" : "Article",
    headline: page.title,
    description: page.metaDescription ?? page.description,
    url: pageUrl,
    datePublished,
    dateModified,
    author: jsonLdContentAuthorPerson(author),
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: home,
      logo: {
        "@type": "ImageObject",
        url: SITE_CONFIG.ogImage,
      },
    },
    inLanguage: "en",
  };
}

