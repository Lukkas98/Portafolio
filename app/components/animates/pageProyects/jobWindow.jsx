"use client";

import { motion } from "framer-motion";
import CreateImgAnimate from "../pageAboutMe/createImgAnimation";
import DivSwiper from "./swiper";

export default function JobWindow({ selectedId, handleDeleteItem, item }) {
  const { title, images, text, technologies } = item;

  return (
    <motion.div
      className="p-2 flex flex-col items-center absolute -top-20 w-[85%] h-fit gap-5 bg-slate-700 bg-opacity-90 rounded-3xl z-50 overflow-y-auto"
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
      <div className="lg:hidden w-full">
        <p>MOVIL</p>
        <DivSwiper images={images} slidesPerView={"auto"} />
      </div>
      <div className="hidden lg:inline-block w-full">
        <p>PC</p>
        <DivSwiper images={images} slidesPerView={2} />
      </div>
      <motion.p className="text-lg mt-3 mx-auto w-11/12">{text}</motion.p>
    </motion.div>
  );
}
