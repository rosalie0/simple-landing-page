import React from "react";
// importing from asset folder
import abbyPhoto from "../assets/abby-photo.png";
// importing from public folder
import abbyPicrew from "/abby-piccrew.png";

const Hello = () => {
  return (
    <div className="text-3xl text-center font-bold underline text-rose-600">
      <h1>hello world!</h1>
      <img src={abbyPhoto} alt="photo of abby" />
      <img src={abbyPicrew} alt="drawing of abby" />
    </div>
  );
};

export default Hello;
