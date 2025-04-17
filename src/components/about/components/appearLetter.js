import React, { useEffect, forwardRef } from "react";
import { motion, useAnimation } from "framer-motion";

const AppearLetter = forwardRef(
  ({ letter, delay = 0, appearDx = 0, appearDy = 0, style = {} }, ref) => {
    const controls = useAnimation();
    const isI = letter.toLowerCase() === "i";

    useEffect(() => {
      controls.set({ x: appearDx, y: appearDy, opacity: 0 });
      controls.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut", delay },
      });
    }, [controls, delay, appearDx, appearDy]);

    return (
      <motion.span
        ref={ref}
        style={{
          display: "inline-block",
          color: isI ? "#09BC8A" : undefined,
          ...style,
        }}
        animate={controls}
        initial={{
          color: isI ? "#09BC8A" : "#000000",
        }}
      >
        {letter}
      </motion.span>
    );
  }
);

export default AppearLetter;
