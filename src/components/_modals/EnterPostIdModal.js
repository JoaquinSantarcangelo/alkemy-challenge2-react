import React from "react";

//Elements
import Button from "../_elements/Button";
import CloseButton from "../_elements/CloseButton";
import Modal from "../_elements/Modal";

//Icons
import { FaSearch } from "react-icons/fa";

const EnterPostIdModal = ({ modals, setModals }) => {
  const { enterPostId } = modals;

  //Handle Close
  const handleClose = () => {
    setModals({ ...modals, enterPostId: { ...enterPostId, state: false } });
  };

  const handleSearch = () => {
    console.log("Searching Post ID");
    switch (enterPostId.action) {
      case "delete":
        console.log("Deleting Post, from Enter ID Modal");
        break;
      case "edit":
        console.log("Editing Post, from Enter ID Modal");
        break;
      case "View":
        console.log("Viewing Post, from Enter ID Modal");
        break;
    }
  };

  return (
    <Modal onClose={handleClose} id="enter-post-id-modal">
      <>
        <div className="title">Please enter the Post ID: </div>
        <input placeholder="Post ID" id="post-id" type="text" />
        <Button onClick={handleSearch} Icon={FaSearch} text="Search" />
      </>
    </Modal>
  );
};

export default EnterPostIdModal;
