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

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const addPost = () => {
    console.log("Adding Post: From Navbar");
  };

  const editPost = () => {
    console.log("Editing Post: From Navbar");
  };

  const viewPost = () => {
    console.log("Viewing Post: From Navbar");
  };

  const deletePost = () => {
    console.log("Deleting Post: From Navbar");
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
        <div className="profile-info">
          <div className="profile-image"></div>
          <div className="name">User Name</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
