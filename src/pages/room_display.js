import React from 'react';
import Navbar from '../components/Navbar';  // Assuming Navbar is in the same directory
import '../components/roomdisplay.css';

const RoomDisplay = () => {
    return (
        <div className="room-display-page">
            <Navbar />
            <div className="room-display-content">
                <h1 className="title">Room Status</h1>
                <div className="buttons">
                    <button className="status-button">Display</button>
                </div>
                <div className="room-display-main-content">
                    <div className="rooms">
                        <div className="room">101. ABC</div>
                        <div className="room">201. ABC</div>
                        <div className="room">102.-</div>
                        <div className="room">202.-</div>
                        <div className="room">103.-</div>
                        <div className="room">203.-</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDisplay;
