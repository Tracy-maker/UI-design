/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: YunaOthmer (https://sketchfab.com/YunaOthmer)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ancient-greek-book-shop-25eab089b795408b93d59be680aae6c2
Title: Ancient Greek book shop
*/

import React, { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import isShopScene from "../../assets/3d/ancient_greek_book_shop.glb";
import { a } from "@react-spring/three";

const Shop = ({ ...props }) => {
  const isShopRef = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(isShopScene);
  const [isRotating, setIsRotating] = useState(false);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (event) => {
    event.stopPropagation();
    setIsRotating(true);
    lastX.current = event.clientX || event.touches[0].clientX;
  };

  const handlePointerUp = (event) => {
    event.stopPropagation();
    setIsRotating(false);
  };

  const handlePointerMove = (event) => {
    if (isRotating) {
      const clientX = event.clientX || event.touches[0].clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      isShopRef.current.rotation.y += delta * 0.5;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.5;
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("touchstart", handlePointerDown);
    canvas.addEventListener("touchend", handlePointerUp);
    canvas.addEventListener("touchmove", handlePointerMove);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("touchstart", handlePointerDown);
      canvas.removeEventListener("touchend", handlePointerUp);
      canvas.removeEventListener("touchmove", handlePointerMove);
    };
  }, [gl]);

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      isShopRef.current.rotation.y += rotationSpeed.current;
    }
  });

  return (
    <a.group ref={isShopRef} {...props}>
      <group
        position={[14.738, 8.824, -14.96]}
        rotation={[-Math.PI / 2, 0, -1.484]}
        scale={[1.797, 1.241, 1.153]}
      >
        <mesh
          geometry={nodes["Object016_Material_#130_0"].geometry}
          material={materials.Material_130}
          position={[-11.693, -23.548, 15.843]}
        />
      </group>
      <mesh
        geometry={nodes["Box013_Material_#128_0"].geometry}
        material={materials.Material_128}
        position={[5.6, 2.181, -13.012]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.498, 0.937, 1]}
      />
      <mesh
        geometry={nodes["Box015_Material_#126_0"].geometry}
        material={materials.Material_126}
        position={[-0.822, 27.084, 20.343]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.797, 1.241, 1.153]}
      />
      <mesh
        geometry={nodes["Plane001_Material_#125_0"].geometry}
        material={materials.Material_125}
        position={[-3.444, 2.911, -2.232]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.733, 0.931, 1]}
      />
      <mesh
        geometry={nodes["Object012_Material_#130_0"].geometry}
        material={materials.Material_130}
        position={[-0.822, 27.084, 20.343]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.797, 1.241, 1.153]}
      />
      <mesh
        geometry={nodes["Object013_Material_#127_0"].geometry}
        material={materials.Material_127}
        position={[-0.822, 27.084, 20.343]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.797, 1.241, 1.153]}
      />
      <mesh
        geometry={nodes["Object014_Material_#129_0"].geometry}
        material={materials.Material_129}
        position={[-0.822, 27.084, 20.343]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.797, 1.241, 1.153]}
      />
      <mesh
        geometry={nodes["Object015_Material_#124_0"].geometry}
        material={materials.Material_124}
        position={[-60.67, 0, -10.25]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-1, 1, 1]}
      />
    </a.group>
  );
};

export default Shop;