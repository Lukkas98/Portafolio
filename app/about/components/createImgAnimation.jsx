"use client";

import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

//   objSrc = "/_next/static/media/example.123abc.svg",
export default function CreateImgAnimate({ objSrc }) {
  const [isHover, setIsHover] = useState(false);
  const controls = useAnimation();

  const text =
    typeof objSrc !== "string"
      ? objSrc.src.split("/")[4].split(".")[0] // example.123abc.svg //example
      : objSrc.split("/")[1].split(".")[0]; // icons/exaple.svg // example

  useEffect(() => {
    if (isHover) {
      controls.stop;
      controls.start({ scale: 1.2, msTransitionDuration: 400 });
    } else {
      controls.start({
        scale: [0.8, 1.1, 0.8],
        transition: { duration: 2, repeat: "infinity", delay: Math.random() * 2 },
      });
    }
  }, [isHover, controls]);

  return (
    <motion.div
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      animate={controls}
      className="text-center"
    >
      <div className={`relative w-8 h-8`}>
        <Image src={objSrc} alt={`${text} logo`} fill={true} sizes="40px" />
      </div>
      <AnimatePresence>
        {isHover && (
          <motion.span
            initial={{ opacity: 0, y: -50, x: "-50%" }}
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
