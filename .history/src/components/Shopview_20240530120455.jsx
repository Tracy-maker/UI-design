import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

const ShopView = () => {
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense></Suspense>
      </Canvas>
    </section>
  );
};

export default ShopView;
