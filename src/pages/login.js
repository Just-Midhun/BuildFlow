import '../components/login.css';

const Login = () => {
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
          <button className="login-button"><p>Login as Building Manager</p></button>
          <button className="login-button"><p>Login as Tenant</p></button>               
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
