"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ButtonAnimate({ href = "/", text }) {
  return (
    <motion.div
      className="px-2 py-1 cursor-pointer flex items-center justify-center rounded-2xl transition-all duration-500 hover:scale-110"
      initial={{ opacity: 1 }}
      animate={{ opacity: [0.7, 1,]}}
      transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
    >
      <Link className="capitalize" href={href}>
        {text}
      </Link>
    </motion.div>
  );
}
