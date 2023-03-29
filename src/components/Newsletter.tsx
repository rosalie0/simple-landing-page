import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    console.log(newEmail);
    setEmail(newEmail);
  };

  const submitHandler = () => {};

  return (
    <div className="w-full py-16 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto  grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h2>
          <p className="text-md">
            Sign up for our newsletter and stay up to date
          </p>
        </div>
        <div>
          {/* form */}
          <form
            onSubmit={submitHandler}
            className="w-full flex flex-col sm:flex-row items-center justify-between"
          >
            <input
              name="email"
              type="email"
              required
              className="p-3 flex w-full rounded-md text-black"
              placeholder="enter your email"
              value={email}
              onChange={emailHandler}
            />
            <button
              type="submit"
              className="bg-pink-300 text-black font-medium w-[200px]
              py-3 px-6 rounded-md ml-4 my-6"
            >
              Notify Me
            </button>
          </form>
          <p>
            We care about the protection of your data. Read our{" "}
            <a className="text-pink-300 underline" href="/">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
