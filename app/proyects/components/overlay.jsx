"use client";
import { motion } from "framer-motion";

export default function Overlay({ controls, overlay, setSelectedId, setItem }) {
  const handleSetItem = (id) => {
    if (overlay.id === id) {
      setItem(overlay);
      setSelectedId(id);
    }
  };

  return (
    <motion.div
      className="absolute top-0 left-0 w-full rounded-3xl px-2 text-center bg-opacity-90 bg-black flex flex-col items-center justify-evenly text-xl"
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <p className="text-xl">{overlay?.title}</p>
      <p className="text-lg">{overlay?.subtitle}</p>
      <motion.button
        className="cursor-pointer self-center py-2 px-3 border-none bg-orange-600 rounded-lg shadow-md"
        whileHover={{ scale: 1.2 }}
        onClick={() => {
          handleSetItem(overlay.id);
        }}
      >
        INFO
      </motion.button>
    </motion.div>
  );
}
