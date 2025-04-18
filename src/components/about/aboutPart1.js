import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// Variants for items (you can keep these if you still want the fade‑in)
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const AboutPart1 = () => {
  // In‑view options (unchanged)
  const thresholdOptions = {
    rootMargin: "-50% 0px -50% 0px",
    threshold: 0,
    triggerOnce: false,
  };

  // Refs & in‑view states for the image/block items
  const imgRef = useRef(null);
  const imgInView = useInView(imgRef, thresholdOptions);

  // -- NEW: ref for the whole text content and scroll progress
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    // when the top of content hits bottom of viewport → when bottom of content hits top
    offset: ["start end", "end start"],
  });
  // map [0,1] → [50, -50] (you can tweak these numbers)
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div className="bg-gray-200 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-3xl md:px-24 lg:px-8">
      <div className="flex flex-col max-w-screen-xl overflow-hidden bg-gray-200 border rounded shadow-sm lg:flex-row sm:mx-auto">
        {/* Image block (same as before) */}
        <motion.div
          ref={imgRef}
          initial="hidden"
          animate={imgInView ? "visible" : "hidden"}
          variants={itemVariants}
          transition={{ duration: 0.6 }}
          className="relative lg:w-1/2"
        >
          <img
            src={require("../../assets/truck.jpg")}
            alt=""
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </motion.div>

        {/* Content block with scroll‑linked Y movement */}
        <motion.div
          ref={contentRef}
          style={{ y }}
          className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2"
        >
          {/* Badge */}
          <motion.div
            ref={(el) => {} /* you can remove the old badgeRef if you want */}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4"
          >
            <p className="inline-block px-3 py-px text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              MINING WISDOM
            </p>
          </motion.div>

          {/* Title */}
          <motion.h5
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl"
          >
            ABOUT US
          </motion.h5>

          {/* Paragraph */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-5 text-gray-800 text-lg"
          >
            <span className="font-bold">Mining Access Window Rwanda Ltd {" "}</span>
            has been established as a key player in our regional mining sector,
            with ambitions that extend to the global stage. Our business model
            is centered on delivering mining engineering services aimed at
            advancing and professionalizing the mining industry.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center"
          >
            <a
              href="/services"
              aria-label="Learn more"
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Our Services
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPart1;
