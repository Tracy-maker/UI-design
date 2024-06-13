import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import birdScene from "../../assets/3d/lowpoly_humming-bird_animated.glb";

const Bird = ({ position }) => {
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, scene);
  const birdRef = useRef();
  const prevPosition = useRef({ x: 0, y: 0 });

  // Play the first animation clip if available
  React.useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]);

  // Use useFrame to create a natural flying effect with smooth turning
  useFrame(({ clock }) => {
    if (birdRef.current) {
      const t = clock.getElapsedTime();
      const amplitudeX = 3; // Amplitude of the horizontal wave
      const amplitudeY = 1.5; // Amplitude of the vertical wave
      const frequency = 0.5; // Frequency of the wave (lower values for slower motion)

      const x = position[0] + Math.sin(t * frequency) * amplitudeX;
      const y = position[1] + Math.sin(t * frequency * 2) * amplitudeY; // Double frequency for vertical movement

      birdRef.current.position.x = x;
      birdRef.current.position.y = y;

      // Calculate the direction of movement for smooth turning
      const dx = x - prevPosition.current.x;
      const dy = y - prevPosition.current.y;
      const angle = Math.atan2(dy, dx);

      birdRef.current.rotation.z = angle; // Rotate based on direction of movement

      // Update previous position
      prevPosition.current.x = x;
      prevPosition.current.y = y;
    }
  });

  return <primitive ref={birdRef} object={scene} scale={[0.1, 0.1, 0.1]} position={position} />;
};

export default Bird;
