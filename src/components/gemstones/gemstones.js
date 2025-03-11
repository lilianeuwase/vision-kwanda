import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ScrollControls, Scroll, Text, useScroll, useGLTF } from '@react-three/drei'
import Header from "../header"

// RotatingModel auto-rotates when not dragging, and allows custom rotations via pointer events.
function RotatingModel({ position, label, ModelComponent, modelScale = [1, 1, 1] }) {
  const ref = useRef()
  const dragStart = useRef([0, 0])
  const rotationStart = useRef([0, 0, 0])
  const [dragging, setDragging] = useState(false)

  // Auto-rotate when not dragging.
  useFrame((state, delta) => {
    if (!dragging && ref.current) {
      ref.current.rotation.x += delta * 0.2
      ref.current.rotation.y += delta * 0.2
      ref.current.rotation.z += delta * 0.2
    }
  })

  const onPointerDown = (event) => {
    event.stopPropagation()
    setDragging(true)
    dragStart.current = [event.clientX, event.clientY]
    rotationStart.current = [
      ref.current.rotation.x,
      ref.current.rotation.y,
      ref.current.rotation.z
    ]
  }

  const onPointerMove = (event) => {
    if (dragging) {
      const deltaX = event.clientX - dragStart.current[0]
      const deltaY = event.clientY - dragStart.current[1]
      const sensitivity = 0.005
      ref.current.rotation.x = rotationStart.current[0] + deltaY * sensitivity
      ref.current.rotation.y = rotationStart.current[1] + deltaX * sensitivity
    }
  }

  const onPointerUp = () => {
    setDragging(false)
  }

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
        color="white"         // model names are white
        anchorX="center"
        depthTest={false}     // ensures text always appears on top
        renderOrder={10}      // renders text last
      >
        {label}
      </Text>
    </group>
  )
}

// Load your custom models using useGLTF
const AmethystModel = React.forwardRef((props, ref) => {
  const { scene } = useGLTF('/amethyst_crystal/scene.gltf')
  return <primitive ref={ref} object={scene} {...props} />
})

const SapphireModel = React.forwardRef((props, ref) => {
  const { scene } = useGLTF('/sapphire_6-3/scene.gltf')
  return <primitive ref={ref} object={scene} {...props} />
})

const SpinelsModel = React.forwardRef((props, ref) => {
  const { scene } = useGLTF('/spinels_gem/scene.gltf')
  return <primitive ref={ref} object={scene} {...props} />
})

const BerylModel = React.forwardRef((props, ref) => {
  const { scene } = useGLTF('/beryl/scene.gltf')
  return <primitive ref={ref} object={scene} {...props} />
})

const TourmalineModel = React.forwardRef((props, ref) => {
  const { scene } = useGLTF('/tourmaline/scene.gltf')
  return <primitive ref={ref} object={scene} {...props} />
})

const SpurriteModel = React.forwardRef((props, ref) => {
  const { scene } = useGLTF('/spurrite_on_blue_calcite_5-30-2020/scene.gltf')
  return <primitive ref={ref} object={scene} {...props} />
})

// Main Scene with centered models and vertical offsets.
function Scene() {
  const { viewport } = useThree()
  const vh = viewport.height
  const offsetFactor = 0.7

  return (
    <Scroll>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      {/* 1st model: Amethyst */}
      <group position={[0, 0, 0]}>
        <RotatingModel 
          position={[0, 0, 0]} 
          label="Amethyst" 
          ModelComponent={AmethystModel} 
          modelScale={[0.07, 0.07, 0.07]} 
        />
      </group>
      {/* 2nd model: Sapphire */}
      <group position={[0, -offsetFactor * vh, 0]}>
        <RotatingModel 
          position={[0, 0, 0]} 
          label="Sapphire" 
          ModelComponent={SapphireModel} 
          modelScale={[1.5, 1.5, 1.5]} 
        />
      </group>
      {/* 3rd model: Spinels Gem */}
      <group position={[0, -2 * offsetFactor * vh, 0]}>
        <RotatingModel 
          position={[0, 0, 0]} 
          label="Spinels Gem" 
          ModelComponent={SpinelsModel} 
          modelScale={[0.02, 0.02, 0.02]} 
        />
      </group>
      {/* 4th model: Beryl */}
      <group position={[0, -3 * offsetFactor * vh, 0]}>
        <RotatingModel 
          position={[0, 0, 0]} 
          label="Beryl" 
          ModelComponent={BerylModel} 
          modelScale={[0.2, 0.2, 0.2]} 
        />
      </group>
      {/* 5th model: Tourmaline */}
      <group position={[0, -4 * offsetFactor * vh, 0]}>
        <RotatingModel 
          position={[0, 0, 0]} 
          label="Tourmaline" 
          ModelComponent={TourmalineModel} 
          modelScale={[5, 5, 5]} 
        />
      </group>
      {/* 6th model: Spurrite on Blue Calcite */}
      <group position={[0, -5 * offsetFactor * vh, 0]}>
        <RotatingModel 
          position={[0, 0, 0]} 
          label="Spurrite on Blue Calcite" 
          ModelComponent={SpurriteModel} 
          modelScale={[0.7, 0.7, 0.7]} 
        />
      </group>
    </Scroll>
  )
}

// Updates the document background color based on normalized scroll offset.
function ScrollBackground() {
  const scroll = useScroll()
  useFrame(() => {
    let bg
    if (scroll.offset < 0.1666) {
      bg = '#BB4430' // Amethyst
    } else if (scroll.offset < 0.3333) {
      bg = '#7EBDC2' // Sapphire
    } else if (scroll.offset < 0.5) {
      bg = '#F3DFA2' // Spinels Gem
    } else if (scroll.offset < 0.6666) {
      bg = '#7BA05B' // Beryl
    } else if (scroll.offset < 0.8333) {
      bg = '#DDA0DD' // Tourmaline
    } else {
      bg = '#1E90FF' // Spurrite on Blue Calcite
    }
    document.body.style.backgroundColor = bg
  })
  return null
}

// The main App component (named Gemstones)
function Gemstones() {
  return (
    <>
    <Header/>
  
    <div style={{ height: '450vh' }}>
      <Canvas style={{ position: 'fixed', top: 0, left: 0 }} camera={{ position: [0, 0, 5] }}>
        <ScrollControls pages={4.5} damping={0.1}>
          <Scene />
          <ScrollBackground />
        </ScrollControls>
      </Canvas>
    </div>
    </>
  )
}

export default Gemstones