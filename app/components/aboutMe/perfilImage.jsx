import { linkedin, github, pcIcon } from '@lukkas98/icons';
import Image from 'next/image';

const contact = [
  {
    name: 'linkedin',
    src: linkedin,
    link: 'https://www.linkedin.com/in/lucaspalma98/',
  },
  { name: 'github', src: github, link: 'https://github.com/Lukkas98' },
];

export default function PerfilImage() {
  return (
    <>
      <div className="relative grid grid-cols-2 place-items-center md:flex md:justify-center">
        <div className="grid grid-cols-2 gap-4 md:hidden">
          <Image
            className="col-span-2 relative -top-6"
            src={pcIcon}
            width={90}
            height={90}
            alt="tegnology"
          />
          {contact.map((social, i) => (
            <ImageContact social={social} key={i} />
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
      <div className="col-[1/2] md:flex relative hidden h-[60%] md:gap-10">
        {contact.map((social, i) => (
          <ImageContact social={social} i={i} notFlex={true} key={i} />
        ))}
      </div>
    </>
  );
}

function ImageContact({ social, i, notFlex = false }) {
  return (
    <a
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${
        i === 1 && notFlex ? 'self-end' : ''
      } relative h-10 w-10 hover:scale-125 hover:rotate-[20deg] transition-all duration-300 ${
        social.name === 'github' ? 'bg-white rounded-[25px]' : ''
      }`}
    >
      <Image src={social.src} fill={true} alt="contact" title={social.name} />
    </a>
  );
}
