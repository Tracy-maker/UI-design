import React from "react";
import birdScene from "../../assets/3d/src/assets/3d/lowpoly_humming-bird_animated.glb.glb";
import { useGLTF } from "@react-three/drei";

const Bird = () => {
  const {scene, animation}= useGLTF(birdScene);
  return <mesh>Bird</mesh>;
};

export default Bird;
