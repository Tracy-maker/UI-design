import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Shop from "./models/Shop";

const ShopView = () => {
  const adjustShopForScreenSize = () => {
    let screenScale = [1.4, 1.4, 1.4];
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.2, 0.2, 0.2];
    }

    return { screenScale, screenPosition, rotation };
  };

  const { screenScale, screenPosition, rotation } = adjustShopForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ position: [0, 0, 100], near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
        <directionalLight position={[0, 0, 5]} color="red" />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
        </Suspense>
        <Shop position={screenPosition} scale={screenScale} rotation={rotation} />
      </Canvas>
    </section>
  );
};

export default ShopView;
