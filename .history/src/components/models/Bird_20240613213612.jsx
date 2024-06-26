import React from "react";
import { useGLTF } from "@react-three/drei";
import birdScene from "../../assets/3d/lowpoly_humming-bird_animated.glb";

const Bird = ({ position }) => {
  const { scene, animations } = useGLTF(birdScene);

  return (
    <mesh position={position} scale={[1, 1, 1]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
