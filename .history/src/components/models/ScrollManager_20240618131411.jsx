import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const ScrollManager = ({ section, onSectionChange }) => {
  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    const scrollElement = data.el;
    gsap.to(scrollElement, {
      duration: 1,
      ease: "power2.inOut",
      scrollTo: { y: section * scrollElement.clientHeight },
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [section, data.el]);

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }

    const curSection = Math.floor(data.scroll.current * data.pages);
    if (data.scroll.current > lastScroll.current && curSection === 0) {
      onSectionChange(1);
    }
    if (data.scroll.current < lastScroll.current && data.scroll.current < 1 / (data.pages - 1)) {
      onSectionChange(0);
    }
  });

  return null;
};

export default ScrollManager;
