"use client";

import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { SocialProof } from "./SocialProof";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { easeOutExpo } from "@/lib/motion";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: easeOutExpo }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <SocialProof />
    </div>
  );
}
