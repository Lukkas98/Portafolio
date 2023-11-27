"use client";

import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageAnimate({ children }) {
  const pathname = usePathname();
  const isPresent = useIsPresent();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.4,
      rotate: 20,
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ scaleX: 1, backgroundColor: "#1e293a" }}
        animate={{
          scaleX: 0,
          backgroundColor: "#1e293a",
          transition: { duration: 0.5, ease: "circIn" },
        }}
        exit={{
          scaleX: 1,
          backgroundColor: "#9A3412",
          transition: { duration: 0.5, ease: "circIn" },
        }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 left-0 right-0 bottom-0 z-50"
      />

      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        variants={pageVariants}
        transition={{ duration: 1.5, type: "spring" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
