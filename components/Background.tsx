import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Background({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1.2],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2,
      }}
      className="relative flex items-center justify-center lg:mt-48"
    >
      <div className="border absolute mt-52 border-gray-700 opacity-30 rounded-full h-[300px] w-[300px]" />
      <div className="border absolute mt-52 border-gray-600 opacity-50 rounded-full h-[500px] w-[500px]" />
      <div className="border absolute mt-52 border-purple-500 opacity-70 rounded-full h-[650px] w-[650px] animate-pulse" />
      <div className="border absolute mt-52 border-pink-600 opacity-40 animate-pulse delay-1000 rounded-full h-[800px] w-[800px]" />
    </motion.div>
  );
}

export default Background;
