import { motion } from "motion/react";
import { Chrome, Layout, Zap, Globe, Shield } from "lucide-react";

export function ToolbarSection() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface py-32">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
              <Chrome className="w-3.5 h-3.5 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                Directly in Browser
              </span>
            </div>
            
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-text sm:text-4xl md:text-5xl">
              Ahrefs SEO <span className="text-primary">Toolbar</span>
            </h2>
            
            <p className="text-muted text-lg font-medium leading-relaxed max-w-xl">
              Get instant SEO metrics for any page you visit. Our shared access includes full support for the official Ahrefs SEO Toolbar, allowing you to analyze competitors on the fly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Zap, title: "Instant Metrics", desc: "DR, UR, and Backlinks directly on SERPs." },
                { icon: Globe, title: "Keyword Data", desc: "Search volume and difficulty in real-time." },
                { icon: Layout, title: "On-Page SEO", desc: "Analyze headers, meta tags, and more." },
                { icon: Shield, title: "Safe Access", desc: "Securely integrated with our dashboard." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ delay: i * 0.07, duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: 4 }}
                  className="group flex gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-surface transition-colors group-hover:border-primary/50">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-black uppercase tracking-widest text-text">{item.title}</div>
                    <div className="text-xs leading-relaxed text-muted">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: -1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-background p-4 shadow-2xl">
              <div className="flex items-center gap-2 mb-4 border-b border-border pb-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/20" />
                </div>
                <div className="bg-background px-4 py-1 rounded-md text-[10px] text-muted font-mono w-full">
                  google.com/search?q=seo+tools
                </div>
              </div>
              
              <div className="space-y-4 opacity-40">
                <div className="h-4 bg-background rounded w-3/4" />
                <div className="h-4 bg-background rounded w-1/2" />
                <div className="h-20 bg-background rounded w-full" />
              </div>

              {/* Toolbar Mockup Overlay */}
              <motion.div
                initial={{ y: 28, opacity: 0, scale: 0.96 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-1/2 left-1/2 w-full max-w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-primary/30 bg-background p-6 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-[10px] font-black text-primary-foreground">A</div>
                    <span className="text-xs font-black uppercase tracking-widest text-text">Ahrefs Toolbar</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface p-3 border border-border rounded-lg">
                    <div className="text-[10px] text-muted uppercase font-black mb-1">Domain Rating</div>
                    <div className="text-xl font-black text-primary">92</div>
                  </div>
                  <div className="bg-surface p-3 border border-border rounded-lg">
                    <div className="text-[10px] text-muted uppercase font-black mb-1">Backlinks</div>
                    <div className="text-xl font-black text-text">4.2M</div>
                  </div>
                  <div className="bg-surface p-3 border border-border rounded-lg">
                    <div className="text-[10px] text-muted uppercase font-black mb-1">Keywords</div>
                    <div className="text-xl font-black text-text">12.5K</div>
                  </div>
                  <div className="bg-surface p-3 border border-border rounded-lg">
                    <div className="text-[10px] text-muted uppercase font-black mb-1">Traffic</div>
                    <div className="text-xl font-black text-text">850K</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
