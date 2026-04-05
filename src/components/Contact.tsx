import { motion } from "motion/react";
import { Mail, MessageSquare, Phone, MapPin, Send, ShieldCheck } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] font-black uppercase tracking-[0.15em] text-primary">
                  Get in Touch
                </span>
              </motion.div>
              
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase text-text">
                Let's <br />
                <span className="text-primary">Connect.</span>
              </h2>
              
              <p className="max-w-lg text-xl font-medium leading-relaxed text-muted">
                Have questions about our Ahrefs access? Our team is available 24/7 to help you with any inquiries.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Mail, title: "Email Us", value: "support@ahrefsgroupbuy.com", sub: "Response within 1 hour" },
                { icon: MessageSquare, title: "Live Chat", value: "Available 24/7", sub: "Average response: 2 mins" },
                { icon: Phone, title: "Call Us", value: "+1 (555) 123-4567", sub: "Mon-Fri, 9am-6pm EST" },
                { icon: MapPin, title: "Office", value: "New York, NY", sub: "123 SEO Street, Suite 100" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 bg-surface border border-border flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-black uppercase tracking-tighter text-muted">{item.title}</h4>
                    <p className="text-lg font-black uppercase tracking-tighter text-text">{item.value}</p>
                    <p className="mt-1 text-[10px] font-black uppercase tracking-widest text-muted">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-surface border border-border p-12 shadow-2xl relative"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="px-2 text-[10px] font-black uppercase tracking-widest text-muted">First Name</label>
                  <input 
                    type="text" 
                    className="w-full border border-border bg-background px-6 py-4 text-sm font-medium text-text focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <label className="px-2 text-[10px] font-black uppercase tracking-widest text-muted">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full border border-border bg-background px-6 py-4 text-sm font-medium text-text focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="px-2 text-[10px] font-black uppercase tracking-widest text-muted">Email Address</label>
                <input 
                  type="email" 
                  className="w-full border border-border bg-background px-6 py-4 text-sm font-medium text-text focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-3">
                <label className="px-2 text-[10px] font-black uppercase tracking-widest text-muted">Message</label>
                <textarea 
                  rows={4}
                  className="w-full resize-none border border-border bg-background px-6 py-4 text-sm font-medium text-text focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <button className="flex w-full items-center justify-center gap-3 bg-primary py-5 text-xs font-black uppercase tracking-widest text-primary-foreground shadow-[0_0_32px_rgba(234,88,12,0.2)] transition-all hover:bg-accent">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
