import { motion } from "motion/react";
import { Users, FileText, Globe, Zap } from "lucide-react";

const stats = [
  { label: "Active Users", value: "15,000+", icon: Users },
  { label: "Reports Generated", value: "1.2M+", icon: FileText },
  { label: "Uptime Guarantee", value: "99.9%", icon: Zap },
  { label: "Global Servers", value: "24", icon: Globe },
];

export function Stats() {
  return (
    <section className="py-24 bg-surface border-y border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto rounded-sm group hover:bg-primary/20 transition-colors">
                <stat.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <div className="mb-1 text-4xl font-black tracking-tighter text-text md:text-5xl">
                  {stat.value}
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-muted">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
