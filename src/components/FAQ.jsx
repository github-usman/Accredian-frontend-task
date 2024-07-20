import React, { useState } from "react";
import up_arrow from "../assets/media/faq/up_arrow.svg";
import { faqData } from "../assets/constants/faq";

const Faq = () => {
  const [openItem, setOpenItem] = useState(0);
  const [activeSection, setActiveSection] = useState("how_to_use");

  const handleItemClick = (itemId) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === itemId ? null : itemId));
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setOpenItem(0);
  };

  return (
    <div className="m-auto px-1 mb-20 pt-[117px]  max-w-[1281px] w-full flex flex-col justify-center items-center">
      <p className="text-[25px] font-sans font-[500] mb-5 ">
        Frequently Asked <span className="text-dblue">Questions</span>
      </p>
      <div className="grid lg:grid-cols-[2fr_8fr] w-full gap-4">
        <div className="flex flex-col pr-5 mb-10 space-y-4">
          <p
            onClick={() => handleSectionClick("eligibility")}
            className={`cursor-pointer p-3 text-center rounded-lg ${activeSection === "eligibility" ? "text-dblue referal__benefits__shadow__all_program" : "text-[#737373] border-[#737373] border-2"}`}
          >
            Eligibility
          </p>
          <p
            onClick={() => handleSectionClick("how_to_use")}
            className={`cursor-pointer p-3 text-center rounded-lg ${activeSection === "how_to_use" ? "text-dblue referal__benefits__shadow__all_program" : "text-[#737373] border-[#737373] border-2"}`}
          >
            How to Use?
          </p>
          <p
            onClick={() => handleSectionClick("term_and_condition")}
            className={`cursor-pointer p-3 text-center rounded-lg ${activeSection === "term_and_condition" ? "text-dblue referal__benefits__shadow__all_program" : "text-[#737373] border-[#737373] border-2"}`}
          >
            Terms & Conditions
          </p>
        </div>

        <div className="pl-5 w-full">
          {faqData[activeSection].map((item, index) => (
            <div
              onClick={() => handleItemClick(index)}
              key={index}
              className={`p-5 cursor-pointer ${openItem === index ? "bg-gray-100" : "bg-white"}`}
            >
              <div className="flex justify-between items-center">
                <h3 className={`font-semibold duration-200 text-[16px] ${openItem === index ? "text-dblue" : ""}`}>
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  <img
                    src={up_arrow}
                    alt="icon"
                    className={`w-5 h-5 transition-transform duration-200 ${openItem === index ? "rotate-180" : ""}`}
                  />
                </div>
              </div>
              <div
                className={`mt-5 ms-4 font-inter text-[15px] font-normal transition-transform duration-500 ${openItem === index ? "block" : "hidden"}`}
              >
                {item.ans && <p>{item.ans}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
