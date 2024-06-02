import styles from "../styles";

const Story = () => {
  return (
    <section>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Welcome to My Portfolio
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span className="text-[#915EFF]">I&apos;m Rita Zhang </span>
            a Web Developer.
            <br className="text-sm sm:block hidden" />
            This is my first attempt at designing a mobile app for a flower
            shop.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;
