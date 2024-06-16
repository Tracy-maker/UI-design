import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

function Flower() {
  const gltf = useLoader(GLTFLoader, '/blooming_hibiscus_time-lapse_animation.glb');
  return <primitive object={gltf.scene} />;
}

export default function App() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Flower />
      </Suspense>
    </Canvas>
  );
}
