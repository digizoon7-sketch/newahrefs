import { motion } from "motion/react";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { SharedAccess } from "@/components/SharedAccess";
import { Benefits } from "@/components/Benefits";
import { ToolbarSection } from "@/components/ToolbarSection";
import { TransparencySection } from "@/components/TransparencySection";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { easeOutExpo, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export function Home() {
  const tools = [
    "Site Explorer",
    "Keywords Explorer",
    "Site Audit",
    "Rank Tracker",
    "Content Gap",
  ];

  return (
    <div className="bg-background text-text selection:bg-accent/15 selection:text-text">
      <Hero />

      <section className="border-y border-border bg-surface py-10 sm:py-12" aria-labelledby="home-tools-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            id="home-tools-heading"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.45, ease: easeOutExpo }}
            className="mb-6 text-center text-sm font-black uppercase tracking-wide text-muted sm:mb-8 sm:text-base"
          >
            Included in your Ahrefs group buy access
          </motion.h2>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-10 sm:gap-y-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {tools.map((label) => (
              <motion.span
                key={label}
                variants={staggerItem}
                whileHover={{ y: -3 }}
                className="cursor-default text-sm font-bold uppercase tracking-wide text-text/80 transition-colors hover:text-text sm:text-base"
              >
                {label}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section - "Pricing that scales with you." */}
      <Pricing />
      
      {/* Why Choose Shared Access? (Problem/Solution + Official vs Ahrefs Group Buy) */}
      <SharedAccess />

      {/* Benefits Section */}
      <Benefits />

      {/* Ahrefs SEO Toolbar - Directly in Browser */}
      <ToolbarSection />

      {/* Transparency First - Transparent Limitations */}
      <TransparencySection />

      {/* What Users Say About Our Ahrefs Group Buy */}
      <Reviews />

      {/* Ahrefs Group Buy Frequently Asked Questions */}
      <FAQ />
    </div>
  );
}
