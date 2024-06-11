import { ScrollControls } from "@react-three/drei";
import Shop from "./components/models/Shop";
import { Canvas } from "@react-three/fiber";

const App = () => {
  const screenPosition = [0, 0, 0]; 
  const screenScale = [1, 1, 1]; 
  const rotation = [0, 0, 0]; 

  return (
    <>
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={4} damping={0.1}>
          <Shop
            position={screenPosition}
            scale={screenScale}
            rotation={rotation}
          />
          <Scroll html></Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
};

export default App;
