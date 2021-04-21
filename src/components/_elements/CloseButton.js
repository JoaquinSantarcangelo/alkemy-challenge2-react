import React from "react";
import { RiCloseFill } from "react-icons/ri";

const CloseButton = ({ onClick }) => {
  return (
    <div onClick={() => onClick && onClick()} className="close-button">
      <RiCloseFill />
    </div>
  );
};

export default CloseButton;
