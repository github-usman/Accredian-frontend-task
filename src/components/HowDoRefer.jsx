import React from "react";
import parent__image from "../assets/media/how-do-refer/parent__image.svg";
import ReferNow from "./reusable-components/ReferNow";
import { btnData } from "../assets/constants/how_do_refer";

const HowDoRefer = () => {
  return (
    <div id="refer__and__earn-Refer" className="bg-[#EEF5FF] h-full my-[75px]">
      <div className="px-10 xl:px-52 lg:h-[492px] h-[982px]  py-5 flex flex-col lg:justify-center justify-between items-center gap-[0px]">
        <p className="text-[27.66px] font-[600] text-[#1A202C] ">
          How Do I <span className=" text-dblue">Refer?</span>
        </p>
        <div
          style={{ backgroundImage: `url(${parent__image})` }}
          className=" h-[320px]  xsm:h-[491px] w-[982px] bg-contain transition-transform duration-300  rotate-90 lg:rotate-0 bg-center flex bg-no-repeat items-center justify-center gap-[10%] xsm:gap-[12.9%]"
        >
          {btnData.map((val,index) => (
            <div
              key={index}
              className="transition-transform duration-300 rotate-[-90deg] lg:rotate-0 w-[150px] flex flex-col "
            >
              <img src={val.icon} alt="parent refer" className="h-[50px]" />
              <p className="text-[14px] text-center">{val.textValue}</p>
            </div>
          ))}
        </div>
        <ReferNow pd_x={"72px"} pd_y={"20px"} />
      </div>
      ;
    </div>
  );
};

export default HowDoRefer;
