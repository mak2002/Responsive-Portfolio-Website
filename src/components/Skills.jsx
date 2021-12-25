import React from "react";
import data from "../assets/data";
import Skill from "./Skill";

export default function Skills({ frontendSkills, backendSkills }) {
  return (
    <div className="skills-class w-full flex flex-col justify-center items-center">
      <section
        class=" min-h-screen max-w-full  flex flex-col justify-center items-start "
        id="skills"
      >
      <h1 className="dark:text-white text-center w-full font-bold text-8xl mt-20 mb-32">Skills</h1>
        <Skill skills={frontendSkills} title={"FrontEnd:"} />
        <Skill skills={backendSkills} title={"BackEnd:"} />
      </section>
      <div></div>
    </div>
  );
}
