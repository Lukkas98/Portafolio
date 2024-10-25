"use client"; // ✔ ❌

import { AnimatePresence, motion } from "framer-motion";

const InputForm = ({ id, input, error, handleChange, textarea = false }) => {
  return (
    <div className="relative">
      {textarea && (
        <textarea
          onChange={handleChange}
          placeholder="Escriba su mensaje"
          className={`w-full py-1 px-2 resize-none bg-transparent outline-none border rounded-md shadow ${
            !error
              ? "border-blue-700 focus:border-indigo-900"
              : "border-red-700 focus:border-red-800"
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
            placeholder={`${id === "name" ? "example" : "example@gmail.com"}`}
            className={`w-full py-1 px-2 resize-none bg-transparent outline-none border-b shadow ${
              !error
                ? `focus:border-indigo-900 ${input ? " border-green-800" : "border-blue-700"}`
                : "border-red-700 focus:border-red-800"
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
            className="cursor-default text-red-500 font-medium text-xs absolute left-0 -top-2"
            initial={{ opacity: 0, x: -20, y: !textarea ? "-50%" : "-90%" }}
            animate={{ opacity: 1, x: 0, y: !textarea ? "-50%" : "-90%" }}
            exit={{ opacity: 0, x: -20, y: !textarea ? "-50%" : "-90%" }}
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InputForm;
