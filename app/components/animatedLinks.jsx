"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

const links = [
  {
    title: "Acerca de mí",
    href: "/about",
    className: "from-blue-600 to-blue-950",
    exitDirection: { x: -1000, y: 0 },
    side: "rotate-180",
  },
  {
    title: "Proyectos",
    href: "/projects",
    className: "from-green-600 to-green-950",
    exitDirection: { x: 0, y: 1000 },
    side: "rotate-90",
  },
  {
    title: "Contacto",
    href: "/contact",
    className: "from-red-600 to-red-950",
    exitDirection: { x: 1000, y: 0 },
    side: "rotate-0",
  },
];

const AnimatedLinks = () => {
  const { push } = useRouter();
  const [clickedIndex, setClickedIndex] = useState(null);

  return (
    <>
      {links.map((link, i) => (
        <motion.div
          key={i}
          className={`${link.className} text-gray-200 rounded-xl font-semibold bg-gradient-to-b text-sm lg:text-base shadow-black shadow
          flex items-center justify-center gap-2 hover:shadow-white`}
          whileHover={{ scale: 1.05 }}
          animate={clickedIndex === i ? link.exitDirection : {}}
          transition={{ type: "spring" }}
          onClick={() => {
            setClickedIndex(i);
            setTimeout(() => push(link.href), 200);
          }}
        >
          <p className="px-3 py-2 inline-block font-normal">{link.title}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`${link.side} w-5 h-5 mr-1`}
          >
            <path
              fillRule="evenodd"
              d="M4.5 12a.75.75 0 01.75-.75h12.69l-5.22-5.22a.75.75 0 111.06-1.06l6.5 6.5a.75.75 0 010 1.06l-6.5 6.5a.75.75 0 01-1.06-1.06l5.22-5.22H5.25A.75.75 0 014.5 12z"
              clipRule="evenodd"
            />
          </svg>
        </motion.div>
      ))}
    </>
  );
};

export default AnimatedLinks;
