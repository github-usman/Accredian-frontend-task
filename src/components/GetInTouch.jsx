import React from "react";
import bg__img from "../assets/media/getInTouch/bg_img.svg";
import right_arrow from "../assets/media/getInTouch/right_arrow.svg";
import headPhone from "../assets/media/getInTouch/headPhone.svg";

const GetInTouch = () => {
  return (
    <div className="px-[3px]">
      <div
        style={{ backgroundImage: `url(${bg__img})` }}
        className=" mb-[30px] md:mb-[120px] m-auto bg-dblue max-w-[1360px] w-full  gap-5 md:gap-0  lg:h-[210px]  rounded-lg bg-contain bg-center bg-no-repeat flex   flex-col  lg:flex-row items-center justify-between p-[3px] md:p-[50px]"
      >
        <div className="flex flex-col  lg:flex-row  items-center gap-[32px] text-[16px] md:text-[28px] text-white font-[600] font-Inter ">
          <img src={headPhone} alt="headphone" />
          <div>
            <h6>Want to delve deeper into the program?</h6>
            <p className="text-[16px] font-[500] opacity-[70%]">
              Share your details to receive expert insights from our program
              team!
            </p>
          </div>
        </div>
        <button className="border-2  rounded-lg cursor-pointer bg-white flex border-dblue py-3 px-10 text-dblue text-[18px] font-[600] items-center gap-2">
          Get in touch <img src={right_arrow} alt=" right arrow" />
        </button>
      </div>
    </div>
  );
};

export default GetInTouch;
