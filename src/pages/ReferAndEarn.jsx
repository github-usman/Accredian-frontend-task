import React, { useEffect } from "react";
import Header from "../components/Header";
import HeroNav from "../components/HeroNav";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowDoRefer from "../components/HowDoRefer";
import WhatAreBenefits from "../components/WhatAreBenefits";
import Faq from "../components/FAQ";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import FormPopUpModal from "./FormPopUpModal";
import { useModalContext } from "../context/ModalContext";
import Spinner from "../components/modal/Spinner";
import Success from "../components/modal/Success";
import Failed from "../components/modal/Failed";

const ReferAndEarn = () => {
  const { isModalVisible,isLoading,isSuccess, isFailed } = useModalContext();

  useEffect(() => {
    if (isModalVisible || isLoading || isSuccess || isFailed !== '') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalVisible,isLoading,isSuccess,isFailed]);


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
      {isModalVisible && <FormPopUpModal />}
      {isLoading && <Spinner />}
      {isSuccess && <Success />}
      {isFailed && <Failed />}
    </div>
  );
};

export default ReferAndEarn;
