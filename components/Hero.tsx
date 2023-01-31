import { fira_regular, mont_bold, mont_regular } from "@/styles/fonts";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { AnimatedTextCharacter } from "./AnimatedText";
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
    delaySpeed: 2000,
  });

  return (
    <div className="text-white h-screen flex flex-col text-center overflow-hidden space-y-8 items-center justify-center">
      <Background />
      <img
        className="relative w-40 h-40 object-cover mx-auto rounded-full"
        src="/main.jpeg"
        alt="A really cool picture!"
      />
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
          <Link href="#">
            <button
              style={{ fontFamily: mont_bold.style.fontFamily }}
              className="heroButton"
            >
              About
            </button>
          </Link>
          <Link href="#">
            <button
              style={{ fontFamily: mont_bold.style.fontFamily }}
              className="heroButton"
            >
              Projects
            </button>
          </Link>
          <Link href="#">
            <button
              style={{ fontFamily: mont_bold.style.fontFamily }}
              className="heroButton"
            >
              Skills
            </button>
          </Link>
          <Link href="#">
            <button
              style={{ fontFamily: mont_bold.style.fontFamily }}
              className="heroButton"
            >
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
