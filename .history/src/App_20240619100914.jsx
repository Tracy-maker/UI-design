import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Navbar from "./components/Navbar";
import Bird from "./components/models/Bird";
import ScrollManager from "./components/models/ScrollManager";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const [section, setSection] = useState(0);

  return (
    <main className="w-full h-screen overflow-hidden bg-primary-gradient">
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
              <Route path="/" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </main>
  );
};

export default App;
