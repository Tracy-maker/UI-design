import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import Bird from "./components/models/Bird";
import ScrollManager from "./components/models/ScrollManager";
import Interface from "./components/models/Interface";
import Menu from "./components/Menu";

const App = () => {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <div className="w-full h-screen overflow-hidden bg-primary-gradient">
      <Menu
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
      <Canvas shadows camera={{ position: [0, 0, 15], fov: 30 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <Bird />
        </Suspense>
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Scroll html>
            <Interface setSection={setSection} />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
