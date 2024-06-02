import React from "react";
import { useGLTF } from "@react-three/drei";
import { HemisphereLight, SpotLight, PointLight, Mesh } from "@react-three/fiber";

const FlowerOne = () => {
  const shop = useGLTF("./shop/scene.gltf");

  return (
    <group>
      <HemisphereLight intensity={0.15} groundColor="black" />
      <SpotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <PointLight intensity={1} />
      <primitive
        object={shop.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

export default FlowerOne;
