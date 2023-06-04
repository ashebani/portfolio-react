import React, { useEffect, useRef, useState } from "react";
import { Button } from "../utils/Button";

export const Experience = () => {
  const paragraphRef = useRef();
  const [height, setHeight] = useState([{ 1: 0 }, { 2: 0 }, { 3: 0 }]);
  console.log(paragraphRef);
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
        {/* <div className="flex gap-4 wrap items-start pb-8">
          <p className="whitespace-nowrap text-primaryGray">
            Nov 2017 - Present
          </p>
          <div className="w-4 h-4 border-2 border-primaryLightBlack after:-z-10 relative aspect-square mt-2 bg-white rounded-full after:h-56  after:w-[1px] after:bg-white after:absolute after:left-1/2 after:-translate-x-1/2 "></div>
          <div>
            <h5 className="font-semibold pb-2 text-lg">Graphic Designer</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              molestias harum ipsa dolore fugiat laboriosam aliquam laudantium,
              beatae similique asperiores laborum consequatur non id
              necessitatibus. Accusamus dolorem a dolorum natus nesciunt,
              molestias nostrum vero aut. Ex sed mollitia iure magni facilis
              dolore inventore tempore possimus in odit fuga, iste error.
            </p>
          </div>
        </div>

        <div className="flex gap-4 wrap items-start">
          <p className="whitespace-nowrap text-primaryGray">
            Nov 2017 - Present
          </p>
          <div className="w-4 h-4 border-2 border-primaryLightBlack after:-z-10 relative aspect-square mt-2 bg-white rounded-full"></div>
          <div>
            <h5 className="font-semibold pb-2 text-lg">Graphic Designer</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              vel consequuntur cupiditate! Hic dolores sequi, nobis magni
              blanditiis nostrum quos!
            </p>
          </div>
        </div> */}

        {height.map((item, idx) => {
          return (
            <div key={idx} className="flex gap-4 wrap items-start pb-8">
              <p className="whitespace-nowrap text-primaryGray">
                Nov 2017 - Present
              </p>
              <div className="w-4 h-4 border-2 border-primaryLightBlack after:-z-10 relative aspect-square mt-2 bg-white rounded-full after:w-[1px] after:bg-white after:absolute after:left-1/2 after:-translate-x-1/2 "></div>
              <div>
                <h5 className="font-semibold pb-2 text-lg">Graphic Designer</h5>
                <p ref={paragraphRef} onClick={() => console.log(paragraphRef)}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere vel consequuntur cupiditate! Hic dolores sequi, nobis
                  magni blanditiis nostrum quos!
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </article>
  );
};
