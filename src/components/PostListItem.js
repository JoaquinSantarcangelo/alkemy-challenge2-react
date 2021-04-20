import React from "react";

//Elements
import Button from "../components/_elements/Button";

//Icons
import { BsDashCircleFill, BsPencilSquare, BsEyeFill } from "react-icons/bs";

const PostListItem = ({ postInfo }) => {
  //Handle Delete Post
  const handleDelete = () => {
    console.log("Handle Delete Post");
  };
  //Handle Edit Post
  const handleEdit = () => {
    console.log("Handle Edit Post");
  };
  //Handle View Post
  const handleView = () => {
    console.log("Handle View Post");
  };

  return (
    <div className="post-list-item">
      <div className="title">{postInfo.title}</div>
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
    </div>
  );
};

export default PostListItem;
