import React from "react";
import InputBox from "./InputBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import BigButton from "./BigButton";
import { useLoginCard } from "../contexts/ShowLoginCard";

const LoginBox = () => {
  const { showCard, toggleShow } = useLoginCard();
  if (!showCard) {
    return null;
  } else {
    return (
      <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-opacity-10 bg-background backdrop-blur-xl z-50 flex justify-center items-center">
        {/* box to show the login card */}
        <div className="relative w-[40%] h-[45%] bg-background rounded-lg border-[1px] border-notebg p-8">
          {/* for the close icon */}
          <FontAwesomeIcon
            onClick={() => {
              toggleShow();
            }}
            icon={faXmark}
            className="text-[18px] text-gray-400 absolute right-8 cursor-pointer hover:text-gray-200"
          ></FontAwesomeIcon>
          {/* heading div */}
          <div className="">
            <h2 className="text-[2rem] text-white ">Login</h2>
            <p className="text-gray-300 text-[15px]">Get back where you left</p>
          </div>
          {/* input fields */}
          <div className="w-full my-8 flex flex-col gap-8">
            <InputBox placeholder={"Email"} label="email" />
            <InputBox placeholder={"Password"} label="password" />
          </div>
          {/* sign up/in button */}
          <div className="w-full">
            <BigButton>Sign In</BigButton>
          </div>
        </div>
      </section>
    );
  }
};

export default LoginBox;
