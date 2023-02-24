import { fira_regular, lato_regular } from "@/styles/fonts";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";

type Props = { icon: any; delay: number; cat: number };

function Expandable({ icon, delay }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      layout
      onClick={() => setIsOpen(!isOpen)}
      initial={{ y: 50, opacity: 0, scale: 0.3 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: delay,
      }}
      whileHover={{ scale: 1.08 }}
      viewport={{ once: true }}
      className={`mx-3 ${
        isOpen && "w-[150px] ml-20"
      } bg-gradient-to-b shadow-purple-600 shadow-lg from-pink-600 to-purple-600 p-5 rounded-full hover:scale-110 duration-300 cursor-pointer`}
    >
      {icon}
    </motion.div>
  );
}

export default Expandable;
