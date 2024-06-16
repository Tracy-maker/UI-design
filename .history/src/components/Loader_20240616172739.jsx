import { Html } from "@react-three/drei";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center h-full">
        <motion.div
          className="loader"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            borderRadius: ["20%", "50%", "20%"]
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      </div>
      <style jsx>{`
        .loader {
          width: 4rem;
          height: 4rem;
          background-color: #3b82f6; /* Tailwind's blue-500 color */
          border-radius: 50%;
        }
        @media (min-width: 1024px) {
          /* lg: 1024px */
          .loader {
            width: 10rem;
            height: 10rem;
          }
        }
      `}</style>
    </Html>
  );
};

export default Loader;
