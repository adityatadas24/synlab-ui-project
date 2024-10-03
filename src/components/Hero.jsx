import React from "react";
import model from '../assets/model.jpg'
const Hero = () => {
  return (
    <div className="container mx-auto mt-36 mb-20 flex items-center w-full gap-10 flex-col md:flex-row">
      <div className="bg-[#fafafa] rounded-3xl p-8 w-11/12 h-max">
        <h1 className="text-2xl mb-5">👋</h1>
        <h1 className="text-6xl text-[#9f6cb9] mb-5 bg-gradient-to-r from-violet-400 via-indigo-700 to-indigo-800 inline-block text-transparent bg-clip-text">Simplifying Influencer Marketing For You!</h1>
        <p className=" text-2xl mb-6 w-3/4">
          Explore creators across youtube, instagram & Facebook to curate unique
          content for your brand
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <div className="h-8 text-xl md:h-48">
            <select className="text-[#7148c7] bg-slate-50 border-2 border-[#7148c7] rounded-md pr-16">
              <option value="instagram">Instagram</option>
              <option value="snapchat">Snapchat</option>
              <option value="facebook">Facebook</option>
              <option value="youtube">Youtube</option>
            </select>
          </div>
          <div className="h-8 text-xl md:h-48">
            <select className="text-[#7148c7] bg-slate-50 border-2 border-[#7148c7] rounded-md pr-6">
              <option value="">Select Category</option>
              <option value="instagram">Instagram</option>
              <option value="snapchat">Snapchat</option>
              <option value="facebook">Facebook</option>
              <option value="youtube">Youtube</option>
            </select>
          </div>
          <div className="h-8 md:h-48">
          <button className="bg-[#5525b5] text-xl mr-8 px-8 p-1 text-white rounded-xl">
            Search
          </button>
          </div>
      
        </div>
        <div className="flex flex-col mt-6">
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
      <div className="w-11/12 ">
        <img src={model} alt="" />
      </div>
    </div>
  );
};

export default Hero;
