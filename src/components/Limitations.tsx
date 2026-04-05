import { motion } from "motion/react";
import { Users, Activity, ShieldAlert, Zap, MessageSquare, Info } from "lucide-react";

const limitations = [
  {
    icon: Users,
    title: "Shared Account Environment",
    desc: "To keep costs low, accounts are shared among a small group. Your projects remain private, but overall account limits are shared.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Activity,
    title: "Daily Usage Quotas",
    desc: "We enforce daily limits on keyword exports and site audits. This prevents a single user from exhausting the group's credits.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: ShieldAlert,
    title: "No API Access",
    desc: "Our group buy system does not support Ahrefs API access. All tools must be used through our secure dashboard.",
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
  {
    icon: Zap,
    title: "Fair Usage Policy",
    desc: "Automated scraping or bot-like behavior is strictly prohibited to ensure stability for all members of the group.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

export function Limitations() {
  return (
    <section className="py-24 bg-background relative overflow-hidden border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full"
          >
            <Info className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              Transparency First
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none text-text">
            Transparent <span className="text-primary">Limitations.</span>
          </h2>
          <p className="text-muted text-lg font-medium">
            We believe in being 100% honest with our users. To maintain the highest stability and lowest prices, we have a few common-sense rules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {limitations.map((limit, i) => (
            <motion.div
              key={limit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface border border-border p-8 relative group hover:border-primary/50 transition-all"
            >
              <div className={`w-14 h-14 ${limit.bg} border border-border flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <limit.icon className={`w-7 h-7 ${limit.color}`} />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tighter mb-4 text-text leading-tight">{limit.title}</h3>
              <p className="text-muted text-sm font-medium leading-relaxed">{limit.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-surface border border-border p-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-black uppercase tracking-tighter text-text">Still have questions?</h3>
            <p className="text-muted text-sm font-medium">Our support team is ready to help you 24/7.</p>
            <button className="mx-auto flex items-center justify-center gap-3 bg-primary px-10 py-5 text-xs font-black uppercase tracking-widest text-primary-foreground shadow-[0_0_32px_rgba(234,88,12,0.2)] transition-all hover:bg-accent">
              Chat on WhatsApp <MessageSquare className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
