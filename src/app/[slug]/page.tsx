import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PAGES, SITE_CONFIG, type PageData } from "@/config/site";
import { metadataAbsoluteOrigin, metadataAbsoluteUrl } from "@/lib/metadataOrigin";
import { DynamicSlugPage } from "@/next/DynamicSlugPage";

const META_TITLE_MAX = 59;
const META_TITLE_MIN = 41;
const META_DESC_MAX = 154;

function clipMetaDescription(text: string): string {
  const t = text.trim();
  if (t.length <= META_DESC_MAX) return t;
  return `${t.slice(0, META_DESC_MAX - 1).trimEnd()}…`;
}

function metaTitleForPage(page: PageData): string {
  if (page.metaTitle) return page.metaTitle;
  let main = page.title.trim();
  if (main.length > META_TITLE_MAX) {
    main = `${main.slice(0, META_TITLE_MAX - 1).trimEnd()}…`;
  }
  if (main.length < META_TITLE_MIN) {
    main = `${main} – guide`.slice(0, META_TITLE_MAX);
  }
  return main;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const page = PAGES[slug];
  if (!page) return {};

  const base = await metadataAbsoluteOrigin();
  const pageUrl = await metadataAbsoluteUrl(page.slug);
  const ogImage = `${base}/og.svg`;

  const title = metaTitleForPage(page);
  const description = clipMetaDescription(page.metaDescription ?? page.description);

  return {
    title,
    description,
    metadataBase: new URL(`${base}/`),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "article",
      url: pageUrl,
      title,
      description,
      siteName: SITE_CONFIG.name,
      images: [{ url: ogImage, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Page(props: PageProps<"/[slug]">) {
  const { slug } = await props.params;
  const page = PAGES[slug];
  if (!page) notFound();
  return <DynamicSlugPage slug={slug} />;
}

