import type { Metadata } from "next";

import { Privacy } from "@/vite-pages/Privacy";
import { metadataAbsoluteOrigin, metadataAbsoluteUrl } from "@/lib/metadataOrigin";

export async function generateMetadata(): Promise<Metadata> {
  const base = await metadataAbsoluteOrigin();
  const url = await metadataAbsoluteUrl("/privacy");
  return {
    title: "Privacy Policy for AhrefsGroupBuy Users & Data",
    description:
      "How AhrefsGroupBuy collects and uses your data: cookies, third parties, your rights, and how to contact us.",
    alternates: { canonical: url },
    openGraph: { url, type: "website" },
    metadataBase: new URL(`${base}/`),
  };
}

export default function Page() {
  return <Privacy />;
}

