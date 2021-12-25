import React from "react";

export default function Project({
  imgPath,
  projectName,
  description,
  frontEnd,
  backEnd,
  projectLink,
}) {
  return (
    <div className="md:w-2/6 mx-5 my-5 dark:bg-stone-800 transform transition duration-700 ease-in-out hover:scale-110">
      <img
        src={`${process.env.PUBLIC_URL}/icons/` + `${imgPath}` + ".png"}
        alt=""
        className=""
      />
      <div className="texts relative left-2 ">
        <p className="dark:text-white text-2xl">{projectName}</p>
        <br />
        <p className="dark:text-white w-5/6 text-xl" variant="h6">{description}</p>
        <br />
        <p className="dark:text-white font-bold text-xl" >{"FrontEnd: " + frontEnd}</p>
        <p className="dark:text-white font-bold text-xl" >{"BackEnd: " + backEnd}</p>
        <br />
        {/* <a href={projectLink}>Check it Out</a> */}
        <button
          href={projectLink}
          className="m-4 px-8 py-2 rounded-xl transform transition duration-700 ease-in-out hover:scale-110 bg-gray-500"
        >
          <a href={projectLink}>Check it Out</a>
        </button>
      </div>
    </div>
  );
}
