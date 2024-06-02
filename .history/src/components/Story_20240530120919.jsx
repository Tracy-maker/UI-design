import { useEffect, useState } from "react";
import styles from "../styles";
import TextTransition, { presets } from "react-text-transition";
import ShopView from "./Shopview";


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
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <ShopView/>
        <div>
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
      </div>
    </section>
  );
};

export default Story;
