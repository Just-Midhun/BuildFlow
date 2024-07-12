import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css'; // Import the corresponding CSS file

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleDashBoardClick = () => navigate('/current_happenings');
  const handleMeetingsClick = () => navigate('/meetings');
  const handleBillClick = () => navigate('/payment_history');
  const handleStatusClick = () => navigate('/camera_status');
  const handleRoomClick = () => navigate('/room_display');
  const handleComplaintsClick = () => navigate('/current_complaints');
  const handleSignOutClick = () => navigate('/');

  // Function to check if the current path matches the button's path
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <div className="dashboard-navbar">
      <a data-tooltip="Dashboard">
        <img
          onClick={handleDashBoardClick}
          className={`navbar-img ${isActive('/current_happenings')}`}
          src="../../assets/images/logo.png"
          alt="Logo"
        />
      </a>
      <div className="navbuttons">
        <button className={`navbutton ${isActive('/meetings')}`} data-tooltip="Events" onClick={handleMeetingsClick}>
          <img className="navbar-button-img" src="../../assets/images/tenant/events.png" alt="Events" />
        </button>
        <button className={`navbutton ${isActive('/payment_history')}`} data-tooltip="Bill History" onClick={handleBillClick}>
          <img className="navbar-button-img" src="../../assets/images/tenant/bills.png" alt="Bill History" />
        </button>
        <button className={`navbutton ${isActive('/camera_status')}`} data-tooltip="Status" onClick={handleStatusClick}>
          <img className="navbar-button-img" src="../../assets/images/tenant/status.png" alt="Status" />
        </button>
        <button className={`navbutton ${isActive('/current_complaints')}`} data-tooltip="Complaints" onClick={handleComplaintsClick}>
          <img className="navbar-button-img" src="../../assets/images/tenant/complaints.png" alt="Complaints" />
        </button>
        <button className={`navbutton ${isActive('/room_display')}`} data-tooltip="Chats" onClick={handleRoomClick}>
          <img className="navbar-button-img" src="../../assets/images/tenant/chats.png" alt="Chats" />
        </button>
      </div>
      <button className="signout" data-tooltip="Sign Out" onClick={handleSignOutClick}>
        <img className="navbar-img" src="../../assets/images/tenant/signout.png" alt="Sign Out" />
      </button>
    </div>
  );
};

export default Navbar;
