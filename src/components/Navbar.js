import React from "react";

//Elements
import Button from "./_elements/Button";
import Dropdown from "./_elements/Dropdown";

//Icons
import {
  BsLightningFill,
  BsFileEarmarkPlus,
  BsFileEarmarkMinus,
  BsPencilSquare,
  BsEyeFill,
  BsFillHouseDoorFill,
} from "react-icons/bs";

const Navbar = () => {
  return (
    <div id="navbar" className="section">
      <div className="container">
        <div className="buttons">
          <div className="dropdown">
            <Button id="main-button" text="Actions" Icon={BsLightningFill} />
            <div className="drop-items"></div>
          </div>
          <div className="nav-items">
            <Button alt id="home-button" text="Home" Icon={BsFillHouseDoorFill} />
          </div>
        </div>
        <div className="profile-info">
          <div className="profile-image"></div>
          <div className="name"></div>
          <div id="logout"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
