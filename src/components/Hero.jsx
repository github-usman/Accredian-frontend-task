import React from "react";
import phone__and_couple from "../assets/media/hero/phone__and_couple.png";
import ReferNow from "./reusable-components/ReferNow";
import money_1 from "../assets/media/hero/money_1.png";
import money_2 from "../assets/media/hero/money_2.png";
import money_3 from "../assets/media/hero/money_3.png";
import money_4 from "../assets/media/hero/money_4.png";
import money_5 from "../assets/media/hero/money_5.png";

const Hero = () => {
  return (
    <div className="px-[5px] md:px-[10px] lg:px-[20px]">
      <div className="flex all__side__shadow rounded-2xl max-w-[1280px] w-full m-auto px-5   md:h-[90%] items-center flex-col gap-3 lg:gap-[8rem] lg:flex-row justify-center bg-[#b1bcdd3a">
        <img
          src={money_1}
          className="h-auto max-w-[140px] w-full absolute top-0 start-0"
          alt="money on1"
        />
        <img
          src={money_2}
          className="h-auto max-w-[140px] w-full absolute -z-10 top-0 right-[32%]"
          alt="money on2"
        />
        <img src={money_3} className="h-auto max-w-[140px] w-full absolute top-0 end-0" alt="money on3" />
        <div className="flex flex-col gap-3 lg:gap-[40px]  mt-[4rem] lg:mt-0  p-0 lg:p-2  items-center sm:items-start ">
          <div className="bg-inherit">
            <h1 className='text-[2.05rem]  w-full lg:text-[4.5rem] font-[700] font-["roboto"] bg-inherit leading-none'>
              Let's Learn <br className="hidden lg:inline"/>& Earn
            </h1>
          </div>
          <div className="bg-inherit">
            <p className='lg:text-[40px] text-[20px] font-["roboto"] bg-inherit'>
              Get a chance to win
              <br className="hidden lg:inline" /> up-to
              <span className=" text-[1.5rem] lg:text-5xl font-semibold text-dblue bg-inherit">
               &nbsp; Rs. 15,000
              </span>{" "}
            </p>
          </div>
          <ReferNow pd_x={"52px"} pd_y={"15px"} />
        </div>
        <div className="bg-[#0c0a0a00] transition-transform duration-300  w-[100%] lg:w-[58%] lg:h-[100%]">
          <img
            src={money_4}
            className="h-auto max-w-[140px] w-full absolute z-10 bottom-0 md:bottom-[8%] left-[10%] md:left-[43%]"
            alt="money on1"
          />

          <img
            src={money_5}
            className="h-auto max-w-[140px] w-full absolute -z-10 bottom-[35%] right-0"
            alt="money on2"
          />
          <div className="bg-inherit flex justify-start items-center h-full w-full">
            <img
              src={phone__and_couple}
              alt="phone and couple"
              className="object-contain z-0 bg-inherit mb-0 md:-mb-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
