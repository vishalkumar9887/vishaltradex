import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: "#fff",
        borderBottom: "1px solid #e0e0e0",
        padding: "10px 0",
      }}
    >
      <div
        style={{
          padding: "10px 5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* 🔹 Left: Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="MEDIA/images/image copy 2.png"
              alt="VishTradeX Logo"
              style={{ width: "70px", marginRight: "8px" }}
            />
            <span
              style={{
                fontWeight: "bold",
                color: "#003366", // Dark blue
                fontSize: "26px",
              }}
            >
              VishTradeX
            </span>
          </div>
        </div>

        {/* 🔹 Right: Menu */}
        <div
          style={{
            display: isOpen ? "block" : "flex",
            alignItems: "center",
            gap: "30px",
          }}
          className={`navbar-links ${isOpen ? "active" : ""}`}
        >
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              margin: 0,
              padding: 0,
              gap: "30px",
              alignItems: "center",
            }}
          >
            <li style={navItem}>
              <Link to="/signup" style={linkStyle}>
                Signup
              </Link>
            </li>
            <li style={navItem}>
              <Link to="/about" style={linkStyle}>
                About
              </Link>
            </li>
            <li style={navItem}>
              <Link to="/products" style={linkStyle}>
                Products
              </Link>
            </li>
            <li style={navItem}>
              <Link to="/pricing" style={linkStyle}>
                Pricing
              </Link>
            </li>
            <li style={navItem}>
              <Link to="/support" style={linkStyle}>
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* 🔹 Hamburger icon (mobile) */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          style={{
            fontSize: "22px",
            cursor: "pointer",
            color: "#000000ff",
            display: "none",
          }}
          className="hamburger"
        >
          <i className="fa fa-bars"></i>
        </div>
      </div>

      {/* 🔹 Mobile menu CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            .navbar-links ul {
              flex-direction: column !important;
              text-align: center;
              gap: 15px;
              padding: 15px 0;
              border-top: 1px solid #eee;
              background-color: white;
            }
            .hamburger {
              display: block !important;
            }
            .navbar-links {
              display: none !important;
            }
            .navbar-links.active {
              display: block !important;
            }
          }
        `}
      </style>
    </nav>
  );
}

const navItem = {
  cursor: "pointer",
  color: "#555",
  fontWeight: 500,
  transition: "color 0.3s ease",
};

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

export default Navbar;
