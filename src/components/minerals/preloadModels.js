// 📁 utils/preloadModels.js
import { useGLTF } from "@react-three/drei";

export function preloadModels() {
  const paths = [
    "/coltan/scene.gltf",
    "/cassiterite/scene.gltf",
    "/wolfram/scene.gltf",
    "/gold/scene.gltf",
    "/lithium/scene.gltf",
    "/amethyst/scene.gltf",
    "/sapphire/scene.gltf",
    "/tourmaline/scene.gltf",
    "/beryl/scene.gltf",
    "/clay/scene.gltf",
    "/sand/scene.gltf",
    "/gravel/scene.gltf",
    // "/glass/scene.gltf",
    "/peat/scene.gltf",
    "/oil/scene.gltf",
    "/methan/scene.gltf",
  ];

  paths.forEach((path) => useGLTF.preload(path));
}