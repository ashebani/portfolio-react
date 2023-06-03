import React from "react";
import arrow from "../assets/icons8-curly-arrow-48.png";

export const Button = ({ text, styles, children, isLink = false }) => {
  return (
    <button
      className={`text-black bg-white rounded-md py-3 text-lg flex justify-center items-center font-semibold text-center
  px-8 ${styles}`}
    >
      {text}
      {isLink ? <img srcSet={arrow} className="h-6 pl-3" alt="" /> : ""}
    </button>
  );
};
