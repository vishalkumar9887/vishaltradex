// src/components/Orders.js

import React from "react";
import { Link } from "react-router-dom";

import styles from "./Orders.css";  // Importing a package icon
 // We will create this CSS file next

const Orders = () => {
  return (
    <div className="orders-page">
      <div className="no-orders-card">
        
        <p>You haven't placed any orders today</p>
        <Link to="/" className="btn btn-primary">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;