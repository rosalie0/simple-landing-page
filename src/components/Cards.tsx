import React from "react";
import SingleUser from "../assets/single.png";
import DoubleUser from "../assets/double.png";
import TripleUser from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full grid grid-cols-3 bg-white">
      <div id="card1">
        <img src={SingleUser} alt="icon of a single person" />
        <h2>Single User</h2>
        <h3>$149</h3>
        <p>500 GB Storage</p>
        <p className="">1 User Allowed</p>
        <p className="">Send up to 2GB</p>
        <button className="bg-pink-300 font-medium w-[200px] rounded-md py-2 px-4">
          Start Trial
        </button>
      </div>
      <div id="card2"></div>
      <div id="card3"></div>
    </div>
  );
};

export default Cards;
