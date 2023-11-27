"use client";

import { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import Image from "next/image";
import Overlay from "./overlay";

export default function OverlayDiv({ overlay, setSelectedId, setItem }) {
  const [isHoveredId, setIsHoveredId] = useState(null);
  const controls = useAnimation();

  useEffect(() => {
    if (isHoveredId) {
      controls.start({ height: "100%", opacity: 1, pointerEvents: "all" });
    } else {
      controls.start({ height: "0%", opacity: 0, pointerEvents: "none" });
    }
  }, [isHoveredId]);

  return (
    <div
      className="relative rounded-3xl shadow-lg h-fit w-full"
      onMouseEnter={() => setIsHoveredId(overlay.id)}
      onMouseLeave={() => setIsHoveredId(null)}
    >
      <Image
        className={`rounded-3xl ${
          isHoveredId === overlay.id ? "blur-sm" : "blur-none"
        }`}
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
    </div>
  );
}
