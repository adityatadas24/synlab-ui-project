import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#f7efec] hidden md:block">
        <div className=" container mx-auto flex justify-between w-full h-96 ">
          <div className="flex flex-col items-center mt-14 w-full ">
            <a className=" text-3xl mb-4 text-black mr-44  font-bold cursor-pointer">
              BookMyCollab
            </a>
            <p className=" text-xl w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              odio quis nostrum mollitia, blanditiis pariatur!
            </p>
          </div>
          <div className="flex flex-col items-center w-full">
            <a className=" text-3xl mr-6 mt-14 mb-4 text-black font-bold cursor-pointer w-1/4">
              Company
            </a>
            <ul className="text-lg font-semibold">
              <li className="mb-2">About</li>
              <li className="mb-2">Carrer</li>
              <li className="mb-2">Terms & Conditions</li>
              <li className="mb-2">Privacy Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>
          <div className="flex flex-col items-center w-full">
            <a className=" text-3xl mr-6 mt-14 mb-4 text-black font-bold cursor-pointer ">
              Join us
            </a>
            <ul className="text-lg font-semibold">
              <li className="mb-2">Join as abrand</li>
              <li className="mb-2">Join as a creator</li>
              <li className="mb-2">Find creator</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#302c2b] w-full h-20 hidden md:block">
        <div className="container mx-auto text-xl pt-6 flex justify-between items-center text-white ">
          <a>No Upfront Payment</a>
          <a>Verified Creators</a>
          <a>Inbuilt Messengers</a>
          <a>Secure and Timely Payment</a>
        </div>
      </div>
      <div className=" w-full h-14">
        <div className="container mx-auto text-xl pt-3 flex justify-between items-center text-[#727070]">
          <a>Copyright. All Rights Reserved</a>
          <a>BookMyCollab2024</a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
