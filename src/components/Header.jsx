import React, { useEffect } from "react";
import { Button } from "../utils/Button";
import Menu from "./Menu";
import AOS from "aos";
import "aos/dist/aos.css";

export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <nav
      data-aos="fade-down"
      className="flex transform fixed justify-between px-20 md:px-8 xs:!px-6 max-w-[1444px] z-20 m-auto py-7 top-0 left-0 right-0 rounded-b-md bg-primaryLightBlack"
    >
      <div className="flex gap-3 items-center">
        <img
          srcSet={require("../assets/circled-avatar.png")}
          alt="avatar"
          className="w-10 h-10"
        />
        <button className="text-2xl font-bold">A Portfolio</button>
      </div>

      {/* Desktop NavBar */}
      <ul className="flex gap-10 text-lg font-semibold items-center lg:hidden ">
        <li className="hover:scale-110 ease-in-out transition duration-200 transform">
          <a href="#home">Home</a>
        </li>
        <li className="hover:scale-110 transition duration-200 transform">
          <a href="#services">Services</a>
        </li>
        <li className="hover:scale-110 transition duration-200 transform">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:scale-110 transition duration-200 transform">
          <a href="#experience">Experience</a>
        </li>
        <li className="hover:scale-110 transition duration-200 transform">
          <a href="#hire-me">Hire me</a>
        </li>
      </ul>

      <Button text="Contact Me" bgColor="hey" styles={"lg:hidden"} />

      {/* Mobile NavBar */}
      {showMobileMenu ? (
        <div
          data-aos="fade-right"
          style={{
            opacity: showMobileMenu ? "1" : "0",
            transition: showMobileMenu
              ? "all .5s ease-in-out"
              : "transition: transform .5s ease-in-out",
            transform: showMobileMenu ? "translatex(0)" : "translatex(40px)",
          }}
          className=" bg-primaryBlack transform fixed top-24 hidden lg:block sm:!left-8 sm:!right-8 lg:left-20 lg:right-20 rounded-2xl p-10 z-10 "
        >
          <ul
            data-aos="fade-left"
            className="gap-14 justify-center text-center text-lg font-semibold items-center grid "
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li className="">
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#hire-me">Hire me</a>
            </li>
            <li>
              <Button text="Contact Me" bgColor="hey" styles={" z-20"} />
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}

      <button
        type="button"
        className="hidden lg:block bg-primaryOrange items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primaryBlack focus:outline-none  focus:text-white transition duration-150 ease-in-out"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <svg className="h-6 w-6" stroke="#fff" fill="none" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </nav>
  );
};
