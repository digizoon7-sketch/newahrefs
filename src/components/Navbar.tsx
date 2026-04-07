"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { springSnappy } from "@/lib/motion";
import { SITE_CONFIG, PAGES } from "@/config/site";
import { Logo } from "./Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
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
            {SITE_CONFIG.clusters.map((cluster) => (
              <div
                key={cluster.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(cluster.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  to={`/${cluster.pillar}`}
                  className={cn(
                    "flex items-center gap-1 py-2 text-xs font-bold uppercase tracking-widest transition-colors hover:text-blue-600",
                    lightNav ? "text-gray-600" : "text-blue-100"
                  )}
                >
                  {cluster.name}
                  <ChevronDown className="w-3 h-3" />
                </Link>
                <AnimatePresence>
                  {activeDropdown === cluster.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={springSnappy}
                      className={cn(
                        "absolute top-full left-0 w-64 rounded-xl border p-4 shadow-2xl",
                        lightNav
                          ? "border-slate-200 bg-white"
                          : "border-white/10 bg-[#15203d]/98 backdrop-blur-md"
                      )}
                    >
                      <div className="space-y-1">
                        {cluster.supporting.map((slug) => (
                          <Link
                            key={slug}
                            to={`/${slug}`}
                            className={cn(
                              "block rounded-lg p-2 text-xs transition-colors",
                              lightNav
                                ? "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                                : "text-white/70 hover:bg-white/5 hover:text-white"
                            )}
                          >
                            {PAGES[slug].title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
                {SITE_CONFIG.clusters.map((cluster) => (
                  <div key={cluster.name} className="space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-300">{cluster.name}</p>
                    <Link to={`/${cluster.pillar}`} className="block text-xl font-bold text-white">
                      {PAGES[cluster.pillar].title}
                    </Link>
                    <div className="grid grid-cols-1 gap-2 border-l border-white/15 pl-4">
                      {cluster.supporting.slice(0, 3).map((slug) => (
                        <Link key={slug} to={`/${slug}`} className="text-sm text-blue-100/80 hover:text-white">
                          {PAGES[slug].title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
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
