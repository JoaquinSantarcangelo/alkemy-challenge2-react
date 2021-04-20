import React from "react";

//Elements
import CloseButton from "../_elements/CloseButton";
import Button from "../_elements/Button";

const ErrorModal = () => {
  return (
    <div className="modal" id="error-modal">
      <div className="card">
        <CloseButton />
        <div className="title">Error!</div>
        <div className="text">Error tatatattata</div>
      </div>
    </div>
  );
};

export default ErrorModal;
