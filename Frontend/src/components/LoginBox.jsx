import React, { useState } from "react";
import InputBox from "./InputBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import BigButton from "./BigButton";
import { useLoginCard } from "../contexts/ShowLoginCard";

const LoginBox = () => {
  // login card show context
  const { showCard, toggleShow } = useLoginCard();
  // to toggle the sign up and in
  const [signIn, setSignIn] = useState(true);
  if (!showCard) {
    return null;
  } else {
    return (
      <section className="absolute h-screen w-full bg-opacity-10 bg-background backdrop-blur-xl z-50 flex justify-center items-center">
        {/* box to show the login card */}
        <div className="relative w-[92%] lg:w-[60%] xl:w-[40%] h-auto bg-background rounded-lg border-[1px] border-notebg p-4 lg:p-8">
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
            {signIn ? (
              <div>
                <h2 className="text-[2rem] text-white ">Login</h2>
                <p className="text-gray-300 text-[15px]">
                  Get back where you left
                </p>
              </div>
            ) : (
              <div>
                <h2 className="text-[2rem] text-white ">Welcome</h2>
                <p className="text-gray-300 text-[15px]">
                  Get started with your credentials
                </p>
              </div>
            )}
          </div>
          {/* input fields */}
          {signIn ? (
            <div className="w-full my-8 flex flex-col gap-8">
              <InputBox placeholder={"Email"} label="email" />
              <InputBox placeholder={"Password"} label="password" />
            </div>
          ) : (
            <div className="w-full my-8 flex flex-col gap-8">
              <InputBox placeholder={"Fullname"} label="text" />
              <InputBox placeholder={"Email"} label="email" />
              <InputBox placeholder={"Password"} label="password" />
            </div>
          )}
          {/* sign up/in button */}
          <div className="w-full">
            {signIn ? (
              <BigButton customStyles={""}>Log In</BigButton>
            ) : (
              <BigButton customStyles={""}>Register</BigButton>
            )}
          </div>
          {/* sign in or sign up option */}
          <div className="mt-5 flex flex-col items-center justify-center">
            {signIn ? (
              <p className="text-gray-400 text-[14px]">
                Don't have an account?{" "}
                <span
                  onClick={() => {
                    setSignIn((prev) => !prev);
                  }}
                  className="text-notebg cursor-pointer font-semibold"
                >
                  Register
                </span>
              </p>
            ) : (
              <p className="text-gray-400 text-[14px]">
                Already have an account?{" "}
                <span
                  onClick={() => {
                    setSignIn((prev) => !prev);
                  }}
                  className="text-notebg cursor-pointer font-semibold"
                >
                  Login
                </span>
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }
};

export default LoginBox;
