import React from "react";
import Title from "./modules/title";
import { motion } from "framer-motion";
import { fira_regular } from "@/styles/fonts";
import {
  SiGithub,
  SiVite,
  SiDjango,
  SiFlask,
  SiPython,
  SiCss3,
  SiHtml5,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiGraphql,
  SiExpo,
  SiVisualstudiocode,
  SiSublimetext,
  SiVercel,
  SiAwsamplify,
  SiNumpy,
  SiTypescript,
  SiTailwindcss,
  SiChakraui,
  SiMaterialui,
  SiRedux,
  SiPandas,
  SiJupyter,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiGitBranch } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import Expandable from "./modules/expandable";
import { CategoryOultine } from "./modules/category";

type Props = {};

function Skills({}: Props) {
  return (
    <div className="h-screen text-white">
      <div className="flex relative text-center md:text-left md:flex-row text-white justify-evenly mx-auto max-w-7xl">
        <Title text="Skills" />
        <div className="mt-40 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 text-center h-fit">
          {/* 1 */}
          <CategoryOultine text="framework" />
          {/* 2 */}
          <CategoryOultine text="languages" />
          {/* 3 */}
          <CategoryOultine text="ui-design" />
          {/* 4 */}
          <CategoryOultine text="utilities" />
          {/* 5 */}
          <CategoryOultine text="databases" />
          {/* 6 */}
          <CategoryOultine text="data-science" />
        </div>
      </div>
      <motion.div className="mt-16 grid place-items-center lg:grid-cols-7 md:grid-cols-5 grid-cols-3 gap-5 h-fit">
        <Expandable cat={4} delay={0} icon={<SiGithub size={60} />} />
        <Expandable cat={4} delay={0.1} icon={<SiExpo size={60} />} />
        <Expandable cat={2} delay={0.2} icon={<SiPython size={60} />} />
        <Expandable cat={6} delay={0.3} icon={<SiNumpy size={60} />} />
        <Expandable cat={5} delay={0.4} icon={<SiAwsamplify size={60} />} />
        <Expandable cat={4} delay={1} icon={<SiVercel size={60} />} />
        <Expandable cat={6} delay={1.1} icon={<SiJupyter size={60} />} />
        <Expandable cat={2} delay={1.2} icon={<SiCss3 size={60} />} />
        <Expandable cat={4} delay={2} icon={<SiSublimetext size={60} />} />
        <Expandable
          cat={2}
          delay={1.3}
          icon={<TbBrandJavascript size={60} />}
        />
        <Expandable cat={5} delay={2.1} icon={<SiFirebase size={60} />} />
        <Expandable cat={2} delay={1.4} icon={<SiTypescript size={60} />} />
        <Expandable cat={3} delay={2.2} icon={<SiMaterialui size={60} />} />
        <Expandable cat={4} delay={2.3} icon={<SiGraphql size={60} />} />
        <Expandable cat={1} delay={2.4} icon={<SiFlask size={60} />} />
        <Expandable cat={2} delay={3} icon={<SiHtml5 size={60} />} />
        <Expandable cat={4} delay={3.1} icon={<SiRedux size={60} />} />
        <Expandable cat={1} delay={3.2} icon={<SiNextdotjs size={60} />} />
        <Expandable cat={6} delay={3.3} icon={<SiPandas size={60} />} />
        <Expandable cat={5} delay={3.4} icon={<SiMongodb size={60} />} />
        <Expandable cat={1} delay={4} icon={<FaReact size={60} />} />
        <Expandable cat={1} delay={4.1} icon={<SiDjango size={60} />} />
        <Expandable cat={4} delay={4.2} icon={<SiVite size={60} />} />
        <Expandable cat={3} delay={4.3} icon={<SiChakraui size={60} />} />
        <Expandable
          cat={4}
          delay={4.4}
          icon={<SiVisualstudiocode size={60} />}
        />
        <Expandable cat={5} delay={5} icon={<GrMysql size={60} />} />
        <Expandable cat={4} delay={5.1} icon={<BiGitBranch size={60} />} />
        <Expandable cat={3} delay={5.2} icon={<SiTailwindcss size={60} />} />
      </motion.div>
    </div>
  );
}

export default Skills;
