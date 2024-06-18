import React, { Suspense, useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Interface from "./components/Interface";
import Navbar from "./components/Navbar";
import Bird from "./components/models/Bird";
import ScrollManager from "./components/models/ScrollManager";

const App = () => {
  const [section, setSection] = useState(0);

  return (
    <Router>
      <div className="w-full h-screen overflow-hidden bg-primary-gradient">
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
              <Routes>
                <Route path="about" element={<About />} />
                <Route path="skills" element={<Skills />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
              </Routes>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>
    </Router>
  );
};

export default App;