"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const getRandomPosition = () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  return { x, y };
};

const getRandomShape = () => {
  const shapes = ["square", "circle"];
  return shapes[Math.floor(Math.random() * shapes.length)];
};

const shapeClass = (shape) => {
  switch (shape) {
    case "circle":
      return "rounded-full w-24 h-24";
    default:
      return "w-24 h-24";
  }
};

const generateShapes = (numShapes) => {
  const shapes = [];
  for (let i = 0; i < numShapes; i++) {
    const { x, y } = getRandomPosition();
    const shape = getRandomShape();
    shapes.push(
      <motion.div
        key={i}
        className={`absolute border-4 border-cyan-900 ${shapeClass(shape)}`}
        style={{
          left: `${x}px`,
          top: `${y}px`,
        }}
        initial={{ opacity: 0, scale: 0.5, rotate: Math.random() * 45 }}
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
      />,
    );
  }
  return shapes;
};

const AnimatedBg = () => {
  const [numShapes, setNumShapes] = useState(10);

  useEffect(() => {
    const updateNumShapes = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const newNumShapes = Math.floor((width * height) / 30000);
      setNumShapes(newNumShapes);
    };

    updateNumShapes();
    window.addEventListener("resize", updateNumShapes);

    return () => {
      window.removeEventListener("resize", updateNumShapes);
    };
  }, []);

  return (
    <div className="fixed top-0 w-full h-screen overflow-hidden bg-gradient-to-t -z-10 from-black via-gray-900 to-black">
      {generateShapes(numShapes)}
    </div>
  );
};

export default AnimatedBg;
