import React from "react";

import { useNavigate } from "react-router-dom";
import back_img from "../assets/backs.png";

const CatePage = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate("/");
  return (
    <div className="min-h-screen relative bg-gray-400">
      <img
        src={back_img}
        onClick={handleBack}
        className="w-2 h-2 fixed hover:scale-120 hover:rotate-2  transition-transform duration-300 fixed top-2 left-2 cursor-pointer"
      />
      <div className="p-16 flex items-center justify-center min-h-screen">
        <button className="text-white text-lg font-extrabold uppercase px-6 py-14 bg-black hover:scale-120 transform-translate duration-200">
          Chains
        </button>
      </div>
    </div>
  );
};

export default CatePage;
