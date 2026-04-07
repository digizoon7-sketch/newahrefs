import type { PageData } from "@/config/site";
import { jsonLdBreadcrumbs, jsonLdOrganization, jsonLdWebPage, jsonLdWebsite } from "@/lib/seo";

/** Server-rendered JSON-LD for article routes (matches legacy DynamicPage). */
export function SeoJsonLdScripts({ page }: { page: PageData }) {
  const ldOrg = jsonLdOrganization();
  const ldSite = jsonLdWebsite();
  const ldCrumbs = jsonLdBreadcrumbs(page);
  const ldPage = jsonLdWebPage(page);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldOrg) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldSite) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldCrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldPage) }} />
    </>
  );
}
