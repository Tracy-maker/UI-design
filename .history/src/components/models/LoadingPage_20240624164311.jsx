import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const SpinningCube = () => {
  return (
    <mesh rotation={[10, 10, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <SpinningCube />
        <OrbitControls />
      </Canvas>
      <h1 className="text-white text-xl">Loading...</h1>
    </div>
  );
};

export default LoadingPage;
