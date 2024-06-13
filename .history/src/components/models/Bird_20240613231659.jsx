import React from "react";
import { useGLTF } from "@react-three/drei";
import birdScene from "../../assets/3d/lowpoly_humming-bird_animated.glb";

const Bird = ({ position }) => {
  const { scene, animations } = useGLTF(birdScene);

  return (
    <mesh position={position} scale={[0.1, 0.1, 0.1]}> {/* Adjust the scale here */}
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
