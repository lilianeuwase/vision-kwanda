// 📁 components/RotatingModel.js
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

export default function RotatingModel({ position, label, ModelComponent, modelScale = [1, 1, 1] }) {
  const ref = useRef();
  const dragStart = useRef([0, 0]);
  const rotationStart = useRef([0, 0, 0]);
  const [dragging, setDragging] = useState(false);

  useFrame((_, delta) => {
    if (!dragging && ref.current) {
      ref.current.rotation.x += delta * 0.2;
      ref.current.rotation.y += delta * 0.2;
      ref.current.rotation.z += delta * 0.2;
    }
  });

  const onPointerDown = (e) => {
    e.stopPropagation();
    setDragging(true);
    dragStart.current = [e.clientX, e.clientY];
    rotationStart.current = [ref.current.rotation.x, ref.current.rotation.y, ref.current.rotation.z];
  };

  const onPointerMove = (e) => {
    if (dragging) {
      const deltaX = e.clientX - dragStart.current[0];
      const deltaY = e.clientY - dragStart.current[1];
      const sensitivity = 0.005;
      ref.current.rotation.x = rotationStart.current[0] + deltaY * sensitivity;
      ref.current.rotation.y = rotationStart.current[1] + deltaX * sensitivity;
    }
  };

  const onPointerUp = () => setDragging(false);

  return (
    <group
      position={position}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <ModelComponent ref={ref} scale={modelScale} />
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        depthTest={false}
        renderOrder={10}
      >
        {label}
      </Text>
    </group>
  );
}