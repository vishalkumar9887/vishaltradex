import React, { useState, useEffect, useRef } from "react";
// Import useLocation to read the current URL
import { Link, useLocation } from "react-router-dom";

// A custom hook to detect clicks outside an element
const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Get the current location object
  const location = useLocation();

  // Create a ref for the profile dropdown
  const profileRef = useRef(null);
  // Use the custom hook to close the dropdown on outside click
  useOutsideClick(profileRef, () => {
    setIsProfileDropdownOpen(false);
  });

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // Close dropdown on link click
  const handleDropdownLinkClick = () => {
    setIsProfileDropdownOpen(false);
  };

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Orders", path: "/orders" },
    { name: "Holdings", path: "/holdings" },
    { name: "Positions", path: "/positions" },
    { name: "Funds", path: "/funds" },
  ];

  return (
    <>
      <style>{`
        .menu-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #f7f7f7ff;
          border-bottom: 1px solid #e6e6e6;
          padding: 12px 20px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
          font-family: "Inter", sans-serif;
          /* Add z-index to stay on top */
          position: relative;
          z-index: 100;
          overflow-x: visible; /* Allow horizontal scrolling if needed */
          white-space: nowrap; /* Prevent items from wrapping */
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0; /* Prevent logo from shrinking */
        }

        .logo img {
          width: 60px;
          height: 30px;
        }

        .brand-name {
          font-size: 20px;
          font-weight: 600;
          color: #1c3faa;
        }

        /* Container for menu links and profile */
        .menu-right {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-shrink: 0; /* Prevent menu from shrinking */
        }

        .menu-links {
          display: flex;
          list-style: none;
          gap: 15px;
          margin: 0;
          padding: 0;
        }

        .menu-link {
          color: #000000ff;
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          transition: color 0.2s ease;
          padding-bottom: 3px;
          border-bottom: 2px solid transparent;
          white-space: nowrap; /* Prevent text from wrapping */
        }

        .menu-link:hover {
          color: #1c3faa;
        }

        /* This is the magic! */
        .menu-link.active {
          color: #1c3faa;
          border-bottom: 2px solid #1c3faa;
        }

        .divider {
          height: 25px;
          border: none;
          border-left: 1px solid #dcdcdc;
          margin: 0 10px;
        }

        .profile {
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          user-select: none;
          flex-shrink: 0; /* Prevent profile from shrinking */
        }

        .avatar {
          background-color: #1c3faa;
          color: white;
          font-weight: 600;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .username {
          font-size: 14px;
          font-weight: 500;
          color:  #000000ff;
          margin: 0; /* Remove default p margin */
          white-space: nowrap; /* Prevent text from wrapping */
        }

        .arrow {
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid #555;
          transition: transform 0.2s ease;
        }

        .arrow.up {
          transform: rotate(180deg);
        }

        .dropdown {
          position: absolute;
          top: 45px;
          right: 0;
          background-color: white;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
          border-radius: 8px;
          overflow: hidden;
          width: 150px;
          animation: fadeIn 0.2s ease-in-out;
          z-index: 10;
        }

        .dropdown-item {
          display: block;
          padding: 10px 14px;
          text-decoration: none;
          color: #333;
          font-size: 14px;
          transition: background-color 0.2s;
        }

        .dropdown-item:hover {
          background-color: #f5f7ff;
          color: #1c3faa;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Adjustments for smaller screens */
        @media (max-width: 768px) {
          .menu-container {
            padding: 10px 15px;
          }
          
          .brand-name {
            font-size: 16px;
          }
          
          .menu-links {
            gap: 10px;
          }
          
          .menu-link {
            font-size: 13px;
          }
          
          .divider {
            margin: 0 5px;
          }
          
          .username {
            display: none; /* Hide username on very small screens */
          }
        }
        
        @media (max-width: 480px) {
          .logo img {
            width: 35px;
            height: 35px;
          }
          
          .menu-link {
            font-size: 12px;
          }
          
          .avatar {
            width: 28px;
            height: 28px;
            font-size: 12px;
          }
        }
      `}</style>

      <div className="menu-container">
        {/* 🔹 Logo */}
        <div className="logo">
          <img src="image copy 2.png" alt="App Logo" />
        </div>

        {/* 🔹 Menu Links & Profile (Wrapper) */}
        <div className="menu-right">
          <ul className="menu-links">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  // Check if current URL path matches the item's path
                  className={`menu-link ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <hr className="divider" />

          {/* 🔹 Profile Section */}
          <div className="profile" ref={profileRef}>
            <div className="avatar">US</div>
            <p className="username">USERID</p>
            <span
              className={`arrow ${isProfileDropdownOpen ? "up" : ""}`}
              onClick={handleProfileClick}
            ></span>

            {isProfileDropdownOpen && (
              <div className="dropdown">
                <Link
                  to="/profile"
                  className="dropdown-item"
                  onClick={handleDropdownLinkClick}
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="dropdown-item"
                  onClick={handleDropdownLinkClick}
                >
                  Settings
                </Link>
                <Link
                 style={{
                    border: "none",
                    background: "none",
                    width: "100%",
                    textAlign: "left",
                    color: "red",
                    cursor: "pointer",}}
                  to="#"
                  className="dropdown-item"
                  onClick={() => {
                    window.location.href = "http://localhost:3000/signup";
                  }}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
