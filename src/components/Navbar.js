// src/components/Navbar.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import the corresponding CSS file

const Navbar = () => {
  const navigate = useNavigate();

  const handleDashBoardClick = () => {
    navigate('/current_happenings');
  };

  const handleMeetingsClick = () => {
    navigate('/meetings');
  }

  const handleBillClick = () => {
    navigate('/payment_history');
  }

  const handleStatusClick = () => {
    navigate('/camera_status');
  }

  const handleRoomClick=() => {
    navigate('/room_display');
  }
  
  const handleComplaintsClick = () => {
    navigate('/current_complaints')
  }

  const handleSignOutClick = () => {
    navigate('/');
  }

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
        <button className="navbutton" data-tooltip="Events" onClick={handleMeetingsClick}>
          <a >
            <img className="navbar-button-img" src="../../assets/images/tenant/events.png" alt="Events" />
          </a>
        </button>
        <button className="navbutton" data-tooltip="Bill History" onClick={handleBillClick}>
          <a >
            <img className="navbar-button-img" src="../../assets/images/tenant/bills.png" alt="Bill History" />
          </a>
        </button>
        <button className="navbutton" data-tooltip="Status" onClick={handleStatusClick}>
          <a>
            <img className="navbar-button-img" src="../../assets/images/tenant/status.png" alt="Status" />
          </a>
        </button>
        <button className="navbutton" data-tooltip="Complaints" onClick={handleComplaintsClick}>
          <a >
            <img className="navbar-button-img" src="../../assets/images/tenant/complaints.png" alt="Complaints" />
          </a>
        </button>
        <button className="navbutton" data-tooltip="Chats" onClick={handleRoomClick}>
          <a>
            <img className="navbar-button-img" src="../../assets/images/tenant/chats.png" alt="Chats" />
          </a>
        </button>
      </div>
      <button className="signout" data-tooltip="Sign Out" onClick={handleSignOutClick}>
        <img className="navbar-img" src="../../assets/images/tenant/signout.png" alt="Sign Out" />
      </button>
    </div>
  );
};

export default Navbar;
