import React from "react";
import { Button } from "../utils/Button";

export const Projects = () => {
  return (
    <article id="projects" className="projects mt-20 pt-32 ">
      <div className="flex lg:flex-col lg:gap-8 justify-between mb-10">
        <h3 className="text-center text-[2.7rem] leading-tight font-semibold sm:text-4xl">
          Check out some of my latest <br /> projects with creative ideas.
        </h3>
        <Button
          text={"See All Projects"}
          styles={"self-center"}
          isLink={true}
        />
      </div>

      {/* Green */}
      <section
        data-aos="fade-right"
        className="grid grid-cols-2 mt-20 lg:mt-20 sm:grid-cols-1 sm:gap-6 items-center"
      >
        <div className="flex-[1px] flex flex-col justify-center p-20 lg:p-0 lg:px-10 sm:text-center">
          <h4 className="text-secondaryGreen font-bold pb-4 font-sans">
            Web Developement
          </h4>
          <h3 className="font-semibold text-2xl pb-4">Shortly</h3>
          <p className="pb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, corrupti magni soluta deserunt quod quis nostrum eos
            sint culpa delectus dolorum quae consequatur nobis natus dolorem at
            quam illo velit.
          </p>
          <Button
            text={"See Project"}
            styles={"self-start text-secondaryGreen sm:self-center "}
          />
        </div>
        <div className="bg-white w-[100%] h-[100%] flex items-center justify-center sm:aspect-square rounded-lg transition duration-200 ease-in-out hover:scale-105 hover:opacity-80 ">
          <img
            className="rounded-md p-2"
            srcSet={require("../assets/Screenshot_1.png")}
            alt=""
          />
        </div>
      </section>

      {/* Red */}
      <section
        data-aos="fade-left"
        className="grid grid-cols-2 mt-10 lg:mt-10 md:!mt-20 sm:grid-cols-1 sm:gap-6 sm:flex sm:flex-col-reverse items-center "
      >
        <div className="bg-[#C5E4E7] p-10 w-[100%] sm:aspect-square h-[100%] flex items-center justify-center rounded-lg transition duration-200 ease-in-out hover:scale-105 hover:opacity-80 ">
          <img
            className="rounded-md"
            srcSet={require("../assets/Screenshot_2.png")}
            alt=""
          />
        </div>
        <div className="flex-[1px] flex flex-col justify-center p-20 lg:p-0 lg:px-10 sm:text-center">
          <h4 className="text-secondaryRed font-bold pb-4 font-sans">
            Web Developement
          </h4>
          <h3 className="font-semibold text-2xl pb-4">Tip Counter</h3>
          <p className="pb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, corrupti magni soluta deserunt quod quis nostrum eos
            sint culpa delectus dolorum quae consequatur nobis natus dolorem at
            quam illo velit.
          </p>
          <Button
            text={"See Project"}
            styles={"self-start text-secondaryRed sm:self-center "}
          />
        </div>
      </section>

      <section className="flex gap-28 lg:gap-14 lg:text-center sm:grid">
        {/* Blue */}
        <div className="flex-1 " data-aos="fade-right">
          <div className="flex-1 flex flex-col justify-center pt-20 pb-10 m-auto ">
            <h4 className="text-secondaryBlue font-bold pb-4 font-sans">
              Web Developement
            </h4>
            <h3 className="font-semibold text-2xl pb-4">Age Calculator</h3>
            <p className="pb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, corrupti magni soluta deserunt quod quis nostrum eos
              sint culpa delectus dolorum quae consequatur nobis natus dolorem
              at quam illo velit.
            </p>
            <Button
              text={"See Project"}
              styles={
                "self-start text-secondaryBlue bg-secondaryBlue  lg:self-center"
              }
            />
          </div>
          <div>
            <div className="flex-1 bg-[#DCDCDC] p-10 w-[100%] aspect-square h-[100%] flex items-center justify-center rounded-lg transition duration-200 ease-in-out hover:scale-105 hover:opacity-80 ">
              <img
                className="rounded-md m-auto "
                srcSet={require("../assets/Screenshot_3.png")}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Yellow */}
        <div className="flex-1 " data-aos="fade-left">
          <div className="flex-1 flex flex-col justify-center pt-20 sm:pt-10 pb-10  m-auto  ">
            <h4 className="text-secondaryYellow font-bold pb-4 font-sans">
              Web Developement
            </h4>
            <h3 className="font-semibold text-2xl pb-4">Shorly</h3>
            <p className="pb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, corrupti magni soluta deserunt quod quis nostrum eos
              sint culpa delectus dolorum quae consequatur nobis natus dolorem
              at quam illo velit.
            </p>
            <Button
              text={"See Project"}
              styles={"self-start text-black bg-secondaryYellow lg:self-center"}
            />
          </div>
          <div>
            <div className="bg-[#EBFFB0] flex-1 w-[100%] p-4 h-[100%] aspect-square flex items-center justify-center rounded-lg transition duration-200 ease-in-out hover:scale-105 hover:opacity-80 ">
              <img
                className="rounded-md"
                srcSet={require("../assets/Screenshot_4.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
