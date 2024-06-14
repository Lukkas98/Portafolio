/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
export default [
  {
    id: 1,
    title: "Videogames",
    subtitle: "Aplicación hecha con RAW una API de videojuegos",
    coverImage: "/images/PI/1.png",
    github: "https://github.com/Lukkas98/Videogames-PI",
    images: ["/images/PI/1.png", "/images/PI/2.png", "/images/PI/3.png"],
    technologies: [
      "html",
      "css",
      "javascript",
      "react",
      "redux",
      "node-js",
      "express-js",
      "postgresql",
    ],
    text: (
      <p>
        En un lapso de dos semanas, desarrollé esta aplicación, que fue el
        primer proyecto de Henry. Esta aplicación consume una API externa.
        Incorpora ordenamientos combinados, paginado dinámico y la capacidad de
        buscar cualquier videojuego. Utiliza una base de datos interna que
        permite la creación de nuevos juegos a través de un formulario
        específico.
      </p>
    ),
  },
  {
    id: 2,
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
    technologies: [
      "html",
      "css",
      "javascript",
      "react",
      "redux",
      "node-js",
      "express-js",
      "postgresql",
      "tailwindcss",
    ],
    text: (
      <>
        <p>
          Bienvenido al proyecto final de Henry, donde yo más un equipo de cinco
          personas nos unimos para desarrollar una red social completamente en
          español. Hemos optimizado la experiencia de usuario para facilitar la
          creación de publicaciones y el intercambio de código e ideas. también,
          tendrás la capacidad de marcar publicaciones como favoritas. Para una
          experiencia más avanzada, ofrecemos una membresía premium que incluye
          un logo exclusivo y la funcionalidad de subir videos.{" "}
          <i>Estas son las implementaciones que posee la aplicación:</i>
        </p>
        <br />
        <p>
          Autenticación de terceros, Pasarela de pagos, Filtros combinados,
          Subida de archivos (utilizando Firebase), Uso de local storage,
          Sistema de puntuación, Panel de administración, Notificaciones por
          email, Borrado lógico.
        </p>
      </>
    ),
  },
  {
    id: 3,
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
    technologies: [
      "html",
      "css",
      "javascript",
      "react",
      "redux",
      "node-js",
      "express-js",
      "postgresql",
    ],
    text: (
      <p>
        Esta aplicación fue realizada durante el curso de Henry, puedes buscar y
        guardar como favoritos a los personajes de la serie Rick and Morty.
        posee filtros combinados y un login
      </p>
    ),
  },
  {
    id: 4,
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
    technologies: ["html", "css", "javascript"],
    text: (
      <p>
        Juego hecho con HTML, css y javascript puro, me enfrente a varios
        problemas al desarrollarlo, el juego tiene un cronometro y un contador
        de puntos conforme vayan pasando niveles se agregan nuevas cartas
      </p>
    ),
  },
  {
    id: 5,
    title: "Color Game",
    subtitle: "Juego simple hecho en HTML5",
    coverImage: "/images/ColorGame/1.png",
    github: "https://github.com/Lukkas98/Color-Game",
    images: [
      "/images/ColorGame/1.png",
      "/images/ColorGame/2.png",
      "/images/ColorGame/3.png",
      "/images/ColorGame/4.png",
    ],
    technologies: ["html", "css", "javascript"],
    text: (
      <p>
        Juego hecho con HTML, css y javascript puro, consiste en un gameplay
        sencillo donde se presenta un color en RGB y el usuario debe seleccionar
        el correcto. hay 2 dificultades, fácil con 3 colores y difícil con 6
      </p>
    ),
  },
];
