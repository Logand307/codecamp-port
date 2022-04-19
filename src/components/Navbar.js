import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-xl text-white">
          <a href="#about" className="ml-3 text-2xl font-bold">
            Logan Davis
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white text-xl">
            Portfolio
          </a>
          <a href="#skills" className="mr-5 hover:text-white text-xl text-xl">
            Skills
          </a>
          <a
            href="https://drive.google.com/file/d/1V8bwKvor7dBdd2u6YTo2B-8Bkm81oeAN/view?usp=sharing"
            className="mr-5 hover:text-white text-xl"
          >
            Resume
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-1xl text-white font-bold"
        >
          Contact Me <ArrowRightIcon className="w-4 h-4 ml-1 " />
        </a>
      </div>
    </header>
  );
}
