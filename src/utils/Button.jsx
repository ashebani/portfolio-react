import React from "react";
import arrow from "../assets/icons8-curly-arrow-48.png";

export const Button = ({ text, styles, children, isLink = false }) => {
  return (
    <button
      className={`text-black cursor-pointer hover:scale-105 transition hover:bg-black hover:text-white bg-white rounded-md py-3 text-lg flex justify-center items-center font-semibold text-center
  px-8 ${styles}`}
    >
      {text}
      {isLink ? (
        <img
          srcSet={arrow}
          className="h-6 pl-3 hover:filter hover:invert-100 hover:sepia-0 hover:saturate-7500 hover:hue-rotate-93 hover:brightness-102 hover:contrast-105"
          alt=""
        />
      ) : (
        ""
      )}
    </button>
  );
};
