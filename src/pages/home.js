import React from 'react';
import '../components/home.css';

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <ul className="container nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <a href="#" className="logo"><img src="/assets/images/logo.png" alt="Logo" className="logo-image" /></a>
          <li><a href="#services">Login</a></li>
          <li><a href="#contact">SignUp</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero" id="home">
        <div className="hero-content">
          <h1>BuildFlow</h1>
          <p>Manage buildings like never before</p>
        </div>
      </div>

      {/* Events */}
      <div className="home-events">
        <section id="about">
          <img src="/assets/images/assistance.png" alt="Assistance" className="logo-image" />
          <h1>Assistance</h1>
        </section>
        <section id="services">
          <img src="/assets/images/event.png" alt="Events" className="logo-image" />
          <h1>Events</h1>
        </section>
        <section id="contact">
          <img src="/assets/images/payment.png" alt="Payments" className="logo-image" />
          <h1>Payments</h1>
        </section>
      </div>

      {/* Welcome Section */}
      <div className="welcome">
        <h1>Welcome to BuildFlow</h1>
        <p>Your Ultimate Solution for Efficient Building Management</p>
      </div>

      {/* Uses */}
      <div className="uses">
        <br />
        <div className="grid-container">
          <div className="grid-item" id="box1">
            <h1>Enhanced Security and Access Control</h1>
            <p>Implement access controls to restrict entry to authorized personnel only.
              Receive alerts for suspicious activities and potential security breaches in real-time.
            </p>
          </div>
          <div className="grid-item" id="box2"></div>
          <div className="grid-item" id="box3">
            <h1>Intuitive Control Features</h1>
            <p>Take command of your building operations with our user-friendly control panel.
              Customize alerts and notifications to stay informed about critical events in your properties.
            </p>
          </div>
          <div className="grid-item" id="box4"></div>
          <div className="grid-item" id="box5">
            <h1>Streamlined Room Management</h1>
            <p>
              Easily monitor and manage multiple properties from a single interface.
              Automate routine tasks such as maintenance requests and rent collection, saving you time and effort.
            </p>
          </div>
          <div className="grid-item" id="box6"></div>
          <div className="grid-item" id="box7">
            <h1>Efficient Communication Channels</h1>
            <p>Send announcements, notifications, and updates instantly via our integrated messaging system.
              Streamline collaboration and coordination for smoother building operations.
            </p>
          </div>
          <div className="grid-item" id="box8"></div>
          <div className="grid-item" id="box9">
            <h1>Comprehensive Search Capabilities</h1>
            <p>Effortlessly search for tenant information, maintenance records, and financial reports.
              Save time and boost productivity with our advanced search functionalities.
            </p>
          </div>
        </div>
        <br />
      </div>

      {/* Experience */}
      <div className="experience">
        <h1>Experience the BuildFlow Difference</h1><br />
        <p>Join thousands of satisfied customers who trust BuildingManagerX to streamline their building management processes and maximize operational efficiency.
          <br />
          Try it today and revolutionize the way you manage your properties!
        </p>
      </div>

      {/* Functions */}
      <div className="functions">
        <div className="hustle">
          <div className="hustle-container">
            <h1>Leave the<br />hustle to us!</h1>
          </div>
          <div className="stars">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
        </div>
        <div className="features">
          <div className="feature">
            <h2>Control</h2>
            <p>Take command of your building operations with our intuitive control features, ensuring seamless management at your fingertips.</p>
          </div>
          <div className="feature image">
            {/* City skyline image would go here */}
          </div>
          <div className="feature">
            <h2>Search</h2>
            <p>Effortlessly locate essential items and resources within your building operations, enhancing productivity and efficiency with our comprehensive approach.</p>
          </div>
        </div>
      </div>

      {/* Aspects */}
      <div className="property-management-container">
        <h1 className="pm-heading">Save time managing<br />your buildings with us</h1>
        <p className="pm-quote">"Our streamlined solutions optimize every aspect of property management, ensuring efficiency and convenience for property owners and managers alike"</p>
        <div className="pm-benefits">
          <div className="pm-benefit">
            <div className="pm-icon">
              <img src="/assets/images/fast.png" alt="Fast icon" />
            </div>
            <p>Fast</p>
          </div>
          <div className="pm-benefit">
            <div className="pm-icon">
              <img src="/assets/images/efficient.png" alt="Efficient icon" />
            </div>
            <p>Efficient</p>
          </div>
          <div className="pm-benefit">
            <div className="pm-icon">
              <img src="/assets/images/economic.png" alt="Economic icon" />
            </div>
            <p>Economic</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>A dedicated team of developers creating and trying to establish a solid idea </p>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li>Email: contact@example.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Street, City, Country</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <hr className="pm-divider" />
        <div className="copyright">
          <p>&copy; 2024 BuildFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
