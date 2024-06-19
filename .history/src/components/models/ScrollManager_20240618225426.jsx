import { useEffect } from "react";
import { useScroll } from "@react-three/drei";

const ScrollManager = ({ section, onSectionChange }) => {
  const scroll = useScroll();

  useEffect(() => {
    scroll.el.scrollTo({
      top: (section * window.innerHeight) / 4,
      behavior: "smooth",
    });
  }, [section, scroll]);

  useFrame(() => {
    const currentSection = Math.round(scroll.scroll.current * 4);
    if (currentSection !== section) {
      onSectionChange(currentSection);
    }
  });

  return null;
};

export default ScrollManager;
