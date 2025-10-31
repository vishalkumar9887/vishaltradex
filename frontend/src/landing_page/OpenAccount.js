import React from "react";
import { useNavigate } from "react-router-dom"; // 👈 navigation ke liye import

function OpenAccount() {
  const navigate = useNavigate(); // 👈 hook initialize

  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center justify-content-center">
        <div className="col-md-8 col-12">
          <h2
            className="mb-3"
            style={{ textAlign: "center", marginTop: "80px" }}
          >
            Ready to open your account?
          </h2>
          <p className="mb-4">Join millions of investors on our platform.</p>

          <button
            type="button"
            className="btn btn-lg rounded-pill"
            style={{
              backgroundColor: "#0c71f6ff",
              color: "white",
              width: "200px",
            }}
            onClick={() => navigate("/signup")} // 👈 navigate to signup page
          >
            Open an Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
