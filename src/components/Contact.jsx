import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="flex h-screen flex-col justify-center  items-center">
      <h2 className="dark:text-white mb-20 text-4xl">Want to connect?</h2>
      <section
        className="contact  flex justify-center items-center"
        id="contact"
      >
        <div className="flex flex-col md:flex-row justify-center items-center ">
          <a
            href="https://github.com/mak2002"
            className=" bg-slate-200 m-5 p-8 transition duration-700 ease-in-out hover:scale-110"
          >
            <FaGithub />
            <p className="text-2xl">Github</p>
          </a>
          <a
            href="https://twitter.com/MayankBondre"
            className="bg-white m-5 p-8 transition duration-700 ease-in-out hover:scale-110"
          >
            <FaTwitter />

            <p className="text-2xl">Twitter</p>
          </a>
          <a
            href="https://www.linkedin.com/in/mayank-bondre-11a522223"
            className="bg-white m-5 p-8 transition duration-700 ease-in-out hover:scale-110"
          >
            <FaLinkedin />

            <p className="text-2xl">LinkedIn</p>
          </a>
          <a
            href="mailto:makbond0902@gmail.com"
            className="bg-white m-5 p-8 transition duration-700 ease-in-out hover:scale-110"
          >
            <MdEmail className="" />

            <p className="text-2xl">Email</p>
          </a>
        </div>
      </section>
    </div>
  );
}
