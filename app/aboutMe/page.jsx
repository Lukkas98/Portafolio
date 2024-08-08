import CreateImgAnimate from './components/createImgAnimation';
import Link from 'next/link';
import PerfilImage from './components/perfilImage';
import PageTransition from '@/components/pageTransition';
import AnimatedText from '@/components/animateText';
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
  webpack,
  react,
  redux,
  nodemon,
  bootstrap,
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
  typescript,
} from '@lukkas98/icons';

const stack = {
  tegnologies: [html, css, javascript, mongodb, node, postgresql],
  frameworks: [nextjs, express, tailwind],
  libraries: [
    sequelize,
    webpack,
    react,
    redux,
    nodemon,
    bootstrap,
    mongoose,
    reactRouter,
    zod,
    'icons/framerMotion.svg',
  ],
  toolsAndServices: [netlify, vercel, trello, npm, pnpm, git, github],
};

const imagesForLearning = [typescript];

const stackForMapping = [
  { title: 'Tegnologías', array: stack.tegnologies },
  { title: 'Frameworks', array: stack.frameworks },
  { title: 'Librerías', array: stack.libraries },
  {
    title: 'Herramientas y Servicios',
    array: stack.toolsAndServices,
  },
];

const AboutMe = () => {
  return (
    <section className="grid my-5 justify-items-center items-center w-full gap-5 md:grid-cols-2 max-w-5xl mx-auto">
      <div className="relative mt-5 gap-5 flex flex-col items-center md:col-span-2">
        <AnimatedText text={'Sobre Mí'} />
        <Link href={'/'}>Volver</Link>
      </div>
      <div className="outline-1 outline outline-orange-200 bg-orange-500 hover:bg-orange-700 bg-opacity-70 my-0 mx-auto rounded-[2rem] py-5 px-6 transition-all duration-500 w-[95%] max-w-[800px] md:mt-7 md:relative md:w-[25rem] left-10">
        <p>
          Hola, me llamo Lucas, tengo 26 años, vivo en Buenos Aires, Argentina. Desde pequeño
          siempre estuve interesado en todo este mundo de la programación y la tecnología.
        </p>
        <br />
        <p>
          Este portafolio lo realizé enteramente con Next.js y Framer-Motion para las animaciones 😎
        </p>
      </div>

      <PerfilImage />

      <div className="outline-1 outline outline-orange-200 bg-orange-500 bg-opacity-70 hover:bg-orange-700  my-0 mx-auto rounded-[2rem] py-5 px-6 transition-all duration-500 w-[95%] max-w-[800px] md:relative md:col-[2/3] md:right-20 md:w-[400px]">
        <p>
          Me encantan los <i>videojuegos</i> y el <i>desarrollo web</i>, actualmente estoy en busca
          de mi primer empleo en la industria IT, ansioso de demostrar todos los conocimientos que
          poseo actualmente.
        </p>
        <p>Que tengas un lindo día 😁</p>
      </div>

      <div className="outline-1 outline outline-orange-600 w-[90%] h-fit bg-cyan-800 bg-opacity-80 shadow-md my-5 mx-auto rounded-3xl py-5 px-4 text-center transition-all duration-500 md:col-span-2 md:flex gap-20 md:justify-center md:p-5">
        <div>
          <p className="text-lg">Stack de tecnologías</p>
          <div className="flex justify-around gap-7 flex-wrap my-5 mx-0">
            {stackForMapping.map((tech, i) => (
              <div key={i}>
                <p>{tech.title}</p>
                <div className="flex justify-center items-center gap-x-6 gap-y-10 p-3 mt-5 flex-wrap">
                  {tech.array.map((svg, i) => (
                    <CreateImgAnimate objSrc={svg} key={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*  */}
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
