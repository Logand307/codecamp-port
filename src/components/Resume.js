import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";

export default function Resume() {
  return (
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-3 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
          <span className="title-font font-medium text-white">
            Education
            <div></div>
          </span>
        </div>
      </div>
    </div>
  );
}
