// 📁 data/models.js
import React from "react";
import { useGLTF } from "@react-three/drei";

const loadModel = (path) =>
  React.forwardRef((props, ref) => {
    const { scene } = useGLTF(path);
    return <primitive ref={ref} object={scene} {...props} />;
  });

const models = {
  Coltan: loadModel("/coltan/scene.gltf"),
  Cassiterite: loadModel("/cassiterite/scene.gltf"),
  Wolfram: loadModel("/wolfram/scene.gltf"),
  Gold: loadModel("/gold/scene.gltf"),
  Lithium: loadModel("/lithium/scene.gltf"),
  Amethyst: loadModel("/amethyst/scene.gltf"),
  Sapphire: loadModel("/sapphire/scene.gltf"),
  Tourmaline: loadModel("/tourmaline/scene.gltf"),
  Beryl: loadModel("/beryl/scene.gltf"),
  "Clays for Bricks": loadModel("/clay/scene.gltf"),
  Sand: loadModel("/sand/scene.gltf"),
  Gravel: loadModel("/gravel/scene.gltf"),
  // "Glass and Ceramics": loadModel("/glass/scene.gltf"),
  Peat: loadModel("/peat/scene.gltf"),
  "Oil (Petroleum)": loadModel("/oil/scene.gltf"),
  "Methane Gas": loadModel("/methan/scene.gltf"),
};

export default models;
