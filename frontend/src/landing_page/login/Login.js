import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/api/login", {
        phone,
        password,
      });

      alert(res.data.message);
      // ✅ Redirect to dashboard React app
      window.location.href = "http://localhost:3001/";
    } catch (err) {
      console.error(err);
      alert("Login failed!");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card p-4 shadow"
        style={{
          width: "400px",
          borderRadius: "12px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h2 className="text-center mb-3">Login</h2>
        <p className="text-center text-muted mb-4">
          Access your trading dashboard
        </p>

        <form onSubmit={handleLogin}>
          {/* Phone input */}
          <div className="mb-3">
            <label htmlFor="phone" className="form-label fw-semibold">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="form-control"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              style={{ padding: "10px", fontSize: "15px" }}
            />
          </div>

          {/* Password input */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ padding: "10px", fontSize: "15px" }}
            />
          </div>

          {/* Login Button */}
          <div className="text-center mt-4">
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                padding: "8px 20px",
                borderRadius: "25px",
                width: "100%",
                fontSize: "15px",
              }}
            >
              Login
            </button>
          </div>
        </form>

        {/* Signup Link */}
        <div className="text-center mt-4">
          <p style={{ display: "inline", marginRight: "10px" }}>
            Don’t have an account?
          </p>
          <button
            className="btn btn-outline-primary"
            style={{
              padding: "5px 18px",
              fontSize: "14px",
              borderRadius: "20px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/signup")}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
