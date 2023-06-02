import React from "react";
import { Button } from "../utils/Button";

export const Projects = () => {
  return (
    <article className="mt-40">
      <div className="flex justify-between mb-10">
        <h3 className="text-center text-[2.7rem] leading-tight font-semibold">
          Check out some of my latest <br /> projects with creative ideas.
        </h3>
        <Button text={"See All Projects"} />
      </div>
      <section>
        <div>
          <h4>Web Developement</h4>
        </div>
        <div></div>
      </section>
    </article>
  );
};
