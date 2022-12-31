import React from "react";
import data from "../assets/data";

export default function Navbar({ name }) {
  return (
    <div className="sticky top-0 z-50 bg-dark1-50 min-w-full flex justify-around items-center border-b-2 border-grey-400 dark:text-white dark:bg-dark1-50 mx-auto">
      {/* <div className="logo text-4xl font-bold">{name}</div> */}
      <p className="text-2xl font-bold hover:text-dark1-500">Mayank</p>

      <div className="hidden md:flex justify-between space-x-28 items-center ">
        {data.navbar.map((item) => (
          <a
            href={"#" + item}
            className="text-2xl hover:text-green-400 py-2 my-2 rounded transition duration-400 ease-in-out"
          >
            {item}.
          </a>
        ))}

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
