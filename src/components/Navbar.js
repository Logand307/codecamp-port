import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar({ setCurrentPage }) {
  return (
    <header className="bg-gray-800  top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center top-0">
        <a className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-xl text-white ">
          <a
            href="#about"
            onClick={() => setCurrentPage("About")}
            className="ml-3 text-3xl font-bold "
          >
            Logan Davis
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a
            href="#projects"
            onClick={() => setCurrentPage("Projects")}
            className="mr-5 hover:text-white text-xl"
          >
            Portfolio
          </a>
          <a
            href="#skills"
            onClick={() => setCurrentPage("Skills")}
            className="mr-5 hover:text-white text-xl text-xl"
          >
            Skills
          </a>
          <a
            href="https://drive.google.com/file/d/1JybPQWP30NZi7iCbSUG8ee6t0o36DldH/view?usp=sharing"
            className="mr-5 hover:text-white text-xl"
          >
            Resume
          </a>

          {/* <a
            href="#resume"
            onClick={() => setCurrentPage("Resume")}
            className="mr-5 hover:text-white text-xl text-xl"
          >
            Resume
          </a> */}
        </nav>
        <ul class="flex flex-wrap flex items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <div className="img-link">
              <a href="https://github.com/Logand307" target="_blank">
                <img
                  src="https://img.icons8.com/color/48/000000/github--v1.png "
                  alt="Github"
                  className="icon"
                />
              </a>
            </div>
          </li>
          <li>
            <div className="img-link">
              <a
                href="https://www.linkedin.com/in/logandavisdev/"
                target="_blank"
              >
                <img
                  src="https://img.icons8.com/fluency/48/000000/linkedin-circled.png"
                  alt="Github"
                  className="icon"
                />
              </a>
            </div>
          </li>
        </ul>
        <a
          href="#contact"
          onClick={() => setCurrentPage("Contact")}
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-2xl text-white font-bold"
        >
          Contact Me <ArrowRightIcon className="w-4 h-4 ml-1 " />
        </a>
      </div>
    </header>
  );
}
