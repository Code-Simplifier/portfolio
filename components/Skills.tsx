import React from "react";
import Title from "./title";
import { fira_regular, lato_regular } from "@/styles/fonts";
import { AiFillEye } from "react-icons/ai";
import { TfiGithub } from "react-icons/tfi";

type Props = {};

function Skills({}: Props) {
  return (
    <div className="h-screen text-white">
      <div className="flex relative text-center md:text-left md:flex-row text-white justify-evenly mx-auto max-w-7xl">
        <Title text="skills" />
        <div className="flex flex-row h-fit">
          <div
            style={{ fontFamily: fira_regular.style.fontFamily }}
            className="mt-40 mx-5 bg-gradient-to-tr from-pink-500 to-purple-600 p-3 rounded-md hover:scale-110 hover:heroText hover:border hover:border-purple-500 duration-300 cursor-pointer"
          >
            web
          </div>
          <div
            style={{ fontFamily: fira_regular.style.fontFamily }}
            className="mt-40 mx-5 bg-gradient-to-tr from-pink-500 to-purple-600 p-3 rounded-md hover:scale-110 hover:heroText hover:border hover:border-purple-500 duration-300 cursor-pointer"
          >
            native
          </div>
          <div
            style={{ fontFamily: fira_regular.style.fontFamily }}
            className="mt-40 mx-5 bg-gradient-to-tr from-pink-500 to-purple-600 p-3 rounded-md hover:scale-110 hover:heroText hover:border hover:border-purple-500 duration-300 cursor-pointer"
          >
            python
          </div>
          <div
            style={{ fontFamily: fira_regular.style.fontFamily }}
            className="mt-40 mx-5 bg-gradient-to-tr from-pink-500 to-purple-600 p-3 rounded-md hover:scale-110 hover:heroText hover:border hover:border-purple-500 duration-300 cursor-pointer"
          >
            javascript
          </div>
          <div
            style={{ fontFamily: fira_regular.style.fontFamily }}
            className="mt-40 mx-5 bg-gradient-to-tr from-pink-500 to-purple-600 p-3 rounded-md hover:scale-110 hover:heroText hover:border hover:border-purple-500 duration-300 cursor-pointer"
          >
            react.js
          </div>
          <div
            style={{ fontFamily: fira_regular.style.fontFamily }}
            className="mt-40 mx-5 bg-gradient-to-tr from-pink-500 to-purple-600 p-3 rounded-md hover:scale-110 hover:heroText hover:border hover:border-purple-500 duration-300 cursor-pointer"
          >
            next.js
          </div>
          <div
            style={{ fontFamily: fira_regular.style.fontFamily }}
            className="mt-40 mx-5 bg-gradient-to-tr from-pink-500 to-purple-600 p-3 rounded-md hover:scale-110 hover:heroText hover:border hover:border-purple-500 duration-300 cursor-pointer"
          >
            api
          </div>
        </div>
      </div>
      <div className="w-fit mt-4 ml-4">
        <div className="bg-slate-800 p-4 rounded-lg">
          <img
            className="rounded-md mb-3"
            src="/covid.png"
            alt="covid app tracker"
          />
          <div className="flex justify-between items-center">
            <div style={{ fontFamily: fira_regular.style.fontFamily }}>
              Covid-19 Tracker
            </div>
            <div>
              <AiFillEye
                size={28}
                className="text-purple-500 cursor-pointer duration-500 hover:scale-125"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
