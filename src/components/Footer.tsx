import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Twitter, Facebook, Linkedin, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

const social = [
  { Icon: Twitter, label: "Twitter", href: "#" },
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#1A284D] text-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-10 md:grid-cols-12 md:gap-12"
        >
          <div className="md:col-span-6 lg:col-span-5">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-300/90">
              {SITE_CONFIG.name}
            </p>
            <p className="mt-4 max-w-xl text-sm font-medium leading-relaxed text-white/70">
              Reliable Ahrefs group buy access for SEOs and agencies, secure dashboard, stable uptime, and human support
              when you need it.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {social.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-7">
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-blue-300/90">Pages</p>
                <ul className="mt-4 space-y-3 text-sm font-semibold text-white/70">
                  <li>
                    <Link className="transition-colors hover:text-white" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="transition-colors hover:text-white" to="/#pricing">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link className="transition-colors hover:text-white" to="/ahrefs-group-buy-guide">
                      Guide
                    </Link>
                  </li>
                  <li>
                    <Link className="transition-colors hover:text-white" to="/ahrefs-group-buy-risks">
                      Risks
                    </Link>
                  </li>
                  <li>
                    <Link className="transition-colors hover:text-white" to="/privacy">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-blue-300/90">Support</p>
                <p className="mt-4 text-sm font-medium leading-relaxed text-white/70">
                  Need help? Our team is available 24/7.
                </p>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-xs font-black uppercase tracking-widest text-[#1A284D] shadow-xl transition-transform hover:-translate-y-0.5"
                >
                  WhatsApp Support <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-white/45">
              © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
