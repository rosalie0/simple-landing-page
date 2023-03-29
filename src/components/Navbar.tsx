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
      <ul className="uppercase flex hidden">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav}>
        {!navIsOpen ? (
          <AiOutlineMenu size={20} />
        ) : (
          <AiOutlineClose size={20} />
        )}
      </div>

      {/* for small screens */}
      <div className="fixed left-0 top-0 w-[60%] h-full bg-[#000300] border-r border-r-gray-900">
        <h1 className="p-4 text-3xl font-bold text-pink-300 w-full">REACT.</h1>
        <ul className="pt-4 uppercase">
          <li className="p-4 border-b border-gray-600 ">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600 ">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
