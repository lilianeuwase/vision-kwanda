import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  ScrollControls,
  Scroll,
  Text,
  useScroll,
  useGLTF,
  Line,
} from "@react-three/drei";
import Header from "../navbar";

function RotatingModel({
  position,
  label,
  ModelComponent,
  modelScale = [1, 1, 1],
}) {
  const ref = useRef();
  const dragStart = useRef([0, 0]);
  const rotationStart = useRef([0, 0, 0]);
  const [dragging, setDragging] = useState(false);

  useFrame((state, delta) => {
    if (!dragging && ref.current) {
      ref.current.rotation.x += delta * 0.2;
      ref.current.rotation.y += delta * 0.2;
      ref.current.rotation.z += delta * 0.2;
    }
  });

  const onPointerDown = (event) => {
    event.stopPropagation();
    setDragging(true);
    dragStart.current = [event.clientX, event.clientY];
    rotationStart.current = [
      ref.current.rotation.x,
      ref.current.rotation.y,
      ref.current.rotation.z,
    ];
  };

  const onPointerMove = (event) => {
    if (dragging) {
      const deltaX = event.clientX - dragStart.current[0];
      const deltaY = event.clientY - dragStart.current[1];
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

function Annotation({ start, vertex, end, text, textPos, maxWidth = 2.5 }) {
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

const BoxModel = (color) =>
  React.forwardRef((props, ref) => (
    <mesh ref={ref} {...props}>
      <boxGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  ));

const models = {
  Coltan: BoxModel("gray"),
  Cassiterite: React.forwardRef((props, ref) => {
    const { scene } = useGLTF("/cassiterite/scene.gltf");
    return <primitive ref={ref} object={scene} {...props} />;
  }),
  Wolfram: BoxModel("darkslategray"),
  Gold: React.forwardRef((props, ref) => {
    const { scene } = useGLTF("/gold_nugget/scene.gltf");
    return <primitive ref={ref} object={scene} {...props} />;
  }),
  Lithium: React.forwardRef((props, ref) => {
    const { scene } = useGLTF("/lithium/scene.gltf");
    return <primitive ref={ref} object={scene} {...props} />;
  }),
  Amethyst: React.forwardRef((props, ref) => {
    const { scene } = useGLTF("/amethyst_crystal/scene.gltf");
    return <primitive ref={ref} object={scene} {...props} />;
  }),
  Sapphire: React.forwardRef((props, ref) => {
    const { scene } = useGLTF("/sapphire_6-3/scene.gltf");
    return <primitive ref={ref} object={scene} {...props} />;
  }),
  Tourmaline: React.forwardRef((props, ref) => {
    const { scene } = useGLTF("/tourmaline/scene.gltf");
    return <primitive ref={ref} object={scene} {...props} />;
  }),
  Beryl: React.forwardRef((props, ref) => {
    const { scene } = useGLTF("/beryl/scene.gltf");
    return <primitive ref={ref} object={scene} {...props} />;
  }),
  "Clays for Bricks": React.forwardRef((props, ref) => {
    const { scene } = useGLTF("/clay/scene.gltf");
    return <primitive ref={ref} object={scene} {...props} />;
  }),
  Sand: React.forwardRef((props, ref) => {
    const { scene } = useGLTF("/sand/scene.gltf");
    return <primitive ref={ref} object={scene} {...props} />;
  }),
  Gravel: React.forwardRef((props, ref) => {
    const { scene } = useGLTF("/gravel/scene.gltf");
    return <primitive ref={ref} object={scene} {...props} />;
  }),
  "Glass and Ceramics": React.forwardRef((props, ref) => {
    const { scene } = useGLTF("/glass/scene.gltf");
    return <primitive ref={ref} object={scene} {...props} />;
  }),
  Peat: React.forwardRef((props, ref) => {
    const { scene } = useGLTF("/peat/scene.gltf");
    return <primitive ref={ref} object={scene} {...props} />;
  }),
  "Oil (Petroleum)": React.forwardRef((props, ref) => {
    const { scene } = useGLTF("/oil/scene.gltf");
    return <primitive ref={ref} object={scene} {...props} />;
  }),
  "Methane Gas": BoxModel("skyblue"),
};

const descriptions = {
  Coltan:
    "Coltan is a dull black mineral that contains tantalum, a rare metal essential for making capacitors in electronic devices like smartphones, laptops, and medical equipment.",
  Cassiterite:
    "Cassiterite is the primary ore of tin, a metal used in soldering, plating, and creating corrosion-resistant alloys, especially in electronics and packaging.",
  Wolfram:
    "Wolfram, also known as tungsten ore, is the main source of tungsten metal, valued for its exceptional hardness and highest melting point, making it ideal for cutting tools, filaments, and military applications.",
  Gold: "Gold is a precious metal known for its luster, conductivity, and resistance to corrosion. It is widely used in jewelry, electronics, dentistry, and as a financial asset.",
  Lithium:
    "Lithium minerals, such as spodumene and lepidolite, are the primary sources of lithium, a lightweight metal crucial for rechargeable batteries, especially in electric vehicles, smartphones, and energy storage systems.",
  Amethyst:
    "Amethyst is a violet variety of quartz valued for its striking color and clarity, commonly used in jewelry and believed to have calming and protective properties.",
  Sapphire:
    "Sapphire is a durable gemstone typically known for its deep blue color, though it occurs in many hues. It’s prized in jewelry and also used in industrial applications like watch crystals and electronics due to its hardness.",
  Tourmaline:
    "Tourmaline is a colorful boron-silicate mineral found in a wide range of vibrant shades. It is popular in gem collections and jewelry and is known for its piezoelectric properties.",
  Beryl:
    "Beryl is a mineral group that includes gemstones such as emerald and aquamarine. It forms in hexagonal crystals and is valued for its clarity and color variations.",
  "Clays for Bricks":
    "Clay is a fine-grained natural soil material used in the production of bricks and ceramics. When fired, it hardens to form durable building materials essential in the construction industry.",
  Sand: "Sand is a granular material composed mainly of quartz. It is essential in construction for making concrete and mortar, and in manufacturing glass and foundry molds.",
  Gravel:
    "Gravel consists of coarse rock fragments and is widely used in construction, especially for road base, concrete aggregate, and drainage systems.",
  "Glass and Ceramics":
    "Glass and ceramics are industrial materials made from quartz, sand, feldspars, and clays. They are used in household items, electronics, architecture, and high-temperature engineering components.",
  Peat: "Peat is an organic material formed from decomposed plant matter, used as a low-grade fuel and soil conditioner. In Rwanda, it is extracted from Bisagara District in the Southern Province.",
  "Oil (Petroleum)":
    "Oil (Petroleum) is currently under exploration in Rwanda for reserve estimation. It is a fossil fuel potentially valuable for domestic energy production, refining, and industrial use.",
  "Methane Gas":
    "Methane gas is being exploited from Lake Kivu, Rwanda. It is used for electricity generation and has potential for expanded use in industrial energy and domestic cooking fuel.",
};

function Scene() {
  const { viewport } = useThree();
  const vh = viewport.height;
  const offsetFactor = 0.7;
  const order = Object.keys(descriptions);

  return (
    <Scroll>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      {order.map((label, i) => (
        <group key={label} position={[0, -i * offsetFactor * vh, 0]}>
          <RotatingModel
            position={[0, 0, 0]}
            label={label}
            ModelComponent={models[label]}
            modelScale={
              label === "Cassiterite"
                ? [0.06, 0.06, 0.06]
                : label === "Amethyst"
                ? [0.07, 0.07, 0.07]
                : label === "Sapphire"
                ? [1.5, 1.5, 1.5]
                : label === "Tourmaline"
                ? [5, 5, 5]
                : label === "Beryl"
                ? [0.2, 0.2, 0.2]
                : label === "Gold"
                ? [12, 12, 12]
                : label === "Lithium"
                ? [0.6, 0.6, 0.6]
                : label === "Clays for Bricks"
                ? [0.003, 0.003, 0.003]
                : label === "Sand"
                ? [0.5, 0.75, 0.25]
                : label === "Gravel"
                ? [1.5, 1.5, 1.5]
                : label === "Glass and Ceramics"
                ? [6, 6, 6]
                : label === "Peat"
                ? [0.01, 0.01, 0.01]
                : label === "Oil (Petroleum)"
                ? [1.5, 1.5, 1.5]
                : [1, 1, 1]
            }
          />
          <Annotation
            start={[0, -0.2, 0]}
            vertex={[0.5, 0.5, 0]}
            end={[2.5, 0.5, 0]}
            text={descriptions[label]}
            textPos={[3, 0.5, 0]}
          />
        </group>
      ))}
    </Scroll>
  );
}

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
    document.body.style.backgroundColor =
      colors[Math.min(index, colors.length - 1)];
  });
  useEffect(
    () => () => {
      document.body.style.backgroundColor = "";
    },
    []
  );
  return null;
}

function Minerals() {
  return (
    <>
      <Header />
      <div style={{ height: "1120vh" }}>
        <Canvas
          style={{ position: "fixed", top: 0, left: 0 }}
          camera={{ position: [0, 0, 5] }}
        >
          <ScrollControls pages={11.4} damping={0.1}>
            <Scene />
            <ScrollBackground />
          </ScrollControls>
        </Canvas>
      </div>
    </>
  );
}

export default Minerals;
