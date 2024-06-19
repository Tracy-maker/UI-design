import React, { Suspense, useState } from "react";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Navbar from "./components/Navbar";
import Bird from "./components/models/Bird";
import ScrollManager from "./components/models/ScrollManager";
import Interface from "./components/Interface";
import { Router } from "react-router-dom";

const App = () => {
  const [section, setSection] = useState(0);

  return (
    <main className="w-full h-screen overflow-hidden bg-primary-gradient">
      <Router>
        <Navbar onSectionChange={setSection} />
        <Canvas shadows camera={{ position: [0, 0, 15], fov: 30 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <Bird />
          </Suspense>
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </Router>
    </main>
  );
};

export default App;
