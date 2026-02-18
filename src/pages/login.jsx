import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {

  const [phone, setPhone] = useState("");

  const handleVerify = () => {
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(phone)) {
      alert("Enter valid 10-digit phone number");
      return;
    }

    alert("OTP Sent to " + phone);
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>

        <input
          type="tel"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <button 
          type="button"
          className="verify-btn"
          onClick={handleVerify}
        >
          Verify
        </button>

        <p className="register-text">
          If you have not registered?{" "}
          <Link to="/register">Register</Link>
        </p>

      </form>
    </div>
  );
};

export default Login;
