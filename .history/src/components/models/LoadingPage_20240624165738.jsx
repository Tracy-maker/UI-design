import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const SpinningCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[4, 4, 4]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

const LoadingPage = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-primary-gradient text-white text-2xl">
      <div className="flex flex-col items-center">
        <Canvas className="w-98 h-98 mb-4">
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <SpinningCube />
          <OrbitControls />
        </Canvas>
        <h1>Loading...</h1>
      </div>
    </div>
  );
};

export default LoadingPage;
