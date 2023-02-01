import { fira_regular, mont_bold, mont_regular } from "@/styles/fonts";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { AnimatedTextCharacter, AnimatedTextWord } from "./AnimatedText";
import Background from "./Background";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "👋 Hi, the name is Shabad",
      "JavascriptFanboy.js 🎉",
      "<ReactGod 👑 />",
      "body{content: '☕️';}",
      "print('Python is a 🐍')",
    ],
    loop: true,
    delaySpeed: 500,
  });

  return (
    <div className="text-white h-screen flex flex-col text-center overflow-hidden space-y-8 items-center justify-center">
      <Background />
      <div className="relative">
        <div className="absolute w-44 h-44 bg-gradient-to-r from-pink-600 to bg-purple-500 -inset-2 rounded-full blur-md slow-spin"></div>
        <img
          className="relative w-40 h-40 object-cover mx-auto rounded-full"
          src="/main.jpeg"
          alt="A really cool picture!"
        />
      </div>
      <div className="z-20">
        <motion.div
          style={{ fontFamily: mont_regular.style.fontFamily }}
          className="text-gray-600 uppercase text-2xl tracking-[15px]"
        >
          <AnimatedTextCharacter text="Web Developer" />
        </motion.div>
        <div
          className="flex pt-5 items-center justify-center text-gray-400 text-xl lg:text-3xl"
          style={{ fontFamily: fira_regular.style.fontFamily }}
        >
          <div className="bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {text}
          </div>
          <Cursor cursorColor="#45f3ff" />
        </div>
        <div className="pt-5">
          <Link href="#about">
            <motion.button
              initial={{
                x: -50,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                delay: 3,
              }}
              style={{ fontFamily: mont_bold.style.fontFamily }}
              className="heroButton"
            >
              About
            </motion.button>
          </Link>
          <Link href="#">
            <motion.button
              initial={{
                x: -50,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                delay: 3.5,
              }}
              style={{ fontFamily: mont_bold.style.fontFamily }}
              className="heroButton"
            >
              Projects
            </motion.button>
          </Link>
          <Link href="#skills">
            <motion.button
              initial={{
                x: 50,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                delay: 4,
              }}
              style={{ fontFamily: mont_bold.style.fontFamily }}
              className="heroButton"
            >
              Skills
            </motion.button>
          </Link>
          <Link href="#">
            <motion.button
              initial={{
                x: 50,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                delay: 4.5,
              }}
              style={{ fontFamily: mont_bold.style.fontFamily }}
              className="heroButton"
            >
              Contact
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
