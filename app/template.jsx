"use client";

import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { usePathname } from "next/navigation";
import Star from "./components/animates/backgroud/star";

const variants = {
  hidden: { opacity: 0, x: -100, y: 0, scale: 0.3},
  enter: { opacity: 1, x: 0, y: 0, scale: 1},
};

export default function TemplateRoot({ children }) {
  const isPresent = useIsPresent();
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <motion.main
        key={pathname + "2"}
        initial="hidden"
        animate="enter"
        variants={variants}
        transition={{ duration: 0.9, type: "linear" }}
        className={`text-white grid items-center h-full`}
      >
        <div className="grid grid-cols-3 fixed top-0 left-0 h-full w-full place-items-center -z-50">
          {Array(9)
            .fill()
            .map((_, i) => (
              <Star key={i} />
            ))}
        </div>
        {children}
      </motion.main>
      <motion.div
        key={pathname}
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
    </AnimatePresence>
  );
}
