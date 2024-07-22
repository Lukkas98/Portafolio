import CreateImgAnimate from "../components/animates/pageAboutMe/createImgAnimation";
import Link from "next/link";
import AnimatedText from "../components/animates/animateText";
import PerfilImage, { ImageExtra } from "../components/aboutMe/perfilImage";
import PageTransition from "../components/animates/pageTransition";

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
  "framer-motion",
  "nextjs",
];
const imagesForLearning = ["typescript"];
const socialMedia = [
  { name: "linkedin", link: "https://www.linkedin.com/in/lucaspalma98/" },
  { name: "github", link: "https://github.com/Lukkas98" },
];

const AboutMe = () => {
  return (
    <section className="grid my-5 justify-items-center items-center w-full gap-5 md:grid-cols-2 max-w-5xl mx-auto">
      <div className="relative mt-5 gap-5 flex flex-col items-center md:col-span-2">
        <AnimatedText text={"Sobre Mí"} />
        <Link href={"/"}>Volver</Link>
      </div>
      <div className="outline-1 outline outline-orange-600 bg-transparent my-0 mx-auto rounded-[2rem] py-5 px-6 transition-all duration-500 w-[95%] max-w-[800px] md:mt-7 md:relative md:w-[25rem] left-10">
        <p>
          Hola, me llamo Lucas, tengo 26 años, vivo en Buenos Aires, Argentina.
          Desde pequeño siempre estuve interesado en todo este mundo de la
          programación y la tecnología.
        </p>
        <br />
        <p>
          Este portafolio lo realizé enteramente con Next.js y Framer-Motion
          para las animaciones 😎
        </p>
      </div>

      <PerfilImage socialMedia={socialMedia} />

      <div className="col-[1/2] md:flex relative hidden h-[60%] md:gap-10">
        {socialMedia.map((social, i) => (
          <ImageExtra social={social} i={i} notFlex={true} key={i} />
        ))}
      </div>

      <div className="outline-1 outline outline-orange-600 bg-transparent my-0 mx-auto rounded-[2rem] py-5 px-6 transition-all duration-500 w-[95%] max-w-[800px] md:relative md:col-[2/3] md:right-20 md:w-[400px]">
        <p>
          Me encantan los videojuegos y el desarrollo web, actualmente estoy en
          busca de mi primer empleo en la industria IT, ansioso de demostrar
          todos los conocimientos que poseo actualmente.
        </p>
        <p>Que tengas un lindo día 😁</p>
      </div>

      <div className="outline-1 outline outline-orange-600 w-[90%] h-fit bg-transparent shadow-md my-5 mx-auto rounded-3xl py-5 px-4 text-center transition-all duration-500 md:col-span-2 md:flex gap-20 md:justify-center md:p-5">
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

      {/* <div className="outline-1 outline outline-orange-600 w-[90%] h-fit bg-transparent my-3 mx-auto rounded-3xl py-5 px-4 text-center">
        <h5>Certificados</h5>
        <div className="flex justify-around items-center">
          <div className="h-[60px] w-[100px] bg-slate-400" />
          <h6 className="flex flex-col" >
            Certificado...
            <a href="" target="_blank" rel="noopener noreferrer">
              Abrir
            </a>
          </h6>
        </div>
      </div> */}
      <PageTransition />
    </section>
  );
};

export default AboutMe;
