import React from "react";
import birdScene from "../../assets/3d/lowpoly_humming-bird_animated.glb";
import { useGLTF } from "@react-three/drei";

const Bird = () => {
  const { scene, animation } = useGLTF(birdScene);
  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      Bird
    </mesh>
  );
};

export default Bird;