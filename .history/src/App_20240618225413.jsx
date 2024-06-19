import React, { Suspense, useState, useEffect } from "react";
import { ScrollControls, Scroll, useScroll } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import Interface from "./components/Interface";
import Navbar from "./components/Navbar";
import Bird from "./components/models/Bird";
import ScrollManager from "./components/models/ScrollManager";

const App = () => {
  const [section, setSection] = useState(0);

  const handleSectionChange = (sectionId) => {
    setSection(sectionId);
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-primary-gradient">
      <Navbar onSectionChange={handleSectionChange} />
      <Canvas shadows camera={{ position: [0, 0, 15], fov: 30 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <Bird />
        </Suspense>
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} onSectionChange={handleSectionChange} />
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
