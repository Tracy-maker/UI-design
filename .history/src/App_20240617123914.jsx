import React, { Suspense, useState } from "react";
import { ScrollControls, Scroll, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Interface from "./components/Interface";
import Navbar from "./components/Navbar";
import Bird from "./components/models/Bird";
import ScrollManager from "./components/models/ScrollManager";
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  const [section, setSection] = useState(0);

  return (
    <ErrorBoundary>
      <div className="w-full h-screen overflow-hidden bg-primary-gradient">
        <Navbar />
        <Canvas shadows camera={{ position: [0, 0, 15], fov: 30 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <Bird />
          </Suspense>
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll html>
              <Html fullscreen>
                <div className="relative">
                  <Interface />
                </div>
              </Html>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>
    </ErrorBoundary>
  );
};

export default App;
