import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter, Routes, Route } from "react-router";
import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { Privacy } from "@/pages/Privacy";
import { DynamicPage } from "@/pages/DynamicPage";

type PrerenderData = { url?: string };

type HeadElement = { type: string; props: Record<string, any> };

export async function prerender(data: PrerenderData) {
  const url = data?.url ?? "/";
  const helmetContext: any = {};

  const app = (
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/:slug" element={<DynamicPage />} />
          </Routes>
        </Layout>
      </StaticRouter>
    </HelmetProvider>
  );

  const html = renderToString(app);

  const helmet = helmetContext?.helmet;
  const titleText =
    helmet?.title?.toComponent?.()?.props?.children ??
    helmet?.title?.toString?.()?.replace(/<\/?title[^>]*>/g, "") ??
    "";

  const toHeadElements = (nodes: any): HeadElement[] => {
    const arr = Array.isArray(nodes) ? nodes : nodes ? [nodes] : [];
    return arr
      .filter(Boolean)
      .map((n) => ({ type: n.type, props: n.props ?? {} }))
      .filter((e) => typeof e.type === "string" && e.type.length > 0);
  };

  const metaEls = toHeadElements(helmet?.meta?.toComponent?.());
  const linkEls = toHeadElements(helmet?.link?.toComponent?.());
  const scriptEls = toHeadElements(helmet?.script?.toComponent?.());

  const elements = new Set<HeadElement>([...metaEls, ...linkEls, ...scriptEls]);

  // Helmet tags sometimes render into the HTML string during SSR.
  // Keep the app HTML clean; head tags are injected via `head.elements`.
  const cleanedHtml = html.replace(
    /^(?:<title[^>]*>[\s\S]*?<\/title>|<meta[^>]*>|<link[^>]*>)+/,
    "",
  );

  return {
    html: cleanedHtml,
    head: {
      lang: "en",
      title: String(titleText),
      elements,
    },
  };
}

