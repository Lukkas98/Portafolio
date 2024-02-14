import Image from "next/image";
import AnimatedText from "./components/animates/animateText";
import ButtonAnimate from "./components/animates/buttonAnimate";

const Home = () => {
  return (
    <section className="grid grid-rows-[1fr,280px,1fr] justify-items-center items-center text-white h-screen w-screen overflow-hidden md:grid-cols-2 md:grid-rows-2 md:place-items-center max-w-5xl mx-auto">
      <div className=" text-center my-5">
          <AnimatedText text={"Lucas Palma"} />
        <div className="text-3xl mt-8 mx-5 lg:text-5xl">
          Desarrollador Web FullStack
        </div>
      </div>
      <div className="relative grid justify-items-center gap-3 lg:top-20">
        <div className="filter-shadow-orange relative w-60 h-60 lg:w-72 lg:h-72">
          <Image
            src="/foto.jpg"
            className="rounded-tl-[66%] rounded-tr-[45%] rounded-bl-[40%] rounded-br-[70%]"
            alt="photoProfile"
            fill={true}
          />
        </div>
        <a
          className=" text-2xl lg:text-3xl lg:mt-5 inline-block transition-all duration-300 hover:scale-125 text-orange-600"
          href={"/Lucas Palma CV.pdf"}
          target="_blank"
        >
          Descargar CV
        </a>
      </div>
      <div className="grid grid-cols-3 md:col-span-2 gap-5 justify-around h-12 my-[15%] text-lg text-center lg:text-2xl">
        <ButtonAnimate href="/proyects" text="Proyectos" />
        <ButtonAnimate href="/contact" text="Contacto" />
        <ButtonAnimate href="/aboutMe" text="Acerca de Mí" />
      </div>
    </section>
  );
};

export default Home;
