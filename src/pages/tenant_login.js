import '../components/tenantlogin.css';

import { useNavigate, Link} from 'react-router-dom';

const TenantLogin = () => {

  const navigate = useNavigate();

  const handleDashBoardClick = () => {
    navigate('/current_happenings');
  }
  return (
    <div className="mainlogin-container">
    <div className="maincontainer">
      <div className="logo">
        <img className="mainlogin-img" src="/assets/images/logo.png" alt="Logo" />
      </div>
      <div className="logintext">
        <p>Login</p>
      </div>
      <div className="logincontainer">
        <input type="text" placeholder="BuildingID" />
        <input type="text" placeholder="RoomID" />
        <input type="password" placeholder="Password" />
      </div>
      <input type="submit" className="submit" onClick={handleDashBoardClick}/>
      <div className="backbutton">
        <a href="/login">
          <button>&#8592;</button>
        </a>
      </div>
    </div>
    </div>
  );
};

export default TenantLogin;
