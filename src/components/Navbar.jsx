import React from "react";
import logo from "../assets/media/logo.svg";
import down__arrow from "../assets/media/navbar/down__arrow.svg";
const Navbar = () => {
  return (
    <div className="px-10 py-5  sticky top-[80px] sm:top-[56px] z-40 bg-white shadow-md">
      <div className=" max-w-[1280px] w-full m-auto ">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center space-x-2 lg:space-x-5">
            <a href="https://accredian.com/"><img src={logo} alt="logo" className="w-32 h-9 " /></a>
            <div className="relative inline-block text-left">
              <button
                type="button"
                className="group inline-flex w-full justify-center gap-x-1.5 rounded-md bg-dblue px-3 py-2 text-sm  text-white"
                id="menu-button"
              >
                Courses
                <img
                  src={down__arrow}
                  className="transition-transform duration-300 ease-in-out group-hover:rotate-180"
                  alt="down arrow"
                />
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
                <a href="https://accredian.com/login" className="bg-grey text-black px-4 py-2 rounded-lg">
                  Login
                </a>
                <a href="https://trial.accredian.com/?_gl=1*122521e*_gcl_au*MTA0MTY2MzYxLjE3MjEzNzYwNjg.*_ga*MTI0MjgxOTA0My4xNzIxMzc2MDY5*_ga_SWCZ0464KL*MTcyMTU4NTU2My4xMy4xLjE3MjE1ODYzNzYuMjAuMC4w" className="bg-dblue text-white px-4 py-2 rounded-lg">
                  Try for free
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
