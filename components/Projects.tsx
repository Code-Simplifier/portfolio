import React from "react";
import Title from "./modules/title";
import {
  fira_regular,
  lato_bold,
  lato_regular,
  lato_thin,
} from "@/styles/fonts";
import { AiFillEye } from "react-icons/ai";
import { TfiGithub } from "react-icons/tfi";

type Props = {};

function Projects({}: Props) {
  return (
    <div className="h-screen text-white">
      <div className="flex relative text-center md:text-left md:flex-row text-white justify-evenly mx-auto max-w-7xl">
        <Title text="projects" />
        <div className="flex flex-row h-fit">
          <div
            style={{ fontFamily: fira_regular.style.fontFamily }}
            className="mt-40 mx-5 bg-gradient-to-tr from-pink-600 to-purple-600 p-3 rounded-md hover:scale-110 hover:heroText hover:border hover:border-purple-500 duration-300 cursor-pointer"
          >
            web
          </div>
          <div
            style={{ fontFamily: fira_regular.style.fontFamily }}
            className="mt-40 mx-5 bg-gradient-to-tr from-pink-600 to-purple-600 p-3 rounded-md hover:scale-110 hover:heroText hover:border hover:border-purple-500 duration-300 cursor-pointer"
          >
            native
          </div>
          <div
            style={{ fontFamily: fira_regular.style.fontFamily }}
            className="mt-40 mx-5 bg-gradient-to-tr from-pink-600 to-purple-600 p-3 rounded-md hover:scale-110 hover:heroText hover:border hover:border-purple-500 duration-300 cursor-pointer"
          >
            python
          </div>
          <div
            style={{ fontFamily: fira_regular.style.fontFamily }}
            className="mt-40 mx-5 bg-gradient-to-tr from-pink-600 to-purple-600 p-3 rounded-md hover:scale-110 hover:heroText hover:border hover:border-purple-500 duration-300 cursor-pointer"
          >
            javascript
          </div>
          <div
            style={{ fontFamily: fira_regular.style.fontFamily }}
            className="mt-40 mx-5 bg-gradient-to-tr from-pink-600 to-purple-600 p-3 rounded-md hover:scale-110 hover:heroText hover:border hover:border-purple-500 duration-300 cursor-pointer"
          >
            react.js
          </div>
          <div
            style={{ fontFamily: fira_regular.style.fontFamily }}
            className="mt-40 mx-5 bg-gradient-to-tr from-pink-600 to-purple-600 p-3 rounded-md hover:scale-110 hover:heroText hover:border hover:border-purple-500 duration-300 cursor-pointer"
          >
            next.js
          </div>
          <div
            style={{ fontFamily: fira_regular.style.fontFamily }}
            className="mt-40 mx-5 bg-gradient-to-tr from-pink-600 to-purple-600 p-3 rounded-md hover:scale-110 hover:heroText hover:border hover:border-purple-500 duration-300 cursor-pointer"
          >
            api
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
