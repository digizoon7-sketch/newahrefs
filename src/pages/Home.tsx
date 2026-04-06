import { ReferenceStyleHome } from "@/components/reference-home/ReferenceStyleHome";
import { Helmet } from "react-helmet-async";
import { SITE_CONFIG } from "@/config/site";

export function Home() {
  return (
    <>
      <Helmet>
        <title>AhrefsGroupBuy - Fast, Stable Ahrefs Group Buy Access</title>
        <meta
          name="description"
          content="AhrefsGroupBuy provides stable shared Ahrefs access for keyword research, backlink checks, site audits, and competitor analysis with a secure dashboard and responsive support."
        />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta name="googlebot" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta
          name="keywords"
          content={[
            "ahrefs group buy",
            "seo tools",
            "keyword research",
            "backlink analysis",
            "site audit",
            "competitor analysis",
          ].join(", ")}
        />
        <meta name="publisher" content={SITE_CONFIG.name} />
        <meta httpEquiv="content-language" content="en" />
        <link rel="canonical" href={SITE_CONFIG.url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_CONFIG.name} />
        <meta property="og:title" content="Ahrefs Group Buy Access – Secure Dashboard, Stable Uptime & Support" />
        <meta
          property="og:description"
          content="Get reliable Ahrefs group buy access for SEOs and agencies. Secure dashboard, stable uptime, and responsive support to keep your keyword research and competitor analysis moving."
        />
        <meta property="og:url" content={SITE_CONFIG.url} />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ahrefs Group Buy Access – Secure Dashboard, Stable Uptime & Support" />
        <meta
          name="twitter:description"
          content="Get reliable Ahrefs group buy access for SEOs and agencies. Secure dashboard, stable uptime, and responsive support to keep your keyword research and competitor analysis moving."
        />
      </Helmet>
      <ReferenceStyleHome />
    </>
  );
}
