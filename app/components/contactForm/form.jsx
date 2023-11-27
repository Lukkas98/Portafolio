"use client";
import { motion, AnimatePresence } from "framer-motion";
import InputForm from "./inputForm";
import { useEffect, useState } from "react";
import validate from "./validate";

const Form = () => {
  const [inputs, setInputs] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [id, setId] = useState(null);
  const [formComplete, setFormComplete] = useState(false);
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setResponse("");

      const { name, email, message } = inputs;
      const response = await sendEmail(name, email, message);
      setInputs({ name: "", email: "", message: "" });
      setId(null);
      setResponse(response);
      setTimeout(() => setResponse(""), 3000);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setResponse(
        "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde."
      );
      setTimeout(() => setResponse(""), 3000);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setId(id);
    setInputs({ ...inputs, [id]: value });
  };

  useEffect(() => {
    setErrors((prevErrors) => ({ ...prevErrors, ...validate(id, inputs) }));
  }, [id, inputs]);

  useEffect(() => {
    let isValid = true;
    if (errors.name || !inputs.name) isValid = false;

    if (errors.email || !inputs.email) isValid = false;

    if (errors.message || !inputs.message) isValid = false;
    setFormComplete(isValid);
  }, [errors, inputs]);

  return (
    <form className="relative my-4 mx-auto w-[80%] max-w-[550px] rounded-xl flex flex-col gap-7 border border-orange-600 py-10 px-5">
      <InputForm
        input={inputs.name}
        error={errors.name}
        id={"name"}
        handleChange={handleChange}
      />
      <InputForm
        input={inputs.email}
        error={errors.email}
        id={"email"}
        handleChange={handleChange}
      />
      <InputForm
        input={inputs.message}
        error={errors.message}
        handleChange={handleChange}
        textarea={true}
      />

      <motion.div
        className="cursor-pointer self-center py-2 px-3 border-none rounded-lg shadow-md"
        onClick={formComplete ? handleSubmit : null}
        animate={{
          cursor: formComplete ? "pointer" : "not-allowed",
          backgroundColor: formComplete ? "#0811c7" : "#383838",
          opacity: formComplete ? 1 : 0.7,
        }}
        whileHover={
          formComplete ? { scale: 1.2, backgroundColor: "#0811c7" } : {}
        }
        whileTap={{ scale: 0.9 }}
      >
        enviar
      </motion.div>
      <AnimatePresence>
        {response && (
          <motion.div
            initial={{ y: "-400%", x: "-50%", opacity: 0, scale: 0 }}
            animate={{ y: -200, x: "-50%", opacity: 1, scale: 1 }}
            exit={{ y: "-400%", x: "-50%", opacity: 0, scale: 0 }}
            className="absolute top-64 left-1/2 bg-orange-200 py-2 px-5 rounded-lg text-red-700 font-bold shadow-md text-center"
          >
            {response}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};

export default Form;
