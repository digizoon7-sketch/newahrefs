/**
 * Per-URL stable dates derived from the slug (not random per page load).
 * All dates fall in calendar year 2026 only; spread so pages don’t share one publish day.
 */

function hash32(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  return h >>> 0;
}

function toIsoDateUtc(ms: number): string {
  return new Date(ms).toISOString().slice(0, 10);
}

/** Human-readable date for UI (e.g. "March 15, 2024"). */
export function formatArticleDate(isoDate: string): string {
  const [y, m, d] = isoDate.split("-").map(Number);
  if (!y || !m || !d) return isoDate;
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(y, m - 1, d)));
}

/** First publish and last update for a guide slug. Same inputs always yield the same outputs. */
export function getArticleDatesForSlug(slug: string): { datePublished: string; dateModified: string } {
  const h1 = hash32(slug);
  const h2 = hash32(`${slug}:modified`);
  const year2026Start = Date.UTC(2026, 0, 1);
  const year2027Start = Date.UTC(2027, 0, 1);
  const lastDay2026 = Date.UTC(2026, 11, 31);

  const publishedMs = year2026Start + (h1 % (year2027Start - year2026Start));

  const minGapDays = 2;
  const maxExtraDays = 90;
  let modifiedMs = publishedMs + (minGapDays + (h2 % (maxExtraDays - minGapDays + 1))) * 86400000;

  if (modifiedMs > lastDay2026) {
    modifiedMs = lastDay2026 - ((h2 >> 1) % 18) * 86400000;
  }
  if (modifiedMs <= publishedMs) {
    modifiedMs = publishedMs;
  }

  return {
    datePublished: toIsoDateUtc(publishedMs),
    dateModified: toIsoDateUtc(modifiedMs),
  };
}
