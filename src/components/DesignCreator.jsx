import React from "react";
import e1 from "../assets/emoji1.jpg";
const DesignCreator = () => {
  return (
    <div
      className="container mx-auto mt-36 mb-20
     flex items-center w-11/12 gap-16"
    >
      <div
        className="bg-[#f7efec] rounded-3xl
       p-8 w-5/6 h-max"
      >
        
        <h1 className="text-3xl font-semibold mb-4">Meet</h1>
        <h1 className="text-5xl font-bold w-3/4 h-[400px]">
          The Design Creator
        </h1>
        <div>
          <div>
            <p className="text-2xl text-[#7b01e7]">
              {" "}
              <span className="underline">Read more</span> ↗
            </p>
          </div>
        </div>
      </div>
      <div className="w-5/6 hidden md:block">
        <h1 className="text-6xl font-bold ml-5 mb-5">Aman k.</h1>
        <div className="flex items-center gap-8 mb-8">
          <img className="w-20 h-1/6" src={e1} alt="" />
          <h1 className="text-5xl font-semibold text-[#666666]">
            Design Creator
          </h1>
        </div>
        <p className="w-[84%] text-xl font-semibold ml-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facilis
          quam sapiente, eveniet dolorum quod vitae numquam sint tenetur qui.
        </p>
        <div className="flex mt-8">
          <img className="w-20 h-1/6" src={e1} alt="" />
          <img className="w-20 h-1/6" src={e1} alt="" />
          <img className="w-20 h-1/6" src={e1} alt="" />
          <img className="w-20 h-1/6" src={e1} alt="" />
          <img className="w-20 h-1/6" src={e1} alt="" />
          <img className="w-20 h-1/6" src={e1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DesignCreator;
