"use client";
import { motion } from "framer-motion";

const letterVariants = {
  initial: {
    y: 0,
    color: "#fb923c",
  },
  animate: {
    opacity: [0.7, 1],
    y: [3, -3],
    color: ["#fb923c", "#fff"],
    transition: {
      duration: 0.4,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const AnimatedText = ({ text, className }) => {
  return (
    <motion.h2
      className={`${className} flex tracking-wide h-fit w-fit mx-auto`}
      initial="initial"
      animate="animate"
      variants={{ animate: { transition: { staggerChildren: 0.2 } } }}
      whileHover={{ scale: 1.1 }}
    >
      {text.split("").map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default AnimatedText;
