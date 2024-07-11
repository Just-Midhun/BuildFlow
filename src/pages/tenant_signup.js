import '../components/tenantsignup.css';

import { useNavigate, Link} from 'react-router-dom';

const TenantSignUp = () => {
  const nav = useNavigate;

  const handleTenantClick = () => {
    navigate('/tenant_login');
  };

  return (
    <div className="signup-container">
      <div className="header">
        <div className="logo">
          <img className="signup-img" src="/assets/images/logo.png" alt="Logo" />
        </div>
        <div>
          <p>BuildFlow</p>
        </div>
      </div>
      <div className="maincontainer">
        <div className="signuptext">
          <p>SignUp</p>
        </div>
        <div className="signupcontainer">
          <input type="text" placeholder="BuildingID" />
          <input type="text" placeholder="RoomID" />
          <input type="password" placeholder="Create Password" />
          <input type="password" placeholder="Re-enter Password" />
        </div>
        <input type="submit" className="submit" value="Create Account" />
        <div className="login">
          <p>Already have an account?</p>
          <a ><Link to="/tenant_login">Login</Link></a>
        </div>
      </div>
    </div>
  );
};

export default TenantSignUp;
