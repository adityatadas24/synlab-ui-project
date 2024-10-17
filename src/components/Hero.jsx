import React from "react";
import model from "../assets/model.jpg";
const Hero = () => {
  return (
    <div className="container mx-auto mt-32 mb-16 flex items-center w-11/12 gap-8 flex-col md:flex-row">
      <div className="bg-[#fafafa] rounded-2xl p-6 w-5/6 h-max">
        <h1 className="text-xl mb-5">👋</h1>
        <h1 className="text-4xl text-[#b045e6] mb-5 bg-gradient-to-r from-violet-400 via-indigo-700 to-indigo-800 inline-block text-transparent bg-clip-text max-md:text-[28px]">
          Simplifying Influencer Marketing For You!
        </h1>
        <p className=" text-lg mb-4 w-5/6 max-md:text-[14px]">
          Explore creators across youtube, instagram & Facebook to curate unique
          content for your brand
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <div className="h-6 text-md md:h-40">
            <select className="text-[#7148c7] bg-slate-50 border-2 border-[#7148c7] rounded-md pr-12 max-md:text-[12px]">
              <option value="instagram">Instagram</option>
              <option value="snapchat">Snapchat</option>
              <option value="facebook">Facebook</option>
              <option value="youtube">Youtube</option>
            </select>
          </div>
          <div className="h-6 text-md md:h-40">
            <select className="text-[#7148c7] bg-slate-50 border-2 border-[#7148c7] rounded-md pr-4 max-md:text-[12px]">
              <option value="">Select Category</option>
              <option value="instagram">Instagram</option>
              <option value="snapchat">Snapchat</option>
              <option value="facebook">Facebook</option>
              <option value="youtube">Youtube</option>
            </select>
          </div>
          <div className="h-6 md:h-40">
            <button className="bg-[#5525b5] text-lg mr-6 px-6 p-1 text-white rounded-xl max-md:text-[12px]">
              Search
            </button>
          </div>
        </div>
        <div className="flex max-md:text-[9px] flex-col mt-4">
          <p className="text-[#cfcfcf]">Trusted By</p>
          <div className="flex gap-4">
            <p className="text-[#7a7979]">CHANEL</p>
            <p className="text-[#afafaf]">LOUIS VUITTON</p>
            <p className="text-[#797979]">PRADA</p>
            <p className="text-[#afafaf]">Calvin Klein</p>
            <p className="text-[#797979]">DENIM</p>
          </div>
        </div>
      </div>
      <div className="w-2/3 ">
        <img src={model} alt="" />
      </div>
    </div>
  );
};

export default Hero;
