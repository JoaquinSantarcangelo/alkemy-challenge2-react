import React from "react";
import { motion } from "framer-motion";

//Elements
import Button from "./_elements/Button";
import Dropdown from "./_elements/Dropdown";

//Icons
import {
  BsLightningFill,
  BsPlus,
  BsFileEarmarkMinus,
  BsPencilSquare,
  BsEyeFill,
  BsFillHouseDoorFill,
} from "react-icons/bs";

import { FaUserCircle } from "react-icons/fa";

const Navbar = ({ modals, setModals }) => {
  //Add Post
  const addPost = () => {
    console.log("Adding Post: From Navbar");
    setModals({
      ...modals,
      addPost: { ...modals.addPost, state: true, action: "add" },
    });
  };

  //Edit Post
  const editPost = () => {
    console.log("Editing Post: From Navbar");

    //Opens Enter ID Modal if !Current Post
    if (modals.currentPostId == null) {
      setModals({
        ...modals,
        enterPostId: { action: "edit", state: true },
      });
    }
  };

  //View Post
  const viewPost = () => {
    console.log("Viewing Post: From Navbar");
    //Opens Enter ID Modal if !Current Post
    if (modals.currentPostId == null) {
      setModals({
        ...modals,
        enterPostId: { action: "view", state: true },
      });
    }
  };

  //DeletePost
  const deletePost = () => {
    console.log("Deleting Post: From Navbar");
    //Opens Enter ID Modal if !Current Post
    if (modals.currentPostId == null) {
      setModals({
        ...modals,
        enterPostId: { action: "delete", state: true },
      });
    }
  };

  return (
    <motion.div id="navbar" className="section">
      <div className="container">
        <Dropdown
          disabled
          id="profile-info"
          text="Account"
          Icon={FaUserCircle}
          custom={6}
        ></Dropdown>
        <div className="buttons">
          {/* Router Nav Items */}
          <div className="nav-items">
            <Button
              alt
              id="home-button"
              text="Home"
              Icon={BsFillHouseDoorFill}
              custom={6}
            />
          </div>

          {/* Dropdown */}

          <Dropdown custom={6} text="Actions" Icon={BsLightningFill}>
            <Button
              onClick={addPost}
              custom={1}
              id="main-button"
              text="Add Post"
              Icon={BsPlus}
            />
            <Button
              onClick={viewPost}
              custom={2}
              id="main-button"
              text="View Post"
              Icon={BsEyeFill}
            />
            <Button
              onClick={editPost}
              custom={3}
              id="main-button"
              text="Edit Post"
              Icon={BsPencilSquare}
            />
            <Button
              onClick={deletePost}
              custom={4}
              id="main-button"
              text="Delete Post"
              Icon={BsFileEarmarkMinus}
            />
          </Dropdown>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
