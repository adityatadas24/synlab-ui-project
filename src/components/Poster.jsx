import React from "react";
import poster1 from "../assets/brand.jpg";
import poster2 from "../assets/brand2.jpg";
import poster3 from "../assets/poster3.jpg";

const Poster = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-36 mb-20 w-full gap-18">
      <div className="flex justify-center items-center rounded-3xl p-8 gap-10 flex-col md:flex-row">
        <img className="rounded-3xl w-5/6 h-full" src={poster1} alt="" />
        <img className="rounded-3xl w-5/6 h-full" src={poster2} alt="" />
      </div>
      <div>
        <img className="w-[1300px] h-[280px]" src={poster3} alt="" />
      </div>
    </div>
  );
};

export default Poster;
