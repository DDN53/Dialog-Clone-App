import React from "react";
import { IoMenu } from "react-icons/io5";

import { logo } from "../../images/index";

export const Navbar = ({ children }) => {
  // Corrected props destructuring
  return (
    <div className="w-full  border-b-4 border-gray-200  h-14">
      <div className="ml-52 mr-auto flex items-center mt-0 w-full h-14">
        <IoMenu className="text-3xl w-5 h-5" />
        <img
          src={logo}
          className="w-[4.575rem] h-[4.75rem] mt-0 ml-5"
          alt="Logo"
        />

        <div className="ml-14  ">
          <ul className="flex my-5 ">
            <li className="text-[ 0.9rem] px-4 py-4 text-gray-600 block hover:bg-slate-200">
              Mobile
            </li>
            <li className="text-[ 0.9rem] px-4 py-4 text-gray-600 hover:bg-slate-200 ">
              Television
            </li>
            <li className="text-[ 0.9rem] px-4 py-4 text-gray-600 hover:bg-slate-200">
              Shop
            </li>
            <li className="text-[ 0.9rem] px-4 py-4 text-gray-600 hover:bg-slate-200">
              Support
            </li>
            <li className="text-[ 0.9rem] px-4 py-4 text-gray-600 hover:bg-slate-200">
              Business
            </li>
          </ul>
        </div>
        {children}
      </div>
    </div>
  );
};
