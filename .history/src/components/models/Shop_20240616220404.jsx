import React, { useRef, useEffect } from "react";
import { useGLTF, useFrame } from "@react-three/drei";
import { motion, useAnimation } from "framer-motion";
import isShopScene from "../../assets/3d/ancient_greek_book_shop.glb";

const Shop = ({ ...props }) => {
  const isShopRef = useRef();
  const { nodes, materials } = useGLTF(isShopScene);
  const rotationSpeed = 0.004;
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        controls.start({
          scale: [0.7, 0.8, 0.6],
          position: [0, -20.5, -55],
        });
      } else {
        controls.start({
          scale: [0.45, 0.6, 0.45],
          position: [0, -14.5, -43],
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [controls]);

  // This function is called on each frame update
  useFrame(() => {
    if (isShopRef.current) {
      isShopRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <motion.group
      ref={isShopRef}
      {...props}
      animate={controls}
      initial={{ scale: [0.5, 0.5, 0.5], position: [0, -6.5, -43] }}
    >
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
    </motion.group>
  );
};

export default Shop;
