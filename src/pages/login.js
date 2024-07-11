import '../components/login.css';

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
    <div className="login-container">
      <div className="header">
        <div className="logo">
          <img className="login-img" src="/assets/images/logo.png" alt="Logo" />
        </div>
        <div>
          <p>BuildFlow</p>
        </div>
      </div>
      <div className="logincontainer">
        <div className="loginheader">
          <p>Login</p>
        </div>
        <div className="buttonscontainer">
          <button className="login-button"><p><Link to="/manager_login">Login as Building Manager</Link></p></button>
          <button className="login-button"><p><Link to="/tenant_login">Login as Tenant</Link></p></button>              
        </div>
        <div className="signup">
          <p>Do you have an account? </p>
          <a><Link to="/tenant_signup">SignUp</Link></a>
        </div>
      </div>
    </div>
  );
}

export default Login;
