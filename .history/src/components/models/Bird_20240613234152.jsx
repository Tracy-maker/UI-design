import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import birdScene from "../../assets/3d/lowpoly_humming-bird_animated.glb"; // Replace with your actual GLTF path

const Bird = () => {
  const birdRef = useRef();

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(birdScene);

  // Get access to the animations for the bird
  const { actions } = useAnimations(animations, birdRef);

  // Play the "Take 001" animation when the component mounts
  useEffect(() => {
    if (actions && actions["Take 001"]) {
      actions["Take 001"].play();
    }
  }, [actions]);

  // Use useFrame to update the bird's position and rotation
  useFrame(({ clock, camera }) => {
    const t = clock.getElapsedTime();
    const amplitudeX = 5; // Amplitude of the horizontal wave
    const amplitudeY = 2.5; // Amplitude of the vertical wave
    const frequency = 0.5; // Frequency of the wave

    const x = Math.sin(t * frequency) * amplitudeX;
    const y = Math.sin(t * frequency * 2) * amplitudeY;

    birdRef.current.position.x = x;
    birdRef.current.position.y = y;
    birdRef.current.position.z = Math.cos(t * frequency) * amplitudeX; // Z movement for a more dynamic path

    // Calculate the direction of movement for smooth turning
    const dx = Math.cos(t * frequency) * amplitudeX - Math.sin(t * frequency) * amplitudeX;
    const dy = Math.sin(t * frequency * 2) * amplitudeY;
    const angle = Math.atan2(dy, dx);

    birdRef.current.rotation.y = angle; // Rotate based on direction of movement

    // Simulate a bird-like motion with sine wave
    birdRef.current.position.y += Math.sin(t) * 0.2;

    // Ensure the bird moves in a continuous path
    if (birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = 0;
    }

    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  return <primitive ref={birdRef} object={scene} scale={[0.1, 0.1, 0.1]} />;
};

export default Bird;
