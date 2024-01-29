"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import OverlayDiv from "../components/animates/pageProyects/overlayDiv";
import JobWindow from "../components/animates/pageProyects/jobWindow";
import data from "./data";
import Link from "next/link";
import AnimatedText from "../components/animates/animateText";

export default function Proyects() {
  const [selectedId, setSelectedId] = useState(null);
  const [item, setItem] = useState({});

  const overlaysData = data;

  const handleDeleteItem = () => {
    setSelectedId(null);
    setItem(null);
  };

  return (
    <section className="mx-2 relative min-h-screen">
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
      <div className="relative flex flex-wrap justify-evenly items-center gap-10 text-xl mt-12">
        {overlaysData.map((overlay) => (
          <motion.div
            key={overlay.id}
            layoutId={overlay.id}
            className="grid gap-4"
          >
            <div className="flex justify-between items-center">
              <p className="text-lg">{overlay.title}</p>
              <motion.a
                className="text-base"
                href={overlay.github}
                target="_blank"
                rel="noopener noreferrer"
                title="Repositorio"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src="/icons/github.svg"
                  alt="logo Github"
                  className="w-10 mr-5"
                />
              </motion.a>
            </div>
            <OverlayDiv
              setSelectedId={setSelectedId}
              setItem={setItem}
              overlay={overlay}
            />
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedId && (
            <JobWindow
              selectedId={selectedId}
              handleDeleteItem={handleDeleteItem}
              item={item}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
