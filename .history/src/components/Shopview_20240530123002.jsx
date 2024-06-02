import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Shop from "./models/Shop";

const ShopView = () => {
 
    const adjustShopForScreenSize=()=>{
        let screenScale=null;
        let screenPosition=[0,-6.5,-43];
        let rotation=[0.1, 4.7,0]
    }

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
        <Shop />
      </Canvas>
    </section>
  );
};

export default ShopView;
