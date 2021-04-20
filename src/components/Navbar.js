import React from "react";

//Elements
import Button from "./_elements/Button";
import Dropdown from "./_elements/Dropdown";

const Navbar = () => {
  return (
    <div id="navbar" className="section">
      <div className="container">
        <div className="buttons">
          <Dropdown />
          <div className="nav-items">
            <Button />
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
