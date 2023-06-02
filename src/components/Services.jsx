import React from "react";
import { Button } from "../utils/Button";

export const Services = () => {
  return (
    <section className="grid grid-cols-2 gap-20 mt-32">
      <div className="max-w-xl">
        <h2 className="text-5xl font-semibold">
          The Service I offer is specifically designed to meet your needs.
        </h2>
        <p className="py-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
          doloribus adipisci. Nisi facere veritatis explicabo at, sunt fuga
          voluptate quod iure, ipsam ipsa amet. Ratione, non earum accusantium
          inventore ab totam impedit suscipit nulla natus alias? Voluptates
          doloribus qui harum!
        </p>
        <Button text={"More Details"} />
      </div>
      <div className="grid gap-28 pt-8">
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <div key={index} className="flex gap-4">
              <div>
                <img
                  srcSet={require("../assets/strategy.png")}
                  className="w-24"
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
