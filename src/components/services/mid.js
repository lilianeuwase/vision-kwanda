import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Variants for items
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export const Mid = () => {
  // Use rootMargin so trigger at viewport center
  const thresholdOptions = { rootMargin: '-50% 0px -50% 0px', threshold: 0, triggerOnce: false };

  const imgRef = useRef(null);
  const imgInView = useInView(imgRef, thresholdOptions);

  const badgeRef = useRef(null);
  const badgeInView = useInView(badgeRef, thresholdOptions);

  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, thresholdOptions);

  const paraRef = useRef(null);
  const paraInView = useInView(paraRef, thresholdOptions);

  const btnRef = useRef(null);
  const btnInView = useInView(btnRef, thresholdOptions);

  return (
    <div className="bg-gray-200px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-gray-200 border rounded shadow-sm lg:flex-row sm:mx-auto">

        {/* Image block */}
        <motion.div
          ref={imgRef}
          initial="hidden"
          animate={imgInView ? "visible" : "hidden"}
          variants={itemVariants}
          transition={{ duration: 0.6 }}
          className="relative lg:w-1/2"
        >
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
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

        {/* Content block */}
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">

          {/* Badge */}
          <motion.div
            ref={badgeRef}
            initial="hidden"
            animate={badgeInView ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <p className="inline-block px-3 py-px text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </motion.div>

          {/* Title */}
          <motion.h5
            ref={titleRef}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ duration: 0.6 }}
            className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl"
          >
            Your new ideal style
          </motion.h5>

          {/* Paragraph text */}
          <motion.p
            ref={paraRef}
            initial="hidden"
            animate={paraInView ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ duration: 0.6 }}
            className="mb-5 text-gray-800"
          >
            <span className="font-bold">Lorem ipsum</span> dolor sit amet,
            consectetur adipiscing elit. Etiam sem neque, molestie sit amet
            venenatis et, dignissim ut erat. Sed aliquet velit id dui eleifend,
            sed consequat odio sollicitudin.
          </motion.p>

          {/* Buttons */}
          <motion.div
            ref={btnRef}
            initial="hidden"
            animate={btnInView ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </button>
            <a
              href="/"
              aria-label="Learn more"
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn More
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Mid;
