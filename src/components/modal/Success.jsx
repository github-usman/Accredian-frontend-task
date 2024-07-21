import React from "react";
import success from "../../assets/media/check.png";
import { useModalContext } from "../../context/ModalContext";

const Success = () => {
  const { setSuccesstLoading } = useModalContext();

  const handleSuccess = ()=>{
    setSuccesstLoading((val)=>!val);
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#00000080] bg-opacity-70 overflow-x-scroll z-50">
      <div
        className="bg-white rounded-xl p-5 flex gap-2 justify-center flex-col items-center"
      >
        <img src={success} alt="success" className="max-w-[200px] w-full max-h-[200px] h-full" />
        <p>Your Referal has been sent to your Friend</p>
        <p className="px-5 py-2 bg-dblue text-white cursor-pointer rounded-md " onClick={handleSuccess}>Ok</p>
      </div>
    </div>
  );
};

export default Success;
