"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "@/components/animateText";
import { react, nextjs, tailwind, javascript } from "@lukkas98/icons";
import AnimatedLinks from "./components/animatedLinks";

const Home = () => {
  return (
    <motion.div
      className="relative min-h-screen max-w-[100vw] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="relative z-10 max-w-4xl mx-auto p-4 flex flex-col lg:flex-row items-center lg:items-start gap-8"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="w-[70%] relative lg:w-1/3 aspect-square max-w-sm rounded-full flex justify-center mb-5"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/foto.jpg"
            alt="Lucas - Desarrollador web"
            fill={true}
            sizes="(max-width: 640px) 70vw, (max-width: 1024px) 33vw, 300px"
            className="rounded-full object-cover shadow-2xl shadow-black"
            quality={90}
          />
          <motion.a
            className="mt-4 w-fit mx-auto absolute -bottom-8 md:-bottom-9 lg:-bottom-12 from-gray-600 to-gray-800 bg-gradient-to-b 
            rounded-xl shadow-md text-sm lg:text-base px-2 py-1 font-semibold"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px 2px rgba(255, 255, 255, 0.8)",
            }}
            target="_blank"
            rel="noopener noreferrer"
            href="/Lucas Palma CV.pdf"
          >
            Descargar CV
          </motion.a>
        </motion.div>

        <motion.div
          className="lg:w-2/3"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-4xl lg:text-5xl lg:relative -top-5 font-bold text-center text-orange-400">
            Hola, soy Lucas
          </h1>
          <AnimatedText text={"Web Developer"} className="text-4xl font-semibold my-2" />
          <div className="w-fit mx-2">
            <p className="text-base mb-2 to-transparent from-40% from-blue-950 px-3 py-2 rounded-2xl bg-gradient-to-l text-gray-200 shadow shadow-black">
              Soy un desarrollador web autodidacta con mucho entusiasmo por aprender. Aunque estoy
              empezando, ya he construido varios proyectos personales, incluido un pequeño
              e-commerce funcional.
            </p>
            <div className="flex gap-2 items-center justify-around my-3">
              {[
                { img: javascript, text: "JavaScript" },
                { img: react, text: "React" },
                { img: nextjs, text: "Next.js" },
                { img: tailwind, text: "TailwindCSS" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col md:flex-row items-center gap-2 rounded-md px-2 py-1 text-gray-200 shadow-black shadow hover:shadow-white cursor-default"
                  animate={{ scale: [0.8, 1, 0.8] }}
                  transition={{ repeat: Infinity, duration: 3, delay: Math.random() * 1 }}
                >
                  <Image src={item.img} width={30} height={30} alt={item.text} />
                  <p className="text-xs md:text-sm">{item.text}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-base mb-6 to-transparent from-green-950 px-3 py-2 rounded-2xl bg-gradient-to-r text-gray-200 shadow shadow-black">
              Me encanta trabajar con tecnologías como Next.js y React. Me enfoco en mejorar mis
              habilidades, y siempre estoy buscando nuevos desafíos para seguir aprendiendo.
            </p>
          </div>
          <div className="flex gap-4 md:justify-around w-fit mx-auto my-4">
            <AnimatedLinks />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
