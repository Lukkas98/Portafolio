import Image from "next/image";
import CreateImgAnimate from "../components/animates/pageAboutMe/createImgAnimation";
import Link from "next/link";

const imagesForStack = [
  "html",
  "css",
  "react",
  "redux",
  "javascript",
  "node-js",
  "express-js",
  "git",
  "mysql",
  "postgresql",
  "bootstrap",
  "npm",
  "react-router",
  "tailwindcss",
  "trello",
  "webpack",
];
const imagesForLearning = ["nextjs", "framer-motion", "typescript"];

const AboutMe = () => {
  return (
    <section className="grid justify-items-center items-center w-full gap-5">
      <div className="relative w-[80%] mx-auto mt-5 flex flex-row-reverse items-center">
        <h2 className="text-4xl h-fit w-fit bg-orange-600 rounded-3xl py-2 px-5 my-0 mx-auto hover:scale-110 hover:bg-[#272727] hover:text-[#18dcff] transition-all duration-300">
          Sobre mí
        </h2>
        <Link href={"/"}>Volver</Link>
      </div>
      <div className="outline-2 outline outline-orange-600 bg-slate-700 shadow-md my-0 mx-auto rounded-[50px] py-5 px-12 transition-all duration-500 w-[95%] max-w-[800px]">
        <p className="mb-4">
          Hola, me llamo Lucas, tengo 25 años, vivo en Buenos Aires, Argentina.
        </p>
        <p className="mb-4">
          Desde pequeño siempre estuve interesado en todo este mundo de la
          programación y la tecnología.
        </p>
        <p className="mb-4">
          Me encantan los videojuegos y el desarrollo web, actualmente estoy en
          busca de mi primer empleo en la industria IT, ansioso de demostrar
          todos los conocimientos que poseo actualmente.
        </p>
        <p>Que tengas un lindo día 😁</p>
      </div>

      <div className="flex">
        <div className="relative w-56 h-56">
          <Image
            src="/foto.jpg"
            alt="perfil"
            fill={true}
            className="rounded-tl-[66%] rounded-tr-[45%] rounded-bl-[40%] rounded-br-[70%] drop-shadow-[4px_2px_3px_rgba(200,100,0)]"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 ml-10">
          <a
            href="https://www.linkedin.com/in/lucaspalma98/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-10 w-10 hover:scale-125 hover:rotate-[20deg] transition-all duration-300"
          >
            <Image
              src="/icons/linkedin.svg"
              fill={true}
              alt="contact"
              title="Linkedin"
            />
          </a>
          <a
            href="https://github.com/Lukkas98"
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-14 w-14 hover:scale-125 hover:rotate-[-20deg] transition-all duration-300"
          >
            <Image
              src="/icons/github.svg"
              fill={true}
              alt="contact"
              title="GitHub"
            />
          </a>
        </div>
      </div>

      <div className="outline-2 outline outline-orange-600 w-[90%] h-fit bg-slate-700 shadow-md my-5 mx-auto rounded-3xl py-5 px-12 text-center transition-all duration-500">
        <div>
          <p>Stack de tecnologías y herramientas</p>
          <div className="flex justify-around gap-7 flex-wrap my-5 mx-0">
            {imagesForStack.map((image, i) => (
              <CreateImgAnimate imageName={image} key={i} />
            ))}
          </div>
        </div>
        <div>
          <p>Aprendiendo</p>
          <div className="flex justify-around gap-5 flex-wrap my-5 mx-0">
            {imagesForLearning.map((image, i) => (
              <CreateImgAnimate imageName={image} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
