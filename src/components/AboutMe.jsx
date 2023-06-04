import React from "react";
import { Button } from "../utils/Button";

export const AboutMe = () => {
  return (
    <article
      data-aos="fade-up"
      id="experience"
      className="flex mt-40 lg:mt-20 gap-20 md:gap-6 lg:flex-col "
    >
      <div className="flex-1 flex items-center justify-center relative">
        <div className="background_image bg-[length:450px] md:bg-[length:350px]">
          <img
            srcSet={require("../assets/5898988-01.png")}
            className="w-[400px] md:w-[300px] "
            alt="avatar"
          />
        </div>
        {/* <img
          srcSet={require("../assets/blob.svg").default}
          className="absolute lg:-top-56 -z-10 lg:w-80 "
          alt=""
        /> */}
      </div>

      <section className="flex-1 lg:text-center">
        <h3 className="text-5xl pb-8 font-semibold sm:text-4xl">
          More About Me
        </h3>
        <h4 className="pb-8 text-xl sm:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          quaerat beatae quasi maxime, illum recusandae sint dicta repudiandae
          quia esse?
        </h4>
        <p className="pb-10 sm:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ex
          deleniti pariatur? Harum quae sit aliquid facilis modi iusto soluta
          commodi pariatur blanditiis molestiae magni!
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          optio iste accusamus nulla, quibusdam in porro sint corporis dolores
          exercitationem.
        </p>
        <Button text="See All Projects" isLink={true} styles={"lg:m-auto"} />
      </section>
    </article>
  );
};
