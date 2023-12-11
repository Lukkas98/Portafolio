"use client";

import { motion } from "framer-motion";

const letterVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: [-2, 2],
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const AnimatedText = ({ text }) => {
  return (
<motion.div
      className="flex tracking-wide"
      initial="initial"
      animate="animate"
      variants={{ animate: { transition: { staggerChildren: 0.2 } } }}
    >
      {text.split("").map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
