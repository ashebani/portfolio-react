import React from "react";
import { Button } from "../utils/Button";

const servicesList = [
  {
    name: "User Research",
    image: require("../assets/design-3.svg").default,
    describtion: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
          doloribus adipisci. Nisi facere veritatis explicabo at, sunt fuga
          voluptate quod iure, ipsam ipsa amet.`,
  },
  {
    name: "Brand Design",
    image: require("../assets/design-2.svg").default,
    describtion: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
          doloribus adipisci. Nisi facere veritatis explicabo at, sunt fuga
          voluptate quod iure, ipsam ipsa amet.`,
  },
  {
    name: "App Design",
    image: require("../assets/design-1.svg").default,
    describtion: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
          doloribus adipisci. Nisi facere veritatis explicabo at, sunt fuga
          voluptate quod iure, ipsam ipsa amet.`,
  },
  {
    name: "Web Design",
    image: require("../assets/design-4.svg").default,
    describtion: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
          doloribus adipisci. Nisi facere veritatis explicabo at, sunt fuga
          voluptate quod iure, ipsam ipsa amet.`,
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className=" services grid grid-cols-2 gap-20 lg:grid-cols-1 lg:gap-10  mt-32"
    >
      <div className="max-w-xl lg:grid lg:m-auto lg:text-center ">
        <h2 className="text-5xl font-semibold sm:text-4xl">
          The Service I offer is specifically designed to meet your needs.
        </h2>
        <p className="py-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
          doloribus adipisci. Nisi facere veritatis explicabo at, sunt fuga
          voluptate quod iure, ipsam ipsa amet. Ratione, non earum accusantium
          inventore ab totam impedit suscipit nulla natus alias? Voluptates
          doloribus qui harum!
        </p>
        <Button text={"More Details"} isLink={true} styles={"lg:self-left"} />
      </div>

      <div className="grid gap-10 ">
        {servicesList.map((item, index) => {
          return (
            <div
              data-aos="fade-right"
              key={index}
              className="flex gap-6 bg-primaryBlack rounded-lg p-8"
            >
              <div>
                <img
                  srcSet={item.image}
                  className="w-32 aspect-square"
                  alt="Search"
                />
              </div>
              <div>
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
