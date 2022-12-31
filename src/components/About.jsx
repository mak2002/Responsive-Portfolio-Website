import React from "react";

export default function About({ description }) {
  return (
    <section className=" min-h-screen flex-col items-center " id="about">
      <div className="dark:text-white px-14 mx-auto dark:bg-dark1 whitespace-normal mt-24 w-full md:mx-auto md:flex md:items-center md:justify-evenly ">
        <div className="w-3/6">
          <p className="text-bold text-5xl">
            Hello, I'm
            <span className="font-bold text-green-400">
              {" "}
              Mayank Bondre
            </span>
          </p>
          <p className="text-2xl pt-8">
            <span className="text-green-400 font-bold">Full stack developer </span>
            and B.Tech Computer Science student with a passion for{" "}
            <span className="text-green-400 font-bold ">open source</span> and
            continuous learning.
          </p>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/pics/` + "profilePic1.jpg"}
          alt=""
          className="mt-14 mx-5 rounded-full object-cover h-1/6 "
        />
      </div>
      {/* <p className="text-left mt-16 text-lg w-5/6 md:text-4xl whitespace-normal dark:text-white md:w-3/6 md:whitespace-normal md:mx-auto">
        {description}
      </p> */}
    </section>
  );
}
