import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 border-b border-border py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={springSnappy}>
            <Link to="/">
              <Logo />
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={cn(
                "py-2 text-xs font-bold uppercase tracking-widest transition-colors",
                location.pathname === "/" ? "text-primary" : "text-muted hover:text-primary"
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
                  className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-muted hover:text-primary transition-colors py-2"
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
                      className="absolute top-full left-0 w-64 bg-surface border border-border p-4 shadow-2xl rounded-xl"
                    >
                      <div className="space-y-1">
                        {cluster.supporting.map((slug) => (
                          <Link
                            key={slug}
                            to={`/${slug}`}
                            className="block p-2 text-xs text-muted hover:text-primary hover:bg-background transition-colors rounded-lg"
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
                className="inline-block rounded-sm bg-primary px-8 py-3 text-xs font-black uppercase tracking-widest text-primary-foreground shadow-[0_0_28px_rgba(234,88,12,0.22)] transition-colors hover:bg-accent"
              >
                VIP Access
              </Link>
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-text" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed inset-0 z-50 bg-background lg:hidden"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-12">
                <Link to="/">
                  <Logo />
                </Link>
                <button onClick={() => setIsOpen(false)} className="text-text"><X /></button>
              </div>
              
              <div className="space-y-8 flex-grow overflow-y-auto no-scrollbar">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block text-xl font-bold transition-colors",
                    location.pathname === "/" ? "text-primary" : "text-text hover:text-primary"
                  )}
                >
                  Home
                </Link>
                {SITE_CONFIG.clusters.map((cluster) => (
                  <div key={cluster.name} className="space-y-4">
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest">{cluster.name}</p>
                    <Link to={`/${cluster.pillar}`} className="block text-xl font-bold text-text">
                      {PAGES[cluster.pillar].title}
                    </Link>
                    <div className="grid grid-cols-1 gap-2 pl-4 border-l border-border">
                      {cluster.supporting.slice(0, 3).map((slug) => (
                        <Link key={slug} to={`/${slug}`} className="text-sm text-muted">
                          {PAGES[slug].title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-8">
                <motion.div whileTap={{ scale: 0.98 }} transition={springSnappy}>
                  <Link
                    to="/"
                    className="block w-full rounded-sm bg-primary py-4 text-center text-sm font-black uppercase tracking-widest text-primary-foreground hover:bg-accent"
                  >
                    Get VIP Access Now
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
