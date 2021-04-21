import React, { useEffect, useState } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

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

  //Fill Inputs if action = Editing
  useEffect(() => {
    if (addPost.action === "edit") {
      setTitle(addPost.post.title);
      setText(addPost.post.body);
    }
  }, []);

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

  //Handle Edit Post
  const handleEditPost = async () => {
    console.log("Edit Post: From AddPostModal");

    //Form Validation
    let validated = await validation();

    if (validated) {
      let editedPost = { ...addPost.post, title: title, text: text };
      dispatch(updatePost(addPost.post.id, editedPost)).then(() => {
        console.log("Edited Post: From dispatch callback");

        //Close Modal
        handleClose();

        //Show Message
        setModals({
          ...modals,
          addPost: { action: "", post: null, state: false },
          message: {
            state: true,
            type: "message",
            text: "Post edited successfully",
          },
        });
      });
    }
    console.log(title, text);
  };

  return (
    <Modal onClose={handleClose} id="add-post-modal">
      <>
        <div className="title">
          {addPost.action === "edit"
            ? `Editing Post ID:${addPost.post.id}`
            : "Adding New Post"}
        </div>
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
          <Button
            onClick={
              addPost.action === "editing" ? handleAddPost : handleEditPost
            }
            Icon={RiCheckFill}
            text={addPost.action === "editing" ? "Add Post" : "Edit Post"}
          />
        </div>
      </>
    </Modal>
  );
};

export default AddPostModal;
