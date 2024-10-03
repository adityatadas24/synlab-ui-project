import React from "react";
import camp from '../assets/camp.jpg'
const Campaigns = () => {
  return (
    <div className="container mx-auto mt-36 mb-20 flex items-center flex-col w-full ">
              <h1 className="text-4xl font-semibold text-[#9f6cb9] mb-3 bg-gradient-to-r from-violet-400 via-indigo-700 to-indigo-800 inline-block text-transparent bg-clip-text">Live Campaigns</h1>
              <img src={camp} alt="camp" />
    </div>
  );
};

export default Campaigns;
