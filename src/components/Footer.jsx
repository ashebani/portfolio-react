import React from "react";

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
        {["facebook", "instagram", "linkedin", "github"].map((item, index) => {
          return (
            <a key={index} href={`https://www.${item}.com`}>
              <img
                style={{
                  filter:
                    "invert(100%) sepia(0%) saturate(7500%) hue-rotate(93deg) brightness(102%) contrast(105%)",
                }}
                srcSet={require(`../assets/icons8-${item}.svg`)}
                className="h-6  invert-1"
                alt=""
              />
            </a>
          );
        })}
      </div>
    </footer>
  );
};
