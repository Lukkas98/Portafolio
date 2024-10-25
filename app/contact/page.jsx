"use client";
import Form from "./components/form";
import ImageSocialMedia from "./components/imagesSocialMedia";
import AnimatedText from "@/components/animateText";
import BackButton from "@/components/backButton";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3, type: "just" }}
      className="my-5 max-w-[1300px] mx-auto"
    >
      <div className="grid relative justify-items-center items-center m-5 gap-3">
        <AnimatedText text={"Contacto"} className={"text-5xl font-semibold"} />
        <BackButton side="left" />
      </div>
      <p className="text-base max-w-2xl w-[80%] text-gray-300 mx-auto border-b pb-8 border-green-900">
        Si tienes alguna pregunta o deseas colaborar en algún proyecto no dudes en contactarme.
        Estoy siempre abierto a nuevas oportunidades y desafíos.
      </p>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4, type: "just" }}
        className="grid gap-4 lg:w-[80%] mx-auto"
      >
        <ImageSocialMedia />
        <Form />
      </motion.div>
    </motion.section>
  );
}
