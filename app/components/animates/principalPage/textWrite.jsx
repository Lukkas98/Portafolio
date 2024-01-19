"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function TextWrite() {
  const [text, setText] = useState("");
  const controlsText = useAnimation();
  const controlsCursor = useAnimation();

  // const texts = ["Desarrollador web Frontend", "Transformando Ideas en Código", "Construyendo Digitalmente" ]

  useEffect(() => {
    const targetText = "Desarrollador web Frontend";

    const animateText = async () => {
      for (let i = 0; i <= targetText.length; i++) {
        setText(targetText.slice(0, i));
        await controlsText.start({ opacity: 1, x: 0 });
        await controlsCursor.start({ opacity: 1 });
        await controlsCursor.start({ opacity: 0 });
      }
    };

    animateText();
  }, [controlsText]);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <motion.p
      className="flex items-center"
        initial={{ opacity: 0, x: "-10%" }}
        animate={controlsText}
        style={{ fontSize: "24px" }}
      >
        {text}
      <motion.span
      className="inline-block"
        initial={{ opacity: 1 }}
        animate={controlsCursor}
        style={{
          width: "2px",
          height: "24px",
          backgroundColor: "black",
          marginLeft: "4px",
        }}
      />
      </motion.p>
    </div>
  );
}
