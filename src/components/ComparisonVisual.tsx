import { motion } from "motion/react";
import { TrendingDown, TrendingUp, DollarSign, Zap } from "lucide-react";

const data = [
  { label: "1 OPTION", official: 70, ahrefsBuy: 95 },
  { label: "2 OPTION", official: 40, ahrefsBuy: 92 },
  { label: "3 OPTION", official: 55, ahrefsBuy: 75 },
  { label: "4 OPTION", official: 80, ahrefsBuy: 80 },
  { label: "5 OPTION", official: 85, ahrefsBuy: 72 },
  { label: "6 OPTION", official: 50, ahrefsBuy: 95 },
  { label: "7 OPTION", official: 75, ahrefsBuy: 85 },
  { label: "8 OPTION", official: 90, ahrefsBuy: 90 },
];

export function ComparisonVisual() {
  return (
    <section className="relative overflow-hidden bg-surface py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase text-text">
                Official <br />
                <span className="text-muted">Ahrefs</span>
              </h2>
              <p className="max-w-lg text-lg font-medium leading-relaxed text-muted">
                Official subscriptions are expensive and designed for large enterprise teams.
              </p>
              <div className="flex items-center gap-4 text-red-500 font-black uppercase tracking-widest text-xs">
                <TrendingDown className="w-5 h-5" /> High Cost, Low Accessibility
              </div>
            </div>

            <div className="h-px bg-border w-1/2" />

            <div className="space-y-6">
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase text-primary">
                VS <br />
                <span className="text-text">
                  Ahrefs <span className="text-primary">Group Buy</span>
                </span>
              </h2>
              <p className="max-w-lg text-lg font-medium leading-relaxed text-text/90">
                Our shared access provides the same power at a fraction of the cost.
              </p>
              <div className="flex items-center gap-4 text-primary font-black uppercase tracking-widest text-xs">
                <TrendingUp className="w-5 h-5" /> 90% Savings, Full Power
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden border border-border bg-background p-10 shadow-sm group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Zap className="w-64 h-64 text-primary" />
            </div>
            
            <div className="space-y-8 relative z-10">
              {data.map((item, i) => (
                <div key={item.label} className="space-y-3">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted">
                    <span>{item.label}</span>
                    <div className="flex gap-4">
                      <span className="text-muted/80">Official: {item.official}%</span>
                      <span className="text-primary">Group buy: {item.ahrefsBuy}%</span>
                    </div>
                  </div>
                  <div className="flex h-2 overflow-hidden border border-border bg-surface">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.official}%` }}
                      transition={{ delay: i * 0.1, duration: 1 }}
                      className="h-full bg-border"
                    />
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.ahrefsBuy}%` }}
                      transition={{ delay: i * 0.1 + 0.2, duration: 1 }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 bg-border" />
                <span className="text-[9px] font-black uppercase tracking-widest text-muted">Official Ahrefs</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary" />
                <span className="text-[9px] font-black uppercase tracking-widest text-primary">Ahrefs Group Buy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
