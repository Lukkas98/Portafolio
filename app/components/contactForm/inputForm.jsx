"use client"; // ✔ ❌

import { AnimatePresence, motion } from "framer-motion";

const InputForm = ({ id, input, error, handleChange, textarea = false }) => {
  return (
    <div className="relative">
      {textarea && (
        <textarea
          onChange={handleChange}
          placeholder="Escriba su mensaje"
          className={`w-full py-2 px-4 resize-none bg-transparent outline-none border rounded-md shadow ${
            !error
              ? "border-orange-600 focus:border-indigo-700"
              : "border-red-600 focus:border-red-800"
          }`}
          id="message"
          value={input}
          cols="30"
          rows="10"
          autoComplete="off"
        />
      )}
      {!textarea && (
        <div className="w-full relative">
          <input
            onChange={handleChange}
            placeholder={`ingrese su ${id === "name" ? "nombre" : "email"}`}
            className={`w-full py-2 px-4 resize-none bg-transparent outline-none border rounded-md shadow ${
              !error
                ? `focus:border-indigo-700 ${
                    input ? " border-green-800" : "border-orange-600"
                  }`
                : "border-red-600 focus:border-red-800"
            }`}
            type="text"
            id={id}
            value={input}
            autoComplete="off"
          />
          {/* signos de ok y error animados */}
          <AnimatePresence>
            {error && (
              <motion.span
                initial={{ x: 50, y: "50%", opacity: 0 }}
                animate={{ x: -30, y: "50%", opacity: 1 }}
                exit={{ x: 50, y: "50%", opacity: 0 }}
                className="absolute pointer-events-none"
              >
                ❌
              </motion.span>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {!error && input && (
              <motion.span
                initial={{ x: 50, y: "50%", opacity: 0 }}
                animate={{ x: -30, y: "50%", opacity: 1 }}
                exit={{ x: 50, y: "50%", opacity: 0 }}
                className="absolute text-green-600 pointer-events-none"
              >
                ✔
              </motion.span>
            )}
          </AnimatePresence>
        </div>
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
