"use client"
import { motion, useIsPresent } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransition() {
  const isPresent = useIsPresent();
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    setInitialRender(false);
  }, []);

  return (
    <>
      {!initialRender && (
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
          exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
          style={{ originX: isPresent ? 0 : 1 }}
          className="privacy-screen"
        />
      )}
    </>
  );
}
