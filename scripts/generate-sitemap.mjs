import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(process.cwd());
const SITE_TS = path.join(ROOT, "src", "config", "site.ts");
const OUT = path.join(ROOT, "public", "sitemap.xml");

const siteSource = fs.readFileSync(SITE_TS, "utf8");

const baseUrlMatch = siteSource.match(/url:\s*\"([^\"]+)\"/);
if (!baseUrlMatch) {
  throw new Error("Could not find SITE_CONFIG.url in src/config/site.ts");
}
const baseUrl = baseUrlMatch[1].replace(/\/$/, "");

const slugs = new Set();

// Pillars: pillar: "..."
for (const m of siteSource.matchAll(/pillar:\s*\"([^\"]+)\"/g)) {
  slugs.add(m[1]);
}

// Supporting slugs: "slug-name"
// We only want the arrays under `supporting: [ ... ]` in SITE_CONFIG.
for (const block of siteSource.matchAll(/supporting:\s*\[([\s\S]*?)\]/g)) {
  const inner = block[1];
  for (const s of inner.matchAll(/\"([a-z0-9-]+)\"/g)) {
    slugs.add(s[1]);
  }
}

const today = new Date().toISOString().slice(0, 10);

function urlEntry(loc, { priority = "0.7", changefreq = "weekly" } = {}) {
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

const urls = [];
urls.push(urlEntry(`${baseUrl}/`, { priority: "1.0", changefreq: "daily" }));

// Sort slugs for stable diffs
const sorted = Array.from(slugs).sort();
for (const slug of sorted) {
  urls.push(urlEntry(`${baseUrl}/${slug}`, { priority: "0.8", changefreq: "weekly" }));
}

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  `${urls.join("\n")}\n` +
  `</urlset>\n`;

fs.writeFileSync(OUT, xml, "utf8");
console.log(`Wrote ${sorted.length + 1} URLs to ${path.relative(ROOT, OUT)}`);

