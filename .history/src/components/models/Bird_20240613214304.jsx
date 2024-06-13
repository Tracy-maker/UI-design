import React from "react";
import { useGLTF } from "@react-three/drei";
import birdScene from "../../assets/3d/lowpoly_humming-bird_animated.glb";

const Bird = ({ position }) => {
  const { scene, animations } = useGLTF(birdScene);

  return (
    <mesh position={[position[0], position[1], position[2] + 5]} scale={[0.1, 0.1, 0.1]}> {/* Adjust the position z-coordinate */}
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
