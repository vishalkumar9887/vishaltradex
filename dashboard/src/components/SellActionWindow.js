import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";
// import "./SellActionWindow.css"; // alag CSS file bana lena

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [isOrderPlacing, setIsOrderPlacing] = useState(false);

  // Margin calculation (example: 10%)
  const marginRequired = (stockQuantity * stockPrice * 0.1).toFixed(2);

  const handleSellClick = async () => {
    if (stockPrice <= 0 || stockQuantity <= 0) {
      alert("Please enter valid quantity and price.");
      return;
    }

    setIsOrderPlacing(true);
    try {
      // await axios.post("/newOrder", {
      await axios.post("https://vishaltradex-backend.onrender.com/newOrder", {

        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      });

      // Close window on success
      GeneralContext.closeSellWindow();
    } catch (error) {
      console.error("Failed to place sell order:", error);
      alert("Failed to place sell order. Please try again.");
    } finally {
      setIsOrderPlacing(false);
    }
  };

  const handleCancelClick = () => {
    GeneralContext.closeSellWindow();
  };

  return (
    <div className="modal-overlay">
      <div className="sell-window-container" draggable="true">
        {/* Header */}
        <div className="modal-header">
          <h2>Sell {uid}</h2>
          <button className="close-btn" onClick={handleCancelClick}>
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          <div className="input-group">
            <fieldset>
              <legend>Qty.</legend>
              <input
                type="number"
                min="1"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(Number(e.target.value))}
              />
            </fieldset>
            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                step="0.05"
                value={stockPrice}
                onChange={(e) => setStockPrice(Number(e.target.value))}
              />
            </fieldset>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <div className="margin-info">
            <span>Margin required:</span>
            <span className="margin-amount">₹{marginRequired}</span>
          </div>
          <div className="action-buttons">
            <button
              className="btn btn-orange"
              onClick={handleSellClick}
              disabled={isOrderPlacing || stockPrice <= 0}
            >
              {isOrderPlacing ? "Placing Order..." : "Sell"}
            </button>
            <Link to="#" className="btn btn-grey" onClick={handleCancelClick}>
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
