import React, { useRef } from "react";
import {
  BeakerIcon,
  GlobeAltIcon,
  PhotoIcon,
  PresentationChartBarIcon,
  ScaleIcon,
  SwatchIcon,
  ArrowsPointingInIcon,
  CircleStackIcon,
} from "@heroicons/react/20/solid";
import { motion, useScroll, useTransform } from "framer-motion";

const features = [
  { name: "Mineral Processing", icon: BeakerIcon },
  { name: "Ventilation Services", icon: PresentationChartBarIcon },
  { name: "Land reclamation", icon: PhotoIcon },
  { name: "Material handling", icon: SwatchIcon },
  { name: "Environmental projects", icon: GlobeAltIcon },
  { name: "Consultancy services", icon: ScaleIcon },
  { name: "Power generation", icon: ArrowsPointingInIcon },
  { name: "Installations", icon: CircleStackIcon },
];

// simple fade & slide-up
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPart2() {
  // for parallax on the text‐side
  const textRef = useRef < HTMLDivElement > null;
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end start"],
  });
  // move [50px → -50px] as you scroll
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // shared viewport settings
  const vp = {
    once: false,
    margin: "-25% 0px -25% 0px", // trigger a bit before center
  };

  return (
    <div className="overflow-hidden bg-gray-200 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="items-center mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* 1. TEXT SIDE */}
          <motion.div ref={textRef} style={{ y }} className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              {/* Title */}
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: 0 }}
                className="text-base/7 font-semibold text-green-500"
              >
                MAWR Ltd
              </motion.h2>

              {/* Headline */}
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
              >
                We are a newly established company operating across the full
                spectrum of mining activities
              </motion.p>

              {/* Sub‑paragraph */}
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 text-lg/8 text-gray-600"
              >
                We deliver world‑class technical and managerial services with
                professionalism, meeting international industrial standards.
              </motion.p>

              <motion.dl
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-25% 0px -25% 0px" }}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-10 max-w-xl text-base/7 text-gray-600 lg:max-w-none grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5"
              >
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 h-5 w-5 text-green-500"
                      />
                      {feature.name}
                    </dt>
                  </div>
                ))}
              </motion.dl>
            </div>
          </motion.div>

          {/* 2. IMAGE SIDE */}
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6, delay: 0 }}
            alt="Mining operations"
            src={require("../../assets/miningpart1.jpg")}
            width={2432}
            height={1442}
            className="object-cover w-[48rem] h-[38rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
