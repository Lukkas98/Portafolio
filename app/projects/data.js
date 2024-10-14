import {
  html,
  css,
  javascript,
  node,
  postgresql,
  express,
  tailwind,
  react,
  redux,
  nextjs,
  mongoose,
  mongodb,
} from "@lukkas98/icons";

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
export default [
  {
    id: 1,
    title: "Ecomerce - Clinic-Cell",
    subtitle: "Un pequeño e-commerce hecho con Next.js",
    coverImage: "/images/Ecomerce/1.png",
    github: "https://github.com/Lukkas98/ecomerce-clinicell",
    images: [
      "/images/Ecomerce/1.png",
      "/images/Ecomerce/2.png",
      "/images/Ecomerce/3.png",
      "/images/Ecomerce/4.png",
    ],
    technologies: [html, css, javascript, react, nextjs, tailwind, mongodb, mongoose],
    link: "https://ecomerce-clinicell.vercel.app/",
    text: (
      <div className="bg-slate-800 p-6 rounded-lg shadow-lg text-white">
        <h2 className="text-xl font-bold mb-4">E-commerce con Next.js, Mongoose y Firebase</h2>
        <p className="leading-relaxed mb-4">
          Esta aplicación permite a los usuarios realizar compras y pagos. Además, cuenta con
          funciones de búsqueda y filtros para los productos. Aunque no incluye una pasarela de
          pagos, los pagos se gestionan vía <strong>WhatsApp</strong>.
        </p>
        <p className="leading-relaxed mb-4">
          La aplicación está optimizada con un <strong>diseño responsive</strong>, asegurando una
          experiencia fluida tanto en dispositivos móviles como en escritorio.
        </p>
        <p className="font-semibold mb-2">Implementaciones principales:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Autenticación de administrador</li>
          <li>Filtros combinados</li>
          <li>Subida de archivos (utilizando Firebase)</li>
          <li>Panel de administración</li>
          <li>Diseño responsive</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    title: "Videogames",
    subtitle: "Aplicación hecha con RAW una API de videojuegos",
    coverImage: "/images/PI/1.png",
    github: "https://github.com/Lukkas98/Videogames-PI",
    images: ["/images/PI/1.png", "/images/PI/2.png", "/images/PI/3.png"],
    technologies: [html, css, javascript, react, redux, node, express, postgresql],
    link: "https://videogames-pi-rouge.vercel.app/",
    text: (
      <div className="bg-slate-800 p-6 rounded-lg shadow-lg text-white">
        <h2 className="text-xl font-bold mb-4">Proyecto de Henry</h2>
        <p className="leading-relaxed mb-4">
          En un lapso de dos semanas, desarrollé esta aplicación como parte de mi primer proyecto en
          Henry. La aplicación consume una API externa y cuenta con funcionalidades de ordenamientos
          combinados, paginado dinámico y un sistema de búsqueda de videojuegos.
        </p>
        <p className="leading-relaxed mb-4">
          Además, integra una base de datos interna que permite la creación de nuevos juegos
          mediante un formulario especializado.
        </p>
        <p className="leading-relaxed italic text-sm">
          Actualmente el deploy no funciona, estoy realizando un clon con next para solucionarlo.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Programa Red",
    subtitle: "Red social simplificada y en español para programadores",
    coverImage: "/images/ProgramaRed/1.png",
    github: "https://github.com/Lukkas98/Front-ProgramaRed",
    images: [
      "/images/ProgramaRed/1.png",
      "/images/ProgramaRed/2.png",
      "/images/ProgramaRed/3.png",
      "/images/ProgramaRed/4.png",
    ],
    technologies: [html, css, javascript, react, redux, node, express, postgresql, tailwind],
    link: "https://front-programa-red.vercel.app/",
    text: (
      <div className="bg-slate-800 p-6 rounded-lg shadow-lg text-white">
        <h2 className="text-xl font-bold mb-4">Proyecto Final de Henry</h2>
        <p className="leading-relaxed mb-4">
          Bienvenido al proyecto final de Henry, donde junto con un equipo de cinco personas,
          desarrollamos una red social completamente en español. Hemos optimizado la experiencia de
          usuario para facilitar la creación de publicaciones y el intercambio de código e ideas.
        </p>
        <p className="leading-relaxed mb-4">
          Además, podrás marcar publicaciones como favoritas. Para una experiencia más avanzada,
          ofrecemos una membresía premium que incluye un logo exclusivo y la capacidad de subir
          videos.
        </p>
        <p className="italic mb-4">Estas son las implementaciones que posee la aplicación:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>Autenticación de terceros</li>
          <li>Pasarela de pagos</li>
          <li>Filtros combinados</li>
          <li>Subida de archivos (utilizando Firebase)</li>
          <li>Uso de local storage</li>
          <li>Sistema de puntuación</li>
          <li>Panel de administración</li>
          <li>Notificaciones por email</li>
          <li>Borrado lógico</li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    title: "Rick and Morty",
    subtitle: "Aplicación realizada con la api de Rick and Morty",
    coverImage: "/images/RickAndMorty/1.png",
    github: "https://github.com/Lukkas98/rick_and_morty",
    images: [
      "/images/RickAndMorty/1.png",
      "/images/RickAndMorty/2.png",
      "/images/RickAndMorty/3.png",
      "/images/RickAndMorty/4.png",
    ],
    technologies: [html, css, javascript, react, redux, node, express, postgresql],
    link: "",
    text: (
      <div className="bg-slate-800 p-6 rounded-lg shadow-lg text-white">
        <h2 className="text-xl font-bold mb-4">Aplicación de Rick and Morty</h2>
        <p className="leading-relaxed mb-4">
          Esta aplicación fue desarrollada durante el curso de Henry, y te permite buscar y guardar
          como favoritos a los personajes de la serie <strong>Rick and Morty</strong>.
        </p>
        <p className="leading-relaxed">
          La aplicación cuenta con filtros combinados y un sistema de login falso para simular
          autenticación de usuario.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "Memory Game",
    subtitle: "Juego de memoria en HTML5",
    coverImage: "/images/MemoryGame/1.png",
    github: "https://github.com/Lukkas98/Memory-Game",
    images: [
      "/images/MemoryGame/1.png",
      "/images/MemoryGame/2.png",
      "/images/MemoryGame/3.png",
      "/images/MemoryGame/4.png",
    ],
    technologies: [html, css, javascript],
    link: "https://memorygame-lukkas.netlify.app/",
    text: (
      <div className="bg-slate-800 p-6 rounded-lg shadow-lg text-white">
        <h2 className="text-xl font-bold mb-4">Memory Game</h2>
        <p className="leading-relaxed mb-4">
          Este juego fue desarrollado utilizando <strong>HTML</strong>, <strong>CSS</strong> y{" "}
          <strong>JavaScript vanilla</strong>. Durante su desarrollo, me enfrenté a varios desafíos,
          pero logré dejarlo funcional y completo.
        </p>
        <p className="leading-relaxed">
          Conforme avanzas de nivel, se agregan nuevas cartas, lo que aumenta la dificultad y hace
          el juego más emocionante.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "Color Game",
    subtitle: "Juego simple hecho en HTML5",
    coverImage: "/images/ColorGame/1.png",
    github: "https://github.com/Lukkas98/Color-Game",
    images: ["/images/ColorGame/1.png", "/images/ColorGame/2.png", "/images/ColorGame/3.png"],
    technologies: [html, css, javascript],
    link: "https://color-game-bylukkas.netlify.app/",
    text: (
      <div className="bg-slate-800 p-6 rounded-lg shadow-lg text-white">
        <h2 className="text-xl font-bold mb-4">Color Game en HTML, CSS y JavaScript</h2>
        <p className="leading-relaxed mb-4">
          Este juego fue desarrollado utilizando <strong>HTML</strong>, <strong>CSS</strong> y{" "}
          <strong>JavaScript puro</strong>.
        </p>
        <p className="leading-relaxed mb-4">
          El gameplay es sencillo: se muestra un color en formato <strong>RGB</strong>, y el usuario
          debe seleccionar el color correcto entre las opciones.
        </p>
        <p className="leading-relaxed">
          El juego tiene dos niveles de dificultad: <strong>fácil</strong> con 3 colores y{" "}
          <strong>difícil</strong> con 6 colores.
        </p>
      </div>
    ),
  },
];
