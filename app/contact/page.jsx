import Link from "next/link";
import Form from "./components/form";
import ImageSocialMedia from "./components/imagesSocialMedia";
import PageTransition from "@/components/pageTransition";
import AnimatedText from "@/components/animateText";
import { github, linkedin, whatsapp } from "@lukkas98/icons";

const images = [
  {
    src: github,
    href: "https://github.com/Lukkas98",
    text: "Visita mi github",
  },
  {
    src: linkedin,
    href: "https://www.linkedin.com/in/lucaspalma98/",
    text: "Visita mi linkedin",
  },
  {
    src: whatsapp,
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
