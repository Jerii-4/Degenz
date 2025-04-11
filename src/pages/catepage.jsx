import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import back_img from "../assets/backs.png";
import CoinDetails from "../components/coindetails";

const blockchainData = {
  "Ethereum (ETH)": [
    "ETH",
    "USDT",
    "USDC",
    "DAI",
    "MKR",
    "LDO",
    "UNI",
    "AAVE",
    "LINK",
  ],
  "BSC Chain (BSC)": [
    "BNB",
    "CAKE",
    "XVS",
    "BAKE",
    "TWT",
    "ALPACA",
    "AUTO",
    "BIFI",
    "BURGER",
  ],
  "Solana (SOL)": [
    "SOL",
    "RAY",
    "SRM",
    "FTT",
    "COPE",
    "MAPS",
    "STEP",
    "SAMO",
    "OXY",
  ],
  "Polygon (MATIC)": [
    "MATIC",
    "QUICK",
    "DFYN",
    "SUSHI",
    "AAVE",
    "GHST",
    "WETH",
    "USDT",
    "USDC",
  ],
  "Avalanche (AVAX)": [
    "AVAX",
    "JOE",
    "PNG",
    "XAVA",
    "YAK",
    "PIFI",
    "SNOB",
    "LYD",
    "QI",
  ],
  "Cardano (ADA)": [
    "ADA",
    "DANA",
    "WMT",
    "MIN",
    "MELD",
    "AGIX",
    "OCC",
    "COTI",
    "Sundae",
  ],
};

const coinDetails = CoinDetails;
  


const CatePage = () => {
  const navigate = useNavigate();
  const [showBoxes, setShowBoxes] = useState(false);
  const [selectedChain, setSelectedChain] = useState(null);
  const [selectedCoin, setSelectedCoin] = useState(null);

  const handleBack = () => {
    if (selectedCoin) {
      setSelectedCoin(null);
    } else if (selectedChain) {
      setSelectedChain(null);
    } else if (showBoxes) {
      setShowBoxes(false);
    } else {
      navigate("/");
    }
  };

  const chains = Object.keys(blockchainData);
  const coins = selectedChain ? blockchainData[selectedChain] : [];

  const coinInfo = coinDetails[selectedCoin];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <img
        src={back_img}
        onClick={handleBack}
        className="hover:scale-110 hover:rotate-2 transition-transform duration-300 fixed top-3 left-3 w-12 h-12 cursor-pointer z-50"
        alt="Back"
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

      {showBoxes && !selectedChain && (
        <div className="fixed inset-0 bg-white bg-opacity-20 backdrop-blur-md z-20 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-10 p-8">
            {chains.map((name, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedChain(name)}
                className="w-65 h-65 bg-white uppercase border-4 border-black text-center flex items-center justify-center text-xl font-bold cursor-pointer animate-deal-from-bottom"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedChain && !selectedCoin && (
        <div className="fixed inset-0 bg-white bg-opacity-20 backdrop-blur-md z-30 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-10 p-8">
            {coins.map((coin, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedCoin(coin)}
                className="w-49 h-49 bg-white border-4 border-black text-center flex items-center justify-center text-xl font-bold uppercase animate-deal-from-bottom cursor-pointer"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {coin}
              </div>
            ))}
          </div>
        </div>
      )}

{selectedCoin && coinInfo && (
  <div className="fixed inset-0 bg-white bg-opacity-30 backdrop-blur-lg z-40 flex items-center justify-center">
    <div className="bg-white w-full max-w-5xl px-12 py-10 rounded-2xl shadow-2xl animate-flip-horizontal transition-transform duration-700 text-left relative">
      
      <h2 className="text-5xl font-extrabold mb-8 text-center uppercase tracking-wide">
        {selectedCoin}
      </h2>
      <div className="space-y-6 text-lg">
        <p>
          <span className="font-bold text-gray-700">Why Invest:</span> {coinInfo.why}
        </p>
        <p>
          <span className="font-bold text-gray-700">Performance:</span> {coinInfo.performance}
        </p>
        <p>
          <span className="font-bold text-gray-700">Best Time:</span> {coinInfo.bestTime}
        </p>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default CatePage;
