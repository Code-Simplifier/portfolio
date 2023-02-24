import React from "react";
import { lato_regular, mont_regular } from "@/styles/fonts";
import { motion } from "framer-motion";
import { AnimatedTextCharacter, AnimatedTextWord } from "./AnimatedText";
import Title from "./modules/title";

type Props = {};

function About({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row text-white justify-evenly items-center mx-auto max-w-7xl">
      <Title text="About" />
      <div className="xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-col md:justify-content">
        <motion.img
          initial={{ x: -200, opacity: 0, scale: 0.6 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          src="/about2.jpeg"
          alt="a really cool picture!"
          className="mt-20 shadow-purple-500 shadow-xl hidden md:inline-flex self-center w-56 h-56 object-cover rounded-full md:rounded-lg md:w-64 md:h-96 xl:min-w-fit xl:h-[550px]"
        />
        <div
          style={{ fontFamily: lato_regular.style.fontFamily }}
          className="lg:mt-48 md:mt-4 md:px-10 text-xl flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-3xl tracking-wider mb-4"
          >
            Some <span className="heroText">things</span> about me
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Hi there! I am a skilled{" "}
            <span className="heroText">web developer</span> with a passion for
            creating innovative and{" "}
            <span className="heroText">user-friendly web applications </span>.
            With 3 years of experience in the industry, I have a strong
            background in{" "}
            <span className="heroText">Javascript, Typescript </span> &{" "}
            <span className="heroText">Python </span>. I am well-versed in both
            front-end and back-end development, with a particular emphasis on
            building <span className="heroText">scalable</span> and{" "}
            <span className="heroText">responsive </span>
            websites using modern technologies such as{" "}
            <span className="heroText">React.JS, Vue.JS, Next.JS, </span>&{" "}
            <span className="heroText">Svelte</span>. I am also familiar with
            database design and management, having worked with{" "}
            <span className="heroText">MongoDB, Firebase, AWS Amplify</span> &{" "}
            <span className="heroText">MySQL </span>. My ability to effectively
            communicate and collaborate with cross-functional teams has allowed
            me to deliver high-quality products in a timely manner. I am
            constantly seeking new challenges and opportunities to expand my
            skill set and help businesses achieve their goals through
            technology.
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
