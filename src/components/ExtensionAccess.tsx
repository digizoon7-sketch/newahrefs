import { motion } from "motion/react";
import { Chrome, ShieldCheck, Zap, BarChart2, Search, ArrowRight, User } from "lucide-react";

export function ExtensionAccess() {
  return (
    <section className="py-24 bg-surface border-y border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full"
              >
                <Chrome className="w-3.5 h-3.5 text-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                  Exclusive Extension Access
                </span>
              </motion.div>
              
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase text-text">
                Ahrefs SEO <br />
                <span className="text-primary">Toolbar.</span>
              </h2>
              
              <p className="max-w-lg text-xl font-medium leading-relaxed text-muted">
                Stop switching tabs. Get critical SEO metrics like Domain Rating, URL Rating, and Backlink counts directly on Google SERPs and any website you visit.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Search, title: "SERP Overview", desc: "Get DR, UR, and Backlink counts directly on Google search results." },
                { icon: ShieldCheck, title: "Domain Metrics", desc: "Check any website's strength without leaving the page." },
                { icon: Zap, title: "Keyword Difficulty", desc: "Instantly see how hard it is to rank for any search term." },
                { icon: BarChart2, title: "Quick Analysis", desc: "One-click access to full Site Explorer reports." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-3 group"
                >
                  <div className="w-10 h-10 bg-background border border-border flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-tighter text-text">{item.title}</h4>
                  <p className="text-[10px] font-black uppercase leading-relaxed tracking-widest text-muted">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <button className="flex items-center justify-center gap-3 bg-primary px-10 py-5 text-xs font-black uppercase tracking-widest text-primary-foreground shadow-[0_0_32px_rgba(234,88,12,0.2)] transition-all hover:bg-accent">
              Start Using Ahrefs Bar <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            {/* Mockup of Google Search with Toolbar */}
            <div className="bg-background border border-border p-6 shadow-2xl space-y-6 relative overflow-hidden group">
              <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex h-6 w-6 items-center justify-center rounded-full border border-border bg-surface">
                        <User className="h-3 w-3 text-muted" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-muted">Joined by 12,000+ SEOs</span>
                </div>
                <div className="text-[9px] font-black uppercase tracking-widest text-primary">google.com/search?q=ahrefs+group+buy</div>
              </div>

              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-4 relative">
                  <div className="space-y-2">
                    <div className="h-4 w-2/3 bg-border" />
                    <div className="h-3 w-full bg-border" />
                  </div>
                  
                  {/* The Toolbar Overlay */}
                  <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="bg-surface border border-primary/30 p-3 flex items-center justify-between gap-4 shadow-xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-[8px] font-black uppercase tracking-widest text-muted">DR</div>
                        <div className="text-xs font-black text-primary">92</div>
                      </div>
                      <div className="w-px h-6 bg-border" />
                      <div className="text-center">
                        <div className="text-[8px] font-black uppercase tracking-widest text-muted">UR</div>
                        <div className="text-xs font-black text-text">45</div>
                      </div>
                      <div className="w-px h-6 bg-border" />
                      <div className="text-center">
                        <div className="text-[8px] font-black uppercase tracking-widest text-muted">Backlinks</div>
                        <div className="text-xs font-black text-text">45.2K</div>
                      </div>
                      <div className="w-px h-6 bg-border" />
                      <div className="text-center">
                        <div className="text-[8px] font-black uppercase tracking-widest text-muted">Traffic</div>
                        <div className="text-xs font-black text-text">1.2M</div>
                      </div>
                    </div>
                    <div className="w-6 h-6 bg-primary/10 flex items-center justify-center">
                      <BarChart2 className="w-3 h-3 text-primary" />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
            
            {/* Background Glow */}
            <div className="absolute -inset-10 bg-primary/10 blur-[100px] -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
