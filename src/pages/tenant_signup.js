import '../components/tenantsignup.css';

const SignUp = () => {
    return (
        <div>
            <div class="header">
                    <img className='mainlogo' src="assets/images/logo.png" />
                <div>
                    <p>BuildFlow</p>
                </div>
            </div>
            <div class="maincontainer">
                <div class="signuptext">
                    <p>SignUp</p>
                </div>
                <div class="signupcontainer">
                    <input type="text" placeholder="BuildingID" />
                    <input type="text" placeholder="RoomID" />
                    <input type="password" placeholder="Create Password" />
                    <input type="password" placeholder="Re-enter Password" />
                </div>
                <input type="submit" class="submit" value="Create Account" />
                <div class="login">
                    <p>Already have an account?</p>
                    <a href="/login">Login</a>
                </div>
            </div>
        </div>
    );
  };
  
  export default SignUp;