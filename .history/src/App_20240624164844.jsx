import React, { Suspense, useEffect, useState, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import Menu from "./components/Menu";
import LoadingPage from "../components/LoadingPage";

const Bird = lazy(() => import("./components/models/Bird"));
const ScrollManager = lazy(() => import("./components/models/ScrollManager"));
const Interface = lazy(() => import("./components/models/Interface"));

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
        <Suspense fallback={<LoadingPage />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <Bird />
          <ScrollControls pages={6} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll html>
              <Interface setSection={setSection} />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
