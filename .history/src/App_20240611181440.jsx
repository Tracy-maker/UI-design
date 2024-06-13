import { ScrollControls, Scroll } from "@react-three/drei";
import Shop from "./components/models/Shop";
import { Canvas } from "@react-three/fiber";
import Interface from "./components/Interface";

const App = () => {
  const screenPosition = [10, 0, 0];
  const screenScale = [1, 1, 1];
  const rotation = [0, 0, 0];

  return (
    <>
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={4} damping={0.1}>
          <Scroll html>
            <Interface />
            <Shop
              position={screenPosition}
              scale={screenScale}
              rotation={rotation}
            />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
};

export default App;
