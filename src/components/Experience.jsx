import React, { useEffect, useRef, useState } from "react";
import { Button } from "../utils/Button";

export const Experience = () => {
  const firstRef = useRef();
  const secondRef = useRef();
  const [height, setHeight] = useState([]);

  useEffect(() => {
    function handleResize() {
      setHeight([
        firstRef.current.clientHeight,
        secondRef.current.clientHeight,
      ]);
    }

    window.addEventListener("scroll", handleResize);
  }, []);

  return (
    <article className="h-[650px] lg:h-[100%] w-full mt-40 flex gap-20 lg:flex-col ">
      <section className="">
        <div className="flex-1 lg:text-center">
          <h3 className="text-4xl pb-8 font-semibold">My experience</h3>
          <h4 className="pb-8 text-xl sm:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            quaerat beatae quasi maxime, illum recusandae sint dicta repudiandae
            quia esse?
          </h4>

          <Button text="Download Resume" isLink={true} styles={"lg:m-auto"} />
        </div>
      </section>

      <section className="">
        <div ref={firstRef} className="flex gap-4 wrap items-start pb-8">
          <p className="whitespace-nowrap text-primaryGray">
            Nov 2017 - Present
          </p>
          <div className="relative">
            <div
              className={`w-4 h-4 border-2 border-primaryLightBlack  relative aspect-square mt-2 bg-white rounded-full`}
            ></div>
            <div
              style={{ height: `${height[0]}px` }}
              className="absolute bg-white w-1 left-1/2 -translate-x-1/2"
            ></div>
          </div>
          <div>
            <h5 className="font-semibold pb-2 text-lg">Graphic Designer</h5>
            <p data-aos="fade-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              vel consequuntur cupiditate! Hic dolores sequi, nobis magni
              blanditiis nostrum quos!
            </p>
          </div>
        </div>

        <div ref={secondRef} className="flex gap-4 wrap items-start pb-8">
          <p className="whitespace-nowrap text-primaryGray">
            Nov 2017 - Present
          </p>
          <div className="relative">
            <div
              className={`w-4 h-4 border-2 border-primaryLightBlack  relative aspect-square mt-2 bg-white rounded-full`}
            ></div>
            <div
              style={{ height: `${height[1]}px` }}
              className="absolute bg-white w-1 left-1/2 -translate-x-1/2"
            ></div>
          </div>
          <div>
            <h5 className="font-semibold pb-2 text-lg">Graphic Designer</h5>
            <p data-aos="fade-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              vel consequuntur cupiditate! Hic dolores sequi, nobis magni
              blanditiis nostrum quos!
            </p>
          </div>
        </div>

        <div className="flex gap-4 wrap items-start pb-8">
          <p className="whitespace-nowrap text-primaryGray">
            Nov 2017 - Present
          </p>
          <div className="relative">
            <div
              className={`w-4 h-4 border-2 border-primaryLightBlack  relative aspect-square mt-2 bg-white rounded-full`}
              //  after:w-[1px] after:bg-white after:absolute after:left-1/2 after:-translate-x-1/2 after:h-[20px] after:-z-10
            ></div>
            <div className="absolute bg-white w-1 left-1/2 -translate-x-1/2"></div>
          </div>
          <div>
            <h5 className="font-semibold pb-2 text-lg">Graphic Designer</h5>
            <p data-aos="fade-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              vel consequuntur cupiditate! Hic dolores sequi, nobis magni
              blanditiis nostrum quos!
            </p>
          </div>
        </div>
      </section>
    </article>
  );
};
