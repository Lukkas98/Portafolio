"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import OverlayDiv from "./components/overlayDiv";
import JobWindow from "./components/jobWindow";
import data from "./data";
import Link from "next/link";
import Image from "next/image";
import PageTransition from "@/components/pageTransition";
import AnimatedText from "@/components/animateText";
import { github } from "@lukkas98/icons";

export default function Proyects() {
  const [selectedId, setSelectedId] = useState(null);
  const [item, setItem] = useState({});

  const overlaysData = data;

  const handleDeleteItem = () => {
    setSelectedId(null);
    setItem(null);
  };

  return (
    <section className="mx-2 relative min-h-screen my-5">
      <div className="flex flex-col items-center mt-5">
        <AnimatedText text={"Proyectos"} />
        <Link className="mt-4" href={"/"}>
          Volver
        </Link>
      </div>
      {selectedId && (
        <div
          className="fixed top-0 left-0 w-screen h-full bg-opacity-10 bg-black z-20"
          onClick={() => handleDeleteItem()}
        />
      )}
      <div className="relative flex flex-wrap justify-evenly items-start gap-10 text-xl mt-12 lg:h-[550px]">
        {overlaysData.map((overlay) => (
          <motion.div
            key={overlay.id}
            layoutId={overlay.id}
            className="flex flex-col items-center gap-5"
          >
            <div className="flex w-full justify-around items-center">
              <p className="text-lg">{overlay.title}</p>
              <motion.a
                className="text-base bg-slate-300 rounded-md relative w-8 h-8"
                href={overlay.github}
                target="_blank"
                rel="noopener noreferrer"
                title="Repositorio"
                whileHover={{ scale: 1.1 }}
              >
                <Image src={github} alt="logo Github" className="mr-5" fill={true} sizes="32px" />
              </motion.a>
            </div>
            <OverlayDiv setSelectedId={setSelectedId} setItem={setItem} overlay={overlay} />
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedId && (
            <JobWindow selectedId={selectedId} handleDeleteItem={handleDeleteItem} item={item} />
          )}
        </AnimatePresence>
      </div>
      <PageTransition />
    </section>
  );
}
