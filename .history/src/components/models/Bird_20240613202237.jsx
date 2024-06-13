import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import birdScene from "../../assets/3d/lowpoly_humming-bird_animated.glb";

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);

  return (
    <mesh position={[-5, 20, 10]} scale={[17, 16, 3]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
