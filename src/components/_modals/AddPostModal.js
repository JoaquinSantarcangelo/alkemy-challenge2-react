import React, { useState } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

//Elements
import Button from "../_elements/Button";
import Modal from "../_elements/Modal";

//Icons
import { RiCheckFill } from "react-icons/ri";

const AddPostModal = ({ modals, setModals }) => {
  // Global State (Redux)
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  //Hooks
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const { addPost } = modals;

  //Handle Close
  const handleClose = () => {
    setModals({ ...modals, addPost: { ...addPost, state: false } });
  };

  //Validation
  const validation = () => {
    if (title == "") {
      setError("Please enter a title");
      return false;
    }

    if (text == "") {
      setError("Please enter a text");
      return false;
    }

    setError("");
    return true;
  };

  //Handle Add Post
  const handleAddPost = async () => {
    console.log("Adding Post: From AddPostModal");

    //Form Validation
    let validated = await validation();

    if (validated) {
      dispatch(createPost(title, text)).then(() => {
        console.log("Added Post: From dispatch callback");

        //Close Modal
        handleClose();

        //Show Message
        setModals({
          ...modals,
          addPost: { ...addPost, state: false },
          message: {
            state: true,
            type: "message",
            text: "Post added successfully",
          },
        });
      });
    }
    console.log(title, text);
  };

  return (
    <Modal onClose={handleClose} id="add-post-modal">
      <>
        <div className="title">Adding New Post</div>
        {error != "" && <div className="error">Error: {error}</div>}
        <div className="form">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            id="new-post-title"
            type="text"
          />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Text"
            id="new-post-text"
          />
          <Button onClick={handleAddPost} Icon={RiCheckFill} text="Add Post" />
        </div>
      </>
    </Modal>
  );
};

export default AddPostModal;
