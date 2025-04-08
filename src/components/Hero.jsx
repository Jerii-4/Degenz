import React from "react";
import search from "../assets/search.png"

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black-500">
     <div className="bg-blue-500 " > <h1 className="uppercase w-8 text-white text-8xl font-bold">You have reached your <br></br> destination</h1>
     </div>
     <div>
      <img src={search} className="w-16 m-8 cursor-pointer rounded-full hover:scale-120 hover:rotate-2 hover:brightness-120 transition-transform duration-300"/>
     </div>
  
    </div>

   

  ) 
};
export default HeroSection;
