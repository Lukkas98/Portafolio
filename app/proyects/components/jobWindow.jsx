"use client";

import { motion } from "framer-motion";
import DivSwiper from "./swiper";
import AnimationIcons from "./animationIcons";

export default function JobWindow({ selectedId, handleDeleteItem, item }) {
  const { title, images, text, technologies, github } = item;

  return (
    <motion.div
      className="px-2 py-4 flex flex-col items-center absolute -top-20 w-[85%] h-fit gap-5 bg-slate-700 bg-opacity-90 rounded-3xl z-50 overflow-y-auto max-h-[80%] md:max-h-[95%] overscroll-y-contain"
      layoutId={selectedId}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative w-fit text-red-800 text-xl font-bold border-none cursor-pointer"
        whileHover={{ scale: 1.2 }}
        onTap={() => handleDeleteItem()}
      >
        X
      </motion.div>
      <motion.h5 className="text-3xl mt-3">{title}</motion.h5>
      <div className="flex flex-wrap justify-center gap-4 w-[90%] gap-y-6">
        {technologies.map((tech, i) => (
          <AnimationIcons key={i} objSrc={tech} />
        ))}
      </div>
      {/* movil */}
      <div className="lg:hidden w-full">
        <DivSwiper images={images} slidesPerView={"auto"} />
      </div>
      {/* escritorio */}
      <div className="hidden lg:inline-block w-full">
        <DivSwiper images={images} slidesPerView={2} />
      </div>
      <motion.div className="text-lg mt-3 mx-auto w-11/12">{text}</motion.div>
    </motion.div>
  );
}
