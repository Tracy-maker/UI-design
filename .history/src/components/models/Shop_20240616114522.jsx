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
import { a } from "@react-spring/three";
import isShopScene from "../../assets/3d/ancient_greek_book_shop.glb";

const Shop = ({ ...props }) => {
  const isShopRef = useRef();
  const { nodes, materials } = useGLTF(isShopScene);
  const rotationSpeed = 0.005; // Set the rotation speed here

  const [isShopScale, setIsShopScale] = useState([0.5, 0.5, 0.5]);
  const [isShopPosition, setIsShopPosition] = useState([0, -6.5, -43]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsShopScale([0.6, 0.8, 0.6]);
        setIsShopPosition([0, -20.5, -55]);
      } else if (window.innerWidth < 1024) {
        setIsShopScale([0.3, 0.3, 0.3]);
        setIsShopPosition([0, -6.5, -40]);
      } else {
        setIsShopScale([0.5, 0.6, 0.4]);
        setIsShopPosition([0, -17.5, -43]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // This function is called on each frame update
  useFrame(() => {
    if (isShopRef.current) {
      isShopRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <a.group ref={isShopRef} {...props} position={isShopPosition} scale={isShopScale}>
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
