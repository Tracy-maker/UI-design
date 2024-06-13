import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import birdScene from "../../assets/3d/lowpoly_humming-bird_animated.glb";

const Bird = ({ position }) => {
  const birdRef = useRef();
  const prevPosition = useRef({ x: 0 });
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]);

  useFrame(({ clock }) => {
    if (birdRef.current) {
      const t = clock.getElapsedTime();
      const amplitude = 3; // Amplitude of the horizontal wave
      const frequency = 0.5; // Frequency of the wave

      const x = Math.sin(t * frequency) * amplitude;
      const y = position[1];

      birdRef.current.position.x = x;
      birdRef.current.position.y = y;
      birdRef.current.position.z = position[2];

      // Calculate the direction of movement for smooth turning
      const dx = x - prevPosition.current.x;

      // Rotate based on direction of movement
      birdRef.current.rotation.y = dx > 0 ? Math.PI / 2 : -Math.PI / 2;

      // Update previous position
      prevPosition.current.x = x;
    }
  });

  return <primitive ref={birdRef} object={scene} scale={[0.1, 0.1, 0.1]} />;
};

export default Bird;
