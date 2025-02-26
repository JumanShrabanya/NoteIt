import React from "react";
import CustomButton from "./CustomButton";
import { useLoginCard } from "../contexts/ShowLoginCard";

const Navbar = () => {
  // to open the login card
  const { showCard, toggleShow } = useLoginCard();

  return (
    <nav className="px-10 w-full h-16 bg-transparent flex justify-between  items-center border-b-[1px] border-b-zinc-50 border-opacity-10">
      {/* logo */}
      <div className="select-none">
        <a
          href="/"
          className="text-[1.7rem] text-white font-light tracking-wider"
        >
          NoteIt
        </a>
      </div>
      {/* button */}
      <CustomButton
        btnText={"Login"}
        handleClick={() => {
          toggleShow();
        }}
        customStyles={
          "bg-background text-white font-medium border-[1px] border-zinc-50 border-opacity-20 hover:border-opacity-40 transition-all duration-200 select-none"
        }
      />
    </nav>
  );
};

export default Navbar;
