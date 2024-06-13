import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import birdScene from "../../assets/3d/lowpoly_humming-bird_animated.glb";

const Bird = ({ position }) => {
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, scene);
  const birdRef = useRef();

  // Play the first animation clip if available
  React.useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]);

  // Use useFrame to create a curved left-right flying effect
  useFrame(({ clock }) => {
    if (birdRef.current) {
      const t = clock.getElapsedTime();
      const amplitude = 5; // Amplitude of the wave
      const frequency = 0.5; // Frequency of the wave (lower values for slower motion)
      birdRef.current.position.x = position[0] + Math.sin(t * frequency) * amplitude;
      birdRef.current.position.y = position[1] + Math.cos(t * frequency) * amplitude * 0.5; // Smaller amplitude for vertical movement
      birdRef.current.rotation.y = Math.sin(t * frequency) * 0.1; // Small rotation for more realism
    }
  });

  return <primitive ref={birdRef} object={scene} scale={[0.05, 0.05, 0.05]} position={position} />;
};

export default Bird;
