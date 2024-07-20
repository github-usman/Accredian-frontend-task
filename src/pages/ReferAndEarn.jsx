import React from "react";
import Header from "../components/Header";
import HeroNav from "../components/HeroNav";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowDoRefer from "../components/HowDoRefer";
import WhatAreBenefits from "../components/WhatAreBenefits";
import Faq from "../components/FAQ";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";

const ReferAndEarn = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroNav />
      <Hero />
      <HowDoRefer />
      <WhatAreBenefits />
      <Faq />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default ReferAndEarn;
