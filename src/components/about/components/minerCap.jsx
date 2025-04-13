import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const MinerCap = ({ scale = 1 }) => {
  const groupRef = useRef();

  // Continuously rotate the cap horizontally
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta;
    }
  });

  return (
    <group ref={groupRef} scale={[scale, scale, scale]}>
      {/* Cap Shell (Hemisphere) */}
      <mesh>
        {/* SphereGeometry arguments:
             [radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength]
             thetaLength = Math.PI/2 makes it a hemisphere */}
        <sphereGeometry args={[0.5, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        {/* A typical miner's cap is yellow */}
        <meshStandardMaterial color="#FFC107" />
      </mesh>
      {/* Cap Brim (Torus) */}
      <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        {/* TorusGeometry arguments:
             [radius, tube, radialSegments, tubularSegments] */}
        <torusGeometry args={[0.55, 0.1, 16, 100]} />
        <meshStandardMaterial color="#FFC107" />
      </mesh>
    </group>
  );
};

export default MinerCap;
