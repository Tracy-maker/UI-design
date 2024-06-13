import React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import birdScene from "../../assets/3d/lowpoly_humming-bird_animated.glb";

const Bird = ({ position }) => {
  const { scene } = useGLTF(birdScene);

  useFrame(() => {
    scene.position.set(position[0], position[1], position[2] + 10); // Adjust the z-coordinate
  });

  return <primitive object={scene} scale={[0.1, 0.1, 0.1]} />;
};

export default Bird;
