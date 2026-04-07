import { Home } from "@/vite-pages/Home";
import type { Metadata } from "next";

import { metadataAbsoluteOrigin } from "@/lib/metadataOrigin";

export async function generateMetadata(): Promise<Metadata> {
  const base = await metadataAbsoluteOrigin();
  const url = base;
  return {
    title: "AhrefsGroupBuy – Fast, Stable Shared Ahrefs Access",
    description:
      "AhrefsGroupBuy shares Ahrefs for keyword research, backlinks, audits, and competitors—dashboard access with responsive support.",
    alternates: { canonical: url },
    openGraph: { url, type: "website" },
    metadataBase: new URL(`${base}/`),
  };
}

export default function Page() {
  return <Home />;
}

