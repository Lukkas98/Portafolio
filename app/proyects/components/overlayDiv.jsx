"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Overlay from "./overlay";

export default function OverlayDiv({ overlay, setSelectedId, setItem }) {
  const [isHoveredId, setIsHoveredId] = useState(null);
  const controls = useAnimation();

  useEffect(() => {
    if (isHoveredId) {
      controls.start({ height: "100%", opacity: 0.8, pointerEvents: "all" });
    } else {
      controls.start({ height: "0%", opacity: 0, pointerEvents: "none" });
    }
  }, [controls, isHoveredId]);

  return (
    <motion.div
      className="relative rounded-3xl shadow-lg h-fit w-full border border-black"
      onMouseEnter={() => setIsHoveredId(overlay.id)}
      onMouseLeave={() => setIsHoveredId(null)}
      whileHover={{ scale: 1.1 }}
    >
      <Image
        className={`rounded-3xl ${isHoveredId === overlay.id ? "blur-sm" : "blur-none"}`}
        src={overlay.coverImage}
        alt="job Image"
        width={300}
        height={200}
      />
      <Overlay
        setSelectedId={setSelectedId}
        setItem={setItem}
        controls={controls}
        overlay={overlay}
      />
    </motion.div>
  );
}
