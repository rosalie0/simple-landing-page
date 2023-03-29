import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";

import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 bg-black text-gray-300">
      <div className="mx-auto grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 my-4">
          <h2 className="text-3xl font-bold text-pink-300 w-full">REACT.</h2>
          <p className="py-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ullam
            adipisci similique! Voluptate sequi eum asperiores excepturi, ipsa
            animi explicabo quas.
          </p>
          <div
            id="social-icons"
            className="flex justify-around md:[w-75%] my-6"
          >
            <FaTwitterSquare size={30} />
            <FaFacebookSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaGithubSquare size={30} />
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer">Analytics</li>
              <li className="py-2 text-sm cursor-pointer">Marketing</li>
              <li className="py-2 text-sm cursor-pointer">Commerce</li>
              <li className="py-2 text-sm cursor-pointer">Insights</li>
            </ul>
          </div>

          <div>
            <h6 className="font-medium text-gray-400">Company</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Jobs</li>
              <li className="py-2 text-sm">Press</li>
              <li className="py-2 text-sm">Careers</li>
            </ul>
          </div>

          <div>
            <h6 className="font-medium text-gray-400">Legal</h6>
            <ul>
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
