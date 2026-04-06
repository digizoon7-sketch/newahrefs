import { motion } from "motion/react";
import { springSoft } from "@/lib/motion";
import { Star, ShieldCheck } from "lucide-react";

export const REVIEW_ITEMS = [
  {
    name: "Mark Thompson",
    role: "Agency Owner",
    content:
      "Saved my agency over $500 a month. Uptime is incredible — same data as official Ahrefs.",
    date: "2 days ago",
    avatar: "https://picsum.photos/seed/mark/100/100",
  },
  {
    name: "Sarah Chen",
    role: "Freelance SEO",
    content: "Only reliable provider I've found after 3 others. Stable for 6 months. Highly recommended.",
    date: "1 week ago",
    avatar: "https://picsum.photos/seed/sarah/100/100",
  },
  {
    name: "Rahul Kapoor",
    role: "Outreach Specialist",
    content: "Ahrefs Bar for $5 is a steal. Saves tons of time on DR checks for prospects.",
    date: "3 weeks ago",
    avatar: "https://picsum.photos/seed/rahul/100/100",
  },
  {
    name: "Elena Rodriguez",
    role: "Content Strategist",
    content: "Real human support — reply in minutes on WhatsApp at 11 PM. Rare these days.",
    date: "1 month ago",
    avatar: "https://picsum.photos/seed/elena/100/100",
  },
];

export function Reviews() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* One-line header row */}
        <div className="mb-8 flex flex-col gap-4 border-b border-border pb-8 sm:mb-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6 sm:gap-y-2 md:pb-10">
          <h2 className="text-2xl font-black uppercase leading-tight tracking-tight text-text sm:text-3xl md:text-4xl lg:text-5xl">
            What users say <span className="text-primary">about our access</span>
          </h2>
          <div className="flex flex-wrap items-center gap-3 sm:justify-end">
            <p className="text-xs font-medium text-muted sm:text-sm">12,000+ SEO professionals</p>
            <span className="hidden h-4 w-px bg-border sm:block" aria-hidden />
            <div className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-muted">1,428 reviews</span>
            </div>
          </div>
        </div>

        {/* Compact cards — one row on xl */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {REVIEW_ITEMS.map((review, i) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: springSoft }}
              className="flex flex-col rounded-lg border border-border bg-background p-4 shadow-sm transition-colors hover:border-primary/25"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 overflow-hidden rounded-md border border-border bg-background">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-xs font-black uppercase tracking-tight text-text">{review.name}</h3>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-muted">{review.role}</p>
                </div>
              </div>

              <div className="mb-2 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((j) => (
                  <Star key={j} className="h-2.5 w-2.5 fill-primary text-primary" />
                ))}
              </div>

              <p className="mb-4 line-clamp-3 flex-1 text-xs font-medium leading-relaxed text-muted">
                &ldquo;{review.content}&rdquo;
              </p>

              <div className="mt-auto flex items-center justify-between gap-2 border-t border-border pt-3 text-[9px] font-black uppercase tracking-widest text-muted">
                <span className="flex items-center gap-1 text-[8px] sm:text-[9px]">
                  <ShieldCheck className="h-3 w-3 shrink-0 text-primary" aria-hidden />
                  Verified
                </span>
                <span className="shrink-0">{review.date}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
