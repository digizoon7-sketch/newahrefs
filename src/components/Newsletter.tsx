import { motion } from "motion/react";
import { Send, ShieldCheck } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-24 bg-background relative overflow-hidden border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-surface border border-border p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
          
          <div className="max-w-2xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                Join our SEO Community
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none text-text">
              Get SEO Tips <br />
              <span className="text-primary">In Your Inbox</span>
            </h2>
            
            <p className="text-lg font-medium text-muted">
              Subscribe to our newsletter and get exclusive SEO tips, tool updates, and special offers.
            </p>
          </div>

          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 pt-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow border border-border bg-background px-6 py-4 text-sm font-medium text-text placeholder:text-muted focus:border-primary focus:outline-none transition-colors"
            />
            <button className="flex items-center justify-center gap-2 bg-primary px-8 py-4 text-xs font-black uppercase tracking-widest text-primary-foreground transition-all hover:bg-accent">
              Subscribe <Send className="w-4 h-4" />
            </button>
          </form>
          
          <p className="text-[10px] font-black uppercase tracking-widest text-muted">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
