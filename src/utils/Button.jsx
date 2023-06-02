import React from "react";

export const Button = ({ text, bgColor, children }) => {
  return (
    <button
      className="text-black bg-white rounded-md py-3 text-lg flex items-center font-semibold text-center self-center
  px-8"
    >
      {text}
      {children}
    </button>
  );
};
