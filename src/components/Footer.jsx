import React from "react";
import facebook from "../assets/media/footer/facebook.svg";
import linkedIn from "../assets/media/footer/linkedIn.svg";
import twitter from "../assets/media/footer/twitter.svg";
import instagram from "../assets/media/footer/instagram.svg";
import youtube from "../assets/media/footer/youtube.svg";
import plus from "../assets/media/footer/plus.svg";
import logo from "../assets/media/footer/logo.svg";

const Footer = () => {
  return (
    <div
      id="refer__and__earn-Footer"
      className="lg:px-52 px-3 md:px-0 w-full text-[#dad0d0] pt-[32px] bg-[#282828]"
    >
      <div className="container mx-auto flex justify-between ">
        <img src={logo} alt="accerdian logo" />
        <div className="flex flex-col justify-center">
          <p className="bg-dblue py-[4px] px-[40px] cursor-pointer text-[#fff] rounded-lg border-[#fff] border-2">
            Schedule 1-on-1 Call Now
          </p>
          <p className="ps-[20px]">Speak with our Learning Advisor</p>
        </div>
      </div>
      <hr className="border  broder-2 text-[#dad0d0d2] my-[30px]" />
      <div className="bg-gray-800 pb-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-[4fr_6fr_3fr] gap-[50px]">
          <div>
            <h6 className="text-lg font-semibold mb-4">Programs</h6>
            {[
              "Data Science & AI",
              "Product Management",
              "Business Analytics",
              "Digital Transformation",
              "Business Management",
              "Project Management",
              "Strategy & Leadership",
              "Senior Management",
              "Fintech",
            ].map((program,index) => (
              <div
                key={index}
                className="flex cursor-pointer items-start justify-between"
              >
                <p className="mb-2 text-lg text-[#ffff] pb-[16px]">{program}</p>
                <img src={plus} alt="plus" />
              </div>
            ))}
          </div>
          <div>
            <h6 className="text-lg font-semibold mb-4">Contact Us</h6>
            <p className="mb-2 text-sm">
              Email us (For Data Science Queries): admissions@accredian.com
            </p>
            <p className="mb-2 text-sm">
              Email us (For Product Management Queries):pm@accredian.com
            </p>
            <p className="mb-2 text-sm">
              Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)
            </p>
            <p className="mb-2 text-sm">
              Product Management Admission Helpline:+91 9625811095
            </p>
            <p className="mb-2 text-sm">
              Enrolled Student Helpline: +91 7969322507
            </p>
            <p className="mb-2 text-sm">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
              Gurugram,
            </p>
            <p className="mb-2 text-sm">Haryana 122015</p>
            <div>
              <h6 className="text-lg font-semibold mb-4">Why Accredian</h6>
              <p className="mb-2">Follow Us</p>
              <div className="flex space-x-2">
                <a
                  href="https://accredian.com"
                  className="text-white hover:underline"
                >
                  <img src={facebook} alt="facebook" />
                </a>
                <a
                  href="https://accredian.com"
                  className="text-white hover:underline"
                >
                  <img src={linkedIn} alt="linkedIn" />
                </a>
                <a
                  href="https://accredian.com"
                  className="text-white hover:underline"
                >
                  <img src={twitter} alt="twitter" />
                </a>
                <a
                  href="https://accredian.com"
                  className="text-white hover:underline"
                >
                  <img src={instagram} alt="instagram" />
                </a>
                <a
                  href="https://accredian.com"
                  className="text-white hover:underline"
                >
                  <img src={youtube} alt="youtube" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h6 className="text-lg font-semibold mb-4">Accredian</h6>
            {[
              "About",
              "Career",
              "Blog",
              "Admission Policy",
              "Referral Policy",
              "Privacy Policy",
              "Terms of Service",
              "Master FAQs",
            ].map((item,index) => (
              <p key={index} className="mb-2 text-sm">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">
            ©2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
            Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
