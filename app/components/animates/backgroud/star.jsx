"use client";

import React from "react";
import { motion } from "framer-motion";

function getRandomNum() {
  const firstLast = Math.round(Math.random() * 50 - 25);
  const medium = Math.round(Math.random() * 50 - 25);
  return [firstLast, medium, firstLast];
}

function getRandomOpacity() {
  const firstLast = (Math.random() * (0.6 - 0.2) + 0.2).toFixed(1);
  const medium = (Math.random() * (0.6 - 0.2) + 0.2).toFixed(1);
  return [firstLast, medium, firstLast];
}

const Star = () => {
  const starVariants = {
    initial: {
      scale: 1,
    },
    animate: {
      scale: [0.7,1 ,1.9, 1, 0.7],
      x: [10,5,10],
      y: [15,10,15],
      opacity: getRandomOpacity(),
      rotate: getRandomNum(),
      transition: {
        duration: Math.round(Math.random() * 4),
        repeat: Infinity,
      },
    },
  };
  return (
    <motion.span
      className="text-orange-500 text-base z-0 pointer-events-none"
      variants={starVariants}
      initial="initial"
      animate="animate"
    >
      ★
    </motion.span>
  );
};

export default Star;
