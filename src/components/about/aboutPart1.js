import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Box } from "@chakra-ui/react";

// Variants for items (fade-in)
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const AboutPart1 = () => {
  // In-view options
  const thresholdOptions = {
    rootMargin: "-50% 0px -50% 0px",
    threshold: 0,
    triggerOnce: false,
  };

  // Image ref & in-view state
  const imgRef = useRef(null);
  const imgInView = useInView(imgRef, thresholdOptions);

  // Grayscale -> color effect
  const { scrollYProgress: imgScroll } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const grayFilter = useTransform(
    imgScroll,
    [0.2, 0.5],
    ["grayscale(100%)", "grayscale(0%)"]
  );

  // Content scroll for Y movement
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div className="bg-gray-200">
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Image block filling left half */}
        <motion.div
          ref={imgRef}
          style={{ filter: grayFilter, WebkitFilter: grayFilter }}
          initial="hidden"
          animate={imgInView ? "visible" : "hidden"}
          variants={itemVariants}
          transition={{ duration: 0.6 }}
          className="relative w-full lg:w-1/2 h-80 lg:h-full overflow-hidden"
        >
          <img
            src={require("../../assets/teamunderground2.jpg")}
            alt="Mining Team Underground"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 0 20 0 20 104 0.824555778 104" />
          </svg>
        </motion.div>

        {/* Content block with scroll-linked Y movement */}
        <motion.div
          ref={contentRef}
          style={{ y }}
          className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 w-full lg:w-1/2 overflow-auto"
        >
          {/* Badge */}
          <motion.div
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
            <span className="font-bold">Mining Access Window Rwanda Ltd </span>
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
              <Box
                as="svg"
                fill="currentColor"
                viewBox="0 0 12 12"
                color="green.500"
                w={3}
                ml={2}
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </Box>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPart1;
