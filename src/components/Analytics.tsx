import React from "react";
import Laptop from "../assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 ">
        <img
          src={Laptop}
          alt="drawing of a laptop"
          className="w-[500px] mx-auto my-4"
        />
        <div className="flex flex-col justify-center">
          <p className="text-pink-300 uppercase font-bold">
            Data analytics dashboard
          </p>
          <h2 className="font-bold md:text-4xl sm:text-3xl text-2xl py-2">
            Manage Data Analytics Centrally
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            voluptatibus id facilis sapiente doloremque iste, amet incidunt
            optio distinctio modi mollitia molestias magni itaque sit
            consectetur reprehenderit laborum deserunt quae.
          </p>
          <button className="self-center bg-black font-medium my-6 rounded-md w-[200px] py-3 text-pink-300 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
