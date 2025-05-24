import { Box, Image, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "../navbar"; // Adjust the import path as needed
import myImage from "../../assets/MiningHome-min.jpg"; // Ensure your image is placed in the assets folder
import "../../styles/homepage/heroIntro.css";
import { Link } from "react-router-dom";

const MotionBox = motion(Box);
const MotionDiv = motion.div;

const HeroIntro = () => {
  const [showImage, setShowImage] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [hideTrapezoid, setHideTrapezoid] = useState(false);

  useEffect(() => {
    const isSmallScreen = window.matchMedia("(max-width: 1024px)").matches;

    if (isSmallScreen) {
      const hideTrapezoidTimeout = setTimeout(() => {
        setHideTrapezoid(true);
      }, 3550);

      return () => clearTimeout(hideTrapezoidTimeout);
    }
  }, []);

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
        minHeight: "100vh", // ✅ Allows content to grow
        position: "relative",
        overflow: "hidden",
        backgroundColor: "white",
      }}
    >
      <div className={`hide-on-smalltr ${hideTrapezoid ? "hidden" : ""}`}>
        <MotionBox
          initial={{ x: "-100%", backgroundColor: "black" }}
          animate={{ x: "67%" }}
          transition={{ x: { duration: 2, ease: "easeInOut" } }}
          w="60vw"
          h="100vh"
          position="absolute"
          clipPath="polygon(100% 0%, 100% 100%, 20% 100%, 40% 0%)"
        />
      </div>
      {showImage && (
        <>
          {/* Image over the trapezoid */}
          <div className="hide-on-smallimg">
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
                loading="lazy"
              />
            </MotionDiv>
          </div>
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
            <Navbar />
          </MotionDiv>
          {/* Hero Text on the left white side */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: "15%",
              left: 0,
              width: "100%",
              maxWidth: "50vw",
              paddingLeft: "5%",
              paddingRight: "2%",
              zIndex: 5,
              color: "black",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="hero">
              <h1 style={{ color: "black", marginBottom: "1rem" }}>
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
              <div className={`hero-content ${showContent ? "visible" : ""}`}>
                <h2>Mining, Quarry, Environmental, Health and Safety</h2>
                <p>
                  Powering Mining Engineering, Environmental, Health and Safety
                  Services; A Benchmark to the Sustainable Development of the
                  Rwandan mining Sector
                </p>
                <Link
                  to="/aboutus"
                  style={{
                    textDecoration: "none",
                    marginTop: "1rem",
                    display: "inline-block",
                  }}
                >
                  <Button size="lg">About Us</Button>
                </Link>
              </div>
            </div>
          </MotionDiv>
        </>
      )}
    </MotionDiv>
  );
};

export default HeroIntro;
