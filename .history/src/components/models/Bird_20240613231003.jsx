import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import birdScene from "../../assets/3d/lowpoly_humming-bird_animated.glb";

const Bird = ({ position }) => {
  const { scene } = useGLTF(birdScene);
  const birdRef = useRef();

  useFrame(() => {
    if (birdRef.current) {
      birdRef.current.position.set(position[0], position[1], position[2] + 10); // Bring bird closer to the camera
    }
  });

  return <primitive ref={birdRef} object={scene} scale={[0.05, 0.05, 0.05]} />; // Adjust scale as needed
};

export default Bird;
