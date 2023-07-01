import React from "react";
import { Button } from "../utils/Button";
import { aboutMe } from "../utils/data";

export const AboutMe = () => {
  return (
    <article
      id="experience"
      className="flex mt-40 lg:mt-20 pt-32 gap-20 md:gap-6 lg:flex-col "
    >
      <div
        className="flex-1 flex items-center justify-center relative"
        data-aos="fade-up"
      >
        <div className="background_image bg-[length:450px] md:bg-[length:350px]">
          <img
            srcSet={require("../assets/5898988-01.png")}
            className="w-[400px] md:w-[300px] "
            alt="avatar"
          />
        </div>
      </div>

      <section className="flex-1 lg:text-center" data-aos="fade-up">
        <h3 className="text-5xl pb-8 font-semibold sm:text-4xl">
          {aboutMe.title}
        </h3>
        <h4 className="pb-8 text-xl sm:text-lg">{aboutMe.description}</h4>
        <p className="pb-10 sm:text-sm">
          {aboutMe.moreInfo[0]}
          <br />
          {aboutMe.moreInfo[1]}
        </p>
        <Button text="See All Projects" isLink={true} styles={"lg:m-auto"} />
      </section>
    </article>
  );
};
