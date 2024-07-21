import React from "react";
import failed from "../../assets/media/failed.png";
import { useModalContext } from "../../context/ModalContext";

const Failed = () => {
  const { setFailed,isFailed } = useModalContext();

  const handleSuccess = ()=>{
    setFailed('');
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#00000080] bg-opacity-70 overflow-x-scroll z-50">
       <div
        className="bg-white rounded-xl p-5 flex gap-2 justify-center flex-col items-center"
      >
        <img src={failed} alt="failed" className="max-w-[200px] w-full max-h-[200px] h-full" />
        <p>{isFailed}</p>
        <p className="px-5 py-2 bg-dblue text-white cursor-pointer rounded-md "  onClick={handleSuccess}>Ok</p>
      </div>
    </div>
  );
};

export default Failed;
