import React from "react";

//Elements
import Modal from "../_elements/Modal";
import Button from "../_elements/Button";

const MessageModal = ({ modals, setModals }) => {
  const { message } = modals;

  //Handle Close
  const handleClose = () => {
    setModals({ ...modals, message: { ...message, state: false } });
  };

  return (
    <Modal onClose={handleClose} id="message-modal">
      <div className="title">
        {message.type == "error" ? "Error" : "Message"}
      </div>
      <div className="text">{message.text}</div>
      <Button
        onClick={handleClose}
        text={message.type == "error" ? "Great!" : "Close window"}
      />
    </Modal>
  );
};

export default MessageModal;
