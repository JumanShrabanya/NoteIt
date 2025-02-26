import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const InputBox = ({
  placeholder,
  customStyles,
  onTextChange,
  label = "text",
}) => {
  // to toggle the eye change
  const [passwordVisible, setpasswordVisible] = useState(false);
  return (
    <div className="flex items-center w-full h-[3.2rem] rounded-md border-[1px] border-notebg overflow-hidden relative">
      <input
        type={
          label === "password" ? (passwordVisible ? "text" : "password") : label
        }
        placeholder={placeholder}
        onChange={onTextChange}
        className={`${customStyles} flex-1 outline-none border-none px-4 text-[17px] h-full`}
      />
      {label.toLowerCase() === "password" && (
        <div className="absolute right-5 h-full flex items-center justify-center">
          {!passwordVisible ? (
            <FontAwesomeIcon
              onClick={() => {
                setpasswordVisible(true);
              }}
              icon={faEyeSlash}
              className=" text-[15px] cursor-pointer text-background"
            ></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              onClick={() => {
                setpasswordVisible(false);
              }}
              icon={faEye}
              className=" text-[15px] cursor-pointer text-background"
            ></FontAwesomeIcon>
          )}
        </div>
      )}
    </div>
  );
};

export default InputBox;
