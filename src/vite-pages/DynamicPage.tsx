import { useRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { PAGES, SITE_CONFIG } from "@/config/site";
import { BookOpen, Star, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { getArticleDatesForSlug } from "@/lib/articleDates";
import { getContentAuthorForSlug } from "@/lib/contentAuthorPick";
import { canonicalForSlug, jsonLdBreadcrumbs, jsonLdOrganization, jsonLdWebPage, jsonLdWebsite } from "@/lib/seo";
import { AhrefsGroupBuyGuideArticle } from "@/content/AhrefsGroupBuyGuideArticle";
import { AhrefsGroupBuyRisksArticle } from "@/content/AhrefsGroupBuyRisksArticle";
import { WhatIsAhrefsGroupBuyArticle } from "@/content/WhatIsAhrefsGroupBuyArticle";
import { IsAhrefsGroupBuyWorthItArticle } from "@/content/IsAhrefsGroupBuyWorthItArticle";
import { AhrefsGroupBuyReviewArticle } from "@/content/AhrefsGroupBuyReviewArticle";
import { ProsAndConsOfAhrefsGroupBuyArticle } from "@/content/ProsAndConsOfAhrefsGroupBuyArticle";
import { AhrefsGroupBuyForBeginnersArticle } from "@/content/AhrefsGroupBuyForBeginnersArticle";
import { WhySearchForAhrefsGroupBuyArticle } from "@/content/WhySearchForAhrefsGroupBuyArticle";
import { BestAhrefsGroupBuyProviderArticle } from "@/content/BestAhrefsGroupBuyProviderArticle";
import { TrustedAhrefsGroupBuySitesArticle } from "@/content/TrustedAhrefsGroupBuySitesArticle";
import { ProviderReviewGuideArticle } from "@/content/ProviderReviewGuideArticle";
import { AhrefsGroupBuyScamOrLegitArticle } from "@/content/AhrefsGroupBuyScamOrLegitArticle";
import { HowToChooseAhrefsProviderArticle } from "@/content/HowToChooseAhrefsProviderArticle";
import { UptimeGuaranteeComparisonArticle } from "@/content/UptimeGuaranteeComparisonArticle";
import { AhrefsGroupBuyRedditReviewsArticle } from "@/content/AhrefsGroupBuyRedditReviewsArticle";
import { AhrefsGroupBuyPricingArticle } from "@/content/AhrefsGroupBuyPricingArticle";
import { CheapAhrefsGroupBuyPriceArticle } from "@/content/CheapAhrefsGroupBuyPriceArticle";
import { CheapAhrefsAccessGuideArticle } from "@/content/CheapAhrefsAccessGuideArticle";
import { AhrefsCostComparisonArticle } from "@/content/AhrefsCostComparisonArticle";
import { LowCostSeoToolsArticle } from "@/content/LowCostSeoToolsArticle";
import { AhrefsMonthlyPriceBreakdownArticle } from "@/content/AhrefsMonthlyPriceBreakdownArticle";
import { BestCheapAhrefsOptionsArticle } from "@/content/BestCheapAhrefsOptionsArticle";
import { AhrefsGroupBuyLimitationsArticle } from "@/content/AhrefsGroupBuyLimitationsArticle";
import { DailyReportLimitsArticle } from "@/content/DailyReportLimitsArticle";
import { NoProjectsLimitationArticle } from "@/content/NoProjectsLimitationArticle";
import { AccountBansPreventionArticle } from "@/content/AccountBansPreventionArticle";
import { IsAhrefsGroupBuySafeArticle } from "@/content/IsAhrefsGroupBuySafeArticle";
import { CommonGroupBuyProblemsArticle } from "@/content/CommonGroupBuyProblemsArticle";
import { BestPlanInsteadOfAhrefsGroupBuyArticle } from "@/content/BestPlanInsteadOfAhrefsGroupBuyArticle";
import { AhrefsAlternativeListArticle } from "@/content/AhrefsAlternativeListArticle";
import { BestSeoToolAlternativesArticle } from "@/content/BestSeoToolAlternativesArticle";
import { GroupBuyVsAhrefsStarterArticle } from "@/content/GroupBuyVsAhrefsStarterArticle";
import { GroupBuyVsOfficialAhrefsArticle } from "@/content/GroupBuyVsOfficialAhrefsArticle";
import { IsAhrefsStarterBetterArticle } from "@/content/IsAhrefsStarterBetterArticle";
import { TableOfContents } from "@/components/TableOfContents";
import { ArticleAuthorBox } from "@/components/ArticleAuthorBox";

export function DynamicPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? PAGES[slug] : null;
  const articleBodyRef = useRef<HTMLDivElement>(null);

  if (!page) {
    return <Navigate to="/" replace />;
  }

  const canonicalUrl = canonicalForSlug(page.slug);
  const ogImage = SITE_CONFIG.ogImage;
  const keywords = [
    page.title,
    "ahrefs group buy",
    "seo tools",
    "keyword research",
    "backlink analysis",
    "site audit",
    "competitor analysis",
  ].join(", ");

  const supportingPages = Object.values(PAGES).filter((p) => p.parentSlug === page.slug);

  const articleDates = getArticleDatesForSlug(page.slug);
  const pageAuthor = getContentAuthorForSlug(page.slug);
  const ldOrg = jsonLdOrganization();
  const ldSite = jsonLdWebsite();
  const ldCrumbs = jsonLdBreadcrumbs(page);
  const ldPage = jsonLdWebPage(page);

  const ctaCard = (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:sticky lg:top-24 lg:self-start xl:top-28">
      <h3 className="mb-3 text-xl font-black uppercase tracking-tight text-[#1A284D] sm:text-2xl">Ready to Start?</h3>
      <p className="mb-6 text-sm font-medium leading-relaxed text-slate-600">
        Get instant access to Ahrefs tools and start dominating your niche today.
      </p>
      <Link
        to="/#pricing"
        className="mb-4 block w-full rounded-2xl bg-[#FF5C00] py-4 text-center text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-orange-200 transition-colors hover:bg-[#e65300]"
      >
        View Pricing & Plans
      </Link>
      <div className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
        <ShieldCheck className="h-3 w-3 shrink-0 text-green-600" aria-hidden />
        Secure Checkout • Instant Setup
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 pb-20 pt-24 md:pt-28">
      <Helmet>
        <title>{page.metaTitle ?? page.title}</title>
        <meta name="description" content={page.metaDescription ?? page.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta name="googlebot" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta name="keywords" content={keywords} />
        <meta name="publisher" content={SITE_CONFIG.name} />
        <meta httpEquiv="content-language" content="en" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={SITE_CONFIG.name} />
        <meta property="og:title" content={page.metaTitle ?? page.title} />
        <meta property="og:description" content={page.metaDescription ?? page.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content={page.title} />
        <meta name="author" content={pageAuthor.name} />
        <meta property="article:author" content={pageAuthor.url} />
        <meta property="article:published_time" content={`${articleDates.datePublished}T12:00:00.000Z`} />
        <meta property="article:modified_time" content={`${articleDates.dateModified}T12:00:00.000Z`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={page.metaTitle ?? page.title} />
        <meta name="twitter:description" content={page.metaDescription ?? page.description} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(ldOrg)}</script>
        <script type="application/ld+json">{JSON.stringify(ldSite)}</script>
        <script type="application/ld+json">{JSON.stringify(ldCrumbs)}</script>
        <script type="application/ld+json">{JSON.stringify(ldPage)}</script>
      </Helmet>

      <div className="border-b border-white/10 bg-[#1A284D] text-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
          <header className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-600/20 px-4 py-2">
              <BookOpen className="h-4 w-4 text-blue-300" aria-hidden />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-100">{page.cluster}</span>
            </div>
            <h1 className="text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {page.title}
            </h1>
            <p className="border-l-4 border-blue-400 pl-5 text-base font-medium leading-relaxed text-blue-100/90 md:text-lg">
              {page.description}
            </p>
          </header>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
          <article className="space-y-12 lg:col-span-7 xl:col-span-8">
            <div ref={articleBodyRef}>
            {page.slug === "ahrefs-group-buy-guide" ? (
              <AhrefsGroupBuyGuideArticle />
            ) : page.slug === "ahrefs-group-buy-risks" ? (
              <AhrefsGroupBuyRisksArticle />
            ) : page.slug === "best-ahrefs-group-buy-provider" ? (
              <BestAhrefsGroupBuyProviderArticle />
            ) : page.slug === "ahrefs-group-buy-pricing" ? (
              <AhrefsGroupBuyPricingArticle />
            ) : page.slug === "cheap-ahrefs-group-buy-price" ? (
              <CheapAhrefsGroupBuyPriceArticle />
            ) : page.slug === "cheap-ahrefs-access-guide" ? (
              <CheapAhrefsAccessGuideArticle />
            ) : page.slug === "ahrefs-cost-comparison" ? (
              <AhrefsCostComparisonArticle />
            ) : page.slug === "low-cost-seo-tools" ? (
              <LowCostSeoToolsArticle />
            ) : page.slug === "ahrefs-monthly-price-breakdown" ? (
              <AhrefsMonthlyPriceBreakdownArticle />
            ) : page.slug === "best-cheap-ahrefs-options" ? (
              <BestCheapAhrefsOptionsArticle />
            ) : page.slug === "trusted-ahrefs-group-buy-sites" ? (
              <TrustedAhrefsGroupBuySitesArticle />
            ) : page.slug === "provider-review-guide" ? (
              <ProviderReviewGuideArticle />
            ) : page.slug === "ahrefs-group-buy-scam-or-legit" ? (
              <AhrefsGroupBuyScamOrLegitArticle />
            ) : page.slug === "how-to-choose-ahrefs-provider" ? (
              <HowToChooseAhrefsProviderArticle />
            ) : page.slug === "uptime-guarantee-comparison" ? (
              <UptimeGuaranteeComparisonArticle />
            ) : page.slug === "ahrefs-group-buy-reddit-reviews" ? (
              <AhrefsGroupBuyRedditReviewsArticle />
            ) : page.slug === "what-is-ahrefs-group-buy" ? (
              <WhatIsAhrefsGroupBuyArticle />
            ) : page.slug === "is-ahrefs-group-buy-worth-it" ? (
              <IsAhrefsGroupBuyWorthItArticle />
            ) : page.slug === "ahrefs-group-buy-review" ? (
              <AhrefsGroupBuyReviewArticle />
            ) : page.slug === "pros-and-cons-of-ahrefs-group-buy" ? (
              <ProsAndConsOfAhrefsGroupBuyArticle />
            ) : page.slug === "ahrefs-group-buy-for-beginners" ? (
              <AhrefsGroupBuyForBeginnersArticle />
            ) : page.slug === "why-search-for-ahrefs-group-buy" ? (
              <WhySearchForAhrefsGroupBuyArticle />
            ) : page.slug === "ahrefs-group-buy-limitations" ? (
              <AhrefsGroupBuyLimitationsArticle />
            ) : page.slug === "daily-report-limits" ? (
              <DailyReportLimitsArticle />
            ) : page.slug === "no-projects-limitation" ? (
              <NoProjectsLimitationArticle />
            ) : page.slug === "account-bans-prevention" ? (
              <AccountBansPreventionArticle />
            ) : page.slug === "is-ahrefs-group-buy-safe" ? (
              <IsAhrefsGroupBuySafeArticle />
            ) : page.slug === "common-group-buy-problems" ? (
              <CommonGroupBuyProblemsArticle />
            ) : page.slug === "best-plan-instead-of-ahrefs-group-buy" ? (
              <BestPlanInsteadOfAhrefsGroupBuyArticle />
            ) : page.slug === "ahrefs-alternative-list" ? (
              <AhrefsAlternativeListArticle />
            ) : page.slug === "group-buy-vs-official-ahrefs" ? (
              <GroupBuyVsOfficialAhrefsArticle />
            ) : page.slug === "group-buy-vs-ahrefs-starter" ? (
              <GroupBuyVsAhrefsStarterArticle />
            ) : page.slug === "is-ahrefs-starter-better" ? (
              <IsAhrefsStarterBetterArticle />
            ) : page.slug === "best-seo-tool-alternatives" ? (
              <BestSeoToolAlternativesArticle />
            ) : (
              <div className="space-y-12">
                <div className="space-y-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <h2 className="text-xl font-black uppercase tracking-tight text-[#1A284D] sm:text-2xl">Introduction</h2>
                  <p className="font-medium leading-relaxed text-slate-600">
                    Welcome to our comprehensive guide on <strong className="text-[#1A284D]">{page.title}</strong>. In
                    the rapidly evolving landscape of SEO, having access to premium tools like Ahrefs is no longer a
                    luxury—it&apos;s a necessity. However, the high cost can be a barrier for many. That&apos;s where our
                    premium group buy access comes in.
                  </p>

                  <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                      <Zap className="mb-4 h-8 w-8 text-blue-600" />
                      <h3 className="mb-2 text-lg font-black uppercase tracking-tight text-[#1A284D]">Instant Access</h3>
                      <p className="text-sm font-medium text-slate-600">
                        Get your credentials immediately after purchase and start your SEO journey.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                      <ShieldCheck className="mb-4 h-8 w-8 text-blue-600" />
                      <h3 className="mb-2 text-lg font-black uppercase tracking-tight text-[#1A284D]">100% Secure</h3>
                      <p className="text-sm font-medium text-slate-600">
                        Your data is encrypted and your searches are private. We value your security.
                      </p>
                    </div>
                  </div>

                  <h2 className="text-xl font-black uppercase tracking-tight text-[#1A284D] sm:text-2xl">
                    Why This Matters
                  </h2>
                  <p className="font-medium leading-relaxed text-slate-600">{page.content}</p>

                  <p className="font-medium leading-relaxed text-slate-600">
                    Whether you&apos;re a solo freelancer or part of a large agency, understanding the nuances of
                    <em className="text-[#1A284D]"> {page.title}</em> is crucial for staying ahead of the competition. Our
                    platform is designed to provide you with the most reliable and high-performance access to Ahrefs tools
                    on the market.
                  </p>

                  <div className="space-y-4 rounded-2xl border border-blue-100 bg-blue-50/90 p-6 sm:p-8">
                    <h3 className="text-lg font-black uppercase tracking-tight text-[#1A284D] sm:text-xl">Key Takeaways</h3>
                    <ul className="space-y-3">
                      {[
                        "Uninterrupted access to Ahrefs Site Explorer and Keywords Explorer.",
                        "Advanced features like Content Gap and Link Intersect included.",
                        "Dedicated support team available 24/7 for any technical issues.",
                        "Most affordable pricing in the industry with 99.9% uptime.",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                          <Star className="mt-0.5 h-4 w-4 shrink-0 fill-amber-400 text-amber-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-slate-200 pt-10">
                    <Link
                      to="/#pricing"
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-blue-100 transition-all hover:-translate-y-0.5 hover:bg-blue-700 sm:px-10"
                    >
                      Get Started Now <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
            </div>

            <ArticleAuthorBox
              author={pageAuthor}
              datePublished={articleDates.datePublished}
              dateModified={articleDates.dateModified}
            />

            {supportingPages.length > 0 && (
              <section className="space-y-8">
                <h2 className="text-2xl font-black uppercase tracking-tight text-[#1A284D] sm:text-3xl">
                  Supporting Resources
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {supportingPages.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/${p.slug}`}
                      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
                    >
                      <h3 className="mb-2 text-lg font-black uppercase tracking-tight text-[#1A284D] transition-colors group-hover:text-blue-600">
                        {p.title}
                      </h3>
                      <p className="line-clamp-2 text-sm font-medium text-slate-600">{p.description}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>

          <aside className="space-y-6 lg:col-span-5 xl:col-span-4">
            <TableOfContents containerRef={articleBodyRef} routeKey={page.slug} />
            {ctaCard}
          </aside>
        </div>
      </div>
    </div>
  );
}
