import React from "react";

export default function Navbar({ name }) {
  return (
    <div className="py-5 min-w-full flex justify-around items-center dark:text-white dark:bg-dark1 mx-auto">
      <div className="logo text-4xl font-bold">{name}</div>
      <div className="hidden md:flex justify-between space-x-10 items-center">
        <a href="#about" className="text-2xl">
          About
        </a>
        <a href="#skills" className="text-2xl">
          Skills
        </a>
        <a href="#projects" className="text-2xl">
          Projects
        </a>
        <a href="#contact" className="text-2xl">
          Contact
        </a>

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
