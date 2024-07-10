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

  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src="/assets/images/logo.png" alt="Logo" />
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
          <button className="login-button"><Link to="/manager_login">Login as Building Manager</Link></button>
          <button className="login-button"><Link to="/tenant_login">Login as Tenant</Link></button>              
        </div>
        <div className="signup">
          <p>Do you have an account? </p>
          <a href="signup.html">SignUp</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
