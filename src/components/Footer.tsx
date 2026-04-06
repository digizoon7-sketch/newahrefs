import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Twitter, Facebook, Linkedin } from "lucide-react";

const social = [
  { Icon: Twitter, label: "Twitter", href: "#" },
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#1A284D] pt-6 text-white sm:pt-8">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <motion.div
          className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center lg:mx-0 lg:items-start lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="max-w-xl text-base leading-relaxed text-white/70">
              Reliable Ahrefs group buy access for SEOs and agencies, secure dashboard, stable uptime, and
              human support when you need it.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[11px] font-black uppercase tracking-[0.2em] text-white/65 lg:justify-start">
              <Link
                to="/"
                className="rounded-lg px-2 py-1 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A284D]"
              >
                Home
              </Link>
              <Link
                to="/#pricing"
                className="rounded-lg px-2 py-1 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A284D]"
              >
                Pricing
              </Link>
            </div>
            <div className="w-full">
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-blue-400">Follow</p>
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                {social.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                ))}
              </div>
            </div>
        </motion.div>

        <div className="mt-14 border-t border-white/10 pt-10 sm:mt-16 sm:pt-12">
          <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-2 text-center lg:mx-0 lg:items-start lg:text-left">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/45">
            © {new Date().getFullYear()} Ahrefs Group Buy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
