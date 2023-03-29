import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleNav = () => {
    setNavIsOpen(!navIsOpen);
  };
  return (
    <div className="text-white flex justify-between items-center h-24 max-w-7xl mx-auto px-4">
      {/* for large screens */}
      <h1 className="p-4 text-3xl font-bold text-pink-300 w-full">REACT.</h1>
      <ul className="hidden  md:flex uppercase">
        <li className="p-4 cursor-pointer">Home</li>
        <li className="p-4 cursor-pointer">Company</li>
        <li className="p-4 cursor-pointer">Resources</li>
        <li className="p-4 cursor-pointer">About</li>
        <li className="p-4 cursor-pointer">Contact</li>
      </ul>

      {/* hide the hamburger icon on medium (and larger) screens.
      Icon changed between hamburger and X depending on isNavOpen */}
      <div onClick={handleNav} className="block md:hidden">
        {!navIsOpen ? (
          <AiOutlineMenu size={20} />
        ) : (
          <AiOutlineClose size={20} />
        )}
      </div>

      {/* for small screens */}
      <div
        className={
          navIsOpen
            ? "fixed left-0 top-0 w-[60%] h-full bg-[#000300] border-r border-r-gray-900 ease-in-out duration-500"
            : // Cannot do hidden or else we cannot apply transitions.
              //If you do opacity-0 , it fades in. doing left -100 makes it move in from the left.
              "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <ul className="pt-4 uppercase">
          <h1 className="p-4 text-3xl font-bold text-pink-300 w-full">
            REACT.
          </h1>
          <li className="p-4 cursor-pointer border-b border-gray-600 ">Home</li>
          <li className="p-4 cursor-pointer border-b border-gray-600">
            Company
          </li>
          <li className="p-4 cursor-pointer border-b border-gray-600">
            Resources
          </li>
          <li className="p-4 cursor-pointer border-b border-gray-600 ">
            About
          </li>
          <li className="p-4 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
