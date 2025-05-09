// 📁 components/Annotation.js
import React from "react";
import { Line, Text } from "@react-three/drei";

export default function Annotation({ start, vertex, end, text, textPos, maxWidth = 2.5 }) {
  return (
    <>
      <Line points={[start, vertex, end]} color="white" lineWidth={2} />
      <mesh position={start}>
        <circleGeometry args={[0.05, 32]} />
        <meshBasicMaterial color="white" />
      </mesh>
      <mesh position={end}>
        <circleGeometry args={[0.05, 32]} />
        <meshBasicMaterial color="white" />
      </mesh>
      <Text
        position={textPos}
        fontSize={0.15}
        color="white"
        anchorX="left"
        depthTest={false}
        renderOrder={10}
        maxWidth={maxWidth}
      >
        {text}
      </Text>
    </>
  );
} 
