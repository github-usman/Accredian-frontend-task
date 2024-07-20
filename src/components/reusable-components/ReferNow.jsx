import React, { useState } from "react";

const ReferNow = ({ pd_x, pd_y }) => {
  const [visible, setVisible] = useState(false);
  const handlevisible = () => setVisible((cur) => !cur);

  const modalToggle = (visiblee) => {
    console.log(visiblee);
    handlevisible(visiblee);
  };
  return (
    <div className="bg-inherit ">
      <button
        onClick={() => modalToggle(visible)}
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
