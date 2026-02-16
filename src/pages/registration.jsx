import React, { useState } from "react";
import "./registration.css";

const Registration = () => {

  const [phone, setPhone] = useState("");

  const handleOtp = () => {
    alert("OTP Sent to " + phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered Successfully!");
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <input 
          type="text" 
          placeholder="Full Name" 
          required 
        />

        <div className="phone-section">
          <input 
            type="tel" 
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button 
            type="button" 
            className="otp-btn"
            onClick={handleOtp}
          >
            Send OTP
          </button>
        </div>

        <input 
          type="email" 
          placeholder="Email Address" 
          required 
        />

        <button type="submit" className="register-btn">
          Register
        </button>

        <p className="login-text">
          If you have account? <span>Login</span>
        </p>

      </form>
    </div>
  );
};

export default Registration;
