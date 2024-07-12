import React from 'react';
import Navbar from '../components/Navbar';
import '../components/camerastatus.css';
import { Link, useNavigate } from 'react-router-dom';

const CameraStatus = () => {
    const navigate = useNavigate();

    const handleLiftStatusClick = () => {
    navigate('/lift_status');
  };
    return (
        <div className="camera-status-page">
            <Navbar />
            <div className="camera-status-content">
                <h1 className="title">Status</h1>
                <div className="buttons">
                    <button className="camera-status-button">Camera</button>
                    <Link to="/lift_status">
                        <button className="liftstatus-button">Lift</button>
                    </Link>
                </div>
                <div className="camera-status-main-content">
                    <div className="camerastatus"></div>
                    <div className="camerastatus"></div>
                    <div className="camerastatus"></div>
                    <div className="camerastatus"></div>
                </div>
            </div>
        </div>
    );
};

export default CameraStatus;
