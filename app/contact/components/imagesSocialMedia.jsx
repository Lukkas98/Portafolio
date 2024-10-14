"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { github, linkedin, whatsapp } from "@lukkas98/icons";

const images = [
  {
    src: github,
    href: "https://github.com/Lukkas98",
    text: "Github",
    message: "Visita mi github",
  },
  {
    src: linkedin,
    href: "https://www.linkedin.com/in/lucaspalma98/",
    text: "Linkedin",
    message: "Visita mi linkedin",
  },
  {
    src: whatsapp,
    href: "https://wa.me/549111531297950",
    text: "Whatsapp",
    message: "Por si no te gustan los Emails",
  },
];

export default function ImageSocialMedia() {
  const [actualKey, setActualKey] = useState(null);

  return (
    <div className="flex w-[80%] mx-auto my-5">
      {images.map((image, i) => {
        const { src, text, message, href } = image;

        return (
          <div key={i} className="relative flex flex-col items-center w-full h-8">
            <motion.a
              key={i}
              className="flex flex-col md:flex-row items-center gap-2 rounded-md px-2 py-1
              text-gray-200 shadow-black shadow hover:shadow-white cursor-pointer
              bg-gradient-to-t from-green-900 to-stone-800 hover:bg-gradient-to-b transition-all duration-300"
              animate={{ scale: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
              onMouseEnter={() => setActualKey(i)}
              onMouseLeave={() => setActualKey(null)}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={src} width={30} height={30} alt={text} />
              <p className="text-xs md:text-sm">{text}</p>
            </motion.a>

            <AnimatePresence>
              {actualKey === i && (
                <motion.span
                  className="block pointer-events-none w-full text-xs relative text-center -top-5"
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: -50 }}
                  exit={{ opacity: 0, y: 0 }}
                >
                  {message}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
