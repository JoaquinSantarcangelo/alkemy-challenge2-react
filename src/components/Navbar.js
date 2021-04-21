import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

import { FiLogOut } from "react-icons/fi";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { ease: "easeInOut" } },
  exit: { opacity: 0 },
};

const Navbar = ({ modals, setModals }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  //Add Post
  const addPost = () => {
    console.log("Adding Post: From Navbar");
    setModals({ ...modals, addPost: { ...modals.addPost, state: true } });
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
    <div id="navbar" className="section">
      <div className="container">
        <div className="buttons">
          <div className="dropdown">
            <Button
              onClick={handleDropdown}
              id="main-button"
              text="Actions"
              Icon={BsLightningFill}
            />
            <AnimatePresence exitBeforeEnter>
              {dropdownOpen && (
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="drop-items"
                >
                  <Button
                    onClick={addPost}
                    id="main-button"
                    text="Add Post"
                    Icon={BsPlus}
                  />
                  <Button
                    onClick={viewPost}
                    id="main-button"
                    text="View Post"
                    Icon={BsEyeFill}
                  />
                  <Button
                    onClick={editPost}
                    id="main-button"
                    text="Edit Post"
                    Icon={BsPencilSquare}
                  />
                  <Button
                    onClick={deletePost}
                    id="main-button"
                    text="Delete Post"
                    Icon={BsFileEarmarkMinus}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="nav-items">
            <Button
              alt
              id="home-button"
              text="Home"
              Icon={BsFillHouseDoorFill}
            />
          </div>
        </div>
        {/* <div className="profile-info">
          <div className="name">Account</div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
