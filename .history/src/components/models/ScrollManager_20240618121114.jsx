import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

const ScrollManager = (props) => {
  const { section, onSectionChange } = props;

  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);
  const controls = useAnimation();

  useEffect(() => {
    const scrollToSection = async () => {
      isAnimating.current = true;
      await controls.start({
        scrollTop: section * data.el.clientHeight,
        transition: { duration: 1, ease: "easeInOut" }
      });
      isAnimating.current = false;
    };
    scrollToSection();
  }, [section, controls, data.el.clientHeight]);

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }

    const curSection = Math.floor(data.scroll.current * data.pages);
    if (data.scroll.current > lastScroll.current && curSection === 0) {
      onSectionChange(1);
    }
    if (
      data.scroll.current < lastScroll.current &&
      data.scroll.current < 1 / (data.pages - 1)
    )
      onSectionChange(0);
  });

  return (
    <motion.div
      style={{ overflow: 'auto' }}
      animate={controls}
    />
  );
};

export default ScrollManager;
