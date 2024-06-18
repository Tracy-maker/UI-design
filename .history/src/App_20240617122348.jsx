import React, { Suspense, useState } from "react";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Interface from "./components/Interface";
import Navbar from "./components/Navbar";
import Bird from "./components/models/Bird";

const App = () => {
  const [section, setSection] = useState(0);

  return (
    <div className="w-full h-screen overflow-hidden bg-primary-gradient">
      <Navbar />
      <Canvas shadows camera={{ position: [0, 0, 15], fov: 30 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <Bird />
        </Suspense>
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager />
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
