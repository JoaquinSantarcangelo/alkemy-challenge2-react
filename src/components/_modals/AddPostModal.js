import React from "react";

//Elements
import Button from "../_elements/Button";
import Modal from "../_elements/Modal";

//Icons
import { RiCheckFill } from "react-icons/ri";

const AddPostModal = ({ modals, setModals }) => {
  const { addPost } = modals;

  //Handle Close
  const handleClose = () => {
    setModals({ ...modals, addPost: { ...addPost, state: false } });
  };

  return (
    <Modal onClose={handleClose} id="add-post-modal">
      <>
        <div className="title">Adding New Post</div>
        <div className="form">
          <input placeholder="Title" id="new-post-title" type="text" />
          <textarea placeholder="Text" id="new-post-text" />
          <Button Icon={RiCheckFill} text="Add Post" />
        </div>
      </>
    </Modal>
  );
};

export default AddPostModal;
