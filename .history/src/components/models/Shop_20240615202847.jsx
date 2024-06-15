import React, { useRef, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";

const Shop = () => {
  const { gl } = useThree();
  const handlePointerDown = (event) => {
    console.log("Pointer Down Event Triggered", event.clientX, event.clientY);
  };

  useEffect(() => {
    const canvas = gl.domElement;
    console.log("Attaching event listeners to canvas", canvas);

    canvas.addEventListener("pointerdown", handlePointerDown);

    return () => {
      console.log("Removing event listeners from canvas", canvas);
      canvas.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [gl]);

  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};