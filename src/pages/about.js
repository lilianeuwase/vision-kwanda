import React from "react";
import { useViewportScroll, useTransform, motion } from "framer-motion";
import AboutIntro from "../components/about/aboutIntro";
import Mid from "../components/services/mid";
import AboutSection from "../components/about/aboutSection";
import PortfolioSection from "../components/about/porto";

const MotionDiv = motion.div;

export default function About() {
  const { scrollY } = useViewportScroll();

  // Full‑screen height (your h‑screen)
  const heroHeight = typeof window !== "undefined" 
    ? window.innerHeight 
    : 800;

  // How “long” the fade is
  const fadeRange = 300;

  // Start fade at heroHeight – fadeRange (e.g. 800 – 300 = 500px)
  // End fade at heroHeight (800px)
  const fadeStart = heroHeight - fadeRange;
  const fadeEnd   = heroHeight;

  // Intro: 1 → 0 between [fadeStart → fadeEnd]
  const introOpacity = useTransform(
    scrollY,
    [fadeStart, fadeEnd],
    [1, 0]
  );

  // Mid:   0 → 1 between [fadeStart → fadeEnd]
  const midOpacity = useTransform(
    scrollY,
    [fadeStart, fadeEnd],
    [0, 1]
  );

  return (
    <div>
      {/* cross‑fade sticky container */}
      <div style={{ position: "relative", height: heroHeight + fadeRange }}>
        <MotionDiv
          style={{
            position: "sticky",
            top: 0,
            width: "100%",
            height: "100vh",
            opacity: introOpacity,
          }}
        >
          <AboutIntro />
        </MotionDiv>

        <MotionDiv
          style={{
            position: "sticky",
            top: 0,
            width: "100%",
            height: "100vh",
            opacity: midOpacity,
          }}
        >
          <Mid />
        </MotionDiv>
      </div>

      {/* the rest of your page */}
      {/* <AboutSection />
      <PortfolioSection /> */}
    </div>
  );
}