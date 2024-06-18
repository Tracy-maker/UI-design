import { useScroll } from "@react-three/drei";
import React from "react";

const ScrollManager = (props) => {
  const { section, onSectionChange } = props;

  const data= useScroll();
  const lastScroll = useRef(0);


  return null;
};

export default ScrollManager;
