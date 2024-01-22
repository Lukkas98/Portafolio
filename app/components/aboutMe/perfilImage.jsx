import Image from "next/image";

export default function PerfilImage({ socialMedia }) {
  return (
    <div className="relative grid grid-cols-2 place-items-center md:flex md:justify-center">
      <div className="grid grid-cols-2 gap-4 md:hidden">
        <Image
          className="col-span-2 relative -top-6"
          src="/icons/pcIcon.svg"
          width={90}
          height={90}
          alt="tegnology"
        />
        {socialMedia.map((social, i) => (
          <ImageExtra social={social} key={i} />
        ))}
      </div>
      <div className="relative w-44 h-44 md:h-64 md:w-64">
        <Image
          src="/foto.jpg"
          alt="perfil"
          fill={true}
          className="rounded-tl-[66%] rounded-tr-[45%] rounded-bl-[40%] rounded-br-[70%] drop-shadow-[4px_2px_3px_rgba(200,100,0)]"
        />
      </div>
    </div>
  );
}

export function ImageExtra({ social, i, notFlex = false }) {

  return (
    <a
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${i === 1 && notFlex ? "self-end" : ""} relative h-10 w-10 hover:scale-125 hover:rotate-[20deg] transition-all duration-300`}
    >
      <Image
        src={`/icons/${social.name}.svg`}
        fill={true}
        alt="contact"
        title={social.name}
      />
    </a>
  );
}
