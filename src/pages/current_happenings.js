// src/pages/CurrentHappenings.js

import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Import the Navbar component
import '../components/currenthappenings.css'; // Import the corresponding CSS file
import '../components/bills.css';

const CurrentHappenings = () => {
  const navigate = useNavigate();

  const handleDashBoardClick = () => {
    navigate('/current_happenings');
  };

  const handleBills = () => {
    navigate('/bills');
  }

  return (
    <div className="currenthappenings-container">
      <Navbar /> {/* Use the Navbar component */}
      <div className="content">
        <h1 className="title">Dashboard</h1>
        <div className="buttons">
          <button className="dashboard-button">Current Happenings</button>
          <Link to="/bills"><button className="billsdashboard-button">Bills</button></Link>
        </div>
        <div className="main-content"></div>
      </div>
    </div>
  );
};

export default CurrentHappenings;
