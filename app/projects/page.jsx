"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "./data";
import ImageCarousel from "./components/carousel";
import AnimatedText from "@/components/animateText";
import AnimationIcons from "./components/animationIcons";
import BackButton from "@/components/backButton";

export default function ProjectShowcase() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = data.find((p) => p.id === selectedId);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5 space-y-8">
      <div className="flex flex-col items-center justify-center relative w-full">
        <AnimatedText text={"Mis Proyectos"} className={"text-5xl font-semibold"} />
        <BackButton side="top" />
      </div>

      <div className="grid grid-cols-1 relative sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full max-w-7xl px-4">
        {data.map((project, index) => (
          <motion.div
            key={project.id}
            className="rounded-xl h-[30rem] relative top-0 shadow-md bg-gray-800 
          cursor-pointer hover:z-10 transition-transform duration-500
          hover:shadow-white shadow-black hover:scale-125 bg-opacity-50"
            onClick={() => setSelectedId(project.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-2/3 object-cover rounded-t-xl"
            />
            <motion.div
              className="text-center text-white mt-3 text-lg px-2"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1, y: -5 }}
            >
              {project.title}
            </motion.div>
            <div className="flex flex-wrap mt-5 justify-center gap-x-4 gap-y-6 w-[90%] mx-auto">
              {project.technologies.map((technology, i) => (
                <AnimationIcons key={i} objSrc={technology} className="w-7 h-7" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div
            className="fixed -inset-10 bg-black bg-opacity-80 z-40 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="bg-gray-900 w-[85%] max-w-[1400px] h-auto z-50 max-h-[90vh] p-6 
              rounded-2xl shadow-2xl text-white overflow-y-auto overflow-x-hidden relative flex flex-col"
              initial={{ scale: 0.2 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="sticky top-0 text-2xl cursor-pointer text-red-100 z-[100] self-end
                bg-red-700 hover:bg-red-800 px-2 py-1 rounded transition-all mr-2"
                onClick={() => setSelectedId(null)}
              >
                ✕
              </div>
              <h2 className="text-3xl font-bold mb-5">{selectedProject.title}</h2>
              <ImageCarousel images={selectedProject.images} />
              <div className="mt-6 text-lg">{selectedProject.text}</div>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 text-center mt-5 block bg-gradient-to-b transition-all duration-300
                from-blue-500 to-blue-900 px-3 py-2 rounded-2xl shadow shadow-black
                hover:shadow-white hover:text-gray-300 font-semibold"
              >
                Ver repositorio
              </a>
              {selectedProject.link ? (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`from-green-600 to-green-900    
                text-blue-100 text-center mt-5 block bg-gradient-to-b transition-all duration-300
                  px-3 py-2 rounded-2xl shadow shadow-black
                hover:shadow-white hover:text-gray-300 font-semibold`}
                >
                  Ver proyecto
                </a>
              ) : (
                <div
                  className="text-gray-300 text-center mt-5 block bg-gradient-to-b transition-all duration-300
                  from-slate-400 to-slate-700 px-3 py-2 rounded-2xl shadow shadow-gray-600 
                  font-semibold cursor-not-allowed"
                >
                  No hay vizualización
                </div>
              )}

              <div className="flexflex-col items-center mt-4">
                <h6 className="text-lg font-medium">Tegnologias</h6>
                <div className="flex flex-wrap mt-5 justify-center gap-x-4 gap-y-6 w-[90%] mx-auto">
                  {selectedProject.technologies.map((technology, i) => (
                    <AnimationIcons key={i} objSrc={technology} />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
