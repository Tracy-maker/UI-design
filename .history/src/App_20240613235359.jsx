import React, { Suspense, useEffect, useState } from "react";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Interface from "./components/Interface";
import Navbar from "./components/Navbar";
import Bird from "./components/models/Bird";

const App = () => {
  const [mousePosition, setMousePosition] = useState([0, 0, 0]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = -(clientY / window.innerHeight) * 2 + 1;
      setMousePosition([x * 6, y * 5, 0]); // Adjust scaling factor as needed
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden bg-primary-gradient">
      <Navbar />
      <Canvas shadows camera={{ position: [0, 0, 15], fov: 30 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <Bird position={mousePosition} />
        </Suspense>
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
