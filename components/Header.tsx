import React from "react";
import { ImBlogger, ImTwitter } from "react-icons/im";
import { TfiGithub } from "react-icons/tfi";
import { MdOutlineEmail } from "react-icons/md";
import { mont_regular } from "@/styles/fonts";
import { motion } from "framer-motion";
import { AnimatedTextCharacter } from "./AnimatedText";

type Props = {};

function Header({}: Props) {
  return (
    <header className="fixed w-full backdrop-blur-lg border-b rounded-md border-gray-700 lg:px-20 text-white flex justify-between z-40">
      <div className="flex p-5 items-center">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1 }}
        >
          <ImBlogger
            className="text-purple-500 mr-8 hover:text-glow hover:scale-150 hover:duration-700 hover:mr-12 duration-1000"
            size={25}
          />
        </motion.div>
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 2 }}
        >
          <ImTwitter
            className="text-purple-500 mr-8 hover:text-glow hover:scale-150 hover:duration-700 hover:mr-12 duration-1000"
            size={25}
          />
        </motion.div>
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 3 }}
        >
          <TfiGithub
            className="text-purple-500 mr-8 hover:text-glow hover:scale-150 hover:duration-700 hover:mr-12 duration-1000"
            size={25}
          />
        </motion.div>
      </div>
      <div className="flex p-5 items-center">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
        >
          <MdOutlineEmail
            className="text-purple-500 hover:text-glow hover:scale-150 hover:duration-700 hover:ml-12 duration-1000"
            size={25}
          />
        </motion.div>
        <motion.p
          initial={{
            y: 30,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 3 }}
          className="uppercase ml-4 heroText text-center hidden md:inline-flex"
          style={{ fontFamily: mont_regular.style.fontFamily }}
        >
          Get in Touch
        </motion.p>
      </div>
    </header>
  );
}

export default Header;
