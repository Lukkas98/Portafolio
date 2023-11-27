import Link from "next/link";
import Form from "../components/contactForm/form";
import ImageSocialMedia from "../components/contactForm/imagesSocialMedia";

const images = [
  {
    src: "/icons/github.svg",
    href: "https://github.com/Lukkas98",
    text: "Visita mi github",
  },{
    src: "/icons/linkedin.svg",
    href: "https://www.linkedin.com/in/lucaspalma98/",
    text: "Visita mi linkedin",
  },{
    src: "/icons/whatsapp.svg",
    href: "https://wa.me/549111531297950",
    text: "Por si no te gustan los Emails",
  },
];

export default function Contact() {
  return (
    <section>
      <div className="grid justify-items-center m-4 gap-3">
        <h2 className="text-4xl h-fit bg-orange-800 rounded-[2.5rem] py-2 px-3 mt-3 mx-5 font-normal shadow-lg">
          Contacto
        </h2>
        <Link href={"/"}>Volver</Link>
      </div>
      <div className="grid">
        <ImageSocialMedia images={images} />
        <Form />
      </div>
    </section>
  );
}
