import type { Metadata } from "next";
import { Layout } from "@/components/Layout";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AhrefsGroupBuy – Fast, Stable Shared Ahrefs Access",
    template: "%s",
  },
  description:
    "AhrefsGroupBuy shares Ahrefs for keyword research, backlinks, audits, and competitors—dashboard access with responsive support.",
  robots: {
    index: true,
    follow: true,
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

