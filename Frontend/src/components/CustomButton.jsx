import React from "react";

const CustomButton = ({ btnText, handleClick, customStyles }) => {
  return (
    <button className={`${customStyles} px-10 py-2 rounded-md `}>
      {btnText}
    </button>
  );
};

export default CustomButton;
