import { motion, useReducedMotion } from "motion/react";
import { ShieldCheck, Zap, Lock, RefreshCw, Server, Users, Globe, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { springSoft } from "@/lib/motion";

const benefits = [
  {
    icon: ShieldCheck,
    title: "100% Stable Access",
    desc: "Advanced proxy and session management keep your access active and reliable.",
    color: "text-sky-400",
    ring: "ring-sky-400/20",
    bg: "bg-sky-400/10",
  },
  {
    icon: Lock,
    title: "Privacy Guaranteed",
    desc: "Your searches and projects stay private — we never expose your history to others.",
    color: "text-primary",
    ring: "ring-primary/20",
    bg: "bg-primary/10",
  },
  {
    icon: RefreshCw,
    title: "Auto-Update Features",
    desc: "New Ahrefs features roll out to you automatically. No manual upgrades.",
    color: "text-accent",
    ring: "ring-accent/20",
    bg: "bg-accent/10",
  },
  {
    icon: Server,
    title: "Dedicated Nodes",
    desc: "High-speed servers for responsive access, even at peak times.",
    color: "text-violet-400",
    ring: "ring-violet-400/20",
    bg: "bg-violet-400/10",
  },
  {
    icon: Users,
    title: "No Shared Accounts",
    desc: "Isolated access model — not the typical shared logins that get banned.",
    color: "text-rose-400",
    ring: "ring-rose-400/20",
    bg: "bg-rose-400/10",
  },
  {
    icon: Globe,
    title: "Global Access",
    desc: "Use Ahrefs from anywhere, without awkward workarounds or extra extensions.",
    color: "text-amber-400",
    ring: "ring-amber-400/20",
    bg: "bg-amber-400/10",
  },
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    desc: "Our team watches uptime 24/7 so issues get caught before they affect you.",
    color: "text-cyan-400",
    ring: "ring-cyan-400/20",
    bg: "bg-cyan-400/10",
  },
  {
    icon: Zap,
    title: "Instant Tool Setup",
    desc: "Credentials in about a minute after payment — automated provisioning.",
    color: "text-accent",
    ring: "ring-accent/20",
    bg: "bg-accent/10",
  },
];

export function Benefits() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-border bg-background py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.2em] text-primary">Why us</p>
          <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-text sm:text-4xl md:text-5xl">
            Why choose <span className="text-primary">our access</span>
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-muted md:text-lg">
            Stable, secure Ahrefs group buy built for SEOs who need real data — not downtime excuses.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {benefits.map((benefit, i) => (
            <motion.article
              key={benefit.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={reduceMotion ? undefined : { y: -5, transition: springSoft }}
              className={cn(
                "group flex h-full flex-col rounded-xl border border-border bg-surface/80 p-5 shadow-sm backdrop-blur-sm transition-shadow duration-300",
                "hover:border-primary/35 hover:shadow-md hover:shadow-primary/5"
              )}
            >
              <div className="mb-4 flex items-start gap-3">
                <div
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border ring-1 transition-transform duration-300 group-hover:scale-110",
                    benefit.bg,
                    benefit.ring
                  )}
                >
                  <benefit.icon className={cn("h-5 w-5", benefit.color)} aria-hidden />
                </div>
                <h3 className="pt-0.5 text-sm font-black uppercase leading-snug tracking-tight text-text sm:text-base">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-sm font-medium leading-relaxed text-muted">{benefit.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
