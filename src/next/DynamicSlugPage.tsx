"use client";

import { Link } from "react-router-dom";
import { useRef } from "react";

import { PAGES } from "@/config/site";
import { BookOpen, ShieldCheck } from "lucide-react";

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
import { getArticleDatesForSlug } from "@/lib/articleDates";
import { getContentAuthorForSlug } from "@/lib/contentAuthorPick";

export function DynamicSlugPage({ slug }: { slug: string }) {
  const page = PAGES[slug];
  const articleBodyRef = useRef<HTMLDivElement>(null);

  const supportingPages = Object.values(PAGES).filter((p) => p.parentSlug === page.slug);
  const articleDates = getArticleDatesForSlug(page.slug);
  const pageAuthor = getContentAuthorForSlug(page.slug);

  const ctaCard = (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:sticky lg:top-24 lg:self-start xl:top-28">
      <h3 className="mb-3 text-xl font-black uppercase tracking-tight text-[#1A284D] sm:text-2xl">Ready to Start?</h3>
      <p className="mb-6 text-sm font-medium leading-relaxed text-slate-600">
        Get instant access to Ahrefs tools and start dominating your niche today.
      </p>
      <Link
        href="/#pricing"
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

  const content = (
    <>
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
            <p className="text-sm font-medium leading-relaxed text-slate-600">{page.content}</p>
          </div>
        </div>
      )}
    </>
  );

  return (
      <div className="min-h-screen bg-slate-50 pb-20 pt-24 md:pt-28">
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
              <div ref={articleBodyRef}>{content}</div>

              <ArticleAuthorBox
                author={pageAuthor}
                datePublished={articleDates.datePublished}
                dateModified={articleDates.dateModified}
              />

              {supportingPages.length > 0 ? (
                <div className="space-y-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <h2 className="text-xl font-black uppercase tracking-tight text-[#1A284D] sm:text-2xl">
                    Related articles
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {supportingPages.map((sp) => (
                      <Link
                        key={sp.slug}
                        href={`/${sp.slug}`}
                        className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:bg-white"
                      >
                        <div className="text-sm font-black text-[#1A284D] group-hover:text-blue-700">{sp.title}</div>
                        <div className="mt-1 text-xs font-medium text-slate-600">{sp.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
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

