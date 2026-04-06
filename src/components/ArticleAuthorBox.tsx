import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook, ExternalLink, CalendarRange } from "lucide-react";
import { SITE_CONFIG, type SiteContentAuthor } from "@/config/site";
import { formatArticleDate } from "@/lib/articleDates";

function authorInitials(name: string) {
  const parts = name
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  if (parts.length === 1 && parts[0].length >= 2) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase() || "—";
}

function normalizeSiteOrigin() {
  try {
    return new URL(SITE_CONFIG.url).origin;
  } catch {
    return SITE_CONFIG.url.replace(/\/$/, "");
  }
}

function authorUrlIsInternalHome(authorUrl: string) {
  try {
    const u = new URL(authorUrl);
    const o = normalizeSiteOrigin();
    const path = u.pathname.replace(/\/$/, "") || "/";
    return u.origin === o && path === "/";
  } catch {
    return false;
  }
}

function SocialProfileLink({ href }: { href: string }) {
  const lower = href.toLowerCase();
  let Icon = ExternalLink;
  let label = "Author profile";

  if (lower.includes("linkedin.com")) {
    Icon = Linkedin;
    label = "Author on LinkedIn";
  } else if (lower.includes("twitter.com") || lower.includes("x.com")) {
    Icon = Twitter;
    label = "Author on X";
  } else if (lower.includes("facebook.com")) {
    Icon = Facebook;
    label = "Author on Facebook";
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer me"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-[#1A284D]"
    >
      <Icon className="h-4 w-4" aria-hidden />
    </a>
  );
}

type ArticleAuthorBoxProps = {
  author: SiteContentAuthor;
  /** ISO date YYYY-MM-DD (per-page stable). */
  datePublished: string;
  dateModified: string;
};

/**
 * Author block styled like major SEO publishers (Ahrefs / SEJ / HubSpot patterns):
 * staff label, “Written by”, sentence-case name link, “Role at Publication”, bio, optional socials.
 */
export function ArticleAuthorBox({ author, datePublished, dateModified }: ArticleAuthorBoxProps) {
  const a = author;
  const initials = authorInitials(a.name);
  const isHomeAuthor = authorUrlIsInternalHome(a.url);

  /** HubSpot-style byline link; Ahrefs/SEJ use sentence case for names, not all-caps poster text */
  const nameLinkClass =
    "text-2xl font-bold tracking-tight text-[#1A284D] underline-offset-4 hover:text-blue-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 rounded-sm decoration-slate-300 hover:decoration-blue-700";

  const nameEl = isHomeAuthor ? (
    <h2 id="article-author-heading" className="m-0 p-0 text-left text-base font-normal leading-snug">
      <Link to="/" rel="author" className={nameLinkClass}>
        {a.name}
      </Link>
    </h2>
  ) : (
    <h2 id="article-author-heading" className="m-0 p-0 text-left text-base font-normal leading-snug">
      <a href={a.url} rel="author noopener noreferrer" target="_blank" className={nameLinkClass}>
        {a.name}
      </a>
    </h2>
  );

  const sameAs = a.sameAs?.filter(Boolean) ?? [];

  return (
    <aside
      id="article-author"
      aria-labelledby="article-author-heading"
      className="rounded-2xl border border-slate-200 bg-white shadow-sm"
      itemScope
      itemType="https://schema.org/Person"
    >
      <meta itemProp="name" content={a.name} />
      <meta itemProp="url" content={a.url} />
      {a.jobTitle ? <meta itemProp="jobTitle" content={a.jobTitle} /> : null}
      {a.image ? <meta itemProp="image" content={a.image} /> : null}
      <div itemProp="worksFor" itemScope itemType="https://schema.org/Organization" className="sr-only">
        <meta itemProp="name" content={SITE_CONFIG.name} />
        <meta itemProp="url" content={SITE_CONFIG.url} />
      </div>

      <div className="flex flex-col gap-5 border-l-[3px] border-l-[#1A284D] p-5 sm:flex-row sm:items-start sm:gap-6 sm:p-6">
        <div className="flex shrink-0 justify-center sm:justify-start sm:pt-0.5">
          {a.image ? (
            <img
              src={a.image}
              alt={a.name}
              width={88}
              height={88}
              className="h-[5.5rem] w-[5.5rem] rounded-full border border-slate-200 object-cover shadow-sm"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div
              className="flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-lg font-bold tracking-tight text-[#1A284D]"
              aria-hidden
            >
              {initials}
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1 space-y-3 text-center sm:text-left">
          {/*
            SEJ-style staff line (“SEJ STAFF …”) + HubSpot “Written by:” pattern
           */}
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            <span className="text-slate-500">{SITE_CONFIG.name}</span>
            <span className="mx-2 font-normal text-slate-300" aria-hidden>
              ·
            </span>
            Editorial
          </p>

          <p className="text-sm font-medium text-slate-500">Written by:</p>

          <div>{nameEl}</div>

          <p className="text-sm text-slate-600">
            <span className="font-medium text-slate-700">{a.jobTitle}</span>
            <span className="text-slate-400"> at </span>
            <span className="font-medium text-slate-700">{SITE_CONFIG.name}</span>
          </p>

          <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-slate-600">{a.bio}</p>

          <p className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 sm:justify-start">
            <CalendarRange className="h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden />
            <span>
              Published <time dateTime={datePublished}>{formatArticleDate(datePublished)}</time>
              {dateModified !== datePublished ? (
                <>
                  <span className="text-slate-300"> · </span>
                  Updated <time dateTime={dateModified}>{formatArticleDate(dateModified)}</time>
                </>
              ) : null}
            </span>
          </p>

          {sameAs.length > 0 ? (
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1 sm:justify-start">
              <span className="pr-1 text-xs font-medium text-slate-500">Profiles</span>
              {sameAs.map((href) => (
                <SocialProfileLink key={href} href={href} />
              ))}
            </div>
          ) : null}

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 border-t border-slate-100 pt-4 text-sm sm:justify-start">
            <Link to="/ahrefs-group-buy-guide" className="font-semibold text-blue-600 hover:underline">
              More guides
            </Link>
            <span className="text-slate-300" aria-hidden>
              ·
            </span>
            <Link to="/" className="font-medium text-slate-500 hover:text-[#1A284D] hover:underline">
              Home
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
