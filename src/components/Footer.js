import React from "react";
import reactNative from "../assets/react.jpg";

export default function Footer() {
  return (
    <footer class=" flex items-center w-full	fixed bottom-0 right-0 p-4 bg-white shadow md:flex md:items-center md:p-1 dark:bg-gray-800 justify-center ">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex items-center"></span>
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
        <li>
          <img
            id="react-icon"
            src="https://img.icons8.com/color/48/000000/react-native.png"
            alt="React"
          />
        </li>
      </ul>
    </footer>
  );
}
