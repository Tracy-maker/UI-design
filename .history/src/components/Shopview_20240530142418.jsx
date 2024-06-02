import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Shop from "./models/Shop";

const ShopView = () => {
  const adjustShopForScreenSize = () => {
    let screenScale = [1, 1, 1];
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    }

    return { screenScale, screenPosition, rotation };
  };

  const { screenScale, screenPosition, rotation } = adjustShopForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <spotLight />
          <hemisphereLight />
        </Suspense>
        <Shop position={screenPosition} scale={screenScale} rotation={rotation} />
      </Canvas>
    </section>
  );
};

export default ShopView;
