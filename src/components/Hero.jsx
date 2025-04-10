import React from "react";
import search from "../assets/search.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Categories");
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black-500">
      <div>
       
        <h1 className="uppercase text-8xl font-bold">
          You have reached your <br></br> destination
        </h1>
      </div>
      <div>
        <img
          src={search}
          onClick={handleClick}
          className=" my-6 h-auto cursor-pointer rounded-full hover:scale-120 hover:rotate-2 hover:brightness-120 transition-transform duration-300"
        />
      </div>
    </div>
  );
};
export default HeroSection;
