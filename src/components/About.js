import React from "react";
import bioPic from "../../src/assets/bioedited.png";

export default function About({ setCurrentPage }) {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Logan.
            <br className="hidden lg:inline-block" /> I love using technology to
            solve problems.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a full-stack developer, as well as a financial services
            industry professional based in Columbus, OH. I have years of
            experience collaborating with high-profile clientele, which led to
            the discovery of my passion for working with technology and
            enhancing user experience. I am also skilled in various technologies
            including JavaScript and the MERN stack.
          </p>
          {/* <div className="justify-center mt-14">
            <a href="https://github.com/Logand307" target="_blank">
              <img
                src="https://img.icons8.com/color/144/000000/github--v1.png"
                alt="Github"
                className="icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/davisdevelopment/"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/color/144/000000/linkedin.png"
                alt="LinkedIn"
                className="icon"
              />
            </a>
          </div> */}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 order-1">
          <img
            className="object-cover object-center rounded order-1"
            alt="hero"
            src={bioPic}
          />
        </div>
      </div>
    </section>
  );
}
