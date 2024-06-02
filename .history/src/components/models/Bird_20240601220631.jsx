import React from "react";
import birdScene from "../../assets/3d/lowpoly_humming-bird_animated.glb";
import { useGLTF } from "@react-three/drei";

const Bird = () => {
  const { scene, animation } = useGLTF(birdScene);
  return (
    <mesh position={[20, 2, 1]} scale={[3, 3, 3]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;