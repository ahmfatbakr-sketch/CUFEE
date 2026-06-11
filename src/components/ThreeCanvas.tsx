import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

const CoffeeMug = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      // Slight floating wobble
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={groupRef} scale={1.5}>
      {/* Cup Body (Dark Ceramic) */}
      <mesh>
        <cylinderGeometry args={[0.9, 0.7, 1.6, 64]} />
        <meshPhysicalMaterial 
          color="#1A1817" 
          metalness={0.1}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>
      
      {/* Cup Inside (Coffee Texture/Color) */}
      <mesh position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.82, 0.82, 0.05, 64]} />
        <meshPhysicalMaterial 
          color="#3E2723"
          metalness={0.1}
          roughness={0.5}
        />
      </mesh>
      
      {/* Froth Highlights (Subtle) */}
      <mesh position={[0.2, 0.726, -0.2]} rotation={[-Math.PI/2, 0, 0]}>
        <circleGeometry args={[0.3, 32]} />
        <meshBasicMaterial color="#9B7C62" transparent opacity={0.6} />
      </mesh>

      {/* Cup Rim (Same as Body) */}
      <mesh position={[0, 0.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.86, 0.04, 32, 64]} />
        <meshPhysicalMaterial 
          color="#1A1817" 
          metalness={0.1} 
          roughness={0.1} 
          clearcoat={1}
        />
      </mesh>

      {/* Handle */}
      <mesh position={[0.9, 0, 0]}>
        <torusGeometry args={[0.5, 0.15, 32, 64]} />
        <meshPhysicalMaterial 
          color="#1A1817" 
          metalness={0.1} 
          roughness={0.1} 
          clearcoat={1}
        />
      </mesh>
    </group>
  );
};

const Shisha = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= delta * 0.1;
      // Slight floating wobble opposite to the mug
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime + Math.PI) * 0.1 - 0.2; 
    }
  });

  return (
    <group ref={groupRef} scale={1.2} position={[1.5, -0.2, -1]}>
      {/* Base / Vase (Glass) */}
      <mesh position={[0, -0.6, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhysicalMaterial 
          color="#A09388"
          transmission={0.9}
          opacity={1}
          metalness={0.1}
          roughness={0.1}
          clearcoat={1}
          ior={1.5}
        />
      </mesh>
      
      {/* Stem / Pipe */}
      <mesh position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.08, 0.12, 1.8, 32]} />
        <meshPhysicalMaterial 
          color="#44352D" // Dark brown/gold
          metalness={0.8}
          roughness={0.2}
          clearcoat={1}
        />
      </mesh>

      {/* Tray */}
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.05, 32]} />
        <meshPhysicalMaterial 
          color="#44352D" 
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Bowl */}
      <mesh position={[0, 1.7, 0]}>
        <cylinderGeometry args={[0.2, 0.1, 0.4, 32]} />
        <meshPhysicalMaterial 
          color="#3E2723" // Dark clay
          metalness={0.1}
          roughness={0.8}
        />
      </mesh>

      {/* Hose Connector */}
      <mesh position={[0.25, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <cylinderGeometry args={[0.05, 0.05, 0.3, 16]} />
        <meshPhysicalMaterial 
          color="#44352D" 
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
};

export const ThreeCanvas = () => {
  return (
    <div className="absolute inset-0 z-0">
      {/* Camera positioned to show the side and inside of the mug */}
      <Canvas camera={{ position: [2.5, 3.5, 5], fov: 45 }} shadows>
        {/* Soft, warm ambient lighting */}
        <ambientLight intensity={0.8} color="#FDF6EE" />
        {/* Key directional light to cast strong shadows, like the image */}
        <directionalLight 
          position={[3, 5, 2]} 
          intensity={2.5} 
          color="#FFF8E7" 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024}
        />
        <Environment preset="apartment" />
        
        <group position={[-1.2, 0, 0]}>
          <CoffeeMug />
        </group>
        <Shisha />
        
        {/* Ground plane to receive shadows */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          {/* Use shadow material or physical material blending with background */}
          <shadowMaterial transparent opacity={0.15} />
        </mesh>
      </Canvas>
    </div>
  );
};
