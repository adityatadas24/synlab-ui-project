import React from 'react'
import hegde from "../assets/hegde.jpg";
import dolly from "../assets/dolly.jpg";
import kirtika from "../assets/kritika.jpg";
import bb from "../assets/bb.jpg";
import greenTick from "../assets/verified.avif";
import insta from "../assets/instagram.svg";
import fb from "../assets/facebook-v1.svg";
import YT from "../assets/youtube.svg";
const Spotlight = ({title}) => {
  return (
    <div className=" mt-16 mb-20">
    <div className=" p-8 ">
    <div className="container mx-auto mt-8 mb-8 flex justify-between items-center flex-col w-11/12">
          <div className="flex justify-between items-center w-full">
            <div>
              <h1 className="text-3xl text-[#9f6cb9] mb-3 bg-gradient-to-r from-violet-400 via-indigo-700 to-indigo-800 inline-block text-transparent bg-clip-text max-md:text-2xl">{title}</h1>
              <p className="text-md mb-6 text-[#797979] max-md:text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </p>
            </div>
            <div>
              <button className="border border-black rounded-3xl p-2 px-8 font-semibold hover:bg-black hover:text-white max-md:text-[10px] max-md:px-6">
                View All
              </button>
            </div>
          </div>
        <div className="flex flex-row flex-wrap gap-10">
          <div className="h-max  md:w-1/3 lg:w-[22%] bg-white p-4 shadow-lg rounded-xl">
            <img className="w-fit rounded-xl" src={hegde} alt="tanmay" />
            <div className="flex justify-between items-center pt-2 pb-3">
              <div>
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  Sharan Hegde{" "}
                  <span>
                    <img className="w-6" src={greenTick} alt="tick" />
                  </span>
                </h2>
                <p className="text-[#797979]">sharanhegde</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold pl-3">2.6M</h2>
                <p className="text-[#797979]">Followers</p>
              </div>
            </div>
            <hr className="text-[#797979]" />
            <div className="flex justify-between items-center mt-5 mb-1">
              <div className="flex justify-between items-center gap-4">
                <img className="w-4" src={insta} alt="insta" />
                <img className="w-4" src={YT} alt="yt" />
                <img className="w-4" src={fb} alt="fb" />
              </div>
              <button className="bg-[#5525b5]  px-4 p-2 text-white rounded-xl">
                Compare
              </button>
            </div>
          </div>
          <div className="h-max  md:w-1/3 lg:w-[22%] bg-white p-4 shadow-md rounded-xl">
            <img className="w-fit rounded-xl" src={dolly} alt="tanmay" />
            <div className="flex justify-between items-center pt-2 pb-3">
              <div>
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  Dolly Singh{" "}
                  <span>
                    <img className="w-6" src={greenTick} alt="tick" />
                  </span>
                </h2>
                <p className="text-[#797979]">dollysingh</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold pl-3">1.6M</h2>
                <p className="text-[#797979]">Followers</p>
              </div>
            </div>
            <hr className="text-[#797979]" />
            <div className="flex justify-between items-center mt-5 mb-1">
              <div className="flex justify-between items-center gap-4">
                <img className="w-4" src={insta} alt="insta" />
                <img className="w-4" src={YT} alt="yt" />
                <img className="w-4" src={fb} alt="fb" />
              </div>
              <button className="bg-[#5525b5]  px-4 p-2 text-white rounded-xl">
                Compare
              </button>
            </div>
          </div>
          <div className="h-max  md:w-1/3 lg:w-[22%] bg-white p-4 shadow-md rounded-xl">
            <img className="w-fit rounded-xl" src={kirtika} alt="tanmay" />
            <div className="flex justify-between items-center pt-2 pb-3">
              <div>
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  Kirtika Khurana{" "}
                  <span>
                    <img className="w-6" src={greenTick} alt="tick" />
                  </span>
                </h2>
                <p className="text-[#797979]">thatbohogirl</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold pl-3">1.8M</h2>
                <p className="text-[#797979]">Followers</p>
              </div>
            </div>
            <hr className="text-[#797979]" />
            <div className="flex justify-between items-center mt-5 mb-1">
              <div className="flex justify-between items-center gap-4">
                <img className="w-4" src={insta} alt="insta" />
                <img className="w-4" src={YT} alt="yt" />
                <img className="w-4" src={fb} alt="fb" />
              </div>
              <button className="bg-[#5525b5]  px-4 p-2 text-white rounded-xl">
                Compare
              </button>
            </div>
          </div>
          <div className="h-max  md:w-1/3 lg:w-[22%] bg-white p-4 shadow-md rounded-xl">
            <img className="w-fit rounded-xl" src={bb} alt="tanmay" />
            <div className="flex justify-between items-center pt-2 pb-3">
              <div>
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  Bhuvan Bam{" "}
                  <span>
                    <img className="w-6" src={greenTick} alt="tick" />
                  </span>
                </h2>
                <p className="text-[#797979]">bhubambam22</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold pl-3">19.4M</h2>
                <p className="text-[#797979]">Followers</p>
              </div>
            </div>
            <hr className="text-[#797979]" />
            <div className="flex justify-between items-center mt-5 mb-1">
              <div className="flex justify-between items-center gap-4">
                <img className="w-4" src={insta} alt="insta" />
                <img className="w-4" src={YT} alt="yt" />
                <img className="w-4" src={fb} alt="fb" />
              </div>
              <button className="bg-[#5525b5]  px-4 p-2 text-white rounded-xl">
                Compare
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Spotlight