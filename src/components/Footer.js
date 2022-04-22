import React from "react";

export default function Footer() {
  return (
    <footer class=" w-full	relative bottom-0 right-0 p-4 bg-white shadow md:flex md:items-center md:p-6 dark:bg-gray-800 ">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 ">
        © 2022{" "}
        <a href="https://flowbite.com" class="hover:underline">
          Logan Davis
        </a>
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <div className="img-link">
            <a href="https://github.com/Logand307" target="_blank">
              <img
                src="https://img.icons8.com/color/96/000000/github--v1.png "
                alt="Github"
                className="icon"
              />
            </a>
          </div>
        </li>
        <li>
          <div className="img-link">
            <a href="https://github.com/Logand307" target="_blank">
              <img
                src="https://img.icons8.com/color/96/000000/linkedin.png "
                alt="Github"
                className="icon"
              />
            </a>
          </div>
        </li>
      </ul>
    </footer>
  );
}
