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

  return (
    <Modal onClose={handleClose} id="enter-post-id-modal">
      <>
        <div className="title">Please enter the Post ID: </div>
        <input placeholder="Post ID" id="post-id" type="text" />
        <Button Icon={FaSearch} text="Search" />
      </>
    </Modal>
  );
};

export default EnterPostIdModal;
