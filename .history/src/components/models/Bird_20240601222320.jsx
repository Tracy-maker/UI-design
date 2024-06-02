import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import birdScene from "../../assets/3d/lowpoly_humming-bird_animated.glb";

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);

  return <primitive object={scene} position={[-5, 2, 1]} scale={[30, 30, 30]} />;
};

export default Bird;