"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BackButton({ side = "right" }) {
  const { push } = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  const directionMap = {
    left: { rotate: 180, x: -1000, y: 0 },
    right: { rotate: 0, x: 1000, y: 0 },
    top: { rotate: 270, x: 0, y: -1000 },
  };

  return (
    <motion.div
      className="absolute z-40 right-1 cursor-pointer text-blue-500"
      initial={{ rotate: 90 }}
      animate={isClicked ? { x: directionMap[side].x, y: directionMap[side].y, opacity: 0 } : {}}
      transition={{ type: "spring" }}
      whileHover={{ scale: 1.5, rotate: directionMap[side].rotate, transition: { duration: 0.2 } }}
      title="Volver"
      onClick={() => {
        setIsClicked(true);
        setTimeout(() => push("/"), 500);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 lg:w-8 lg:h-8"
      >
        <path
          fillRule="evenodd"
          d="M4.5 12a.75.75 0 01.75-.75h12.69l-5.22-5.22a.75.75 0 111.06-1.06l6.5 6.5a.75.75 0 010 1.06l-6.5 6.5a.75.75 0 01-1.06-1.06l5.22-5.22H5.25A.75.75 0 014.5 12z"
          clipRule="evenodd"
        />
      </svg>
    </motion.div>
  );
}
