import React from "react";
import { Button } from "../utils/Button";

export const Header = () => {
  return (
    <nav className="flex justify-between m-auto py-7 top-0 left-0 right-0 rounded-b-md bg-primaryLightBlack">
      <button className="text-2xl font-bold">A Portfolio</button>
      <ul className="flex gap-10 text-lg font-semibold items-center lg:hidden ">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#hire-me">Hire me</a>
        </li>
      </ul>
      <Button text="Contact Me" bgColor="hey" />
    </nav>
  );
};
