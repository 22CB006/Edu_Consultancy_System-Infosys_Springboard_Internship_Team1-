import React from 'react';
import '../styles/Signup.css';
import googleIcon from '../assets/googleIcon.png'; 

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-background">
        <div className="signup-content">
          <h1 className="brand-title">EDU Consultant</h1>
          <div className="signup-box">
            <h2>Sign up</h2>
            <button className="google-signup-btn">
            <img src={googleIcon} alt="Google Icon" className="google-icon" /> Sign up using Google
            </button>
            <p>or</p>
            <form className="signup-form">
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit" className="create-account-btn">Create Your Account</button>
            </form>
            <p className="login-text">
              Already have an account? <a href="/login" className="login-link">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
