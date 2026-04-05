import { motion } from "motion/react";
import { springSoft } from "@/lib/motion";
import { ShieldAlert, Info, CheckCircle2, XCircle, Sparkles } from "lucide-react";

export function TransparencySection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden border-y border-border">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              Transparency First
            </span>
          </motion.div>
          
          <h2 className="mx-auto max-w-3xl text-3xl font-black uppercase leading-tight tracking-tight text-text sm:text-4xl md:text-5xl">
            Transparent <span className="text-primary">limitations</span>
          </h2>
          
          <p className="text-muted text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            We believe in complete honesty. Shared access has its own set of limitations compared to individual plans. Here's what you need to know.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Daily Credits",
              desc: "Each user gets a specific number of daily credits for Site Explorer and Keyword Explorer to ensure stability for everyone.",
              icon: Info,
              limit: "30-50 Credits/Day"
            },
            {
              title: "Shared Projects",
              desc: "Project tracking is shared among users. We recommend using the Site Explorer for individual site analysis.",
              icon: Sparkles,
              limit: "Shared Project Space"
            },
            {
              title: "Session Stability",
              desc: "Our system maintains stable sessions, but very rare interruptions can occur during high-traffic periods.",
              icon: ShieldAlert,
              limit: "99.9% Uptime"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface border border-border p-10 rounded-2xl relative group overflow-hidden shadow-sm"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 group-hover:bg-primary transition-colors" />
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 rounded-lg group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-black uppercase tracking-widest text-text mb-4">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-8">{item.desc}</p>
              
              <div className="pt-6 border-t border-border flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted">Current Limit</span>
                <span className="text-xs font-black text-primary">{item.limit}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-surface border border-border p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-1">
              <div className="text-sm font-black uppercase tracking-widest text-text">Still the best value</div>
              <div className="text-xs text-muted font-medium">Despite these limitations, you save over 90% compared to official pricing.</div>
            </div>
          </div>
          <button className="w-full bg-primary px-10 py-4 text-[10px] font-black uppercase tracking-widest text-primary-foreground transition-all hover:bg-accent md:w-auto">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}
