"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import CreateImgAnimate from "../pageAboutMe/createImgAnimation";

export default function JobWindow({ selectedId, handleDeleteItem, item }) {
  const { title, images, text, technologies } = item;
  return (
    <motion.div
      className="p-2 flex flex-col items-center absolute w-[80%] gap-5 bg-slate-700 bg-opacity-80 text-center rounded-3xl z-50"
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
      <Accordion images={images} />
      <motion.p className="text-lg mt-3">{text}</motion.p>
    </motion.div>
  );
}

const Accordion = ({ images }) => {
  return (
    <div className="mx-auto flex justify-evenly w-[80%] max-w-[800px] h-fit">
      {images.map((image, i) => (
        <div className="w-12 h-12 relative">
          <Image
            className="cursor-pointer"
            src={image}
            alt={`logo de ${image}`}
            fill={true}
            key={i}
          />
        </div>
      ))}
    </div>
  );
};
