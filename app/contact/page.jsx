import Link from "next/link";
import Form from "../components/contactForm/form";
import ImageSocialMedia from "../components/contactForm/imagesSocialMedia";
import AnimatedText from "../components/animates/animateText";
import PageTransition from "../components/animates/pageTransition";

const images = [
  {
    src: "/icons/github.svg",
    href: "https://github.com/Lukkas98",
    text: "Visita mi github",
  },
  {
    src: "/icons/linkedin.svg",
    href: "https://www.linkedin.com/in/lucaspalma98/",
    text: "Visita mi linkedin",
  },
  {
    src: "/icons/whatsapp.svg",
    href: "https://wa.me/549111531297950",
    text: "Por si no te gustan los Emails",
  },
];

export default function Contact() {
  return (
    <section className="my-5">
      <div className="grid justify-items-center m-4 gap-3">
        <AnimatedText text={"Contacto"} />
        <Link href={"/"}>Volver</Link>
      </div>
      <div className="grid">
        <ImageSocialMedia images={images} />
        <Form />
      </div>
      <PageTransition />
    </section>
  );
}
