import { Box, Image, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Header from "../navbar"; // Adjust the import path as needed
import myImage from "../../assets/MiningHome.jpg"; // Ensure your image is placed in the assets folder
import "../../styles/services/overlayIntro.css"

const MotionBox = motion(Box);
const MotionDiv = motion.div;

const HeroIntro = () => {
  const [showImage, setShowImage] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Wait for the trapezoid to finish sliding in (2 seconds) before showing the image and header
    const imageTimeout = setTimeout(() => {
      setShowImage(true);
    }, 3000);

    return () => clearTimeout(imageTimeout);
  }, []);

  useEffect(() => {
    // Once the image is shown, wait a bit before showing the hero content
    if (showImage) {
      const contentTimeout = setTimeout(() => {
        setShowContent(true);
      }, 500);
      return () => clearTimeout(contentTimeout);
    }
  }, [showImage]);

  return (
    <MotionDiv
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "white", // Initial screen is white
      }}
    >
      <MotionBox
        initial={{ x: "-100%", backgroundColor: "black" }}
        animate={{ x: "67%" }}
        transition={{ x: { duration: 2, ease: "easeInOut" } }}
        w="60vw"
        h="100vh"
        position="absolute"
        clipPath="polygon(100% 0%, 100% 100%, 20% 100%, 40% 0%)"
      />
      {showImage && (
        <>
          {/* Image over the trapezoid */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: 0,
              left: "40.2%", // Aligns with the trapezoid's final position
              width: "60vw", // Matches the trapezoid's width
              height: "100vh",
              clipPath: "polygon(100% 0%, 100% 100%, 20% 100%, 40% 0%)",
            }}
          >
            <Image
              src={myImage}
              alt="Right side image"
              objectFit="cover"
              w="100%"
              h="100%"
              style={{ filter: "brightness(0.6)" }} // Adjust brightness as needed
            />
          </MotionDiv>
          {/* Header overlay */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              zIndex: 10,
            }}
          >
            <Header />
          </MotionDiv>
          {/* Hero Text on the left white side */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: "30%",
              left: "5%",
              zIndex: 5,
              color: "black",
            }}
          >
            <div className="hero">
              {/* Heading with a highlight behind "EMPOWERS" */}
              <h1 style={{ color: "black" }}>
                ENVIRONMENTAL{" "}
                <span
                  style={{
                    backgroundColor: "#09BC8A",
                    padding: "0 4px",
                  }}
                >
                  EMPOWERS
                </span>
              </h1>
              {/* Hero content fades in after the image appears */}
              <div className={`hero-content ${showContent ? "visible" : ""}`}>
                <h2>Mining, Quarry, Environmental, Health and Safety </h2>
                
                <p>
                  Empowering Mining Engineering, Environmental, Health and Safety
                  Services; A Benchmark to the Sustainable Development of the Rwandan
                  mining Sector
                </p>
                 <Button size="lg" >About Us</Button>
              </div>
            </div>
          </MotionDiv>
        </>
      )}
    </MotionDiv>
  );
};

export default HeroIntro;