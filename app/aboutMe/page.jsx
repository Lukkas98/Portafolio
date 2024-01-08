import Image from "next/image";
import CreateImgAnimate from "../components/animates/pageAboutMe/createImgAnimation";
import Link from "next/link";
import AnimatedText from "../components/animates/animateText";

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
];
const imagesForLearning = ["nextjs", "typescript"];
const socialMedia = [
  { name: "linkedin", link: "https://www.linkedin.com/in/lucaspalma98/" },
  { name: "github", link: "https://github.com/Lukkas98" },
];

const AboutMe = () => {
  return (
    <section className="grid justify-items-center items-center w-full gap-5">
      <div className="relative mt-5 gap-5 flex flex-col items-center">
        <AnimatedText text={"Sobre Mí"} />
        <Link href={"/"}>Volver</Link>
      </div>
      <div className="outline-1 outline outline-orange-600 bg-transparent my-0 mx-auto rounded-[2rem] py-5 px-6 transition-all duration-500 w-[95%] max-w-[800px]">
        <p>
          Hola, me llamo Lucas, tengo 25 años, vivo en Buenos Aires, Argentina.
          Desde pequeño siempre estuve interesado en todo este mundo de la
          programación y la tecnología.
        </p>
      </div>

      <div className="relative grid grid-cols-2 place-items-center">
        <div className="grid grid-cols-2 gap-4">
          <Image
            className="col-span-2 relative -top-6"
            src="/icons/pcIcon.svg"
            width={90}
            height={90}
            alt="tegnology"
          />
          {socialMedia.map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-10 w-10 hover:scale-125 hover:rotate-[20deg] transition-all duration-300"
            >
              <Image
                src={`/icons/${social.name}.svg`}
                fill={true}
                alt="contact"
                title={social.name}
              />
            </a>
          ))}
        </div>
        <div className="relative w-44 h-44">
          <Image
            src="/foto.jpg"
            alt="perfil"
            fill={true}
            className="rounded-tl-[66%] rounded-tr-[45%] rounded-bl-[40%] rounded-br-[70%] drop-shadow-[4px_2px_3px_rgba(200,100,0)]"
          />
        </div>
      </div>

      <div className="outline-1 outline outline-orange-600 bg-transparent my-0 mx-auto rounded-[2rem] py-5 px-6 transition-all duration-500 w-[95%] max-w-[800px]">
        <p>
          Me encantan los videojuegos y el desarrollo web, actualmente estoy en
          busca de mi primer empleo en la industria IT, ansioso de demostrar
          todos los conocimientos que poseo actualmente.
        </p>
        <p>Que tengas un lindo día 😁</p>
      </div>

      <div className="outline-1 outline outline-orange-600 w-[90%] h-fit bg-transparent shadow-md my-5 mx-auto rounded-3xl py-5 px-4 text-center transition-all duration-500">
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

      <div className="outline-1 outline outline-orange-600 w-[90%] h-fit bg-transparent my-3 mx-auto rounded-3xl py-5 px-4 text-center">
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
      </div>
    </section>
  );
};

export default AboutMe;
