"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

//   objSrc = "/_next/static/media/example.123abc.svg",
export default function AnimationIcons({ objSrc }) {
  const [isHover, setIsHover] = useState(false);

  const text = objSrc.src.split("/")[4].split(".")[0]; // example.123abc.svg //example

  return (
    <motion.div
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      whileHover={{ scale: 1.2 }}
    >
      <div className={`relative w-8 h-8`}>
        <Image src={objSrc} alt={`${text} logo`} fill={true} sizes="40px" />
      </div>
      <AnimatePresence>
        {isHover && (
          <motion.span
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 5 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[-70%] whitespace-nowrap z-50 text-xs capitalize font-bold text-orange-500 pointer-events-none"
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
