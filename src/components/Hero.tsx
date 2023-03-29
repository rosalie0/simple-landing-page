import React from "react";
import Typed from "typed.js";

const Hero = () => {
  // Create reference to store the DOM element containing the typing animation
  const el = React.useRef(null);
  // useEffect for typing animation
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["BTB", "BTC", "SASS", "cat food", "cat toys"],
      smartBackspace: false, // Otherwise BTB and BTC looks weird because it only changes the last letter.

      typeSpeed: 120,
      backSpeed: 140,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-white">
      <div className="max-w-3xl mt-[-96px] w-full h-screen mx-auto text-center font-bold flex flex-col justify-center">
        <p className="uppercase text-pink-300 font-bold p-2">
          Growing with data analytics
        </p>
        <h2 className="md:text-7xl sm:text-6xl text-4xl font bold md:py-6">
          Grow with data.
        </h2>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl py-4">
            Fast, flexible financing for <span ref={el} />
          </p>
          <p className="text-gray-300">
            Monitor you data analytics to increase revenue using BTB, BTC, &
            SASS platforms.
          </p>
          <button className="text-black font-medium my-6 mx-auto rounded-md w-[200px] py-3 bg-pink-300 hover:bg-pink-400">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
