"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { springSnappy } from "@/lib/motion";
import { SITE_CONFIG } from "@/config/site";
import { Logo } from "./Logo";

const HOME_SECTIONS = [
  { label: "Pricing", hash: "pricing" },
  { label: "Tools", hash: "tools" },
  { label: "Comparison", hash: "comparison" },
  { label: "Limitations", hash: "limitations" },
  { label: "Reviews", hash: "reviews" },
  { label: "FAQ", hash: "faq" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  /** Reference: transparent over navy hero on home only; inner pages always use the light bar. */
  const lightNav = scrolled || pathname !== "/";

  return (
    <nav
      className={cn(
        "fixed top-0 right-0 left-0 z-50 border-b transition-all duration-300 px-4 sm:px-6 lg:px-8",
        lightNav
          ? "border-slate-200/80 bg-white/95 py-3 shadow-sm backdrop-blur-sm"
          : "border-transparent bg-transparent py-4 md:py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={springSnappy}>
            <Link to="/">
              <Logo onDark navScrolled={lightNav} />
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={cn(
                "py-2 text-xs font-bold uppercase tracking-widest transition-colors hover:text-blue-600",
                lightNav
                  ? pathname === "/"
                    ? "text-blue-600"
                    : "text-gray-600"
                  : pathname === "/"
                    ? "text-white"
                    : "text-blue-100"
              )}
            >
              Home
            </Link>
            {HOME_SECTIONS.map((s) => (
              <Link
                key={s.hash}
                to={`/#${s.hash}`}
                className={cn(
                  "py-2 text-xs font-bold uppercase tracking-widest transition-colors hover:text-blue-600",
                  lightNav ? "text-gray-600" : "text-blue-100"
                )}
              >
                {s.label}
              </Link>
            ))}
            <motion.div whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }} transition={springSnappy}>
              <Link
                to="/"
                className="inline-block rounded-xl bg-blue-600 px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-100 transition-all hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className={cn("lg:hidden", lightNav ? "text-[#1A284D]" : "text-white")}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed inset-0 z-50 bg-[#1A284D] lg:hidden"
          >
            <div className="flex h-full flex-col p-6">
              <div className="mb-12 flex items-center justify-between">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <Logo onDark />
                </Link>
                <button type="button" onClick={() => setIsOpen(false)} className="text-white" aria-label="Close menu">
                  <X />
                </button>
              </div>
              
              <div className="no-scrollbar flex-grow space-y-8 overflow-y-auto">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block text-xl font-bold transition-colors hover:text-blue-300",
                    pathname === "/" ? "text-blue-300" : "text-white"
                  )}
                >
                  Home
                </Link>
                <div className="space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-blue-300">
                    {SITE_CONFIG.name}
                  </p>
                  <div className="grid grid-cols-1 gap-2 border-l border-white/15 pl-4">
                    {HOME_SECTIONS.map((s) => (
                      <Link
                        key={s.hash}
                        to={`/#${s.hash}`}
                        onClick={() => setIsOpen(false)}
                        className="text-sm text-blue-100/80 hover:text-white"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <motion.div whileTap={{ scale: 0.98 }} transition={springSnappy}>
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="block w-full rounded-xl bg-blue-600 py-4 text-center text-sm font-bold text-white shadow-lg shadow-blue-900/30 hover:bg-blue-700"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
