import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const ScrollManager = (props) => {
  const { section, onSectionChange } = props;

  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

 useFrame(()=>{
    if(isAnimating.current){
        lastScroll.current = data.scroll.current;
        return
    }
 })

  return null;
};

export default ScrollManager;
