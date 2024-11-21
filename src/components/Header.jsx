// components/Header.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header d-flex justify-content-between align-items-center p-3 bg-orange">
      <h4 className="text-white">Home / SSD NEW</h4>
      <div className="icons">
        <FontAwesomeIcon icon={faBell} className="me-3 text-white" />
        <FontAwesomeIcon icon={faUserCircle} className="text-white" />
      </div>
    </div>
  );
};

export default Header;
