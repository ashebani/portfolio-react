import React from "react";
import { Button } from "../utils/Button";
import { hero } from "../utils/data";
export const Hero = () => {
  return (
    <section
      data-aos="flip-up"
      id="home"
      className=" bg-primaryOrange h-[685px] rounded-2xl grid z-10 justify-center mt-28 items-center relative "
    >
      <div className="flex gap-8 text-center flex-col max-w-4xl m-auto">
        <h1 className="font-semibold text-6xl sm:!text-3xl sm:px-2 lg:text-5xl  ">
          {hero.title}
        </h1>
        <p className="text-xl lg:text-lg px-10 sm:px-4 font-normal">
          {hero.description}
        </p>
        <Button text="See My Work" styles={"self-center z-20"} isLink={true} />
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
        className="absolute bottom-32 left-32 md:left-20 h-8 sm:bottom-10"
        alt=""
      />
      <img
        src={require("../assets/drag-horizontal-svgrepo-com.svg").default}
        className="absolute bottom-10 right-24 md:right-[10%] h-10 sm:bottom-10"
        alt=""
      />
    </section>
  );
};
