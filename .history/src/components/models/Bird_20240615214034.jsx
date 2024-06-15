import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import birdScene from "../../assets/3d/lowpoly_humming-bird_animated.glb";

const Bird = () => {
  const birdRef = useRef();
  const prevPosition = useRef({ x: 0 });
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);
  const [mousePosition, setMousePosition] = useState([0, 0, 0]);
  const [birdScale, setBirdScale] = useState([1, 1, 1]);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = -(clientY / window.innerHeight) * 2 + 1;
      setMousePosition([x * 5, y * 5, 0]);
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBirdScale([0.5, 0.5, 0.5]);
      } else if (window.innerWidth < 1024) {
        setBirdScale([0.75, 0.75, 0.75]);
      } else {
        setBirdScale([1, 1, 1]);
      }
    };

    handleResize();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useFrame(({ clock }) => {
    if (birdRef.current) {
      const t = clock.getElapsedTime();
      const amplitude = 3;
      const frequency = 0.5;

      const x = Math.sin(t * frequency) * amplitude;
      const y = mousePosition[1];
      const z = mousePosition[2];

      birdRef.current.position.set(x, y, z);

      // Calculate the direction of movement for smooth turning
      const dx = x - prevPosition.current.x;

      // Rotate based on direction of movement
      birdRef.current.rotation.y = dx > 0 ? Math.PI / 2 : -Math.PI / 2;

      // Update previous position
      prevPosition.current.x = x;
    }
  });

  return <primitive ref={birdRef} object={scene} scale={birdScale} />;
};

export default Bird;
