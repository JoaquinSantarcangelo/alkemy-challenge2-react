import React from "react";
import { motion } from "framer-motion";

// Redux
import { useDispatch } from "react-redux";
import { deletePost } from "../actions/posts";

//Elements
import Button from "../components/_elements/Button";

//Icons
import { BsDashCircleFill, BsPencilSquare, BsEyeFill } from "react-icons/bs";

const PostListItem = ({ postInfo, i, setModals, modals }) => {
  //Redux
  const dispatch = useDispatch();

  //Framer Motion Variants
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { ease: "easeInOut", delay: i / 10 } },
    exit: { opacity: 0 },
  };

  //Handle Delete Post
  const handleDelete = () => {
    console.log("Handle Delete Post");

    dispatch(deletePost(postInfo.id)).then((res) => {
      console.log(res);
      setModals({
        ...modals,
        message: {
          state: true,
          type: "message",
          text: `Post ${postInfo.id} deleted successfully`,
        },
      });
    });
  };

  //Handle Edit Post
  const handleEdit = () => {
    console.log("Handle Edit Post: From PostListItem");
    setModals({
      ...modals,
      addPost: { state: true, post: postInfo, action: "edit" },
    });
  };
  //Handle View Post
  const handleView = () => {
    console.log("Handle View Post");
    setModals({ ...modals, viewPost: { state: true, post: postInfo } });
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="post-list-item"
    >
      <div className="title">
        {postInfo.title.charAt(0).toUpperCase() + postInfo.title.slice(1)}
      </div>
      <div className="buttons">
        <Button
          onClick={handleDelete}
          id="delete-post"
          Icon={BsDashCircleFill}
          text="Delete"
        />
        <Button
          onClick={handleEdit}
          id="edit-post"
          Icon={BsPencilSquare}
          text="Edit"
        />
        <Button
          onClick={handleView}
          id="view-post"
          Icon={BsEyeFill}
          text="View"
        />
      </div>
    </motion.div>
  );
};

export default PostListItem;
