import React from "react";
import SingleUser from "../assets/single.png";
import DoubleUser from "../assets/double.png";
import TripleUser from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-40 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div
          id="card1"
          className="shadow-xl rounded-lg p-4 my-4 flex flex-col hover:scale-105 duration-200"
        >
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={SingleUser}
            alt="icon of a single person"
          />
          <h2 className="text-center text-2xl font-bold py-4">Single User</h2>
          <p className="text-center text-4xl font-bold ">$149</p>
          <div className="font-medium text-center">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 User Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="bg-pink-300 font-medium w-[200px] rounded-md my-6 mx-auto py-2 px-4">
            Start Trial
          </button>
        </div>

        {/* Card 2 */}
        <div
          id="card2"
          className="shadow-xl rounded-lg p-4 my-8 md:my-0 flex flex-col hover:scale-105 duration-200 bg-gray-100"
        >
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={DoubleUser}
            alt="icon of a single person"
          />
          <h2 className="text-center text-2xl font-bold py-4">Double User</h2>
          <p className="text-center text-4xl font-bold ">$149</p>
          <div className="font-medium text-center">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 User Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="bg-pink-300 font-medium w-[200px] rounded-md my-6 mx-auto py-2 px-4">
            Start Trial
          </button>
        </div>

        {/* Card 3 */}
        <div
          id="card3"
          className="shadow-xl rounded-lg p-4 my-4 flex flex-col hover:scale-105 duration-200"
        >
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={TripleUser}
            alt="icon of a single person"
          />
          <h2 className="text-center text-2xl font-bold py-4">Single User</h2>
          <p className="text-center text-4xl font-bold ">$149</p>
          <div className="font-medium text-center">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 User Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="bg-pink-300 font-medium w-[200px] rounded-md my-6 mx-auto py-2 px-4">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
