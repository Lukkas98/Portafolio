"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const getRandomPosition = () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  return { x, y };
};

const generateSquares = (numSquares) => {
  const squares = [];
  for (let i = 0; i < numSquares; i++) {
    const { x, y } = getRandomPosition();
    squares.push(
      <motion.div
        key={i}
        className="absolute w-24 h-24 border-4 border-cyan-400"
        style={{
          left: `${x}px`,
          top: `${y}px`,
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: [0, Math.random() * 1, 0],
          scale: [0.5, Math.random() * (1 - 2) + 1, 0.5],
        }}
        transition={{
          duration: Math.random() * (5 - 3) + 3,
          delay: Math.random() * 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    );
  }
  return squares;
};

const AnimatedBg = () => {
  const [numSquares, setNumSquares] = useState(10);

  useEffect(() => {
    const updateNumSquares = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const newNumSquares = Math.floor((width * height) / 10000);
      setNumSquares(newNumSquares);
    };

    updateNumSquares();
    window.addEventListener("resize", updateNumSquares);

    return () => {
      window.removeEventListener("resize", updateNumSquares);
    };
  }, []);

  return (
    <div className="fixed top-0 w-full h-screen overflow-hidden bg-zinc-900 -z-10">
      {generateSquares(numSquares)}
    </div>
  );
};

export default AnimatedBg;
