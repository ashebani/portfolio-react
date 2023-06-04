import React from "react";
import { Button } from "../utils/Button";

export const Resume = () => {
  return (
    <section
      data-aos="flip-up"
      id="hire-me"
      className="  relative bg-primaryBlack py-40 rounded-2xl grid justify-center items-center lg:mt-20 sm:mt-10"
    >
      <div className="flex gap-8 text-center flex-col max-w-4xl m-auto">
        <h1 className="text-6xl lg:text-5xl sm:!text-4xl font-semibold leading-tight ">
          Got a project in mind? <br />
          Let's work it together!
        </h1>
        <p className="text-xl px-8 lg:text-lg lg:px-10 sm:font-normal leading-loose">
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
        style={{
          filter:
            "invert(18%) sepia(86%) saturate(3152%) hue-rotate(352deg) brightness(83%) contrast(94%)",
        }}
      />
      <img
        src={require("../assets/Untitled-1-01.svg").default}
        className="absolute top-60 right-28 h-8 lg:right-10"
        alt=""
        style={{
          filter:
            "invert(30%) sepia(79%) saturate(7442%) hue-rotate(325deg) brightness(101%) contrast(101%)",
        }}
      />
      <img
        src={require("../assets/Untitled-1-03.svg").default}
        className="absolute bottom-32 left-32 h-8"
        alt=""
        style={{
          filter:
            "invert(17%) sepia(79%) saturate(2902%) hue-rotate(303deg) brightness(92%) contrast(104%)",
        }}
      />
    </section>
  );
};
