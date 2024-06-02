import React from "react";
import birdScene from "../assets/3d/bird.glb";

const Bird = () => {
  const {scene, animation}= useGLTF(birdScene);
  return <mesh>Bird</mesh>;
};

export default Bird;
