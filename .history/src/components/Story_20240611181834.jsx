import { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import TextTransition, { presets } from "react-text-transition";
import Shop from "./models/Shop";
import Bird from "./models/Bird";
import styles from "../styles";

const TEXT = "Welcome to My Portfolio";

const Story = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (TEXT.length + 1));
    }, 100); // Change letter every 100ms

    return () => clearInterval(intervalId);
  }, []);

  const adjustShopForScreenSize = () => {
    let screenScale = [1.4, 1.4, 1.4];
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.2, 0.2, 0.2];
    }

    return { screenScale, screenPosition, rotation };
  };

  const { screenScale, screenPosition, rotation } = adjustShopForScreenSize();

  return (
    <section className="relative w-full h-screen grid grid-cols-2 grid-rows-2">
      <div className="p-5 row-span-1 col-span-1 flex flex-col justify-center items-start">
        <h1 className={`${styles.heroHeadText} text-white`}>
          {TEXT.split("").map((char, i) => (
            <TextTransition
              key={i}
              springConfig={presets.wobbly}
              direction="right"
              inline
              style={{ display: "inline-block", whiteSpace: "pre" }}
            >
              {i < index ? char : " "}
            </TextTransition>
          ))}
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          <span className="text-[#b085f5]">I&apos;m Rita Zhang </span>
          a Web Developer.
          <br className="sm:block hidden" />
          This is my first attempt at designing
          <br className="sm:block hidden" />a mobile app for a flower shop.
        </p>
     
    </section>
  );
};

export default Story;
