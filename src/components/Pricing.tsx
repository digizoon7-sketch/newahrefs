import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Star, Zap, Activity, ShieldCheck, ArrowRight, Copy, Info, Users, Building2, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeUpProps, springSoft } from "@/lib/motion";

const plans = [
  {
    id: "lite",
    name: "Lite Extension",
    monthlyPrice: 5,
    yearlyPrice: 4,
    description: "Perfect for beginners and casual SEO analysis.",
    features: ["Ahrefs SEO Toolbar", "SERP Metrics (DR/UR)", "Backlink Counts", "Keyword Difficulty", "Chrome & Firefox", "Email Support"],
    icon: Zap,
    popular: false,
    recommended: false,
    category: "individual"
  },
  {
    id: "standard",
    name: "Standard Dash",
    monthlyPrice: 25,
    yearlyPrice: 19,
    description: "Essential tools for growing websites and bloggers.",
    features: ["Ahrefs SEO Toolbar", "Site Explorer Access", "Keywords Explorer", "30 Credits / Day", "Rank Tracker", "Priority Support"],
    icon: Activity,
    popular: false,
    recommended: false,
    category: "small-team"
  },
  {
    id: "power",
    name: "Power Bundle",
    monthlyPrice: 35,
    yearlyPrice: 29,
    description: "The ultimate toolkit for SEO professionals and agencies.",
    features: ["Everything in Standard", "20+ Premium SEO Tools", "Canva Pro & Grammarly", "Indexification API", "VIP Discord Access", "24/7 Live Chat"],
    icon: Star,
    popular: true,
    recommended: true,
    category: "pro-agency",
    tools: ["SEMrush", "Canva Pro", "Grammarly", "Moz Pro", "SpyFu", "Ubersuggest", "Envato", "Indexification", "Keyword Tool", "WordAI", "SpinRewriter", "Quillbot", "PicMonkey", "StockUnlimited", "Crello", "DesignBold", "Storybase", "BuzzSumo", "Alexa", "Woorank"]
  },
  {
    id: "agency",
    name: "Agency Elite",
    monthlyPrice: 99,
    yearlyPrice: 79,
    description: "Scale your agency with unlimited power and support.",
    features: ["Everything in Power", "White-label Reports", "API Access", "Unlimited Users", "Dedicated Manager", "Custom Integration"],
    icon: ShieldCheck,
    popular: false,
    recommended: false,
    category: "pro-agency"
  },
];

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [currency, setCurrency] = useState<"USD" | "PKR">("USD");
  const [projects, setProjects] = useState(1);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [copied, setCopied] = useState(false);

  const exchangeRate = 280; // Example rate for PKR

  const formatPrice = (price: number) => {
    const finalPrice = billingCycle === "monthly" ? price : price * 0.8;
    if (currency === "PKR") {
      return `Rs ${(finalPrice * exchangeRate).toLocaleString()}`;
    }
    return `$${finalPrice}`;
  };

  const copyCode = () => {
    navigator.clipboard.writeText("AHREFS20");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredPlans = activeCategory === "all" 
    ? plans 
    : plans.filter(p => p.category === activeCategory || p.id === "power");

  return (
    <section className="py-32 bg-background relative overflow-hidden" id="pricing">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full"
          >
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              Flexible Plans
            </span>
          </motion.div>
          
          <motion.h2
            {...fadeUpProps}
            className="mx-auto max-w-3xl text-3xl font-black uppercase leading-tight tracking-tight text-text sm:text-4xl md:text-5xl"
          >
            Pricing that <span className="text-primary">scales with you.</span>
          </motion.h2>
          <motion.p
            initial={fadeUpProps.initial}
            whileInView={fadeUpProps.whileInView}
            viewport={fadeUpProps.viewport}
            transition={{ ...fadeUpProps.transition, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg font-medium text-muted"
          >
            Choose the perfect plan for your SEO needs. From individual bloggers to large agencies, we&apos;ve got you
            covered.
          </motion.p>

          {/* Interactive Controls */}
          <div className="flex flex-col items-center gap-10 pt-12">
            {/* Billing & Currency Toggles */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {/* Billing Cycle */}
              <div className="flex items-center gap-4 bg-surface border border-border p-1.5 rounded-full">
                <button 
                  onClick={() => setBillingCycle("monthly")}
                  className={cn(
                    "px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-full",
                    billingCycle === "monthly" ? "bg-primary text-primary-foreground" : "text-muted hover:text-text"
                  )}
                >
                  Monthly
                </button>
                <button 
                  onClick={() => setBillingCycle("yearly")}
                  className={cn(
                    "px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-full relative",
                    billingCycle === "yearly" ? "bg-primary text-primary-foreground" : "text-muted hover:text-text"
                  )}
                >
                  Yearly
                  <span className="absolute -top-4 -right-2 rounded-sm bg-primary px-1.5 py-0.5 text-[8px] font-black text-primary-foreground shadow-[0_0_14px_rgba(234,88,12,0.35)]">-20%</span>
                </button>
              </div>

              {/* Currency Toggle */}
              <div className="flex items-center gap-4 bg-surface border border-border p-1.5 rounded-full">
                <button 
                  onClick={() => setCurrency("USD")}
                  className={cn(
                    "px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-full",
                    currency === "USD" ? "bg-primary text-primary-foreground" : "text-muted hover:text-text"
                  )}
                >
                  USD
                </button>
                <button 
                  onClick={() => setCurrency("PKR")}
                  className={cn(
                    "px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-full",
                    currency === "PKR" ? "bg-primary text-primary-foreground" : "text-muted hover:text-text"
                  )}
                >
                  PKR
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { id: "all", label: "All Plans", icon: Briefcase },
                { id: "individual", label: "Individual", icon: Users },
                { id: "small-team", label: "Small Team", icon: Building2 },
                { id: "pro-agency", label: "Pro Agency", icon: Star },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "flex items-center gap-3 px-6 py-3 border transition-all text-[10px] font-black uppercase tracking-widest",
                    activeCategory === cat.id 
                      ? "bg-primary/10 border-primary text-primary" 
                      : "bg-surface border-border text-muted hover:border-primary/30 hover:text-text"
                  )}
                >
                  <cat.icon className="w-3.5 h-3.5" />
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 8 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: springSoft }}
                className={cn(
                  "group relative flex h-full flex-col border border-border bg-surface p-10 transition-colors hover:border-primary/50",
                  plan.recommended && "z-20 border-primary/40 shadow-[0_0_48px_rgba(234,88,12,0.16)]"
                )}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary px-6 py-1.5 text-[9px] font-black uppercase tracking-widest text-primary-foreground shadow-xl">
                    Recommended for you
                  </div>
                )}
                
                <div className="mb-10">
                  <div className="w-12 h-12 bg-background border border-border flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                    <plan.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-text mb-2 leading-none">{plan.name}</h3>
                  <p className="text-[10px] text-muted font-medium leading-relaxed uppercase tracking-widest">{plan.description}</p>
                </div>
                
                <div className="mb-10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black tracking-tighter text-text">
                      {formatPrice(plan.monthlyPrice)}
                    </span>
                    <span className="text-muted font-bold text-[10px] uppercase tracking-widest">/mo</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-4 text-[11px] text-text/80 font-bold uppercase tracking-tight leading-tight">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                  
                  {plan.tools && (
                    <div className="pt-6 mt-6 border-t border-border">
                      <p className="text-[9px] font-black uppercase tracking-widest text-muted mb-4">Included Tools:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {plan.tools.slice(0, 6).map(tool => (
                          <div key={tool} className="text-[8px] font-black uppercase tracking-widest bg-background border border-border px-2 py-2 text-muted text-center">
                            {tool}
                          </div>
                        ))}
                        <div className="text-[8px] font-black uppercase tracking-widest bg-primary/10 border border-primary/20 px-2 py-2 text-primary text-center col-span-2">
                          +{plan.tools.length - 6} Premium Tools
                        </div>
                      </div>
                    </div>
                  )}
                </ul>
                
                <button className={cn(
                  "w-full py-6 text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-lg",
                  plan.recommended 
                    ? "bg-primary text-primary-foreground hover:bg-accent" 
                    : "bg-background border border-border hover:bg-border text-text"
                )}>
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Coupon Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <div className="bg-surface border border-dashed border-primary/40 p-10 flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="text-left relative z-10">
              <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Limited Time Offer</div>
              <h4 className="text-2xl font-black uppercase tracking-tighter text-text leading-tight">Get extra 20% off <br /> on your first month</h4>
            </div>
            <button 
              onClick={copyCode}
              className="flex items-center gap-4 bg-background border border-border px-8 py-4 group hover:border-primary transition-all relative z-10"
            >
              <span className="text-lg font-black uppercase tracking-[0.3em] text-text">AHREFS20</span>
              <div className="w-px h-6 bg-border" />
              <span className="text-[10px] font-black uppercase tracking-widest text-primary group-hover:text-text min-w-[80px] text-center">
                {copied ? "Copied!" : "Copy Code"}
              </span>
            </button>
          </div>
        </motion.div>
        
        <div className="mt-20 text-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-8 md:gap-16 bg-surface border border-border px-12 py-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-widest text-muted">Risk-Free Guarantee</span>
            </div>
            <div className="w-px h-4 bg-border hidden md:block" />
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-widest text-muted">Cheapest Options</span>
            </div>
            <div className="w-px h-4 bg-border hidden md:block" />
            <div className="flex items-center gap-3">
              <Info className="w-5 h-5 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-widest text-muted">Zero Hidden Costs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
