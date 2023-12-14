"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function CreateImgAnimate({ imageName, fromProyect = false }) {
  const [isHover, setIsHover] = useState(false);

  const name = imageName;
  const text = name.split("-").join(" ");

  return (
    <motion.div
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      whileHover={{ scale: 1.2 }}
      className={`relative text-center ${
        fromProyect ? "w-8 h-8" : "w-10 h-10"
      }`}
    >
      <Image src={`/icons/${name}.svg`} alt={`${text} logo`} fill={true} />
      <AnimatePresence>
        {isHover && (
          <motion.span
            initial={{ opacity: 0, y: -30, x: "-50%" }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: -30 }}
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
