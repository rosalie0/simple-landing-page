import React from "react";
import Typed from "typed.js";

const Hero = () => {
  // Create reference to store the DOM element containing the typing animation
  const el = React.useRef(null);
  // useEffect for typing animation
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["BTB", "BTC", "SASS", "cat food"],
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
      <div className="max-w-3xl mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-pink-300 font-bold p-2">
          Growing with data analytics
        </p>
        <h2 className="md:text-7xl sm:text-6xl text-4xl font bold md:py-6">
          Grow with data.
        </h2>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl">
            Fast, flexible financing for <span ref={el} />
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
