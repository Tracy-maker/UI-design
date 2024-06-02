import { useEffect, useState } from "react";
import styles from "../styles";
import TextTransition, { presets } from "react-text-transition";

const TEXT = "Welcome&nbspto MyPortfolio";

const Story = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (TEXT.length + 1));
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {TEXT.split("").map((char, i) => (
              <TextTransition
                key={i}
                springConfig={presets.wobbly}
                direction="right"
                inline
                style={{ display: "inline-block" }}
              >
                {i < index ? char : " "}
              </TextTransition>
            ))}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span className="text-[#915EFF]">I&apos;m Rita Zhang </span>
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
