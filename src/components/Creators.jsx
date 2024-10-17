import React from "react";
import tanmay from "../assets/tanmay.jpg";
import kusha from "../assets/kusha.jpg";
import rohan from "../assets/rohan.jpg";
import bb from "../assets/bb.jpg";
import greenTick from "../assets/verified.avif";
import insta from "../assets/instagram.svg";
import fb from "../assets/facebook-v1.svg";
import YT from "../assets/youtube.svg";
import food from "../assets/food.jpg";
import tech from "../assets/tech.jpg";
import fashion from "../assets/fashion.jpg";
import pod from "../assets/pod.jpg";
import travel from "../assets/travel.jpg";

const Creators = () => {
  return (
    <div className=" mt-20 mb-16">
      <div className=" bg-[#fafafa] p-10 ">
        <div className="container mx-auto mt-8 mb-8 flex justify-between items-center flex-col w-11/12">
          <div className="flex justify-between items-center w-full">
            <div>
              <h1 className="text-3xl text-[#9f6cb9] mb-3 bg-gradient-to-r from-violet-400 via-indigo-700 to-indigo-800 inline-block text-transparent bg-clip-text max-md:text-2xl">The OG Creators</h1>
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
          <div className="flex flex-row flex-wrap gap-12">
            <div className="h-max  md:w-1/3 lg:w-[22%] bg-white p-4 shadow-lg rounded-xl">
              <img className="w-fit rounded-xl" src={tanmay} alt="tanmay" />
              <div className="flex justify-between items-center pt-2 pb-3">
                <div>
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    Tanmay Bhatt{" "}
                    <span>
                      <img className="w-6" src={greenTick} alt="tick" />
                    </span>
                  </h2>
                  <p className="text-[#797979]">tanmaybhatt</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold pl-3">1.9M</h2>
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
              <img className="w-fit rounded-xl" src={kusha} alt="tanmay" />
              <div className="flex justify-between items-center pt-2 pb-3">
                <div>
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    Kusha Kapila{" "}
                    <span>
                      <img className="w-6" src={greenTick} alt="tick" />
                    </span>
                  </h2>
                  <p className="text-[#797979]">kushakapila</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold pl-3">3.7M</h2>
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
              <img className="w-fit rounded-xl" src={rohan} alt="tanmay" />
              <div className="flex justify-between items-center pt-2 pb-3">
                <div>
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    Rohan Joshi{" "}
                    <span>
                      <img className="w-6" src={greenTick} alt="tick" />
                    </span>
                  </h2>
                  <p className="text-[#797979]">rohanjoshi</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold pl-3">597K</h2>
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

      <div className=" bg-[#f7efec] p-6">
     
        <div className="container mx-auto mt-8 mb-8 flex justify-between items-center flex-col w-11/12">

        <div className="container mx-auto flex justify-between items-center w-11/12">
            <h1 className="text-2xl font-semibold text-[#9f5208] mb-3 max-md:text-lg">
              Categories
            </h1>

           
              <button className="border border-black rounded-3xl p-2 px-8 font-semibold hover:bg-black hover:text-white max-md:text-[10px] max-md:px-6">
                View All
              </button>
          
          </div>

          <div className="flex flex-row flex-wrap items-center mt-5 gap-4">
            <div className="h-max  md:w-1/3 lg:w-[17%]">
              <img className="h-54" src={food} alt="" />
            </div>
            <div className="h-max  md:w-1/3 lg:w-[17%]">
              <img className="h-54 mt-1" src={tech} alt="" />
            </div>
            <div className="h-max  md:w-1/3 lg:w-[17%]">
              <img src={fashion} alt="" />
            </div>
            <div className="h-max  md:w-1/3 lg:w-[17%]">
              <img src={pod} alt="" />
            </div>
            <div className="h-max  md:w-1/3 lg:w-[17%]">
              <img src={travel} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creators;
