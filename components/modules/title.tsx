import React from "react";
import { motion } from "framer-motion";
import { AnimatedTextCharacter } from "../AnimatedText";
import { mont_regular } from "@/styles/fonts";

type Props = { text: String };

function Title({ text }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ fontFamily: mont_regular.style.fontFamily }}
      viewport={{ once: true }}
      className="text-gray-600 uppercase text-2xl tracking-[15px] absolute top-24"
    >
      <AnimatedTextCharacter text={`${text}`} />
    </motion.div>
  );
}

export default Title;
