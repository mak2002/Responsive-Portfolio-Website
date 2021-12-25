import React from "react";
import Project from "./Project";
import data from "../assets/data";

export default function Projects() {

    var project = data.projects.project1
    console.log('project',project)
  return (
    <div className="flex flex-col">

      <p className="dark:text-white text-center font-bold text-2xl relative top-32">Some of my Projects: </p>
      <br />
    <section
      id="projects"
      className="min-h-screen max-w-full flex p-24 md:flex-row flex-wrap justify-center items-stretch"
    >

      {data && data.projects.map((project) => {
        {console.log('project',project)}
        return <Project  imgPath={project.imgPath} projectName={project.projectName} description={project.description} projectLink={project.projectLink} frontEnd={project.frontEnd} backEnd={project.backEnd}/>

      })}
    </section>
      </div>
  );
}
