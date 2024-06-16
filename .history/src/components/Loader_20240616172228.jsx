import { Html } from "@react-three/drei";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center h-full">
        <motion.div
          className="w-16 h-16 bg-blue-500 rounded-full"
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
    </Html>
  );
};

export default Loader;
