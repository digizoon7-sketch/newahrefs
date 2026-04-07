import { jsonLdOrganization, jsonLdWebsite } from "@/lib/seo";

export function HomeStructuredData() {
  const ldOrg = jsonLdOrganization();
  const ldSite = jsonLdWebsite();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldOrg) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldSite) }} />
    </>
  );
}
