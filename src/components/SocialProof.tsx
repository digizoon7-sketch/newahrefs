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
          className="fixed bottom-6 left-6 z-[100] flex max-w-xs items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/15">
            <ShoppingCart className="h-6 w-6 text-blue-600" />
          </div>
          <div className="space-y-1">
            <p className="text-xs font-bold text-[#1A284D]">
              {notifications[current].name}
            </p>
            <p className="text-[10px] leading-tight text-slate-600">
              {notifications[current].action}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-bold uppercase tracking-widest text-blue-600">Verified Purchase</span>
              <span className="text-[9px] text-slate-500">• {notifications[current].time}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
