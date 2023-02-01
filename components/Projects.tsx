import React from "react";
import Title from "./title";
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
      <div className="flex">
        <div className="w-[340px] mt-4 ml-4">
          <div className="bg-slate-800 p-4 rounded-lg">
            <img
              className="rounded-md mb-3 w-80 h-36 object-cover"
              src="/covid.png"
              alt="covid app tracker"
            />
            <div className="flex justify-between items-center">
              <div
                className="text-lg "
                style={{ fontFamily: fira_regular.style.fontFamily }}
              >
                Covid-19 Tracker
              </div>
              <div>
                <AiFillEye
                  size={28}
                  className="text-purple-500 cursor-pointer duration-500 hover:scale-125"
                />
              </div>
            </div>
            <div
              className="mt-4"
              style={{ fontFamily: lato_regular.style.fontFamily }}
            >
              A COVID-19 tracker is a tool that provides real-time information
              and updates on the spread of the coronavirus pandemic. It
              typically displays data on the number of confirmed cases, deaths,
              and recoveries and other relevant metrics at both the global and
              local levels.
            </div>
            <div className="flex h-fit text-xs mt-2">
              <div
                style={{ fontFamily: fira_regular.style.fontFamily }}
                className=" border border-purple-600 rounded-md heroText p-1 mr-1"
              >
                #reactjs
              </div>
              <div
                style={{ fontFamily: fira_regular.style.fontFamily }}
                className="border border-purple-600 rounded-md heroText p-1"
              >
                #javascript
              </div>
            </div>
          </div>
        </div>
        <div className="w-[340px] mt-4 ml-4">
          <div className="bg-slate-800 p-4 rounded-lg">
            <img
              className="rounded-md mb-3 w-80 h-36 object-cover"
              src="/openai.jpg"
              alt="covid app tracker"
            />
            <div className="flex justify-between items-center">
              <div
                className="text-lg"
                style={{ fontFamily: fira_regular.style.fontFamily }}
              >
                ChatGPT Clone
              </div>
              <div>
                <AiFillEye
                  size={28}
                  className="text-purple-500 cursor-pointer duration-500 hover:scale-125"
                />
              </div>
            </div>
            <div
              style={{ fontFamily: lato_regular.style.fontFamily }}
              className="mt-4"
            >
              ChatGPT is an artificial intelligence language model developed by
              OpenAI. It is capable of generating human-like text based on the
              input received, allowing it to perform a variety of
              language-related tasks. It uses advanced deep learning techniques
              to improve its accuracy and ability to understand and generate
              text.
            </div>
            <div className="flex h-fit text-xs mt-2">
              <div
                style={{ fontFamily: fira_regular.style.fontFamily }}
                className=" border border-purple-600 rounded-md heroText p-1 mr-1"
              >
                #nextjs
              </div>
              <div
                style={{ fontFamily: fira_regular.style.fontFamily }}
                className=" border border-purple-600 rounded-md heroText p-1 mr-1"
              >
                #api
              </div>
              <div
                style={{ fontFamily: fira_regular.style.fontFamily }}
                className="border border-purple-600 rounded-md heroText p-1"
              >
                #javascript
              </div>
            </div>
          </div>
        </div>
        <div className="w-[340px] mt-4 ml-4">
          <div className="bg-slate-800 p-4 rounded-lg">
            <img
              className="rounded-md mb-3 w-80 h-36 object-cover"
              src="/blog.jpeg"
              alt="covid app tracker"
            />
            <div className="flex justify-between items-center">
              <div
                className="text-lg "
                style={{ fontFamily: fira_regular.style.fontFamily }}
              >
                Covid-19 Tracker
              </div>
              <div>
                <AiFillEye
                  size={28}
                  className="text-purple-500 cursor-pointer duration-500 hover:scale-125"
                />
              </div>
            </div>
            <div
              className="mt-4"
              style={{ fontFamily: lato_regular.style.fontFamily }}
            >
              A COVID-19 tracker is a tool that provides real-time information
              and updates on the spread of the coronavirus pandemic. It
              typically displays data on the number of confirmed cases, deaths,
              and recoveries and other relevant metrics at both the global and
              local levels.
            </div>
            <div className="flex h-fit text-xs mt-2">
              <div
                style={{ fontFamily: fira_regular.style.fontFamily }}
                className=" border border-purple-600 rounded-md heroText p-1 mr-1"
              >
                #reactjs
              </div>
              <div
                style={{ fontFamily: fira_regular.style.fontFamily }}
                className="border border-purple-600 rounded-md heroText p-1"
              >
                #javascript
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
