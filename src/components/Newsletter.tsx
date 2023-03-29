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
    <div className="max-w-full bg-black text-white mx-12 my-4 flex-col md:flex-row">
      <div className="">
        <h2 className="text-3xl font-bold">
          Want tips & tricks to optimize your flow?
        </h2>
        <p className="text-md">Sign up to our newsletter and stay up to date</p>
      </div>
      <div>
        {/* form */}
        <form onSubmit={submitHandler}>
          <input
            //type="email"
            //name="email"
            required
            className="rounded-md text-black"
            placeholder="enter your email"
            // value={email}
            onChange={emailHandler}
          ></input>
          <button type="submit" className="bg-pink-300 text-black rounded-md ">
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
  );
};

export default Newsletter;
