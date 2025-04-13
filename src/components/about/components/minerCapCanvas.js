// MinerCapCanvas.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import MinerCap from "./minerCap";

const MinerCapCanvas = ({ width = "100%", height = "300px", scale = 1.5 }) => {
  return (
    <div style={{ width, height }}>
      <Canvas style={{ background: "transparent" }} camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <MinerCap scale={scale} />
      </Canvas>
    </div>
  );
};

export default MinerCapCanvas;
