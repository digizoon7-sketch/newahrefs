/** Shared easing + variants for Motion — keep animations consistent site-wide */
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export const viewportOnce = { once: true as const, margin: "-48px" as const };

export const springSnappy = { type: "spring" as const, stiffness: 380, damping: 28 };
export const springSoft = { type: "spring" as const, stiffness: 220, damping: 26 };

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

export const fadeUpProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewportOnce,
  transition: { duration: 0.55, ease: easeOutExpo },
};
