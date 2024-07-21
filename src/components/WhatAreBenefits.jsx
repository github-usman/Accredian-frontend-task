import React from "react";
import ReferNow from "./reusable-components/ReferNow";
import right__arrow from "../assets/media/what-are-benefits/right-arrow.svg";
import right__arrow__white from "../assets/media/what-are-benefits/right-arrow-white.svg";
import cap__education from "../assets/media/what-are-benefits/cap-edu.svg";
import bottom_arrw from "../assets/media/what-are-benefits/bottom-arrow.svg";
import btn__toggle from "../assets/media/what-are-benefits/btn-toggle.svg";
import { allProgram } from "../assets/constants/how_do_refer";
import { enrolledProgramm } from "../assets/constants/how_do_refer";

const WhatAreBenefits = () => {
  return (
    <div
      id="refer__and__earn-Benefits"
      className="px-[3px] max-w-[1280px] w-full m-auto flex flex-col justify-center items-center"
    >
      <p className="text-[27.66px] font-[600]  mb-[33px] text-[#1A202C]">
        What Are The <span className="text-dblue  ]">Referral Benefits?</span>
      </p>

      <div className="flex gap-[40px] flex-col lg:flex-row items-center lg:items-start">
        {/* all program */}
        <div>
          <p className=" h-[45px]"> </p>
          <div className="max-w-[300px] rounded-md referal__benefits__shadow__all_program">
            {allProgram.map((val, idx) => (
              <div key={idx} className={` ${idx === 0 ? "" : "px-3"}`}>
                <p
                  className={` text-[16px] pb-[12px] border-b ${idx === allProgram.length - 1 ? "border-none" : ""}  uppercase font-sans flex justify-between  px-2 ${idx === 0 ? "bg-dblue px-5 pt-[12px] rounded-t-md  text-white" : " text-[#3c4852da] font-[600] py-[21px]"} `}
                >
                  {val}
                  <img
                    src={idx !== 0 ? right__arrow : right__arrow__white}
                    className="text-white"
                    alt="right arrow"
                  />
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex-col hidden md:flex ">
          <p className="flex gap-[15px] self-end  text-[20px] font-sans mb-[15px] text-[#3C4852] ">
            Enrolled
            <img src={btn__toggle} alt="btn toggle" />{" "}
          </p>
          <div className="max-w-[1058px]   w-full rounded-xl text-[#3c4852bd] text-[18px] font-[400] font-sans referal__benefits__shadow__all_program">
            {enrolledProgramm.map((prog, idx) => (
              <div
                key={idx}
                className={` grid grid-cols-[7fr_2fr_2fr] gap-0 text-[18px] px-3 ${idx === 0 ? " font-[600]  text-[#1350A0] text-[15px] bg-dblue bg-opacity-50 rounded-t-xl" : ""}`}
              >
                <div
                  className={`flex pe-[30px]  gap-1 py-[5px] border-e-2 border-[#00000038] ${idx === 0 ? "  items-center" : ""}  ${idx === 1 ? "pt-7" : ""}`}
                >
                  {idx !== 0 && (
                    <img
                      className="h-[18px] mt-1"
                      src={cap__education}
                      alt="cap icon"
                    />
                  )}
                  <p className={` w-[365px]  ${idx === 0 ? "" : ""}`}>
                    {prog.program}
                  </p>
                </div>
                <p
                  className={`py-3 px-5 border-e-2 border-[#00000038] text-center  ${idx === 1 ? "pt-9" : ""}`}
                >
                  {prog.referrer}
                </p>
                <p
                  className={`py-3 px-5 ${idx === 1 ? "pt-9" : ""} text-center`}
                >
                  {prog.referee_bonus}
                </p>
              </div>
            ))}
          </div>
          <p className="flex justify-center self-end w-[174.66px] hover:cursor-pointer hover:bg-dblue  hover:text-white gap-2 border rounded-md py-2 mt-[35px] me-[1%] text-center border-[#B6B6B6] text-[#3C485285]">
            {" "}
            Show More
            <img src={bottom_arrw} alt="bottom arrow" />{" "}
          </p>
        </div>
      </div>
      <p className="flex md:hidden gap-[15px] self-end  text-[20px] font-sans mb-[15px] text-[#3C4852] ">
        Enrolled
        <img src={btn__toggle} alt="btn toggle" />{" "}
      </p>
      <div className="w-full overflow-x-auto referal__benefits__shadow__all_program rounded-lg flex md:hidden">
        <div className="min-w-[1058px] rounded-xl text-[#3c4852bd] text-[18px] font-[400] font-sans ">
          {enrolledProgramm.map((prog, idx) => (
            <div
              key={idx}
              className={` grid grid-cols-[7fr_2fr_2fr] gap-0 text-[18px] px-3 ${idx === 0 ? " font-[600]  text-[#1350A0] text-[15px] bg-dblue bg-opacity-50 rounded-t-xl" : ""}`}
            >
              <div
                className={`flex pe-[30px]  gap-1 py-[5px] border-e-2 border-[#00000038] ${idx === 0 ? "  items-center" : ""}  ${idx === 1 ? "pt-7" : ""}`}
              >
                {idx !== 0 && (
                  <img
                    className="h-[18px] mt-1"
                    src={cap__education}
                    alt="cap icon"
                  />
                )}
                <p className={` w-[365px]  ${idx === 0 ? "" : ""}`}>
                  {prog.program}
                </p>
              </div>
              <p
                className={`py-3 px-5 border-e-2 border-[#00000038] text-center  ${idx === 1 ? "pt-9" : ""}`}
              >
                {prog.referrer}
              </p>
              <p className={`py-3 px-5 ${idx === 1 ? "pt-9" : ""} text-center`}>
                {prog.referee_bonus}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className="flex md:hidden justify-center self-end w-[174.66px] hover:cursor-pointer hover:bg-dblue  hover:text-white gap-2 border rounded-md py-2 mt-[35px] me-[1%] text-center border-[#B6B6B6] text-[#3C485285]">
        {" "}
        Show More
        <img src={bottom_arrw} alt="bottom arrow" />{" "}
      </p>
      <div className="mt-[25px]">
        <ReferNow pd_x={"72px"} pd_y={"20px"} />
      </div>
    </div>
  );
};

export default WhatAreBenefits;
