/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutText() {
  const ref = useRef(null);

  // watch from bottom‐enter → top‐exit
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // your 5 lines → words
  const lines = [
    "Mining support services play",
    "critical role in the transformation",
    "of Rwanda’s mining industry through",
    "the application of professional",
    "standards and practices.",
  ];
  const words = lines.flatMap((l) => l.split(" "));
  const total = words.length;

  // introduce a 10% scroll delay, finish by 50%
  const startDelay = 0.15;
  const endPoint   = 0.55;
  const segment    = (endPoint - startDelay) / total;

  // build one MotionValue color per word, shifted by startDelay
  const wordColors = words.map((_, i) => {
    const from = startDelay + i * segment;
    const to   = startDelay + (i + 1) * segment;
    const prog = useTransform(scrollYProgress, [from, to], [0, 1]);
    return useTransform(prog, [0, 1], ["#9fdfc3", "#111827"]);
  });

  return (
    <motion.div ref={ref} className="bg-gray-200 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl leading-tight">
            {words.map((word, idx) => (
              <motion.span
                key={idx}
                style={{ color: wordColors[idx] }}
                className="inline-block mr-1 mt-4"
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>
      </div>
    </motion.div>
  );
}