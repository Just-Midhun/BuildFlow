import '../components/Login.css';

import { useNavigate, Link} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleBuildManagerClick = () => {
      navigate('/manager_login');
    };

    const handleTenantClick = () => {
        navigate('/tenant_login');
      };

    const handleTenantSignupClick = () => {
      navigate('/tenant_signup');
    };

  return (
    <div>
      <div className="lheader">
          <img className="mainlogo" src="/assets/images/logo.png" alt="Logo" />
        <div>
          <p>BuildFlow</p>
        </div>
      </div>
      <div className="logincontainer">
        <div className="loginheader">
          <p>Login</p>
        </div>
        <div className="buttonscontainer">
          <Link to="/manager_login"><button className="mainlogin-button">Login as Building Manager</button></Link>
          <Link to="/tenant_login"><button className="mainlogin-button">Login as Tenant</button></Link>              
        </div>
        <div className="signup">
          <p>Do you have an account? </p>
          <Link to={"/tenant_signup"}>SignUp</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
