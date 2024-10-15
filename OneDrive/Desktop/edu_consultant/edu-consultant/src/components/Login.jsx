import React from 'react';
import '../styles/Login.css';
import googleIcon from '../assets/googleIcon.png'; 

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-content">
          <h1 className="brand-title">EDU Consultant</h1>
          <div className="login-box">
            <h2>Login</h2>
            <button className="google-login-btn">
              <img src={googleIcon} alt="Google Icon" className="google-icon" /> Login using Google
            </button>
            <p>or</p>
            <form className="login-form">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit" className="login-account-btn">Login to Your Account</button>
            </form>
            <p className="signup-text">
              Don't have an account? <a href="/signup" className="signup-link">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
