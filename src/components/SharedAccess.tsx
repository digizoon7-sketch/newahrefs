import { motion } from "motion/react";
import { XCircle, CheckCircle2, Sparkles, AlertTriangle, Zap, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { springSoft } from "@/lib/motion";

const comparisonMetrics = [
  {
    label: "Price & value",
    official: { pct: 18, hint: "$99+ / mo" },
    groupBuy: { pct: 96, hint: "From $5 / mo" },
  },
  {
    label: "Good for solo SEOs",
    official: { pct: 32, hint: "Team-focused" },
    groupBuy: { pct: 94, hint: "Freelancer-friendly" },
  },
  {
    label: "Room under daily limits",
    official: { pct: 40, hint: "Tight credits" },
    groupBuy: { pct: 91, hint: "Generous limits" },
  },
  {
    label: "Extra tools bundled",
    official: { pct: 22, hint: "Ahrefs only" },
    groupBuy: { pct: 93, hint: "20+ tools" },
  },
] as const;

function ScoreBar({ value, variant }: { value: number; variant: "official" | "groupBuy" }) {
  return (
    <div
      className={cn(
        "h-2.5 w-full overflow-hidden rounded-full bg-background",
        variant === "groupBuy" && "ring-1 ring-primary/20"
      )}
      role="presentation"
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "h-full rounded-full",
          variant === "official" ? "bg-muted/70" : "bg-gradient-to-r from-primary to-orange-500"
        )}
      />
    </div>
  );
}

export function SharedAccess() {
  const problems = [
    "Expensive tools costing $99+/month each",
    "Not affordable for beginners or freelancers",
    "Multiple subscriptions to manage",
    "Limited features on free versions"
  ];

  const solutions = [
    "Get same premium tools at 90% low price",
    "Instant shared access via our secure dashboard",
    "One single subscription for all tools",
    "Full premium features unlocked"
  ];

  return (
    <section className="relative overflow-hidden border-y border-border bg-surface py-32">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Part 1: Problem vs Solution */}
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              Why Choose Shared Access?
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-3xl font-black uppercase leading-tight tracking-tight text-text sm:text-4xl md:text-5xl"
          >
            Making premium tools <span className="text-primary">accessible for everyone</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-muted"
          >
            Traditional tool subscriptions are designed for big agencies. We make them accessible for everyone.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: springSoft }}
            className="group relative overflow-hidden rounded-2xl border border-red-500/20 bg-background p-10 shadow-sm"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <AlertCircle className="w-32 h-32 text-red-500" />
            </div>
            
            <h3 className="mb-8 flex items-center gap-3 text-2xl font-black uppercase tracking-tighter text-text">
              <span className="flex h-8 w-8 items-center justify-center rounded bg-red-500/10">
                <XCircle className="h-5 w-5 text-red-500" />
              </span>
              The Problem
            </h3>

            <div className="space-y-6">
              {problems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0" />
                  <p className="text-text/70 font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* The Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: springSoft }}
            className="group relative overflow-hidden rounded-2xl border border-primary/25 bg-background p-10 shadow-[0_0_36px_rgba(234,88,12,0.12)]"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <CheckCircle2 className="w-32 h-32 text-primary" />
            </div>
            
            <h3 className="mb-8 flex items-center gap-3 text-2xl font-black uppercase tracking-tighter text-text">
              <span className="flex h-8 w-8 items-center justify-center rounded bg-primary/10">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </span>
              The Solution
            </h3>

            <div className="space-y-6">
              {solutions.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_14px_rgba(234,88,12,0.45)]" />
                  <p className="text-text font-bold">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Part 2: Official Ahrefs vs Ahrefs Group Buy — bar comparison */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-5xl"
        >
          <div className="mb-8 text-center">
            <motion.p
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-2 text-[11px] font-black uppercase tracking-[0.2em] text-primary"
            >
              Side-by-side
            </motion.p>
            <h3 className="text-2xl font-black uppercase tracking-tight text-text sm:text-3xl md:text-4xl">
              Official Ahrefs <span className="text-muted">vs</span>{" "}
              <span className="text-primary">Ahrefs Group Buy</span>
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm font-medium text-muted">
              Each row is 0–100: a longer bar means a better fit for freelancers and small teams on that point.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-xl">
            <div className="grid grid-cols-1 border-b border-border bg-surface/60 sm:grid-cols-[1fr_1fr_1fr]">
              <div className="hidden sm:block" />
              <div className="flex items-center justify-center gap-2 border-b border-border px-4 py-4 sm:border-b-0 sm:border-r sm:py-5">
                <AlertTriangle className="h-4 w-4 shrink-0 text-muted" aria-hidden />
                <span className="text-center text-[11px] font-black uppercase tracking-widest text-muted">
                  Official Ahrefs
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 px-3 py-4 text-center sm:flex-row sm:gap-2 sm:py-5">
                <Zap className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                <span className="max-w-[14rem] text-[10px] font-black uppercase leading-tight tracking-tight text-primary sm:text-[11px] sm:tracking-widest">
                  Ahrefs Group Buy
                </span>
              </div>
            </div>

            {comparisonMetrics.map((row, i) => (
              <div
                key={row.label}
                className={cn(
                  "grid grid-cols-1 gap-4 border-b border-border p-5 last:border-b-0 sm:grid-cols-[minmax(0,1.1fr)_1fr_1fr] sm:items-center sm:gap-6 sm:p-6",
                  i % 2 === 1 && "bg-surface/40"
                )}
              >
                <div className="text-sm font-black uppercase leading-snug tracking-tight text-text sm:pr-4">
                  {row.label}
                </div>
                <div className="space-y-2 sm:border-r sm:border-border sm:pr-6">
                  <div className="flex items-end justify-between gap-2 sm:hidden">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted">Official</span>
                    <span className="font-mono text-xs font-bold text-muted">{row.official.pct}%</span>
                  </div>
                  <div className="hidden items-end justify-between sm:flex">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted">{row.official.hint}</span>
                    <span className="font-mono text-sm font-black text-muted">{row.official.pct}%</span>
                  </div>
                  <ScoreBar value={row.official.pct} variant="official" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-end justify-between gap-2 sm:hidden">
                    <span className="max-w-[9rem] text-right text-[9px] font-black uppercase leading-tight tracking-wide text-primary">
                      Ahrefs Group Buy
                    </span>
                    <span className="font-mono text-xs font-bold text-primary">{row.groupBuy.pct}%</span>
                  </div>
                  <div className="hidden items-end justify-between sm:flex">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{row.groupBuy.hint}</span>
                    <span className="font-mono text-sm font-black text-primary">{row.groupBuy.pct}%</span>
                  </div>
                  <ScoreBar value={row.groupBuy.pct} variant="groupBuy" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
