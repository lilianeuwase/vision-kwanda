// 📁 components/Scene.js
import React from "react";
import { useThree } from "@react-three/fiber";
import RotatingModel from "./rotatingModel";
import Annotation from "./annotation";
import getModelScale from "./getModelScale";
import { useScroll } from "@react-three/drei";

export default function Scene({ models, descriptions }) {
  const { viewport } = useThree();
  const scroll = useScroll();
  const vh = viewport.height;
  const order = Object.keys(descriptions);

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={1.5}/>
      {order.map((label, i) => {
        const positionY = -i * vh;
        const scrollY = scroll.offset * order.length * vh;
        const distance = Math.abs(scrollY - Math.abs(positionY));
        const isVisible = distance < vh * 15;
        const ModelComponent = models[label];
        const scale = getModelScale(label);

        return (
          <group key={label} position={[0, positionY, 0]}>
            {isVisible && (
              <>
                <RotatingModel
                  position={[0, 0, 0]}
                  label={label}
                  ModelComponent={ModelComponent}
                  modelScale={scale}
                  
                />
                <Annotation
                  start={[0, -0.2, 0]}
                  vertex={[0.5, 0.5, 0]}
                  end={[2.5, 0.5, 0]}
                  text={descriptions[label]}
                  textPos={[3, 0.5, 0]}
                  
                />
              </>
            )}
          </group>
        );
      })}
    </>
  );
}
