// 📁 pages/Minerals.js
import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import Header from "../navbar";
import Scene from "./scene";
import { preloadModels } from "./preloadModels";
import models from "./data/models";
import descriptions from "./data/descriptions";
// for scroll background effect
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import MineralsIntro from "./mineralsIntro";

function ScrollBackground() {
  const scroll = useScroll();
  const colors = [
    "#da8370",
    "#54c89d",
    "#2F4F4F",
    "#1c5a44",
    "#725916",
    "#d36553",
    "#7EBDC2",
    "#DDA0DD",
    "#7BA05B",
    "#DEB887",
    "#7ADBD2",
    "#708090",
    "#20B2AA",
    "#8B4513",
    "#7ADBD2",
    "#87CEEB",
  ];
  useFrame(() => {
    const index = Math.floor(scroll.offset * colors.length);
    const color = colors[Math.min(index, colors.length - 1)];
    if (document.body.style.backgroundColor !== color) {
      document.body.style.backgroundColor = color;
    }
  });
  useEffect(
    () => () => {
      document.body.style.backgroundColor = "";
    },
    []
  );
  return null;
}

export default function Minerals() {
  useEffect(() => {
    preloadModels();
  }, []);
  const modelCount = Object.keys(descriptions).length;
  return (
    <>
      <Header />
      <MineralsIntro/>
      <div style={{ height: `${modelCount * 100}vh` }}>
        <Canvas
          style={{ position: "fixed", top: 0, left: 0 }}
          camera={{ position: [0, 0, 5] }}
        >
          <ScrollControls
            pages={Object.keys(descriptions).length} // ✅ exact match
            damping={0.1}
          >
            <Scroll>
              <Scene models={models} descriptions={descriptions} />
            </Scroll>
            <ScrollBackground />
          </ScrollControls>
        </Canvas>
      </div>
    </>
  );
}
