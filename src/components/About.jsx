import React from "react";

export default function About({ description }) {
  return (
    <section className=" min-h-screen flex-col items-center">
      <div className="dark:text-white px-5 mx-auto dark:bg-dark1 whitespace-normal mt-10 w-full md:mx-auto md:flex md:items-center md:justify-evenly">
        <p className="text-bold text-5xl">Hello &#128075;, I am Mayank Bondre</p>
        {/* <p></p> */}
        <img
          src={`${process.env.PUBLIC_URL}/pics/` + "profilepic.jpeg"}
          alt=""
          className="mt-10 mx-5 rounded-full object-cover h-2/6"
        />
      </div>
      <p className="text-left mt-16 text-4xl whitespace-normal dark:text-white md:w-3/6 md:whitespace-normal md:mx-auto">{description}</p>
    </section>
  );
}
