// components/Sidebar.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartBar, faTable } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar bg-warning">
      <div className="logo p-3">
        <h4>IKON</h4>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item p-2">
          <FontAwesomeIcon icon={faHome} className="me-2" /> Overall Dashboard
        </li>
        <li className="nav-item p-2">
          <FontAwesomeIcon icon={faChartBar} className="me-2" /> Finance Dashboard
        </li>
        <li className="nav-item p-2">
          <FontAwesomeIcon icon={faTable} className="me-2" /> My Reports
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
