import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import back_img from "../assets/backs.png";

const CatePage = () => {
  const navigate = useNavigate();
  const [showBoxes, setShowBoxes] = useState(false);

  const handleBack = () => {
    if (showBoxes) {
      setShowBoxes(false);
    } else {
      navigate("/");
    }
  };

  const chains = [
    "Ethereum (ETH)",
    "BSC Chain(BSC)",
    "Solana(SOL)",
    "Polygon(MATIC)",
    "AVALANCHE(AVAX)",
    "cardano(ADA)",
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <img
        src={back_img}
        onClick={handleBack}
        className="hover:scale-110 hover:rotate-2 transition-transform duration-300 fixed top-3 left-3 w-16 h-16 cursor-pointer z-50"
      />

      {!showBoxes && (
        <div className="flex flex-col items-center justify-center h-full mt-40">
          <p className="text-center text-xl font-medium text-gray-800 mb-6">
            Click on Chains to see the popular blockchains that rule the crypto
            market
          </p>
          <button
            onClick={() => setShowBoxes(true)}
            className="text-white text-3xl rounded-lg font-extrabold uppercase px-12 py-8 bg-black hover:scale-110 transform transition duration-200"
          >
            Chains
          </button>
        </div>
      )}

      {showBoxes && (
        <div className="fixed inset-0 bg-white bg-opacity-20 backdrop-blur-md z-20 flex items-center justify-center animate-slide-up">
          <div className="grid grid-cols-3 gap-10 p-8">
            {chains.map((name, idx) => (
              <div
                key={idx}
                className="w-60 h-60 bg-white  border-4 uppercase border-black flex items-center justify-center text-xl font-bold rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                style={{
                  animation: `slideFromBottom 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CatePage;
