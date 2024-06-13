import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import birdScene from "../../assets/3d/lowpoly_humming-bird_animated.glb";

const Bird = ({ position }) => {
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, scene);
  const birdRef = useRef();
  const prevPosition = useRef({ x: 0 });

  // Play the first animation clip if available
  React.useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]);

  // Use useFrame to create a left-right flying effect with smooth turning
  useFrame(({ clock }) => {
    if (birdRef.current) {
      const t = clock.getElapsedTime();
      const amplitudeX = 3; // Amplitude of the horizontal wave
      const frequency = 0.5; // Frequency of the wave (lower values for slower motion)

      const x = position[0] + Math.sin(t * frequency) * amplitudeX;

      birdRef.current.position.x = x;

      // Calculate the direction of movement for smooth turning
      const dx = x - prevPosition.current.x;
      const angle = Math.atan2(0, dx); // Angle based on horizontal movement

      birdRef.current.rotation.y = angle; // Rotate based on direction of movement

      // Update previous position
      prevPosition.current.x = x;
    }
  });

  return <primitive ref={birdRef} object={scene} scale={[0.05, 0.05, 0.05]} />;
};

export default Bird;
