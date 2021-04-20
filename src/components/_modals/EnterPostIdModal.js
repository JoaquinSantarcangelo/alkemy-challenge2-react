import React from "react";

//Elements
import Button from "../_elements/Button";
import CloseButton from "../_elements/CloseButton";

//Icons
import { FaSearch } from "react-icons/fa";

const EnterPostIdModal = () => {
  return (
    <div id="enter-post-id-modal" className="modal">
      <div className="card">
        <CloseButton />
        <div className="title">Please enter the Post ID: </div>
        <input placeholder="Post ID" id="post-id" type="text" />
        <Button Icon={FaSearch} text="Search" />
      </div>
    </div>
  );
};

export default EnterPostIdModal;
