// src/components/Navbar.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import the corresponding CSS file

const Navbar = () => {
  const navigate = useNavigate();

  const handleDashBoardClick = () => {
    navigate('/current_happenings');
  };

  return (
    <div className="dashboard-navbar">
      <a data-tooltip="Dashboard">
        <img
          onClick={handleDashBoardClick}
          className="navbar-img"
          src="../../assets/images/logo.png"
          alt="Logo"
        />
      </a>
      <div className="navbuttons">
        <button className="navbutton" data-tooltip="Events">
          <a href="meetings.html">
            <img className="navbar-button-img" src="../../assets/images/tenant/events.png" alt="Events" />
          </a>
        </button>
        <button className="navbutton" data-tooltip="Bill History">
          <a href="billhistory.html">
            <img className="navbar-button-img" src="../../assets/images/tenant/bills.png" alt="Bill History" />
          </a>
        </button>
        <button className="navbutton" data-tooltip="Status">
          <a href="camera_status.html">
            <img className="navbar-button-img" src="../../assets/images/tenant/status.png" alt="Status" />
          </a>
        </button>
        <button className="navbutton" data-tooltip="Complaints">
          <a href="current_complaints.html">
            <img className="navbar-button-img" src="../../assets/images/tenant/complaints.png" alt="Complaints" />
          </a>
        </button>
        <button className="navbutton" data-tooltip="Chats">
          <a href="room_display.html">
            <img className="navbar-button-img" src="../../assets/images/tenant/chats.png" alt="Chats" />
          </a>
        </button>
      </div>
      <button className="signout" data-tooltip="Sign Out">
        <img className="navbar-img" src="../../assets/images/tenant/signout.png" alt="Sign Out" />
      </button>
    </div>
  );
};

export default Navbar;
