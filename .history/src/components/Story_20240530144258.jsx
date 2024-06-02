import { useEffect, useState } from "react";
import styles from "../styles";
import TextTransition, { presets } from "react-text-transition";
import ShopView from "./ShopView";

const TEXT = "Welcome to My Portfolio";

const Story = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (TEXT.length + 1));
    }, 100); // Change letter every 100ms

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative flex w-full h-screen mx-auto">
      <div className="flex flex-col justify-center items-start w-1/3 p-5">
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
      </div>
      <div className="w-2/3 h-full">
        <ShopView />
      </div>
    </section>
  );
};

export default Story;
