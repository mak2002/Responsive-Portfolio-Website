import React from "react";
import data from "../assets/data";

export default function Navbar({ name }) {


  return (
    <div className="sticky top-0 z-50 bg-dark1-100 min-w-full flex justify-around items-center dark:text-white dark:bg-dark1 mx-auto">
      {/* <div className="logo text-4xl font-bold">{name}</div> */}
      <div className="hidden md:flex justify-between space-x-48 items-center">
        <a
          href="#about"
          className="text-2xl bg hover:bg-yellow-700 p-2 rounded transition duration-400 ease-in-out"
        >
          About 
        </a>
        <a
          href="#skills"
          className="text-2xl hover:bg-yellow-700 p-2 rounded transition duration-400 ease-in-out"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="text-2xl hover:bg-yellow-700 p-2 rounded transition duration-400 ease-in-out"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-2xl hover:bg-yellow-700 p-2 rounded transition duration-400 ease-in-out"
        >
          Contact
        </a>
        {/* <button onCLick={handleClick}>Theme</button> */}

        <div className="md:hidden">
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </div>
      </div>
    </div>
  );
}
