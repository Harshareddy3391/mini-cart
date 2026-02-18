import React, { useState } from "react";
import "./registration.css";
import {Link} from "react-router-dom";

const Registration = () => {

  const [phone, setPhone] = useState("");

 const handleOtp = () => {
  const phoneRegex = /^[6-9]\d{9}$/;

  if (!phoneRegex.test(phone)) {
    alert("Invalid phone number");
    return;
  }

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
            pattern="^[6-9][0-9]{9}$"
             title="Enter valid 10-digit Indian phone number"
              onChange={(e) => setPhone(e.target.value)}
                required
/>
          <button 
            type="button" 
            className="otp-btn"
            required
            
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
          If you have account? <Link to="/login"><span>Login</span></Link>
        </p>

      </form>
    </div>
  );
};

export default Registration;
