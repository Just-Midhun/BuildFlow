import React from 'react';
import Navbar1 from '../components/navbar1.js';
import './home.css'; 

function HomeScreen() {
  return (
    <div>
        <Navbar1 />
        <div className="name-container">
         <h1>BuildFlow</h1>
        <p>Manage Buildings like never before</p>
        </div>

        <div className="icon-container">
            <div className="icon">
                <img src="../../assets/images/assistance.png" alt="Icon1" />
                <p>Assistance</p>
            </div>
            <div className="icon">
                <img src="../../assets/images/events.png" alt="Icon2" />
                <p>Events</p>
            </div>
            <div className="icon">
                <img src="../../assets/images/payments.png" alt="Icon3" />
                <p>Payments</p>
            </div>
        </div>

        <div className="home-container-1">
            <div className="home-container-1-name">
                <h2>
                    Welcome to BuildFlow
                </h2>
                <p>
                    Your Ultimate Solution for Building Management
                </p>
            </div>
            <div className="home-container-1-features">
            </div>
        </div>

        <div className="home-container-2">
            <div className="home-container-2-name">
            <div>Leave the hustle to us</div>
            <div className="home-container-2-name-stars"></div>
            </div>

            <div className="home-container-2-features">
                <div className="home-container-2-feature-1">
                    <h4>Control</h4>
                    <p>
                        Take command of your building operations with our intuitive control features, ensuring seamless management at your fingertips.
                    </p>
                </div>

                <div className="home-container-2-feature-2">
                    <img src=""></img>
                </div>

                <div className="home-container-2-feature-3">
                    <h4>Search</h4>
                    <p>
                    Effortlessly locate essential items and resources within your building operations, enhancing productivity and efficiency with our comprehensive approach.
                    </p>
                </div>
            </div>
        </div>

        <div className="home-container-3">
            <div className="home-container-3-name">
                <h2>Save time managing your buildings with us</h2>
            </div>
            <div className="home-container-3-content">
                <p> 
                    “our streamlined solutions optimize every aspect of property management, ensuring efficiency and convenience for property owners and managers alike”
                </p>
            </div>
            <div  className="home-container-3-features">
                <div className="home-container-3-feature-1">
                    <div className="home-container-3-feature-1-icon">
                        <img src="../../assets/images/fast.png" alt="Fast" />
                    </div>
                    <h2>Fast</h2>
                </div>
                <div className="home-container-3-feature-1">
                    <div className="home-container-3-feature-1-icon">
                        <img src="../../assets/images/efficient.png" alt="Efficient" />
                    </div>
                    <h2>Efficient</h2>
                </div>
                <div className="home-container-3-feature-1">
                    <div className="home-container-3-feature-1-icon">
                        <img src="../../assets/images/economic.png" alt="Economic" />
                    </div>
                    <h2>Economic</h2>
                </div>
            </div>
        </div>

        <footer>

        </footer>
    </div>
  );
}

export default HomeScreen;
