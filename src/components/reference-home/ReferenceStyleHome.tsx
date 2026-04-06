import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  Lock,
  Star,
  ChevronDown,
  ArrowRight,
  X,
  Search,
  Globe,
  Check,
  Info,
  Copy,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { FAQ_ITEMS } from "@/components/FAQ";
import { REVIEW_ITEMS } from "@/components/Reviews";
import {
  brand,
  hero,
  homeToolStrip,
  MARKETING_PLANS,
  PKR_RATE,
  COUPON_CODE,
  COMPARISON_BARS,
  problemBullets,
  solutionBullets,
  toolsShowcase,
  limitations,
  planForProjects,
} from "@/data/homeMarketing";
import type { MarketingPlan } from "@/data/homeMarketing";

/** Match reference `App.tsx` scroll reveal: animate once per page load. */
const viewOnce = { once: true } as const;

function SecurityBadges({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-6 opacity-60 grayscale transition-all hover:grayscale-0",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <ShieldCheck className="h-5 w-5 text-green-600" />
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">SSL Secure</span>
      </div>
      <div className="flex items-center gap-2">
        <Lock className="h-5 w-5 text-blue-600" />
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Encrypted Payment</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-5 w-5 text-blue-600" />
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Verified Access</span>
      </div>
    </div>
  );
}

function TopHero() {
  return (
    <section
      className="relative flex items-center overflow-hidden bg-[#1A284D] px-6 pt-32 pb-24 text-white"
      id="hero"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] animate-pulse rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] animate-pulse rounded-full bg-purple-600/20 blur-[120px] [animation-delay:2s]" />
      </div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-600/20 px-4 py-2 text-blue-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              <span className="text-xs font-black uppercase tracking-widest">{hero.badge}</span>
            </div>

            <h1 className="mb-8 text-5xl font-black uppercase leading-none tracking-tighter md:text-8xl">
              {hero.headlineBefore} <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {hero.headlineAccent}
              </span>
            </h1>

            <p className="mx-auto mb-12 max-w-3xl text-xl font-medium text-blue-100/80 md:text-2xl">
              {hero.subhead}
            </p>

            <div className="mb-12 flex flex-wrap justify-center gap-4">
              <motion.button
                type="button"
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-2xl bg-blue-600 px-10 py-5 text-lg font-black text-white shadow-2xl shadow-blue-600/20 transition-all hover:scale-105 hover:bg-blue-700 active:scale-95"
              >
                View Plans & Pricing
              </motion.button>
              <motion.button
                type="button"
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("limitations")?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-2xl border border-white/10 bg-white/5 px-10 py-5 text-lg font-black text-white transition-all hover:bg-white/10"
              >
                How it Works
              </motion.button>
            </div>

            <div className="mb-16 flex flex-wrap justify-center gap-6">
              {[
                { Icon: ShieldCheck, t: "Official Data", c: "text-green-400" },
                { Icon: Zap, t: "Instant Setup", c: "text-yellow-400" },
                { Icon: Lock, t: "Private Projects", c: "text-blue-400" },
              ].map(({ Icon, t, c }) => (
                <div
                  key={t}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                >
                  <Icon className={cn("h-5 w-5", c)} />
                  <span className="text-sm font-bold">{t}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-8">
              <div className="flex items-center gap-4 rounded-[2rem] border border-white/10 bg-white/5 px-8 py-5 backdrop-blur-md">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 overflow-hidden rounded-full border-2 border-[#1A284D] bg-gray-200 shadow-lg"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 20}`}
                        alt=""
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
                <div className="border-l border-white/10 pl-4 text-left">
                  <div className="mb-1 flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs font-black uppercase tracking-wider text-blue-100">{hero.trustLine}</p>
                </div>
              </div>
              <SecurityBadges className="opacity-100 grayscale-0" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ToolStrip() {
  return (
    <section className="border-y border-slate-200 bg-white py-10" aria-label="Included tools">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-6 text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          Included in your {brand.name} access
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {homeToolStrip.map((label, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewOnce}
              transition={{ delay: i * 0.04, duration: 0.35 }}
              className="text-sm font-bold uppercase tracking-wide text-[#1A284D]/80"
            >
              {label}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

function RefPricing() {
  const [billingCycle, setBillingCycle] = useState<"annual" | "monthly">("monthly");
  const [currency, setCurrency] = useState<"usd" | "pkr">("usd");
  const [projects, setProjects] = useState(5);
  const [toolSearch, setToolSearch] = useState("");
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detectedCountry, setDetectedCountry] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data.country_code === "PK") {
          setCurrency("pkr");
          setDetectedCountry("Pakistan");
        } else {
          setCurrency("usd");
          setDetectedCountry(data.country_name || "International");
        }
      })
      .catch(() => {});
  }, []);

  const recommendedId = planForProjects(projects);

  const priceAmount = (plan: MarketingPlan) => {
    const base = plan.monthlyUsd;
    const afterBilling = billingCycle === "annual" ? Math.floor(base * 0.8) : base;
    return currency === "pkr" ? afterBilling * PKR_RATE : afterBilling;
  };

  const copyCoupon = () => {
    void navigator.clipboard.writeText(COUPON_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 py-32" id="pricing">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#1A284D 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewOnce}
          >
            <h2 className="mb-6 text-4xl font-black tracking-tight text-[#1A284D] md:text-6xl">
              Pricing that scales with <span className="text-[#FF5C00]">you.</span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-500">
              Choose the perfect plan for your SEO needs. From individual bloggers to large agencies, we&apos;ve got
              you covered.
            </p>

            <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
              <div className="flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setBillingCycle("monthly")}
                  className={cn(
                    "rounded-lg px-6 py-2 text-sm font-bold transition-all",
                    billingCycle === "monthly"
                      ? "bg-[#1A284D] text-white"
                      : "text-slate-500 hover:text-[#1A284D]"
                  )}
                >
                  Monthly
                </motion.button>
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setBillingCycle("annual")}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-6 py-2 text-sm font-bold transition-all",
                    billingCycle === "annual"
                      ? "bg-[#1A284D] text-white"
                      : "text-slate-500 hover:text-[#1A284D]"
                  )}
                >
                  Yearly <span className="rounded-md bg-green-100 px-2 py-0.5 text-[10px] text-green-600">-20%</span>
                </motion.button>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrency("usd")}
                    className={cn(
                      "rounded-lg px-4 py-2 text-sm font-bold transition-all",
                      currency === "usd" ? "bg-[#FF5C00] text-white" : "text-slate-500 hover:text-[#FF5C00]"
                    )}
                  >
                    USD
                  </motion.button>
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrency("pkr")}
                    className={cn(
                      "rounded-lg px-4 py-2 text-sm font-bold transition-all",
                      currency === "pkr" ? "bg-[#FF5C00] text-white" : "text-slate-500 hover:text-[#FF5C00]"
                    )}
                  >
                    PKR
                  </motion.button>
                </div>
                {detectedCountry && (
                  <p className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    <Globe className="h-3 w-3" /> Detected: {detectedCountry}
                  </p>
                )}
              </div>
            </div>

            <div className="mx-auto mb-20 max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-wider text-slate-600">How many projects?</span>
                <span className="text-2xl font-black text-[#1A284D]">
                  {projects}
                  {projects === 100 ? "+" : ""}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={100}
                step={1}
                value={projects}
                onChange={(e) => setProjects(parseInt(e.target.value, 10))}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-100 accent-[#FF5C00]"
              />
              <div className="mt-4 flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <span>Individual</span>
                <span>Small Team</span>
                <span>Pro Agency</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mb-20 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
          {MARKETING_PLANS.map((plan, i) => {
            const isRecommended = plan.id === recommendedId;
            const filteredTools = (plan.tools ?? []).filter((t) =>
              t.toLowerCase().includes(toolSearch.toLowerCase())
            );
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewOnce}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={cn(
                  "relative flex flex-col rounded-[2.5rem] border bg-white p-8 transition-all duration-500",
                  isRecommended
                    ? "z-10 scale-105 border-[#FF5C00] shadow-[0_32px_64px_-16px_rgba(255,92,0,0.15)]"
                    : "border-slate-200 shadow-sm hover:border-slate-300"
                )}
              >
                {isRecommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#FF5C00] px-6 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-orange-200">
                    Recommended for you
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="mb-2 text-2xl font-black text-[#1A284D]">{plan.name}</h3>
                  <p className="mb-6 text-xs font-medium leading-relaxed text-slate-400">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold text-slate-400">{currency === "usd" ? "$" : "Rs."}</span>
                    <span className="text-5xl font-black tracking-tighter text-[#1A284D]">
                      {currency === "pkr"
                        ? Math.round(priceAmount(plan)).toLocaleString()
                        : priceAmount(plan)}
                    </span>
                    <span className="text-sm font-bold text-slate-400">/mo</span>
                  </div>
                </div>
                <ul className="mb-8 flex-1 space-y-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                      <Check className="h-4 w-4 shrink-0 text-green-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                {plan.id === "power" && plan.tools && (
                  <div className="mb-8 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="mb-3 flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-2">
                      <Search className="h-3 w-3 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search 20+ tools..."
                        className="w-full bg-transparent text-[10px] font-bold text-[#1A284D] outline-none"
                        value={toolSearch}
                        onChange={(e) => setToolSearch(e.target.value)}
                      />
                    </div>
                    <div className="flex max-h-24 flex-wrap gap-1 overflow-y-auto pr-1">
                      {filteredTools.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[8px] font-bold text-slate-500"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "w-full rounded-2xl py-4 text-sm font-black uppercase tracking-widest shadow-lg transition-all active:scale-95",
                    isRecommended
                      ? "bg-[#FF5C00] text-white shadow-orange-200 hover:bg-[#e65300]"
                      : "bg-[#1A284D] text-white shadow-slate-200 hover:bg-[#15203d]"
                  )}
                >
                  Get Started
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        <div className="mb-20 text-center">
          <motion.button
            type="button"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex items-center gap-2 text-sm font-black text-[#1A284D] transition-colors hover:text-[#FF5C00]"
          >
            Compare all features in detail
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>

        <div className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col items-center gap-6 rounded-3xl border border-slate-100 bg-white p-2 pr-8 shadow-2xl md:flex-row"
          >
            <div className="rounded-2xl bg-[#FF5C00] px-8 py-4 text-lg font-black italic tracking-[0.2em] text-white shadow-lg shadow-orange-100">
              {COUPON_CODE}
            </div>
            <div className="text-center md:text-left">
              <p className="mb-1 text-[10px] font-black uppercase tracking-[0.3em] text-[#FF5C00]">Limited Time Offer</p>
              <p className="text-sm font-black text-[#1A284D]">Get extra 20% off on your first month</p>
            </div>
            <motion.button
              type="button"
              whileTap={{ scale: 0.95 }}
              onClick={copyCoupon}
              className={cn(
                "flex items-center gap-2 rounded-xl p-3 text-xs font-bold transition-all",
                copied ? "bg-green-500 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              )}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied!" : "Copy Code"}
            </motion.button>
          </motion.div>
        </div>

        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute inset-0 bg-[#1A284D]/80 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-[3rem] bg-white shadow-2xl"
              >
                <div className="flex items-center justify-between border-b border-slate-100 p-8">
                  <h3 className="text-2xl font-black text-[#1A284D]">Detailed Comparison</h3>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-full p-2 transition-colors hover:bg-slate-100"
                  >
                    <X className="h-6 w-6 text-slate-400" />
                  </button>
                </div>
                <div className="overflow-y-auto p-8">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr>
                        <th className="py-4 text-sm font-black uppercase tracking-widest text-slate-400">Feature</th>
                        {MARKETING_PLANS.map((p) => (
                          <th key={p.id} className="px-4 py-4 text-center text-sm font-black uppercase tracking-widest text-[#1A284D]">
                            {p.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {["SEO Toolbar", "Site Explorer", "Keywords Explorer", "30 Credits/Day", "20+ Tools"].map(
                        (feature) => (
                          <tr key={feature} className="hover:bg-slate-50">
                            <td className="py-4 text-sm font-bold text-slate-600">{feature}</td>
                            {MARKETING_PLANS.map((p) => {
                              const has = p.features.some(
                                (f) =>
                                  f.toLowerCase().includes(feature.toLowerCase().split("/")[0]) ||
                                  f.includes("Everything")
                              );
                              return (
                                <td key={p.id} className="px-4 py-4 text-center">
                                  {has ? (
                                    <Check className="mx-auto h-5 w-5 text-green-500" />
                                  ) : (
                                    <X className="mx-auto h-5 w-5 text-slate-200" />
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-end border-t border-slate-100 bg-slate-50 p-8">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-xl bg-[#1A284D] px-8 py-3 text-sm font-black uppercase tracking-widest text-white hover:bg-[#15203d]"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewOnce}
          transition={{ duration: 0.55 }}
          className="relative mt-32 overflow-hidden rounded-[4rem] bg-[#1A284D] p-12 text-white shadow-2xl md:p-20"
        >
          <div className="absolute top-0 right-0 h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.2),transparent)]" />
          <div className="relative z-10 grid items-center gap-16 md:grid-cols-2">
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/20 px-4 py-2 text-blue-300">
                <ShieldCheck className="h-4 w-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">100% Risk-Free Guarantee</span>
              </div>
              <h3 className="mb-8 text-3xl font-black tracking-tight md:text-5xl">
                Cheapest Options, <br />
                <span className="text-blue-400">Zero Hidden Costs.</span>
              </h3>
              <p className="mb-10 text-lg font-medium leading-relaxed text-blue-100/70">
                Most group buy providers hide costs or limit access after you pay. We believe in 100% transparency.
              </p>
              <SecurityBadges className="opacity-100 grayscale-0" />
            </div>
            <div className="rounded-[3rem] border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
              <h4 className="mb-6 text-2xl font-black">Why Choose Yearly?</h4>
              <p className="mb-8 font-medium text-blue-100/70">
                Commit to your growth and save compared to monthly billing.
              </p>
              <button
                type="button"
                onClick={() => document.getElementById("limitations")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex w-full items-center justify-center gap-2 text-sm font-black text-blue-400 transition-all hover:text-blue-300"
              >
                Read our Transparent Limitations <ArrowRight className="h-4 w-4 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseShared() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewOnce}
          >
            <h2 className="mb-6 text-4xl font-black tracking-tight text-[#1A284D] md:text-6xl">Why Choose Shared Access?</h2>
            <p className="mx-auto max-w-2xl text-xl font-medium text-gray-500">
              Traditional tool subscriptions are designed for big agencies. We make them accessible for everyone.
            </p>
          </motion.div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewOnce}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[3rem] border border-gray-100 bg-white p-12 shadow-xl"
          >
            <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-500">
              <X className="h-8 w-8" />
            </div>
            <h3 className="mb-8 text-4xl font-black text-[#1A284D]">The Problem</h3>
            <ul className="space-y-6">
              {problemBullets.map((item) => (
                <li key={item} className="flex items-center gap-4 text-xl font-bold text-gray-600">
                  <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewOnce}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-[3rem] bg-blue-500 p-12 text-white shadow-2xl"
          >
            <div className="absolute top-10 right-10 opacity-10 transition-transform duration-500 group-hover:scale-110">
              <Zap className="h-48 w-48" />
            </div>
            <div className="relative z-10">
              <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-white">
                <Check className="h-8 w-8" />
              </div>
              <h3 className="mb-8 text-4xl font-black">The Solution</h3>
              <ul className="space-y-6">
                {solutionBullets.map((item) => (
                  <li key={item} className="flex items-center gap-4 text-xl font-bold">
                    <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-white" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ToolsIncluded() {
  return (
    <section className="relative overflow-hidden bg-white py-32" id="tools">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewOnce}
        >
          <h2 className="mb-6 text-5xl font-black tracking-tight text-[#1A284D] md:text-7xl">20+ Premium Tools Included</h2>
          <p className="mx-auto max-w-2xl text-xl font-medium text-gray-500">
            Everything you need for SEO, Content, and Design in one place.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {toolsShowcase.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewOnce}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className={cn(
                "flex flex-col items-center rounded-[2.5rem] p-10 text-center transition-all hover:scale-105",
                tool.color
              )}
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-sm">
                <div className="grid grid-cols-2 gap-1">
                  <div className="h-4 w-4 bg-gray-300" />
                  <div className="h-4 w-4 bg-gray-400" />
                  <div className="h-4 w-4 bg-gray-400" />
                  <div className="h-4 w-4 bg-gray-300" />
                </div>
              </div>
              <h4 className="mb-1 text-2xl font-black text-[#1A284D]">{tool.name}</h4>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Premium Access</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="bg-white py-32" id="comparison">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-24 flex flex-col items-center justify-between gap-12 text-center md:flex-row md:text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewOnce}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-1">
            <h2 className="mb-4 text-5xl font-black text-[#1A284D] md:text-7xl">Official Ahrefs</h2>
            <p className="max-w-md font-bold text-gray-400">Official subscriptions are expensive and designed for large enterprise teams.</p>
          </div>
          <div className="text-4xl font-black text-gray-200 md:text-7xl">VS</div>
          <div className="flex-1 text-center md:text-right">
            <h2 className="mb-4 text-5xl font-black text-[#1A284D] md:text-7xl">{brand.name}</h2>
            <p className="mx-auto max-w-md font-bold text-gray-400 md:ml-auto">
              Our shared access provides the same power at a fraction of the cost.
            </p>
          </div>
        </motion.div>
        <div className="mx-auto max-w-5xl space-y-6">
          {COMPARISON_BARS.map((item, i) => (
            <div key={item.label} className="flex items-center gap-4 md:gap-8">
              <div className="flex flex-1 justify-end">
                <div className="relative h-10 w-full max-w-md overflow-hidden rounded-full bg-gray-100">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.official}%` }}
                    viewport={viewOnce}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      "flex h-full items-center justify-end rounded-full pr-6 text-sm font-black text-white",
                      item.official > 80
                        ? "bg-gradient-to-l from-green-400 to-green-500"
                        : item.official > 60
                          ? "bg-gradient-to-l from-orange-400 to-orange-500"
                          : "bg-gradient-to-l from-red-400 to-red-500"
                    )}
                  >
                    {item.official}%
                  </motion.div>
                </div>
              </div>
              <div className="w-32 shrink-0 text-center text-xs font-black uppercase tracking-widest text-[#1A284D]">
                {item.label}
              </div>
              <div className="flex-1">
                <div className="relative h-10 w-full max-w-md overflow-hidden rounded-full bg-gray-100">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.us}%` }}
                    viewport={viewOnce}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      "flex h-full items-center justify-start rounded-full pl-6 text-sm font-black text-white",
                      item.us > 80
                        ? "bg-gradient-to-r from-green-400 to-green-500"
                        : item.us > 60
                          ? "bg-gradient-to-r from-orange-400 to-orange-500"
                          : "bg-gradient-to-r from-red-400 to-red-500"
                    )}
                  >
                    {item.us}%
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AhrefsBarFeatures() {
  const features = [
    {
      title: "SERP Overview",
      desc: "Get DR, UR, and Backlink counts directly on Google search results.",
    },
    {
      title: "Domain Metrics",
      desc: "Check any website's strength without leaving the page.",
    },
    {
      title: "Keyword Difficulty",
      desc: "Instantly see how hard it is to rank for any search term.",
    },
    {
      title: "Quick Analysis",
      desc: "One-click access to full Site Explorer reports.",
    },
  ];
  return (
    <section className="relative flex items-center overflow-hidden bg-blue-600 py-24 text-white" id="toolbar">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-96 -mt-96 h-[800px] w-[800px] rounded-full bg-white/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 -mb-48 -ml-48 h-[600px] w-[600px] rounded-full bg-blue-400/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={viewOnce}
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-100">
              <ShieldCheck className="h-4 w-4" /> Exclusive Extension Access
            </div>
            <h2 className="mb-8 text-5xl font-black leading-[1.1] md:text-6xl">
              Ahrefs SEO Toolbar <br />
              <span className="italic text-blue-200">Directly in Browser</span>
            </h2>
            <p className="mb-12 max-w-xl text-xl leading-relaxed text-blue-100 opacity-90">
              Stop switching tabs. Get critical SEO metrics like Domain Rating, URL Rating, and Backlink counts directly
              on Google SERPs and any website you visit.
            </p>

            <div className="grid gap-10 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.title} className="group">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 transition-colors group-hover:bg-white/20">
                    <CheckCircle2 className="h-6 w-6 text-blue-300" />
                  </div>
                  <h4 className="mb-3 text-xl font-bold">{f.title}</h4>
                  <p className="text-sm leading-relaxed text-blue-100/70">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-6">
              <motion.button
                type="button"
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 rounded-2xl bg-white px-10 py-5 text-lg font-black text-blue-600 shadow-2xl shadow-white/20 transition-all hover:shadow-white/30 active:scale-95"
              >
                Start Using Ahrefs Bar <ArrowRight className="h-6 w-6" />
              </motion.button>
              <div className="flex items-center gap-4 font-bold text-blue-100">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((u) => (
                    <img
                      key={u}
                      src={`https://i.pravatar.cc/100?u=${u + 40}`}
                      className="h-10 w-10 rounded-full border-2 border-blue-600"
                      alt=""
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <span className="text-sm">Joined by 12,000+ SEOs</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={viewOnce}
          >
            <div className="relative z-10 rounded-[3rem] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-2xl">
              <div className="overflow-hidden rounded-[2.5rem] bg-slate-50 shadow-inner">
                <div className="flex items-center gap-4 border-b bg-white px-6 py-4">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex h-8 flex-1 items-center truncate rounded-xl bg-gray-100 px-4 text-[10px] font-medium text-gray-400">
                    google.com/search?q=ahrefs+group+buy
                  </div>
                </div>
                <div className="space-y-10 p-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="space-y-4">
                      <div className="h-5 w-2/3 rounded-lg bg-blue-100" />
                      <div className="space-y-2">
                        <div className="h-3 w-full rounded-md bg-gray-200" />
                        <div className="h-3 w-4/5 rounded-md bg-gray-200" />
                      </div>
                      <div className="flex flex-wrap gap-3 pt-2">
                        <div className="rounded-lg bg-blue-600 px-3 py-1.5 text-[10px] font-black text-white shadow-lg shadow-blue-200">
                          DR: 92
                        </div>
                        <div className="rounded-lg bg-orange-500 px-3 py-1.5 text-[10px] font-black text-white shadow-lg shadow-orange-200">
                          UR: 45
                        </div>
                        <div className="rounded-lg bg-slate-800 px-3 py-1.5 text-[10px] font-black text-white shadow-lg shadow-slate-200">
                          Backlinks: 45.2K
                        </div>
                        <div className="rounded-lg bg-green-500 px-3 py-1.5 text-[10px] font-black text-white shadow-lg shadow-green-200">
                          Traffic: 1.2M
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 animate-pulse rounded-full bg-blue-400 opacity-50 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 animate-pulse rounded-full bg-white opacity-20 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LimitationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#1A284D] py-32 text-white" id="limitations">
      <div className="absolute top-0 right-0 h-full w-1/2 skew-x-12 translate-x-1/4 bg-blue-600/5" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewOnce}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/20 px-4 py-2 text-blue-200">
            <AlertCircle className="h-4 w-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">Transparency First</span>
          </div>
          <h2 className="mb-8 text-4xl font-black tracking-tight md:text-6xl">
            Transparent <span className="text-blue-500">Limitations.</span>
          </h2>
          <p className="text-xl font-medium leading-relaxed text-blue-100/70">
            We believe in being 100% honest with our users. To maintain the highest stability and lowest prices, we have
            a few common-sense rules.
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2">
          {limitations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewOnce}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="group rounded-[3rem] border border-white/10 bg-white/5 p-10 backdrop-blur-md transition-all hover:bg-white/10"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-400 transition-transform group-hover:scale-110">
                <Info className="h-6 w-6" />
              </div>
              <h4 className="mb-4 text-2xl font-black tracking-tight">{item.title}</h4>
              <p className="mb-6 font-medium leading-relaxed text-blue-100/60">{item.desc}</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-300">{item.limitLabel}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-20 flex flex-col items-center justify-between gap-8 rounded-[3rem] bg-blue-600 p-10 shadow-2xl shadow-blue-600/20 md:flex-row"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewOnce}
          transition={{ duration: 0.55 }}
        >
          <div className="text-center md:text-left">
            <h4 className="mb-2 text-2xl font-black">Still have questions?</h4>
            <p className="font-medium text-blue-100">Our support team is ready to help you 24/7.</p>
          </div>
          <motion.a
            href={`mailto:support@${(() => {
              try {
                return new URL(brand.url).hostname;
              } catch {
                return "example.com";
              }
            })()}`}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 rounded-2xl bg-white px-10 py-5 text-lg font-black text-blue-600 shadow-xl transition-transform hover:scale-105"
          >
            Email support
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function TrustpilotReviews() {
  return (
    <section className="flex items-center bg-white py-24 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]" id="reviews">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-16 flex flex-col items-center justify-between gap-8 md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewOnce}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-4xl font-black text-[#1A284D]">What users say about {brand.name}</h2>
            <div className="mb-2 flex items-center justify-center gap-1 md:justify-start">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="tp-star" />
              ))}
            </div>
            <p className="text-sm font-medium text-gray-500">
              Based on <span className="font-bold text-gray-800 underline">1,428 reviews</span>
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 md:justify-start">
              <Star className="h-5 w-5 fill-current text-[#00b67a]" />
              <span className="text-lg font-bold tracking-tight">Trustpilot</span>
            </div>
          </div>
          <motion.button
            type="button"
            whileTap={{ scale: 0.97 }}
            className="rounded-xl border border-gray-100 bg-gray-50 px-8 py-4 font-bold text-[#1A284D] transition-all hover:bg-gray-100"
          >
            Write a review
          </motion.button>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {REVIEW_ITEMS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewOnce}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className="rounded-xl border border-gray-100 p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-3 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((j) => (
                  <div key={j} className="tp-star h-4 w-4" />
                ))}
              </div>
              <div className="mb-3 flex items-center gap-2">
                <img src={r.avatar} alt="" className="h-8 w-8 rounded-full object-cover" referrerPolicy="no-referrer" />
                <span className="text-xs font-bold text-gray-800">{r.name}</span>
                <CheckCircle2 className="h-3 w-3 text-gray-400" />
              </div>
              <h4 className="mb-2 line-clamp-1 text-sm font-bold text-[#1A284D]">{r.role}</h4>
              <p className="mb-4 line-clamp-4 text-xs leading-relaxed text-gray-600">&ldquo;{r.content}&rdquo;</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{r.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RefFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="flex items-center bg-[#fcf8f7] py-24 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]" id="faq">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewOnce}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-4xl font-black text-[#1A284D]">{brand.name} — Frequently Asked Questions</h2>
          <p className="font-medium text-gray-500">Everything you need to know about our Ahrefs access.</p>
        </motion.div>
        <div className="grid gap-4">
          {FAQ_ITEMS.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewOnce}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="overflow-hidden rounded-3xl border border-gray-100 bg-white transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="group flex w-full items-center justify-between px-8 py-6 text-left"
              >
                <span className="text-lg font-bold text-[#1A284D] group-hover:text-blue-600">{faq.question}</span>
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full transition-all",
                    openIndex === i ? "rotate-180 bg-blue-600 text-white" : "bg-gray-50 text-gray-400"
                  )}
                >
                  <ChevronDown className="h-5 w-5" />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 font-medium leading-relaxed text-gray-600">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Reference-style landing (blue/navy + orange). Content from `homeMarketing`, FAQ & reviews from your components. */
export function ReferenceStyleHome() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <TopHero />
      <ToolStrip />
      <RefPricing />
      <WhyChooseShared />
      <ToolsIncluded />
      <ComparisonSection />
      <AhrefsBarFeatures />
      <LimitationsSection />
      <TrustpilotReviews />
      <RefFAQ />
    </div>
  );
}
