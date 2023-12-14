"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ImageSocialMedia({ images }) {
  const [actualKey, setActualKey] = useState(null);

  return (
    <div className="flex w-[80%] mx-auto my-5">
      {images.map((image, i) => {
        const { src, href, text } = image;

        return (
          <div
            key={i}
            className="relative flex w-full h-8 transition-all duration-300 hover:scale-[1.4]"
          >
            <motion.div
              onMouseEnter={() => setActualKey(i)}
              onMouseLeave={() => setActualKey(null)}
            >
              <motion.a
                className="h-6 w-6"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <Image src={src} alt="contact" fill={true} />
              </motion.a>
            </motion.div>

            <AnimatePresence>
              {actualKey === i && (
                <motion.span
                  className="hidden lg:block pointer-events-none text-xs absolute whitespace-nowrap top-0 left-16"
                  initial={{ opacity: 0, x: -200, y: "50%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                >
                  {text}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
