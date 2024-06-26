"use client";

import { motion } from "framer-motion";
import CreateImgAnimate from "../pageAboutMe/createImgAnimation";
import DivSwiper from "./swiper";

export default function JobWindow({ selectedId, handleDeleteItem, item }) {
  const { title, images, text, technologies, github } = item;

  return (
    <motion.div
      className="px-2 py-4 flex flex-col items-center absolute -top-20 w-[85%] h-fit gap-5 bg-slate-700 bg-opacity-90 rounded-3xl z-50 overflow-y-auto max-h-[80%] md:max-h-[95%] overscroll-y-contain"
      layoutId={selectedId}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        className="sticky top-1 left-0 py-1 px-2 font-bold text-xl border-none bg-red-600 rounded-full self-start w-fit h-fit"
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
