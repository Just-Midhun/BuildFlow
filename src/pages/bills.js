import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar.js'; // Import the Navbar component
import '../components/bills.css'; // Import the corresponding CSS file

const Bills = () => {
  const navigate = useNavigate();

  const handleDashBoardClick = () => {
    navigate('/current_happenings');
  }

  return (
    <div className="bills-container">
      <Navbar handleDashBoardClick={handleDashBoardClick} />
      <div className="content">
        <h1 className="title">Dashboard</h1>
        <div className="buttons">
          <Link to="/current_happenings"><button className="chdashboard-button">Current Happenings</button></Link>
          <button className="dashboard-button">Bills</button>
        </div>
        <div className="main-content"></div>
      </div>
    </div>
  );
};

export default Bills;
