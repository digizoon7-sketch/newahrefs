import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export const FAQ_ITEMS = [
  {
    question: "Is this the real Ahrefs data?",
    answer: "Yes, 100%. You are accessing real Ahrefs accounts through our secure dashboard. The data, metrics, and features are exactly what you get with an official subscription.",
  },
  {
    question: "How do I use the Ahrefs Bar (Toolbar)?",
    answer: "Once you subscribe to a plan that includes the toolbar, you'll get access to our custom browser extension. Simply install it, log in with your account, and you'll see SEO metrics directly on Google and any website you visit.",
  },
  {
    question: "Can I use it on multiple devices?",
    answer: "Our plans are designed for individual or team use depending on the tier. Standard and Power plans allow access from one primary device at a time to ensure stability for all members.",
  },
  {
    question: "What happens if a tool goes down?",
    answer: "We monitor our accounts 24/7. If a specific account hits a limit or goes down, our automated system switches to a fresh account instantly. You'll rarely notice any downtime.",
  },
  {
    question: "Is my search history private?",
    answer: "Absolutely. We use a custom isolation layer that ensures your projects, keywords, and search history are never visible to other members of the group buy.",
  },
  {
    question: "What are the daily limits?",
    answer: "Daily limits vary by plan. For example, our Standard plan includes 30 credits per day for Site Explorer and Keywords Explorer. These limits are reset every 24 hours.",
  },
  {
    question: "Do you offer a refund if I'm not happy?",
    answer: "Yes, we offer a 100% risk-free guarantee. If you're not satisfied with the service within the first 24 hours, contact our support for a full refund.",
  },
  {
    question: "How do I pay?",
    answer: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and various Cryptocurrencies through our secure payment gateway.",
  },
  {
    question: "Is there any software to download?",
    answer: "No software download is required. Everything is accessed through our secure web-based dashboard. Only the optional Ahrefs Bar requires a simple browser extension.",
  },
  {
    question: "How fast is the account activation?",
    answer: "Activation is instant. As soon as your payment is confirmed, you'll receive your login details and can start using the tools immediately.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-20 space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mx-auto max-w-3xl text-3xl font-black uppercase leading-tight tracking-tight text-text sm:text-4xl md:text-5xl">
            Frequently asked <span className="text-primary">questions</span>
          </h2>
          <p className="text-lg font-medium text-muted">Everything you need to know about our Ahrefs access.</p>
        </motion.div>

        <LayoutGroup>
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, layout: { type: "spring", stiffness: 320, damping: 30 } }}
              viewport={{ once: true, margin: "-24px" }}
              className="overflow-hidden border border-border bg-surface shadow-sm transition-colors group-hover:border-primary/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between gap-4"
              >
                <span className="text-sm font-black uppercase tracking-tight text-text group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <div className="w-8 h-8 bg-background border border-border flex items-center justify-center shrink-0 group-hover:border-primary/20 transition-colors">
                  {openIndex === i ? (
                    <Minus className="w-4 h-4 text-primary" />
                  ) : (
                    <Plus className="w-4 h-4 text-muted" />
                  )}
                </div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.06, duration: 0.25 }}
                      className="border-t border-border px-6 pb-6 pt-6 text-sm font-medium leading-relaxed text-muted"
                    >
                      {faq.answer}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        </LayoutGroup>
      </div>
    </section>
  );
}
