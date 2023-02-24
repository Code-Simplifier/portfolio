import { fira_regular } from "@/styles/fonts";
import React from "react";

type Props = { text: string };

export function CategoryOultine({ text }: Props) {
  return (
    <div
      style={{ fontFamily: fira_regular.style.fontFamily }}
      className="m-2 p-3 rounded-md hover:scale-110 heroText border border-l-pink-600 border-t-pink-600 border-r-purple-500 border-b-purple-500 duration-300 cursor-pointer"
    >
      {text}
    </div>
  );
}

export function CategoryFill({ text }: Props) {
  return (
    <div
      style={{ fontFamily: fira_regular.style.fontFamily }}
      className="mt-40 mx-5 bg-gradient-to-tr from-pink-600 to-purple-600 p-3 rounded-md hover:scale-110 hover:heroText hover:border hover:border-purple-500 duration-300 cursor-pointer"
    >
      {text}
    </div>
  );
}
