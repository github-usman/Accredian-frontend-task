import React from "react";
import logo from "../assets/media/logo.svg";
import down__arrow from "../assets/media/navbar/down__arrow.svg";
const Navbar = () => {
  return (
    <div className="px-10 xl:px-52 py-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center space-x-2 lg:space-x-5">
          <img src={logo} alt="logo" className="w-32 h-9 " />
          <div className="relative inline-block text-left">
            <button
              type="button"
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-dblue px-3 py-2 text-sm font-light text-white"
              id="menu-button"
            >
              Courses <img src={down__arrow} alt="down arrow" />
            </button>
          </div>
        </div>

        <div>
          <ul className="flex items-center justify-evenly space-x-3 lg:space-x-5 text-sm">
            <div className="hidden md:flex items-center justify-end space-x-2">
              <li>Refer & Earn</li>
              <li>Resources</li>
              <li>About Us</li>
            </div>

            <div className="hidden md:flex items-center justify-end space-x-2">
              <button className="bg-grey text-black px-4 py-2 rounded-lg">
                Login
              </button>
              <button className="bg-dblue text-white px-4 py-2 rounded-lg">
                Try for free
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
