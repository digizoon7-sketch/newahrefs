import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingCart, Star, Zap } from "lucide-react";

const notifications = [
  { name: "Alex from London", action: "purchased Standard Plan", time: "2 mins ago" },
  { name: "Sarah from New York", action: "upgraded to Advanced Plan", time: "5 mins ago" },
  { name: "Chen from Singapore", action: "purchased Lite Plan", time: "12 mins ago" },
  { name: "Marco from Milan", action: "renewed VIP Access", time: "15 mins ago" },
  { name: "Elena from Madrid", action: "purchased Standard Plan", time: "22 mins ago" },
];

export function SocialProof() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
      setCurrent((prev) => (prev + 1) % notifications.length);
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -50, y: 50 }}
          className="fixed bottom-6 left-6 z-[100] bg-surface border border-border p-4 rounded-sm shadow-2xl flex items-center gap-4 max-w-xs"
        >
          <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
            <ShoppingCart className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-1">
            <p className="text-xs font-bold text-text">
              {notifications[current].name}
            </p>
            <p className="text-[10px] leading-tight text-muted">
              {notifications[current].action}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-primary font-bold uppercase tracking-widest">Verified Purchase</span>
              <span className="text-[9px] text-muted">• {notifications[current].time}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
