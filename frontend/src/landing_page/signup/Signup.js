import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/api/signup", {
        phone,
        password,
      });
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Signup failed!");
    }
  };

  return (
    <div
      className="container"
      style={{ marginTop: "150px", marginBottom: "80px" }}
    >
      <div className="row justify-content-center text-center ">
        <h2>Open a free demat and trading account online</h2>
        <p>
          Start investing in stocks, mutual funds, ETFs, and more with zero
          commission.
        </p>
      </div>

      <div className="row justify-content-center align-items-center mt-4">
        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img
            src="media/images/sign.png"
            alt="Sign Up"
            className="img-fluid"
            style={{ maxWidth: "80%", borderRadius: "10px" }}
          />
        </div>

        {/* Signup Form Section */}
        <div className="col-md-5">
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "#f9f9f9",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            {/* Phone number */}
            <div className="mb-3">
              <label htmlFor="phone" className="form-label fw-semibold">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ padding: "10px", fontSize: "15px" }}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ padding: "10px", fontSize: "15px" }}
                required
              />
            </div>

            {/* Signup Button */}
            <div className="text-center mt-4">
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  padding: "6px 20px",
                  fontSize: "15px",
                  borderRadius: "25px",
                  cursor: "pointer",
                }}
              >
                Signup
              </button>
            </div>
          </form>

          {/* Already have an account + Login Button */}
          <div
            style={{
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                display: "inline",
                marginRight: "10px",
                fontSize: "15px",
              }}
            >
              Already have an account?
            </p>
            <button
              type="button"
              className="btn btn-outline-primary"
              style={{
                padding: "5px 18px",
                fontSize: "14px",
                borderRadius: "20px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
