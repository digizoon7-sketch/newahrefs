import type { Metadata } from "next";

import { Privacy } from "@/vite-pages/Privacy";
import { SITE_CONFIG } from "@/config/site";
import { metadataAbsoluteOrigin, metadataAbsoluteUrl } from "@/lib/metadataOrigin";

const privacyTitle = "Privacy Policy for AhrefsGroupBuy Users & Data";
const privacyDescription =
  "How AhrefsGroupBuy collects and uses your data: cookies, third parties, your rights, and how to contact us.";

export async function generateMetadata(): Promise<Metadata> {
  const base = await metadataAbsoluteOrigin();
  const url = await metadataAbsoluteUrl("/privacy");
  const ogImage = `${base}/og.svg`;
  return {
    title: privacyTitle,
    description: privacyDescription,
    keywords: [...SITE_CONFIG.seoKeywords, "privacy policy", "data protection", "cookies"],
    publisher: SITE_CONFIG.name,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE_CONFIG.name,
      title: privacyTitle,
      description: privacyDescription,
      images: [{ url: ogImage, alt: privacyTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: privacyTitle,
      description: privacyDescription,
      images: [ogImage],
    },
    metadataBase: new URL(`${base}/`),
  };
}

export default function Page() {
  return <Privacy />;
}

