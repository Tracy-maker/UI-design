import { useEffect, useState } from "react";
import styles from "../styles";
import TextTransition, { presets } from "react-text-transition";
import ShopView from "./ShopView";

const TEXT = "Welcome  to My Portfolio";

const Story = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (TEXT.length + 1));
    }, 100); // Change letter every 100ms

    return () => clearInterval(intervalId);
  }, []);

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
        <bird/>
      </div>
      <div className="row-span-2 col-span-1 mt-28 my-auto">
        <ShopView />
      </div>
    </section>
  );
};

export default Story;
