import React from "react";

//Elements
import CloseButton from "../_elements/CloseButton";
import Modal from "../_elements/Modal";

const ErrorModal = ({ modals, setModals }) => {
  const { error } = modals;

  //Handle Close
  const handleClose = () => {
    setModals({ ...modals, error: { ...error, state: false } });
  };

  return (
    <Modal onClose={handleClose} id="error-modal">
      <>
        <div className="title">Error!</div>
        <div className="text">Error tatatattata</div>
      </>
    </Modal>
  );
};

export default ErrorModal;
