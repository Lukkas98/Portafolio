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
    <motion.h1
      className="flex tracking-wide text-4xl h-fit w-fit bg-orange-600 rounded-3xl py-2 px-5 my-0 mx-auto"
      initial="initial"
      animate="animate"
      variants={{ animate: { transition: { staggerChildren: 0.2 } } }}
      whileHover={{
        color: "#18dcff",
        textShadow: "1px 1px 1px #000",
        backgroundColor: "#272727",
        scale: 1.1,
      }}
    >
      {text.split("").map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedText;
