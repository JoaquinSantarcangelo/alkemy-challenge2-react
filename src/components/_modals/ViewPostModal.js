import React from "react";

//Elements
import Modal from "../_elements/Modal";

const ViewPostModal = ({ setModals, modals }) => {
  const { viewPost } = modals;

  const handleClose = () => {
    setModals({ ...modals, viewPost: { ...viewPost, state: false } });
  };

  const capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <Modal onClose={handleClose} id="view-post-modal">
      <div className="title">{capitalize(viewPost.post.title)}</div>
      <div className="text">{capitalize(viewPost.post.body)}</div>
    </Modal>
  );
};

export default ViewPostModal;
