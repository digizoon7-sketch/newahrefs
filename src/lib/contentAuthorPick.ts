import { SITE_CONFIG, type SiteContentAuthor } from "@/config/site";

function hash32(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  return h >>> 0;
}

/** Same slug always gets the same author (split across all listed authors). */
export function getContentAuthorForSlug(slug: string): SiteContentAuthor {
  const list = SITE_CONFIG.contentAuthors;
  return list[hash32(slug) % list.length]!;
}
