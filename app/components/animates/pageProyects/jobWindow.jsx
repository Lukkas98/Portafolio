"use client";

import { motion } from "framer-motion";
import CreateImgAnimate from "../pageAboutMe/createImgAnimation";
import DivSwiper from "./swiper";

export default function JobWindow({ selectedId, handleDeleteItem, item }) {
  const { title, images, text, technologies } = item;

  return (
    <motion.div
      className="p-2 flex flex-col items-center absolute -top-20 w-[85%] h-full gap-5 bg-slate-700 bg-opacity-90 text-center rounded-3xl z-50 overflow-y-auto"
      layoutId={selectedId}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        className="absolute left-1 top-2 py-1 px-2 font-bold text-xl border-none bg-red-600 rounded-[40px] cursor-context-menu"
        whileHover={{ scale: 1.2 }}
        onTap={() => handleDeleteItem()}
      >
        X
      </motion.button>
      <motion.h5 className="text-3xl mt-3">{title}</motion.h5>
      <div className="flex flex-wrap justify-center gap-4 w-[90%] gap-y-6">
        {technologies.map((tech, i) => (
          <CreateImgAnimate key={i} imageName={tech} fromProyect={true} />
        ))}
      </div>
      <DivSwiper images={images} />
      <motion.p className="text-lg mt-3">{text}</motion.p>
    </motion.div>
  );
}
