import Image from "next/image";
import Link from "next/link";
import AnimatedText from "./components/animates/animateText";

const Home = () => {
  return (
    <section className="grid grid-rows-[1fr,280px,1fr] justify-items-center items-center text-white h-screen w-screen overflow-hidden md:grid-cols-2 md:grid-rows-2 md:place-items-center">
      <div className=" text-center my-5">
          <AnimatedText text={"Lucas Palma"} />
        <div className="text-3xl mt-8 mx-5">
          Desarrollador Web Frontend
        </div>
      </div>
      <div className="relative grid justify-items-center gap-3">
        <div className="filter-shadow-orange relative w-60 h-60">
          <Image
            src="/foto.jpg"
            className="rounded-tl-[66%] rounded-tr-[45%] rounded-bl-[40%] rounded-br-[70%]"
            alt="photoProfile"
            fill={true}
          />
        </div>
        <a
          className=" text-2xl inline-block transition-all duration-300 hover:scale-125 text-orange-600"
          href={"/Lucas Palma CV.pdf"}
          target="_blank"
        >
          Descargar CV
        </a>
      </div>
      <div className="grid grid-cols-3 md:col-span-2 justify-around h-16 my-[15%] text-lg text-center">
        <Link href={"/proyects"}>Proyectos</Link>
        <Link href={"/contact"}>Contacto</Link>
        <Link href={"/aboutMe"}>Acerca de Mí</Link>
      </div>
    </section>
  );
};

export default Home;
