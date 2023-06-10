import React from "react";
import { footer } from "../utils/data";

export const Footer = () => {
  return (
    <footer className="flex justify-between my-10">
      <p className="">
        Designed by{" "}
        <a
          className="font-bold hover:scale-125 ease-in"
          href="https://www.behance.net/fewtone"
        >
          FewTone
        </a>
      </p>
      {/* <p className="font-semibold">© 2023 Abdulaziz. All rights reserved.</p> */}
      <div className="flex gap-4">
        {footer.socialMediaNames.map((item, index) => {
          return (
            <a key={index} href={item.url} target="_blank">
              <img
                alt={item.name}
                style={{
                  filter:
                    "invert(100%) sepia(0%) saturate(7500%) hue-rotate(93deg) brightness(102%) contrast(105%)",
                }}
                srcSet={require(`../assets/icons8-${item.name.toLocaleLowerCase()}.svg`)}
                className="h-6 hover:scale-110 ease-out duration-300 transition"
              />
            </a>
          );
        })}
      </div>
    </footer>
  );
};
