import { ScrollControls, Scroll } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Interface from "./components/Interface";
import Navbar from "./components/Navbar";

const App = () => {

  return (
    <div className="w-full h-screen overflow-hidden bg-primary-gradient">
      <Navbar />
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
        <ScrollControls pages={4} damping={0.1}>
          <Scroll html>
            <div className="relative">
              <Interface />
           
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
