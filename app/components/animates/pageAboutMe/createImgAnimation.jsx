'use client';

import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

//   objSrc = "/_next/static/media/example.123abc.svg",
export default function CreateImgAnimate({ objSrc, fromProyect = false }) {
  const [isHover, setIsHover] = useState(false);
  const controls = useAnimation();

  const text =
    typeof objSrc !== 'string'
      ? objSrc.src.split('/')[4].split('.')[0] // example.123abc.svg //example
      : objSrc.split('/')[1].split('.')[0]; // icons/exaple.svg // example

  useEffect(() => {
    if (isHover) {
      controls.stop();
      controls.start({ scale: 1.2, msTransitionDuration: 400 });
    } else {
      controls.start({
        scale: [0.8, 1.1, 0.8],
        transition: { duration: 2, repeat: 'infinity', delay: Math.random() * 2 },
      });
    }
  }, [isHover, controls]);

  return (
    <motion.div
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      animate={controls}
    >
      <div className={`relative ${fromProyect ? 'w-7 h-7' : 'w-11 h-11'}`}>
        <Image src={objSrc} alt={`${text} logo`} fill={true} sizes="28px, 44px" />
      </div>
      <AnimatePresence>
        {isHover && (
          <motion.span
            initial={{ opacity: 0, y: -30, x: '-50%' }}
            animate={{ opacity: 1, y: 15 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[-70%] whitespace-nowrap z-50 text-xs capitalize font-bold text-orange-500 pointer-events-none"
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
