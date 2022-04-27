import React from "react";
import { BriefcaseIcon } from "@heroicons/react/solid";

export default function Resume() {
  return (
    <section className="text-white bg-gray-900 body-font h-fit sticky pb-14 ">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <BriefcaseIcon className="mx-auto inline-block w-10 mb-4 text-gray-400" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Experience
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
            Below is are details of my education and professional experience.
          </p>
        </div>
        <div className="mb-2 leading-relaxed text-white bg-gray-800 rounded ">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Ohio_State_University_seal.svg/150px-Ohio_State_University_seal.svg.png"
            alt="Bootstrap"
            className=" ml-56 flex flex-auto	"
          />
          <p className="">Bachelor of science</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/FranklinUniversitySealAsOf20180521.png/150px-FranklinUniversitySealAsOf20180521.png"
            alt="Bootstrap"
            className="ml-56 flex flex-auto	 "
          />
        </div>
      </div>
    </section>
  );
}
