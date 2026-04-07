import { HomeStructuredData } from "@/components/HomeStructuredData";
import { Home } from "@/vite-pages/Home";
import type { Metadata } from "next";

import { SITE_CONFIG } from "@/config/site";
import { metadataAbsoluteOrigin } from "@/lib/metadataOrigin";

const homeTitle = "AhrefsGroupBuy – Fast, Stable Shared Ahrefs Access";
const homeDescription =
  "AhrefsGroupBuy shares Ahrefs for keyword research, backlinks, audits, and competitors—dashboard access with responsive support.";

export async function generateMetadata(): Promise<Metadata> {
  const base = await metadataAbsoluteOrigin();
  const url = base;
  const ogImage = `${base}/og.svg`;
  return {
    title: homeTitle,
    description: homeDescription,
    keywords: SITE_CONFIG.seoKeywords,
    publisher: SITE_CONFIG.name,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE_CONFIG.name,
      title: homeTitle,
      description: homeDescription,
      images: [{ url: ogImage, alt: SITE_CONFIG.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: homeTitle,
      description: homeDescription,
      images: [ogImage],
    },
    metadataBase: new URL(`${base}/`),
  };
}

export default function Page() {
  return (
    <>
      <HomeStructuredData />
      <Home />
    </>
  );
}

