import { ScrollControls, Scroll } from "@react-three/drei";
import Shop from "./components/models/Shop";
import { Canvas } from "@react-three/fiber";
import Interface from "./components/Interface";

const App = () => {
  const screenPosition = [10, 20, 20];
  const screenScale = [1, 1, 1];
  const rotation = [0, 0, 0];

  return (
    <div className="w-full h-screen overflow-hidden bg-primary-gradient">
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={4} damping={0.1}>
          <Scroll html>
            <div className="relative">
              <Interface />
              <Shop
                position={screenPosition}
                scale={screenScale}
                rotation={rotation}
              />
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;