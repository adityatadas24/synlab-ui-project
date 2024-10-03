import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-white fixed top-0 left-0 right-0 z-50 shadow-[0_0px_12px_rgba(0,0,0,0.3)]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-slate-50 text-black"
          >
           <li>
              <a>What We Do</a>
            </li>
            <li>
              <a>How It Works</a>
            </li>
            <li>
              <a>Join US As Brand</a>
            </li>
            <li>
              <a>Join US As Creator</a>
            </li>
          </ul>
          <a className=" text-3xl ml-10 text-black font-bold cursor-pointer">BookMyCollab</a>
        </div>
      </div>
      <div className="navbar-end space-x-3 mr-10">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal mr-6 px-1 text-lg text-[#6c6c6c] font-medium gap-6">
            <li>
              <a>What We Do</a>
            </li>
            <li>
              <a>How It Works</a>
            </li>
            <li>
              <a>Join US As Brand</a>
            </li>
            <li>
              <a>Join US As Creator</a>
            </li>
            <button className="bg-[#5525b5] mr-8 px-8 p-2 text-white rounded-xl">Login</button>

          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
