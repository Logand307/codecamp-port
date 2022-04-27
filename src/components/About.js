import React from "react";
import bioPic from "../../src/assets/bioedited.png";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";

export default function About({ setCurrentPage }) {
  return (
    <section className="h-max">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center  ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center pt-8 ">
          <h1 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Logan.
            <br className="hidden lg:inline-block" /> I am a full-stack
            developer and a financial services industry professional.
          </h1>
          <p className="mb-2 leading-relaxed">
            I have years of experience collaborating with high-profile
            clientele, which led to the discovery of my passion for working with
            technology and enhancing user experience. I have completed a
            full-stack web development bootcamp at The Ohio State University
            College of Engineering, and am skilled in various technologies
            including JavaScript and the MERN stack.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 order-1 md:flex flex-row pt-10">
          <img
            className="object-cover object-center rounded order-1 "
            alt="hero"
            src={bioPic}
          />
        </div>
      </div>
    </section>
  );
}
