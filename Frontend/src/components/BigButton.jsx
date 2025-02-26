import React from "react";

const BigButton = ({ children, customStyles, handleClick }) => {
  return (
    <div
      className={`${customStyles} w-full flex items-center justify-center h-[3.2rem] bg-notebg hover:bg-notebghover transition-all duration-200 rounded-md overflow-hidden cursor-pointer`}
    >
      <button className="h-full text-black text-[17px]">{children}</button>
    </div>
  );
};

export default BigButton;
