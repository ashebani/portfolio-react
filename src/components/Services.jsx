import React from "react";
import { Button } from "../utils/Button";
import { services } from "../utils/data";

export const Services = () => {
  return (
    <section
      id="services"
      className=" services grid grid-cols-2 gap-20 lg:grid-cols-1 lg:gap-10  mt-32"
    >
      <div className="max-w-xl lg:grid lg:m-auto lg:text-center ">
        <h2 className="text-5xl font-semibold sm:text-4xl">{services.title}</h2>
        <p className="py-6">{services.description}</p>
        <Button text={"More Details"} isLink={true} styles={"lg:self-left"} />
      </div>

      <div className="grid gap-10 ">
        {services.servicesList.map((item, index) => {
          return (
            <div
              data-aos="fade-right"
              key={index}
              className="flex md:flex-col md:justify-center md:items-center gap-6 bg-primaryBlack rounded-lg p-8"
            >
              <div className="flex-none  ">
                <img srcSet={item.image} width="50px" alt="Search" />
              </div>

              <div className="md:text-center">
                <h4 className="text-xl font-bold">{item.name}</h4>
                <p className="pt-3 text-lg">{item.describtion}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
