import React from "react";
import phone__and_couple from "../assets/media/hero/phone__and_couple.svg";
import "../custom-styles/components/hero.css";
import ReferNow from "./reusable-components/ReferNow";
import money_1 from "../assets/media/hero/money_1.svg";
import money_2 from "../assets/media/hero/money_2.svg";
import money_3 from "../assets/media/hero/money_3.svg";
import money_4 from "../assets/media/hero/money_4.svg";
import money_5 from "../assets/media/hero/money_5.svg";

const Hero = () => {
  return (
    <div className="px-[5px] md:px-[10px] lg:px-[20px]">
      <div className="flex all__side__shadow rounded-2xl max-w-[1377px] w-full m-auto md:h-[90%] items-center flex-col gap-[8rem] lg:flex-row justify-center bg-[#b1bcdd3a">
        <img
          src={money_1}
          className=" absolute top-0 start-0"
          alt="money on1"
        />
        <img
          src={money_2}
          className=" absolute -z-10 top-0 right-[34%]"
          alt="money on2"
        />
        <img src={money_3} className=" absolute top-0 end-0" alt="money on3" />
        <div className="flex flex-col gap-[40px]  mt-[4rem] lg:mt-0   items-center sm:items-start">
          <div className="bg-inherit">
            <h1 className='text-[3.05rem] md:text-[5rem] font-[700] font-["roboto"] bg-inherit leading-none'>
              Let's Learn <br />& Earn
            </h1>
          </div>
          <div className="bg-inherit">
            <p className='lg:text-[40px] text-[20px] font-["roboto"] bg-inherit'>
              Get a chance to win
              <br /> up-to{" "}
              <span className="text-5xl font-semibold text-dblue bg-inherit">
                Rs. 15,000
              </span>{" "}
            </p>
          </div>
          <ReferNow pd_x={"52px"} pd_y={"15px"} />
        </div>
        <div className="bg-[#0c0a0a00] transition-transform duration-300  w-[100%] lg:w-[58%] lg:h-[100%]">
          <img
            src={money_4}
            className=" absolute z-10 bottom-0 md:bottom-[8%] left-[10%] md:left-[42%]"
            alt="money on1"
          />

          <img
            src={money_5}
            className=" absolute -z-10 bottom-[35%] right-0"
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
