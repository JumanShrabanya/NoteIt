import React from "react";

const CustomButton = ({ btnText, handleClick, customStyles }) => {
  return (
    <button
      onClick={handleClick}
      className={`${customStyles} px-10 py-2 rounded-md `}
    >
      {btnText}
    </button>
  );
};

export default CustomButton;
