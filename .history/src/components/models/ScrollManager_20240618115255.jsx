import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const ScrollManager = (props) => {
  const { section, onSectionChange } = props;

  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }

    const curSection = Math.floor(data.scroll.current * data.pages);
    if(data.scroll.current > lastScroll.current && curSection ===0){
        onSectionChange(1);
    } 
    if(data.scroll.current<lastScroll.current && data.scroll.current <1/(data.pages-1{
  });

  return null;
};

export default ScrollManager;
