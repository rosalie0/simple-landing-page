import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-pink-300 w-full">REACT.</h1>
      <ul className="text-white flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
