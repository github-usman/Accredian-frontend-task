import React from "react";
import { useModalContext } from "../../context/ModalContext";

const ReferNow = ({ pd_x, pd_y }) => {
  const { toggleModal } = useModalContext();
  return (
    <div className="bg-inherit ">
      <button
        onClick={toggleModal}
        className="bg-dblue rounded-md text-sm text-white"
        style={{
          paddingLeft: pd_x,
          paddingRight: pd_x,
          paddingTop: pd_y,
          paddingBottom: pd_y,
        }}
      >
        Refer Now
      </button>
    </div>
  );
};

export default ReferNow;
