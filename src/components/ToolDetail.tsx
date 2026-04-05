import { motion } from "motion/react";
import { Check, Globe, Search, BarChart2, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToolDetailProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  reversed?: boolean;
  accentColor: string;
}

export function ToolDetail({ title, subtitle, description, features, image, reversed, accentColor }: ToolDetailProps) {
  return (
    <section className={cn("py-24 overflow-hidden", reversed ? "bg-background" : "bg-surface border-y border-border")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-20 items-center", reversed && "lg:flex-row-reverse")}>
          <motion.div
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={cn("space-y-8", reversed && "lg:order-2")}
          >
            <div className="space-y-4">
              <div className={cn("text-[10px] font-black uppercase tracking-[0.3em]", accentColor)}>
                {subtitle}
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none text-text">
                {title}
              </h2>
            </div>
            
            <p className="text-lg font-medium leading-relaxed text-muted">
              {description}
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight text-text/90">
                  <div className={cn("w-5 h-5 rounded-full flex items-center justify-center shrink-0", accentColor.replace('text-', 'bg-').replace('400', '400/20'))}>
                    <Check className={cn("w-3 h-3", accentColor)} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button className={cn("rounded-sm border px-10 py-4 text-xs font-black uppercase tracking-widest text-text transition-all", accentColor.replace('text-', 'border-').replace('400', '400/30'), "hover:bg-primary/5")}>
              Explore {title}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: reversed ? -10 : 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={cn("relative", reversed && "lg:order-1")}
          >
            <div className="relative aspect-video overflow-hidden rounded-sm border border-border bg-text shadow-2xl group">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text via-transparent to-transparent opacity-50" />
              
              {/* Floating UI Element */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 right-10 bg-surface border border-border p-4 shadow-2xl hidden sm:flex items-center gap-3"
              >
                <Zap className={cn("w-5 h-5", accentColor)} />
                <div className="text-[9px] font-black uppercase tracking-widest text-text">
                  Live Analysis <br />
                  <span className="text-muted">Active Now</span>
                </div>
              </motion.div>
            </div>
            
            {/* Background Glow */}
            <div className={cn("absolute -inset-10 blur-[100px] opacity-10 -z-10 rounded-full", accentColor.replace('text-', 'bg-'))} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
