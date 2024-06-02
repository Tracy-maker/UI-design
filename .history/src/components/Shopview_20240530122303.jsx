import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Shop from "./models/Shop";

const ShopView = () => {
  return (
    <section className="w-full h-screen ">
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
        <Shop />
      </Canvas>
    </section>
  );
};

export default ShopView;
