import React, { useState, useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import AnimatedText from "./components/animatedText";
import AppearText from "./components/appearText";

// NEW IMPORTS for 3D model
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const MotionBox = motion(Box);

const AboutIntro = () => {
  const { scrollY } = useViewportScroll();
  const headerY = useTransform(scrollY, [0, 200], [100, 10]);

  const [collapseTop, setCollapseTop] = useState(false);
  const [collapseBottom, setCollapseBottom] = useState(false);
  const [appearStage, setAppearStage] = useState(false);
  // NEW: modelStage state triggers the 3D model transition
  const [modelStage, setModelStage] = useState(false);

  const oRef = useRef(null);
  const uRef = useRef(null);

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

  // NEW: When appearStage is reached, trigger modelStage after an additional delay
  useEffect(() => {
    if (appearStage) {
      const t4 = setTimeout(() => setModelStage(true), 600);
      return () => clearTimeout(t4);
    }
  }, [appearStage]);

  return (
    <Box
      id="hero"
      className="relative w-full h-screen bg-gray-200 overflow-hidden"
    >
      {/* Collapse container: always mounted */}
      <MotionBox
        style={{ y: headerY }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        {/* Top line */}
        <div className="relative overflow-visible pt-12">
          <AnimatedText
            text="VISION KWANDA"
            className="text-7xl md:text-9xl uppercase tracking-widest font-semibold"
            delay={0}
            stagger={0.1}
            secondaryDelay={1}
            extraDelay={1.18}
            collapse={collapseTop}
            keyLetterIndex={4}
            keyRef={oRef}
          />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-black" />
        </div>

        {/* Bottom line */}
        <div className="relative overflow-visible mt-8">
          <AnimatedText
            text="GROUP"
            className="text-7xl md:text-9xl uppercase tracking-widest font-semibold"
            delay={1}
            stagger={0.1}
            secondaryDelay={1}
            extraDelay={0.6}
            collapse={collapseBottom}
            keyLetterIndex={3}
            keyRef={uRef}
          />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-black" />
        </div>
      </MotionBox>

      {/* Appear overlay: letters fly out from existing O/U */}
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
              text="ABO"
              className="text-7xl md:text-9xl uppercase tracking-widest font-semibold"
              delay={0}
              stagger={0.1}
              keyLetterIndex={2}
              keyRef={oRef}
              yOffset={100}
            />
            <AppearText
              text="O UT"
              className="text-7xl md:text-9xl uppercase tracking-widest font-semibold mr-[550px]"
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
              text="US"
              className="text-7xl md:text-9xl uppercase tracking-widest font-semibold ml-[400px]"
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

      {/* NEW: 3D Model Transition */}
      {modelStage && (
        <MotionBox
          initial={{ opacity: 0, y: "-100vh" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
          style={{ willChange: "transform, opacity" }}
        >
          {/* Container for the 3D model with custom dimensions */}
          <Box className="relative w-[400px] h-[300px] ml-[80px]">
            <React.Suspense fallback={<Box>Loading model...</Box>}>
              <Canvas dpr={[1, 1.5]} frameloop="always">
                <Model />
              </Canvas>
            </React.Suspense>
            {/* Overlay text "SCROLL" centered exactly over the model, dropping 0.5s later */}
            <MotionBox
              initial={{ opacity: 0, y: "-100vh" }}
              animate={{ opacity: 1, y: -80 }}
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
  );
};

export default AboutIntro;

function Model(props) {
  const { scene } = useGLTF("/komatsu_hd-465-7eo/scene.gltf");
  const ref = useRef();

  // Rotate the model on the y-axis continuously.
  // Adjust the multiplier to set the rotation speed (here: π/2 radians per second = 90°/sec).
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * (Math.PI / 2);
    }
  });

  return (
    <primitive ref={ref} object={scene} scale={[0.3, 0.3, 0.3]} {...props} />
  );
}

useGLTF.preload("/komatsu_hd-465-7eo/scene.gltf");
