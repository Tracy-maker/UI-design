import { ScrollControls, Scroll } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Interface from "./components/Interface";
import Navbar from "./components/Navbar";
import Bird from "./components/models/Bird";

const App = () => {

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = -(clientY / window.innerHeight) * 2 + 1;
    setMousePosition([x * 10, y * 10, 0]); 
  };


  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);


  return (
    <div className="w-full h-screen overflow-hidden bg-primary-gradient ">
      <Navbar />
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <Bird position={mousePosition} /> 
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
