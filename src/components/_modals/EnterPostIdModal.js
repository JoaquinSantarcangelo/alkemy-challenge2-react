import React, { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { deletePost, updatePost } from "../../actions/posts";

//Elements
import Button from "../_elements/Button";
import CloseButton from "../_elements/CloseButton";
import Modal from "../_elements/Modal";

//Icons
import { FaSearch } from "react-icons/fa";

const EnterPostIdModal = ({ modals, setModals }) => {
  //Redux
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  //Hooks
  const [idState, setIdState] = useState("");

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

        dispatch(deletePost(parseInt(idState))).then((res) => {
          //If ID was Valid
          if (
            res.config.url.substring(
              res.config.url.length - 3,
              res.config.url.length
            ) === "NaN"
          ) {
            setModals({
              ...modals,
              enterPostId: {
                ...enterPostId,
                state: false,
              },
              message: {
                state: true,
                type: "error",
                text: `Post ${idState} doesn't exist`,
              },
            });
          } else {
            setModals({
              ...modals,
              enterPostId: {
                ...enterPostId,
                state: false,
              },
              message: {
                state: true,
                type: "message",
                text: `Post ${idState} deleted successfully`,
              },
            });
          }
        });

        break;
      case "edit":
        console.log("Editing Post, from Enter ID Modal");
        break;
      case "view":
        console.log("Viewing Post, from Enter ID Modal");
        let auxPost = null;
        posts.forEach((post) => {
          if (post.id === parseInt(idState)) {
            auxPost = post;
          }
        });

        //If Post Exists
        if (auxPost !== null) {
          setModals({
            ...modals,
            enterPostId: { ...enterPostId, state: false },
            viewPost: { post: auxPost, state: true },
          });
        } else {
          setModals({
            ...modals,
            enterPostId: { ...enterPostId, state: false },
            message: {
              state: true,
              type: "error",
              text: `Post ${idState} doesn't exist`,
            },
          });
        }
        break;
    }
  };

  return (
    <Modal onClose={handleClose} id="enter-post-id-modal">
      <>
        <div className="title">Please enter the Post ID: </div>
        <input
          placeholder="Post ID"
          id="post-id"
          type="text"
          value={idState}
          onChange={(e) => setIdState(e.target.value)}
        />
        <Button onClick={handleSearch} Icon={FaSearch} text="Search" />
      </>
    </Modal>
  );
};

export default EnterPostIdModal;
