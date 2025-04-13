// src/components/about/components/animatedLetter.js
import React, { useEffect, forwardRef } from "react";
import { motion, useAnimation } from "framer-motion";

const AnimatedLetter = forwardRef(({
  letter,
  delay = 0,
  extraDelay = 0.5,
  secondaryDelay = 0.5,
  collapse = false,
  isKey = false,
  collapseDx = 0
}, ref) => {
  const controls = useAnimation();
  const isO = letter.toLowerCase() === "o";

  // Phase 1: reveal + O‑jump
  useEffect(() => {
    async function sequence() {
      await controls.start({
        y: 0,
        opacity: 1,
        clipPath: "inset(0 0 0 0)",
        transition: { duration: 0.5, ease: "easeOut", delay }
      });
      await controls.start({
        y: -100,
        transition: { duration: 0.3, ease: "easeOut", delay: secondaryDelay }
      });
      if (isO) {
        await controls.start({
          y: -200,
          color: "#09BC8A",
          transition: { duration: 0.5, ease: "easeOut", delay: extraDelay }
        });
        await controls.start({
          y: -100,
          transition: { duration: 0.3, ease: "easeOut", delay: 0.1 }
        });
      }
    }
    sequence();
  }, [controls, delay, extraDelay, secondaryDelay, isO]);

  // Phase 2: collapse into key letter at y = -100
  useEffect(() => {
    if (!collapse) return;

    if (isKey) {
      controls.start({
        x: 0,
        y: -100,
        opacity: 1,
        transition: { duration: 0.5 }
      });
    } else {
      controls.start({
        x: collapseDx,      // horizontal fly‑in target
        y: -100,            // keep the -100 vertical offset
        opacity: 0,
        transition: { duration: 0.5, ease: "easeIn" }
      });
    }
  }, [collapse, isKey, collapseDx, controls]);

  return (
    <motion.span
      ref={ref}
      initial={{
        y: 100,
        x: 0,
        opacity: 0,
        clipPath: "inset(0 0 100% 0)",
        color: "#000000"
      }}
      animate={controls}
      style={{ display: "inline-block", transformOrigin: "center center" }}
    >
      {letter}
    </motion.span>
  );
});

export default AnimatedLetter;
