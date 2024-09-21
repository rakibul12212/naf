import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gray-800 py-16 text-white">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-items-center px-4 md:px-4 lg:px-8 gap-4">
        <div className="p-4">
          <h1 className="font-bold text-xl border-b-4 border-[#4a7c59] pb-2">
            ABOUT US
          </h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
            tincidunt risus.
          </p>
          <h2 className="font-bold text-xl border-b-4 border-[#4a7c59] pb-2 pt-4">
            CONTACT US
          </h2>
          <p className="mt-2 mb-2">Phone: 0123456789</p>
          <p className="mt-2 mb-2">Email: demo@example.com</p>
          <p>Address: Your address goes here.</p>
        </div>

        <div className="p-4">
          <h1 className="font-bold text-xl border-b-4 border-[#4a7c59] pb-2">
            OUR PROJECT
          </h1>
          <ol className="mt-2 list-disc pl-5 ">
            <li
              className="mt-2 mb-2 hover:text-[#4a7c59] hover:text-base transform hover:scale-110 transition duration-300
            "
            >
              Water Surve
            </li>
            <li className="mb-2 hover:text-[#4a7c59] hover:text-base transform hover:scale-110 transition duration-300">
              Education for all
            </li>
            <li className="mb-2 hover:text-[#4a7c59] hover:text-base transform hover:scale-110 transition duration-300">
              Treatment
            </li>
            <li className="mb-2 hover:text-[#4a7c59] hover:text-base transform hover:scale-110 transition duration-300">
              Food Serving
            </li>
            <li className="mb-2 hover:text-[#4a7c59] hover:text-base transform hover:scale-110 transition duration-300">
              Cloth
            </li>
            <li className="mb-2 hover:text-[#4a7c59] hover:text-base transform hover:scale-110 transition duration-300">
              Selter Project
            </li>
          </ol>
        </div>
        <div className="p-4 hidden md:block">
          <h1 className="font-bold text-xl border-b-4 border-[#4a7c59] pb-2">
            QUICK LINK
          </h1>
          <ol className="mt-2 list-disc pl-5">
            <li className="mt-2 mb-2 hover:text-[#4a7c59] hover:text-base transform hover:scale-110 transition duration-300">
              Causes
            </li>
            <li className="mb-2 hover:text-[#4a7c59] hover:text-base transform hover:scale-110 transition duration-300">
              Projects
            </li>
            <li className="mb-2 hover:text-[#4a7c59] hover:text-base transform hover:scale-110 transition duration-300">
              Gallery
            </li>
            <li className="mb-2 hover:text-[#4a7c59] hover:text-base transform hover:scale-110 transition duration-300">
              Terms of use
            </li>
            <li className="mb-2 hover:text-[#4a7c59] hover:text-base transform hover:scale-110 transition duration-300">
              Legal disclaimer
            </li>
            <li className="mb-2 hover:text-[#4a7c59] hover:text-base transform hover:scale-110 transition duration-300">
              Privacy policy
            </li>
          </ol>
        </div>
        <div className="p-4 hidden md:block">
          <h1 className="font-bold text-xl border-b-4 border-[#4a7c59] pb-2">
            NEWSLETTER
          </h1>
          <p className="mt-2">
            Select your newsletters, enter your email address, and click
            "Subscribe"
          </p>
          <div className="flex mt-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="border-2 outline-none border-gray-300 rounded-l-md px-2 py-1 w-40"
            />
            <button
              type="submit"
              className="bg-[#4a7c59]  text-white px-4 py-1 rounded-r-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Copyright and Social Links Section */}
      <div className="mt-4 pt-6 md:px-10">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-center text-sm text-gray-500">
            &copy; {currentYear}. Nation Aid Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
