import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const NoteCard = () => {
  // to know if we are hovering
  const [ishovering, setishovering] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setishovering(true);
      }}
      onMouseLeave={() => {
        setishovering(false);
      }}
      className="bg-transparent border-[1px] border-notebg h-[20rem] w-[25rem] rounded-2xl p-4 flex flex-col gap-6 overflow-hidden cursor-pointer hover:bg-notebghover  transition-all duration-500"
    >
      {/* for the note title */}
      <div
        className={`${
          ishovering ? "text-background" : "text-white"
        } w-full border-b-[1px] pb-1 border-background border-opacity-20 pr-3`}
      >
        <p className="line-clamp-1 text-[1.5rem] capitalize">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, rerum?
        </p>
      </div>
      {/* for the note content */}
      <div className="flex-1">
        <p className="text-gray-500 text-justify pr-3 text-[14px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
          recusandae officia assumenda harum natus veritatis repellat vel
          aspernatur rem sunt? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Doloremque recusandae officia assumenda harum natus
          veritatis repellat vel aspernatur rem sunt?
        </p>
      </div>
      {/* for the details */}
      <div className="flex justify-between pr-3">
        <p className="text-[12px] text-gray-500">22 Feb, 2025</p>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          className="text-gray-500"
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default NoteCard;
