import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Bird from "./components/models/Bird";
import ScrollManager from "./components/models/ScrollManager";
import Interface from "./components/models/interface";

const App = () => {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <div className="w-full h-screen overflow-hidden bg-primary-gradient">
      {/* <Navbar onSectionChange={setSection} /> */}
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
    </div>
  );
};

export default App;
