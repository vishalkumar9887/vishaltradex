// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import axios from "axios";

// import GeneralContext from "./GeneralContext";

// import "./BuyActionWindow.css";

// const BuyActionWindow = ({ uid }) => {
//   const [stockQuantity, setStockQuantity] = useState(1);
//   const [stockPrice, setStockPrice] = useState(0.0);

//   const handleBuyClick = () => {
//     axios.post("http://localhost:3002/newOrder", {
//       name: uid,
//       qty: stockQuantity,
//       price: stockPrice,
//       mode: "BUY",
//     });

//     GeneralContext.closeBuyWindow();
//   };

//   const handleCancelClick = () => {
//     GeneralContext.closeBuyWindow();
//   };

//   return (
//     <div className="container" id="buy-window" draggable="true">
//       <div className="regular-order">
//         <div className="inputs">
//           <fieldset>
//             <legend>Qty.</legend>
//             <input
//               type="number"
//               name="qty"
//               id="qty"
//               onChange={(e) => setStockQuantity(e.target.value)}
//               value={stockQuantity}
//             />
//           </fieldset>
//           <fieldset>
//             <legend>Price</legend>
//             <input
//               type="number"
//               name="price"
//               id="price"
//               step="0.05"
//               onChange={(e) => setStockPrice(e.target.value)}
//               value={stockPrice}
//             />
//           </fieldset>
//         </div>
//       </div>

//       <div className="buttons">
//         <span>Margin required ₹140.65</span>
//         <div>
//           <Link className="btn btn-blue" onClick={handleBuyClick}>
//             Buy
//           </Link>
//           <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
//             Cancel
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyActionWindow;
import React, { useState, useContext } from "react"; // ✅ added useContext
import axios from "axios";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext); // ✅ correct usage

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [isOrderPlacing, setIsOrderPlacing] = useState(false);

  // Calculate margin dynamically (example: 10%)
  const marginRequired = (stockQuantity * stockPrice * 0.1).toFixed(2);

  const handleBuyClick = async () => {
    if (stockPrice <= 0 || stockQuantity <= 0) {
      alert("Please enter valid quantity and price.");
      return;
    }

    setIsOrderPlacing(true);
    try {
      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });

      // ✅ use context function (not GeneralContext)
      closeBuyWindow();
    } catch (error) {
      console.error("Failed to place order:", error);
      alert("Failed to place order. Please try again.");
    } finally {
      setIsOrderPlacing(false);
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow(); // ✅ correct
  };

  return (
    <div className="modal-overlay">
      <div className="buy-window-container" draggable="true">
        {/* Header */}
        <div className="modal-header">
          <h2>Buy {uid}</h2>
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
              className="btn btn-blue"
              onClick={handleBuyClick}
              disabled={isOrderPlacing || stockPrice <= 0}
            >
              {isOrderPlacing ? "Placing Order..." : "Buy"}
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

export default BuyActionWindow;
