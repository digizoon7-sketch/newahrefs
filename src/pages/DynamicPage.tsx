import { useParams, Link, Navigate } from "react-router-dom";
import { PAGES } from "@/config/site";
import { BookOpen, Star, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function DynamicPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? PAGES[slug] : null;

  if (!page) {
    return <Navigate to="/" replace />;
  }

  const supportingPages = Object.values(PAGES).filter((p) => p.parentSlug === page.slug);

  const ctaCard = (
    <div className="border border-primary/30 bg-surface p-6 shadow-lg sm:p-8 lg:sticky lg:top-24 lg:self-start xl:top-28">
      <h3 className="mb-3 text-xl font-black uppercase tracking-tight text-text sm:text-2xl">Ready to Start?</h3>
      <p className="mb-6 text-sm font-medium leading-relaxed text-muted">
        Get instant access to Ahrefs tools and start dominating your niche today.
      </p>
      <Link
        to="/#pricing"
        className="mb-4 block w-full bg-primary py-4 text-center text-sm font-black uppercase tracking-widest text-primary-foreground shadow-[0_0_28px_rgba(234,88,12,0.22)] transition-colors hover:bg-accent"
      >
        View Pricing & Plans
      </Link>
      <div className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted">
        <ShieldCheck className="h-3 w-3 shrink-0 text-primary" aria-hidden />
        Secure Checkout • Instant Setup
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background pb-20 pt-20 md:pt-24">
      <Helmet>
        <title>{page.title} | AhrefsGroupBuy</title>
        <meta name="description" content={page.description} />
      </Helmet>

      {/* Hero — full width band, aligned with grid below */}
      <div className="border-b border-border bg-gradient-to-b from-surface/40 to-background">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-12 lg:px-8">
          <header className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-md border border-primary/20 bg-primary/10 px-3 py-1.5">
              <BookOpen className="h-4 w-4 text-primary" aria-hidden />
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">{page.cluster}</span>
            </div>
            <h1 className="text-3xl font-black uppercase leading-tight tracking-tight text-text sm:text-4xl md:text-5xl">
              {page.title}
            </h1>
            <p className="border-l-4 border-primary pl-5 text-base font-medium leading-relaxed text-muted md:text-lg">
              {page.description}
            </p>
          </header>
        </div>
      </div>

      {/* Content + CTA: two columns on large screens */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
          <article className="space-y-12 lg:col-span-7 xl:col-span-8">
            <div className="space-y-8">
              <div className="space-y-6 border border-border bg-surface p-6 sm:p-8">
                <h2 className="text-xl font-black uppercase tracking-tight text-text sm:text-2xl">Introduction</h2>
                <p className="font-medium leading-relaxed text-muted">
                  Welcome to our comprehensive guide on <strong className="text-text">{page.title}</strong>. In the rapidly
                  evolving landscape of SEO, having access to premium tools like Ahrefs is no longer a luxury—it's a
                  necessity. However, the high cost can be a barrier for many. That's where our premium group buy access
                  comes in.
                </p>

                <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="border border-border bg-background p-6">
                    <Zap className="mb-4 h-8 w-8 text-primary" />
                    <h3 className="mb-2 text-lg font-black uppercase tracking-tight text-text">Instant Access</h3>
                    <p className="text-sm font-medium text-muted">
                      Get your credentials immediately after purchase and start your SEO journey.
                    </p>
                  </div>
                  <div className="border border-border bg-background p-6">
                    <ShieldCheck className="mb-4 h-8 w-8 text-primary" />
                    <h3 className="mb-2 text-lg font-black uppercase tracking-tight text-text">100% Secure</h3>
                    <p className="text-sm font-medium text-muted">
                      Your data is encrypted and your searches are private. We value your security.
                    </p>
                  </div>
                </div>

                <h2 className="text-xl font-black uppercase tracking-tight text-text sm:text-2xl">Why This Matters</h2>
                <p className="font-medium leading-relaxed text-muted">{page.content}</p>

                <p className="font-medium leading-relaxed text-muted">
                  Whether you're a solo freelancer or part of a large agency, understanding the nuances of
                  <em className="text-text"> {page.title}</em> is crucial for staying ahead of the competition. Our platform
                  is designed to provide you with the most reliable and high-performance access to Ahrefs tools on the
                  market.
                </p>

                <div className="space-y-4 border border-primary/20 bg-primary/10 p-6 sm:p-8">
                  <h3 className="text-lg font-black uppercase tracking-tight text-primary sm:text-xl">Key Takeaways</h3>
                  <ul className="space-y-3">
                    {[
                      "Uninterrupted access to Ahrefs Site Explorer and Keywords Explorer.",
                      "Advanced features like Content Gap and Link Intersect included.",
                      "Dedicated support team available 24/7 for any technical issues.",
                      "Most affordable pricing in the industry with 99.9% uptime.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-medium text-text/90">
                        <Star className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border pt-10">
                  <Link
                    to="/#pricing"
                    className="inline-flex items-center gap-2 bg-primary px-8 py-4 text-sm font-black uppercase tracking-widest text-primary-foreground transition-all hover:bg-accent sm:px-10"
                  >
                    Get Started Now <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            {supportingPages.length > 0 && (
              <section className="space-y-8">
                <h2 className="text-2xl font-black uppercase tracking-tight text-text sm:text-3xl">Supporting Resources</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {supportingPages.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/${p.slug}`}
                      className="group border border-border bg-surface p-6 transition-all hover:border-primary"
                    >
                      <h3 className="mb-2 text-lg font-black uppercase tracking-tight text-text transition-colors group-hover:text-primary">
                        {p.title}
                      </h3>
                      <p className="line-clamp-2 text-sm font-medium text-muted">{p.description}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>

          <aside className="lg:col-span-5 xl:col-span-4">{ctaCard}</aside>
        </div>
      </div>
    </div>
  );
}
