import '../components/tenantlogin.css';

const ManagerLogin = () => {
  return (
    <div className="maincontainer">
      <div className="logo">
        <img src="/assets/images/logo.png" alt="Logo" />
      </div>
      <div className="logintext">
        <p>Login</p>
      </div>
      <div className="logincontainer">
        <input type="text" placeholder="BuildingID" />
        <input type="text" placeholder="RoomID" />
        <input type="password" placeholder="Password" />
      </div>
      <input type="submit" className="submit" />
      <div className="backbutton">
        <a href="/login">
          <button>&#8592;</button>
        </a>
      </div>
    </div>
  );
};

export default ManagerLogin;
