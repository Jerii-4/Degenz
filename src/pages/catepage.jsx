import React from "react";
import { useNavigate } from "react-router-dom";
import back_img from "../assets/backs.png";

const CatePage = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate("/");

  return (
    <div className="min-h-screen bg-white p-8 relative">
    
      <img
        src={back_img}
        onClick={handleBack}
        className="hover:scale-110 hover:rotate-2 transition-transform duration-300 fixed top-2 left-2 w-18 h-18 cursor-pointer"
      />

   
      <div className="flex flex-col items-center justify-center h-full mt-24">
        <p className="text-center text-3xl font-medium text-gray-800 mb-12">
          Click on Chains to see the popular blockchains that rule the crypto
          market!
        </p>

        <button className="text-white text-3xl rounded-lg font-extrabold uppercase px-10 py-6 bg-black hover:scale-110 transform transition duration-200">
          Chains
        </button>
      </div>
    </div>
  );
};

export default CatePage;
