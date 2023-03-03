import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import './Login.css';
import { connect } from "react-redux";

function Login(props) {

  const user = {
    username: 'test',
    password: 'test',
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate=useNavigate();

  const checkValidation = event => {
    event.preventDefault();
    let hasError = false;
    if (!username) {
      setUsernameError("Please enter a username");
      hasError = true;
    } else {
      setUsernameError("");
    }
    if (!password) {
      setPasswordError("Please enter a password");
      hasError = true;
    } else if (password.length < 4) {
      setPasswordError("Password must be at least 4 characters long");
      hasError = true;
    } else {
      setPasswordError("");
    }
    
    if (!hasError) {
    
    
    }

  
  
    if (username === user.username && password === user.password) {
      console.log(props.checkValidation)
      props.checkValidation();
      navigate('/Accounts');
    } else {
      setUsernameError("Please enter a valid username");
      setPasswordError("Please enter a valid password");
    }
  // console.log(props.isLoggedIn)

  }

 
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center ">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card shadow">
              <div className="card-title text-center border-bottom">
                <h2 className="p-3">Login</h2>
              </div>
              <div className="card-body ">
                <form>
                  <div className="mb-4">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                    />
                    {usernameError && <p className="error">{usernameError}</p>}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                    {passwordError && <p className="error">{passwordError}</p>}
                  </div>

                  <div className="d-grid">
                    <button type="submit" onClick={checkValidation} className="btn text-light main-bgg">
                      Login
                    </button>
                 
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
   return {
     checkValidation: () => dispatch({type:'ACCESS'})
   }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Login);







