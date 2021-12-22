import React from "react";

export default function About({ description }) {
  return (
    <div className="flex-col items-center">
      <div className="dark:text-white px-5 mx-auto dark:bg-dark1 whitespace-normal mt-10 w-full md:mx-auto md:w-4/6 md:flex md:items-center md:justify-between">
        <p className="text-bold text-5xl">Hello &#128075;, I am Mayank Bondre</p>
        {/* <p></p> */}
        <img
          src={`${process.env.PUBLIC_URL}/pics/` + "profilepic.jpeg"}
          alt=""
          className="mt-10 mx-5 rounded-full object-cover h-2/6"
        />
      </div>
      <p className="text-left mt-16 text-4xl whitespace-normal dark:text-white md:w-3/6 md:whitespace-normal md:mx-auto">{description}</p>
    </div>
  );
}
