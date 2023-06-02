import React from "react";
import { Button } from "../utils/Button";

export const Hero = () => {
  return (
    <section className="max-w-app bg-primaryOrange h-[685px] rounded-2xl opacity-20 grid justify-center items-center ">
      <div className="flex gap-8 text-center flex-col max-w-4xl m-auto">
        <h1 className="text-6xl font-semibold">
          Hello! I'm Abdulaziz, <br />a Front-end Developer
        </h1>
        <p className="text-xl font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          fuga ducimus quis natus blanditiis necessitatibus saepe sint tempore
          repellat voluptatibus.
        </p>
        <Button text="See My Work" bgColor="hello" />
      </div>
    </section>
  );
};
