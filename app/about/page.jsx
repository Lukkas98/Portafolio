"use client";
import { motion } from "framer-motion";
import CreateImgAnimate from "./components/createImgAnimation";

import {
  html,
  css,
  javascript,
  mongodb,
  node,
  postgresql,
  nextjs,
  express,
  tailwind,
  sequelize,
  react,
  redux,
  mongoose,
  reactRouter,
  zod,
  netlify,
  vercel,
  trello,
  npm,
  pnpm,
  git,
  github,
  linkedin,
  typescript,
} from "@lukkas98/icons";
import AnimatedText from "@/components/animateText";
import Image from "next/image";
import BackButton from "@/components/backButton";

const stack = {
  tegnologies: [html, css, javascript, mongodb, node, postgresql, typescript],
  frameworks: [nextjs, express, tailwind],
  libraries: [sequelize, react, redux, mongoose, reactRouter, zod, "icons/framerMotion.svg"],
  toolsAndServices: [netlify, vercel, trello, npm, pnpm, git, github],
};

const stackForMapping = [
  { title: "Tecnologías", array: stack.tegnologies },
  { title: "Frameworks", array: stack.frameworks },
  { title: "Librerías", array: stack.libraries },
  {
    title: "Herramientas y Servicios",
    array: stack.toolsAndServices,
  },
];

export default function About() {
  return (
    <section className="min-h-screen max-w-375 mx-auto grid lg:grid-cols-2 justify-center items-center place-items-center p-8 gap-12 overflow-hidden">
      <motion.div
        className="w-64 h-64 rounded-full lg:hidden shadow-black shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <Image src="/foto.jpg" alt="Logo" width={256} height={256} className="rounded-full" />
      </motion.div>

      <motion.div
        className="max-w-3xl lg:max-w-lg text-left lg:text-left space-y-4 text-base md:text-lg
        relative lg:top-28"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <motion.div
          className="w-64 h-64 bg-gray-300 rounded-full lg:mr-12 -top-64 right-1/2 transform translate-x-1/2
          absolute hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Image src="/foto.jpg" alt="Logo" width={256} height={256} className="rounded-full" />
        </motion.div>
        <div className="flex items-center">
          <AnimatedText text={"Acerca de Mí"} className={"text-5xl font-semibold mb-5"} />
          <BackButton side={"right"} />
        </div>
        <p>¡Hola! 👋 Soy Lucas, desarrollador Full Stack de Buenos Aires, Argentina 🇦🇷.</p>
        <p>
          Me especializo en el desarrollo de aplicaciones web utilizando tecnologías como{" "}
          <span className="text-blue-500 font-semibold">React</span>,
          <span className="text-blue-500 font-semibold"> Next.js</span>,
          <span className="text-blue-500 font-semibold">Tailwind CSS</span>,
          <span className="text-blue-500 font-semibold">TypeScript</span>,
          <span className="text-blue-500 font-semibold">Node.js</span>, y{" "}
          <span className="text-blue-500 font-semibold">MongoDB</span>.
        </p>
        <p>
          Actualmente desarrollo y mantengo un e-commerce en producción, donde trabajo en nuevas
          funcionalidades, optimización y mantenimiento continuo. También cuento con experiencia
          construyendo aplicaciones full stack, integrando bases de datos, APIs y herramientas
          modernas del ecosistema web.
        </p>
        <p>
          Fuera del desarrollo, me apasionan los videojuegos 🎮 y el aprendizaje constante. Siempre
          estoy buscando mejorar mis habilidades, enfrentar nuevos desafíos y seguir creciendo
          profesionalmente. 🚀
        </p>
      </motion.div>

      {/* Tecnologías y contacto */}
      <div>
        <div className="flex justify-evenly">
          {[
            { title: "LinkedIn", href: "https://www.linkedin.com/in/lucaspalma98/", img: linkedin },
            { title: "GitHub", href: "https://github.com/Lukkas98", img: github },
          ].map((link, i) => (
            <motion.a
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              whileHover={{ scale: 1.1 }}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base px-6 py-3 bg-linear-to-b from-gray-700 to-transparent rounded-2xl transition-colors
              flex items-center gap-3 hover:bg-gray-800 shadow-black shadow hover:shadow-gray-600"
            >
              {link.title}
              <div>
                <Image src={link.img} width={30} height={30} alt={link.title} />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="w-full max-w-5xl mt-12 grid md:grid-cols-2 gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {stackForMapping.map((tech, i) => (
            <div key={i}>
              <h2 className="text-lg font-semibold text-center mb-2">{tech.title}</h2>
              <div
                className="flex justify-center items-center gap-x-6 gap-y-10 p-5 mt-5 flex-wrap
                bg-green-950 bg-opacity-30 rounded-xl"
              >
                {tech.array.map((svg, i) => (
                  <CreateImgAnimate objSrc={svg} key={i} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
