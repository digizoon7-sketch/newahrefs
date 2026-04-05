import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Twitter, Facebook, Linkedin } from "lucide-react";
import { Logo } from "./Logo";

const social = [
  { Icon: Twitter, label: "Twitter", href: "#" },
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12 lg:items-start">
          <motion.div
            className="space-y-8 lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to="/"
              className="inline-block outline-none ring-primary/40 transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Logo />
            </Link>
            <p className="max-w-md text-base leading-relaxed text-muted">
              Reliable Ahrefs group buy access for SEOs and agencies — secure dashboard, stable uptime, and
              human support when you need it.
            </p>
            <div>
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-primary">Follow</p>
              <div className="flex flex-wrap gap-3">
                {social.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-muted shadow-sm transition-all hover:border-primary/50 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="rounded-2xl border border-border bg-background p-8 shadow-sm sm:p-10">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary">Contact</h2>
              <p className="mt-2 text-sm text-muted">Questions about plans or access? Reach us here.</p>
              <ul className="mt-8 space-y-6">
                <li>
                  <a
                    href="mailto:support@ahrefsgroupbuy.com"
                    className="group flex gap-4 rounded-lg transition-colors hover:text-primary"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-primary">
                      <Mail className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-black uppercase tracking-widest text-muted group-hover:text-primary/80">
                        Email
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-text break-all">
                        support@ahrefsgroupbuy.com
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="tel:+15550000000" className="group flex gap-4 rounded-lg transition-colors hover:text-primary">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-primary">
                      <Phone className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-black uppercase tracking-widest text-muted group-hover:text-primary/80">
                        Phone
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-text">+1 (555) 000-0000</span>
                    </span>
                  </a>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-primary">
                    <MapPin className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-black uppercase tracking-widest text-muted">Location</span>
                    <span className="mt-1 block text-sm font-semibold text-text">London, UK</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-2 border-t border-border pt-10 text-center sm:mt-16 sm:pt-12">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-muted">
            © {new Date().getFullYear()} Ahrefs Group Buy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
