import React, { useEffect, useRef, useState } from "react";
import { Button } from "../utils/Button";
import { experience } from "../utils/data";

export const Experience = () => {
  const itemsRef = useRef([]);
  const [height, setHeight] = useState([]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, experience.workHistory.length);
    itemsRef.current.map((item, idx) =>
      setHeight([...height, item.clientHeight])
    );

    function fixedLine() {
      itemsRef.current = itemsRef.current.slice(
        0,
        experience.workHistory.length
      );
      itemsRef.current.forEach((item, idx) =>
        setHeight([...height, item.clientHeight])
      );
    }

    window.addEventListener("scroll", fixedLine);
    window.addEventListener("resize", fixedLine);
    return () => {
      window.removeEventListener("resize", fixedLine);
      window.removeEventListener("scroll", fixedLine);
    };
  }, []);
  console.log(height);

  return (
    <article className=" w-full mt-40 flex gap-20 lg:flex-col ">
      <section>
        <div className="flex-1 lg:text-center">
          <h3 className="text-4xl pb-8 font-semibold">{experience.title}</h3>
          <h4 className="pb-8 text-xl sm:text-lg">{experience.description}</h4>

          <Button text="Download Resume" isLink={true} styles={"lg:m-auto"} />
        </div>
      </section>

      <section>
        {experience.workHistory.map((item, index) => (
          <div
            key={index}
            ref={(event) => (itemsRef.current[index] = event)}
            // style={{ height: `${itemsRef.current[index].clientHeight}px` }}
            className="flex gap-4 items-start pb-8"
          >
            <p
              className="whitespace-nowrap text-primaryGray mr-4 justify-self-end text-right"
              style={{ maxWidth: "14ch", overflowWrap: "break-word" }}
            >
              {item.time}
            </p>
            <div className="relative">
              <div
                className={`w-4 h-4 border-2 border-primaryLightBlack relative aspect-square mt-2 bg-white rounded-full`}
              ></div>
              <div
                className="absolute bg-white w-1 left-1/2 -translate-x-1/2"
                style={{
                  height:
                    index === experience.workHistory.length - 1
                      ? "60px"
                      : `${height[0]}px`,
                  backgroundColor:
                    index === experience.workHistory.length - 1
                      ? "#111111"
                      : `white`,
                }}
              ></div>
            </div>
            <div>
              <h5 className="font-semibold pb-2 text-lg">{item.position}</h5>
              <p data-aos="fade-left">{item.jobDescription}</p>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
};
