import { headers } from "next/headers";

import { SITE_CONFIG } from "@/config/site";

function stripTrailingSlash(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

function normalizeEnvOrigin(value: string) {
  const t = value.trim();
  if (!t) return "";
  return stripTrailingSlash(t.includes("://") ? t : `https://${t}`);
}

/**
 * Absolute origin for `<link rel="canonical">`, `og:url`, etc.
 * Order: `NEXT_PUBLIC_SITE_URL` (explicit), request headers, `VERCEL_URL`, then `SITE_CONFIG.url`.
 */
export async function metadataAbsoluteOrigin(): Promise<string> {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return normalizeEnvOrigin(fromEnv);

  try {
    const h = await headers();
    const rawHost = h.get("x-forwarded-host") ?? h.get("host");
    if (rawHost) {
      const host = rawHost.split(",")[0].trim();
      const forwarded = h.get("x-forwarded-proto");
      const proto =
        forwarded?.split(",")[0].trim() ??
        (host.startsWith("localhost") || host.startsWith("127.") ? "http" : "https");
      return stripTrailingSlash(`${proto}://${host}`);
    }
  } catch {
    /* headers() unavailable */
  }

  if (process.env.VERCEL_URL) {
    return stripTrailingSlash(`https://${process.env.VERCEL_URL}`);
  }

  return stripTrailingSlash(SITE_CONFIG.url);
}

/** Full URL for a path like `/privacy` or `/some-slug` (leading slash optional). */
export async function metadataAbsoluteUrl(pathname: string): Promise<string> {
  const base = await metadataAbsoluteOrigin();
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (path === "/") return base;
  return `${base}${path}`;
}
