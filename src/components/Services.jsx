import React from "react";
import { Button } from "../utils/Button";
import StrategyImg from "./assets/strategy.png";

export const Services = () => {
  return (
    <section className="grid grid-cols-2 gap-20 mt-32">
      <div className="max-w-xl">
        <h2 className="text-4xl font-semibold">
          The Service I offer is specifically designed to meet your needs.
        </h2>
        <p className="py-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          maxime atque id nobis quidem iste assumenda ipsum deserunt veritatis
          fugit.
        </p>
        <Button text={"More Details"} />
      </div>
      <div className="grid gap-14">
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <div key={index} className="flex gap-4">
              <div>
                <img
                  srcSet={require("./assets/strategy.png").default()}
                  alt="Search"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold">User Research</h4>
                <p className="pt-3 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique deserunt eveniet aut animi a velit! Quia hic id
                  veniam vero.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
