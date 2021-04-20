import React from "react";

//Elements
import Button from "../components/_elements/Button";

//Icons
import { BsDashCircleFill, BsPencilSquare, BsEyeFill } from "react-icons/bs";

const PostListItem = ({ postInfo }) => {
  return (
    <div className="post-list-item">
      <div className="title">{postInfo.title}</div>
      <div className="buttons">
        <Button id="delete-post" Icon={BsDashCircleFill} text="Delete" />
        <Button id="edit-post" Icon={BsPencilSquare} text="Edit" />
        <Button id="view-post" Icon={BsEyeFill} text="View" />
      </div>
    </div>
  );
};

export default PostListItem;
