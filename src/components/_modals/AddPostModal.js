import React from "react";

//Elements
import CloseButton from "../_elements/CloseButton";
import Button from "../_elements/Button";

//Icons
import { RiCheckFill } from "react-icons/ri";

const AddPostModal = () => {
  const handleClose = () => {};

  return (
    <div className="modal" id="add-post-modal">
      <div className="card">
        <CloseButton />
        <div className="title">Adding New Post</div>
        <div className="form">
          <input placeholder="Title" id="new-post-title" type="text" />
          <textarea placeholder="Text" id="new-post-text" />
          <Button Icon={RiCheckFill} text="Add Post" />
        </div>
      </div>
    </div>
  );
};

export default AddPostModal;
