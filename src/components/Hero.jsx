import React from "react";
import { Button } from "../utils/Button";

export const Hero = () => {
  return (
    <section
      id="home"
      className=" bg-primaryOrange h-[685px] rounded-2xl grid justify-center items-center relative "
    >
      <div className="flex gap-8 text-center flex-col max-w-4xl m-auto">
        <h1 className="font-semibold text-6xl sm:text-base lg:text-5xl ">
          Hello! I'm Abdulaziz, <br />a Front-end Developer
        </h1>
        <p className="text-xl lg:text-lg px-10 font-semibold md:font-normal">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          fuga ducimus quis natus blanditiis necessitatibus saepe sint tempore
          repellat voluptatibus.
        </p>
        <Button text="See My Work" styles={"self-center"} isLink={true} />
      </div>
      <img
        src={require("../assets/Untitled-1-02.svg").default}
        className="absolute top-20 left-24 h-8"
        alt=""
      />
      <img
        src={require("../assets/Untitled-1-01.svg").default}
        className="absolute top-60 sm:bottom-20 right-28 h-8 sm:right-[10%]"
        alt=""
      />
      <img
        src={require("../assets/Untitled-1-03.svg").default}
        className="absolute bottom-32 left-32 h-8 sm:bottom-10"
        alt=""
      />
    </section>
  );
};
