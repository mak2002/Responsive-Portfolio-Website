import React from "react";

export default function Skill({ skills, title }) {
  return (
    <div className="flex flex-col items-center justify-center mt-20 md:flex-row sm:m-5 sm:items-center sm:justify-start w-4/4 ">
      <p className="mr-10 dark:text-white font-bold text-4xl">{title}</p>
      {skills.map((skill) => {
        return (
          <div className="flex flex-col items-center justify-center mr-16 md:mr-4">
            <img
              src={
                `${process.env.PUBLIC_URL}/pics/` +
                skill.toLocaleLowerCase() +
                ".png"
              }
              alt=""
              className="h-16 my-5 mx-5 md:h-10 lg:h-32 flex transition duration-400 ease-in-out hover:-translate-y-1 hover:scale-110 transform object-cover"
            />
            <p className="text-center mt-4 dark:text-white text-xl">{skill}</p>
          </div>
        );
      })}
    </div>
  );
}
//ml-6 mt-5