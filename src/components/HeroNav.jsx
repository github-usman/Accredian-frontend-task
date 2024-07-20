import React, { useState } from "react";
import ellipse from "../assets/media/hero/ellipse.svg";
const HeroNav = () => {
  const [active, setActive] = useState("1");

  const handleActive = (id) => {
    setActive(id);
  };
  return (
    <div className="flex items-center justify-center py-5">
      <div className="bg-lblue rounded-3xl  w-2/3 lg:w-1/3 px-2 py-3">
        <ul className="flex items-center flex-col sm:flex-row x gap-5 sm:gap-0 justify-around  space-x-2 bg-inherit">
          <a
            href="#refer__and__earn-Refer"
            className={`text-md bg-inherit flex ${active === "1" ? "text-dblue flex-col" : ""}`}
            onClick={() => handleActive("1")}
          >
            Refer
            {active === "1" && (
              <img src={ellipse} alt="ellipse" className="h-[7px]" />
            )}
          </a>
          <a
            href="#refer__and__earn-Benefits"
            className={`text-md bg-inherit flex ${active === "2" ? "text-dblue flex-col" : ""}`}
            onClick={() => handleActive("2")}
          >
            Benefits
            {active === "2" && (
              <img src={ellipse} alt="ellipse" className="h-[7px]" />
            )}
          </a>
          <a
            href="#refer__and__earn-Faq"
            className={`text-md bg-inherit flex ${active === "3" ? "text-dblue flex-col" : ""}`}
            onClick={() => handleActive("3")}
          >
            FAQs
            {active === "3" && (
              <img src={ellipse} alt="ellipse" className="h-[7px]" />
            )}
          </a>
          <a
            href="#refer__and__earn-Footer"
            className={`text-md bg-inherit flex ${active === "4" ? "text-dblue flex-col" : ""}`}
            onClick={() => handleActive("4")}
          >
            Support
            {active === "4" && (
              <img src={ellipse} alt="ellipse" className="h-[7px]" />
            )}
          </a>
        </ul>
      </div>
    </div>
  );
};

export default HeroNav;
