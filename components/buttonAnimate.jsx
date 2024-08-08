"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ButtonAnimate({ href = "/", text }) {
  return (
    <motion.div
      className="px-2 py-1 cursor-pointer flex items-center justify-center rounded-2xl"
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.2, color: "#c2410c"}}
    >
      <Link className="capitalize" href={href}>
        {text}
      </Link>
    </motion.div>
  );
}
