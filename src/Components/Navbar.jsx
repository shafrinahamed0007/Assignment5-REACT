import React from "react";
import github from "../assets/github-logo.png";

const Navbar = () => {
  return (
    <div className="max-lg:collapse lg:mb-48 shadow-sm md:w-11/12 mx-auto rounded-md">
      <div className="collapse-title navbar flex flex-col md:flex-row">
        <div className="navbar-start text-center w-full justify-center md:justify-start ">
            <img className="w-[30px] h-[30px] bg-white rounded-full" src={github} alt="" />
          <button className="btn btn-ghost text-xl">
            Github Issues Tracker
          </button>
        </div>

        <div className="navbar-end  w-full gap-3 mt-4">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-64 lg:w-auto"
          />
          <button className="btn btn-neutral font-bold md:text-xl md:w-[160px]">
            + New Issue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
