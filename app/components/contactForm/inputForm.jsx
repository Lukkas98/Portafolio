"use client";

import { AnimatePresence, motion } from "framer-motion";

const InputForm = ({ id, input, error, handleChange, textarea = false }) => {
  return (
    <div className="relative">
      {textarea && (
        <textarea
          onChange={handleChange}
          placeholder="Escriba su mensaje"
          className="w-full py-2 px-4 resize-none bg-transparent border border-orange-600 rounded-md shadow"
          id="message"
          style={error ? { border: "1px solid red" } : {}}
          value={input}
          cols="30"
          rows="10"
          autoComplete="off"
        ></textarea>
      )}
      {!textarea && (
        <input
          onChange={handleChange}
          placeholder={`ingrese su ${id === "name" ? "nombre" : "email"}`}
          className="w-full py-2 px-4 resize-none bg-transparent border border-orange-600 rounded-md shadow"
          type="text"
          id={id}
          value={input}
          style={error ? { border: "1px solid red" } : {}}
          autoComplete="off"
        />
      )}
      <AnimatePresence>
        {error && (
          <motion.span
            className="cursor-default text-red-600 text-xs absolute top-[-20px] left-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InputForm;
