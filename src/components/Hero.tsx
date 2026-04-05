import { motion, useReducedMotion } from "motion/react";
import { Star, Search, Globe, Link as LinkIcon, BarChart2, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { easeOutExpo, springSoft, staggerContainer, staggerItem } from "@/lib/motion";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-12 md:pt-24 md:pb-16 lg:pb-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute -top-[20%] -left-[10%] h-[800px] w-[800px] rounded-full bg-primary/15 opacity-90 blur-[120px]"
          animate={reduceMotion ? undefined : { scale: [1, 1.06, 1], opacity: [0.75, 0.95, 0.75] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-[20%] -right-[10%] h-[900px] w-[900px] rounded-full bg-accent/10 opacity-80 blur-[130px]"
          animate={reduceMotion ? undefined : { scale: [1, 1.05, 1], opacity: [0.65, 0.85, 0.65] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            className="space-y-12 text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-3 rounded-full border border-border bg-surface px-5 py-2"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-6 w-6 overflow-hidden rounded-full border-2 border-background bg-surface"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="h-4 w-px bg-border" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted">
                Trusted by 12k+ SEO professionals
              </span>
            </motion.div>

            <motion.div variants={staggerItem} className="max-w-2xl space-y-5 lg:max-w-xl xl:max-w-2xl">
              <h1 className="text-4xl font-black uppercase leading-[1.08] tracking-tight text-text sm:text-5xl md:text-6xl lg:text-[3.25rem] xl:text-7xl">
                Stable <span className="text-primary">Ahrefs</span> group buy access
              </h1>
              <p className="text-lg font-medium leading-relaxed text-muted md:text-xl">
                Real Ahrefs data through shared access: Site Explorer, Keywords Explorer, Site Audit, and more — one
                dashboard, reliable uptime, and support when you need it.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 36 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 1, ease: easeOutExpo }}
            className="relative ml-auto hidden w-full max-w-xl lg:block xl:max-w-2xl lg:-translate-y-3"
          >
            <motion.div
              className="relative z-10 flex h-[min(26rem,70vh)] min-h-[20rem] max-h-[28rem] w-full overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/20"
              whileHover={reduceMotion ? undefined : { scale: 1.01, transition: springSoft }}
              animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
              transition={
                reduceMotion
                  ? undefined
                  : { y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" } }
              }
            >
              <div className="flex w-14 shrink-0 flex-col items-center gap-6 border-r border-border bg-background py-6">
                <motion.div
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-lg"
                  whileHover={{ scale: 1.08, rotate: -4 }}
                  transition={springSoft}
                >
                  <BarChart2 className="h-4 w-4 text-primary-foreground" />
                </motion.div>
                {[Globe, Search, LinkIcon, Star, Activity].map((Icon, i) => (
                  <motion.div
                    key={i}
                    className="cursor-pointer text-muted transition-colors hover:text-primary"
                    whileHover={{ scale: 1.12, x: 2 }}
                    transition={springSoft}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.div>
                ))}
              </div>

              <div className="flex min-h-0 min-w-0 flex-1 flex-col">
                <div className="flex h-12 shrink-0 items-center justify-between gap-2 border-b border-border bg-surface/90 px-4 backdrop-blur-md">
                  <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1">
                    {["Dashboard", "Site Explorer", "Keywords"].map((tab, i) => (
                      <div
                        key={tab}
                        className={cn(
                          "text-[9px] font-black uppercase tracking-widest transition-colors",
                          i === 1 ? "text-primary" : "text-muted"
                        )}
                      >
                        {tab}
                      </div>
                    ))}
                  </div>
                  <div className="h-7 w-7 shrink-0 rounded-full border border-border bg-background" />
                </div>

                <div className="flex min-h-0 flex-1 flex-col justify-between gap-3 overflow-hidden p-4">
                  <div className="flex flex-wrap items-end justify-between gap-2">
                    <div className="space-y-0.5">
                      <div className="text-[9px] font-black uppercase tracking-widest text-muted">Overview</div>
                      <div className="text-lg font-black tracking-tighter text-text xl:text-xl">Site Explorer</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div className="rounded-md border border-border bg-background px-2 py-1 text-[8px] font-black uppercase tracking-widest text-muted">
                        Last 30 Days
                      </div>
                      <div className="rounded-md border border-primary/20 bg-primary/10 px-2 py-1 text-[8px] font-black uppercase tracking-widest text-primary">
                        Live Data
                      </div>
                    </div>
                  </div>

                  <div className="grid shrink-0 grid-cols-2 gap-2">
                    {[
                      { label: "Ahrefs Rank", value: "#1,245", color: "text-blue-400" },
                      { label: "DR", value: "91", color: "text-primary" },
                      { label: "Backlinks", value: "1.2M", color: "text-accent" },
                      { label: "Traffic", value: "84k", color: "text-primary" },
                    ].map((stat, idx) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55 + idx * 0.07, duration: 0.4, ease: easeOutExpo }}
                        whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                        className="rounded-lg border border-border bg-background p-2.5 transition-colors hover:border-primary/30"
                      >
                        <div className="mb-0.5 text-[8px] font-black uppercase tracking-widest text-muted">
                          {stat.label}
                        </div>
                        <div className={cn("text-base font-black tracking-tighter xl:text-lg", stat.color)}>
                          {stat.value}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="shrink-0 rounded-lg border border-border bg-background p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.45 }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[9px] font-black uppercase tracking-widest text-muted">Organic traffic</div>
                        <div className="mt-1 text-xl font-black tracking-tighter text-primary">+12.4%</div>
                        <div className="mt-0.5 text-[8px] font-bold uppercase tracking-widest text-muted">
                          vs last 30 days
                        </div>
                      </div>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                        <Activity className="h-6 w-6 text-primary" aria-hidden />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
