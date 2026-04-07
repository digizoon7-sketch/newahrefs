import type { Metadata, Viewport } from "next";

import { Layout } from "@/components/Layout";
import { SITE_CONFIG } from "@/config/site";

import "./globals.css";

const siteUrl = SITE_CONFIG.url.endsWith("/") ? SITE_CONFIG.url : `${SITE_CONFIG.url}/`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A284D",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AhrefsGroupBuy – Fast, Stable Shared Ahrefs Access",
    template: "%s",
  },
  description:
    "AhrefsGroupBuy shares Ahrefs for keyword research, backlinks, audits, and competitors—dashboard access with responsive support.",
  keywords: SITE_CONFIG.seoKeywords,
  publisher: SITE_CONFIG.name,
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [{ url: "/og.svg", type: "image/svg+xml" }],
    apple: [{ url: "/og.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_CONFIG.name,
    url: siteUrl,
    title: "AhrefsGroupBuy – Fast, Stable Shared Ahrefs Access",
    description:
      "AhrefsGroupBuy shares Ahrefs for keyword research, backlinks, audits, and competitors—dashboard access with responsive support.",
    images: [{ url: "/og.svg", alt: SITE_CONFIG.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AhrefsGroupBuy – Fast, Stable Shared Ahrefs Access",
    description:
      "AhrefsGroupBuy shares Ahrefs for keyword research, backlinks, audits, and competitors—dashboard access with responsive support.",
    images: ["/og.svg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

