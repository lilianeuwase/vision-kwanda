import React, { useState, useEffect, useRef } from "react";
import Navbar from "../navbar";
import { Box } from "@chakra-ui/react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import AnimatedText from "./components/animatedText";
import AppearText from "./components/appearText";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const MotionBox = motion(Box);

const AboutIntro = () => {
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 200], [100, 10]);

  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const [collapseTop, setCollapseTop] = useState(false);
  const [collapseBottom, setCollapseBottom] = useState(false);
  const [appearStage, setAppearStage] = useState(false);
  const [modelStage, setModelStage] = useState(false);

  const oRef = useRef(null);
  const uRef = useRef(null);

  // hide on scroll down, show on scroll up
  useEffect(() => {
    const unsubscribe = scrollY.onChange((currentY) => {
      if (currentY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentY;
    });
    return unsubscribe;
  }, [scrollY]);

  // Collapse animation timing
  useEffect(() => {
    const t1 = setTimeout(() => setCollapseTop(true), 4500);
    const t2 = setTimeout(() => setCollapseBottom(true), 5000);
    const t3 = setTimeout(() => setAppearStage(true), 5500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // Trigger 3D model stage after appearStage
  useEffect(() => {
    if (appearStage) {
      const t4 = setTimeout(() => setModelStage(true), 600);
      return () => clearTimeout(t4);
    }
  }, [appearStage]);

  return (
    <>
      <AnimatePresence>
        {modelStage && showNavbar && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 100 }}
          >
            <Navbar />
          </motion.div>
        )}
      </AnimatePresence>

      <Box id="hero" className="relative w-full h-screen bg-gray-200 overflow-hidden">
        <MotionBox style={{ y: headerY }} className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          {/* Top line */}
          <div className="relative overflow-visible pt-12">
            <AnimatedText
              text="MINING ACCESS"
              className="text-7xl md:text-9xl uppercase tracking-widest font-semibold"
              delay={0}
              stagger={0.1}
              secondaryDelay={1}
              extraDelay={1.18}
              collapse={collapseTop}
              keyLetterIndex={1}
              keyRef={oRef}
            />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-black" />
          </div>
          {/* Bottom line */}
          <div className="relative overflow-visible mt-8">
            <AnimatedText
              text="WINDOW RWANDA"
              className="text-7xl md:text-9xl uppercase tracking-widest font-semibold"
              delay={1}
              stagger={0.1}
              secondaryDelay={1}
              extraDelay={0.6}
              collapse={collapseBottom}
              keyLetterIndex={4}
              keyRef={uRef}
            />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-black" />
          </div>
        </MotionBox>

        {appearStage && (
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none"
          >
            {/* ABOUT */}
            <div className="relative overflow-visible pt-12">
              <AppearText
                text="MI "
                className="text-7xl md:text-9xl uppercase tracking-widest font-semibold"
                delay={0}
                stagger={0.1}
                keyLetterIndex={1}
                keyRef={oRef}
                yOffset={100}
              />
              <AppearText
                text="INING"
                className="text-7xl md:text-9xl uppercase tracking-widest font-semibold mr-[635px]"
                delay={0}
                stagger={0.1}
                keyLetterIndex={0}
                keyRef={oRef}
                yOffset={100}
              />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-black" />
            </div>
            {/* US */}
            <div className="relative overflow-visible mt-8">
              <AppearText
                text="WISDO "
                className="text-7xl md:text-9xl uppercase tracking-widest font-semibold"
                delay={0.5}
                stagger={0.1}
                keyLetterIndex={4}
                keyRef={uRef}
                yOffset={100}
              />
              <AppearText
                text="OM"
                className="text-7xl md:text-9xl uppercase tracking-widest font-semibold mr-[650px]"
                delay={0.5}
                stagger={0.1}
                keyLetterIndex={0}
                keyRef={uRef}
                yOffset={100}
              />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-black" />
            </div>
          </MotionBox>
        )}

        {modelStage && (
          <MotionBox
            initial={{ opacity: 0, y: "-100vh" }}
            animate={{ opacity: 1, y: 50 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
            style={{ willChange: "transform, opacity" }}
          >
            <Box className="relative w-[400px] h-[250px] ml-[80px]">
              <React.Suspense fallback={<Box>Loading model...</Box>}>
                <Canvas dpr={[1, 1.5]} frameloop="always">
                  <Model />
                </Canvas>
              </React.Suspense>
              <MotionBox
                initial={{ opacity: 0, y: "-100vh" }}
                animate={{ opacity: 1, y: -70 }}
                transition={{ duration: 2, delay: 0.7, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ willChange: "transform, opacity" }}
              >
                <span className="text-xs text-white">SCROLL</span>
              </MotionBox>
            </Box>
          </MotionBox>
        )}
      </Box>
    </>
  );
};

export default AboutIntro;

// Model sub-component
function Model(props) {
  const { scene } = useGLTF("/komatsu_hd-465-7eo/scene.gltf");
  const ref = useRef();

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * (Math.PI / 2);
    }
  });

  return <primitive ref={ref} object={scene} scale={[0.3, 0.3, 0.3]} {...props} />;
}

// <-- MISSING CLOSING QUOTE ADDED HERE
useGLTF.preload("/komatsu_hd-465-7eo/scene.gltf");
