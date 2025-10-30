// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "./Fund.css";

// const Funds = () => {
//   return (
//     <>
//       <div className="funds">
//         <p>Instant, zero-cost fund transfers with UPI </p>
//         <Link className="btn btn-green">Add funds</Link>
//         <Link className="btn btn-blue">Withdraw</Link>
//       </div>

//       <div className="row">
//         <div className="col">
//           <span>
//             <p>Equity</p>
//           </span>

//           <div className="table">
//             <div className="data">
//               <p>Available margin</p>
//               <p className="imp colored">4,043.10</p>
//             </div>
//             <div className="data">
//               <p>Used margin</p>
//               <p className="imp">3,757.30</p>
//             </div>
//             <div className="data">
//               <p>Available cash</p>
//               <p className="imp">4,043.10</p>
//             </div>
//             <hr />
//             <div className="data">
//               <p>Opening Balance</p>
//               <p>4,043.10</p>
//             </div>
//             <div className="data">
//               <p>Opening Balance</p>
//               <p>3736.40</p>
//             </div>
//             <div className="data">
//               <p>Payin</p>
//               <p>4064.00</p>
//             </div>
//             <div className="data">
//               <p>SPAN</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Delivery margin</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Exposure</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Options premium</p>
//               <p>0.00</p>
//             </div>
//             <hr />
//             <div className="data">
//               <p>Collateral (Liquid funds)</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Collateral (Equity)</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Total Collateral</p>
//               <p>0.00</p>
//             </div>
//           </div>
//         </div>

//         <div className="col">
//           <div className="commodity">
//             <p>You don't have a commodity account</p>
//             <Link className="btn btn-blue">Open Account</Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Funds;
import React from "react";
import { Link } from "react-router-dom";
// Assuming you save the CSS above as './Funds.css'
import "./Fund.css"; 

const Funds = () => {
  return (
    <div className="funds-page-wrapper">
      
      {/* --- 1. Top Action Bar --- */}
      <div className="funds-actions">
        <p>Instant, zero-cost fund transfers with UPI</p>
        <div>
          {/* Note: In a real app, 'Add funds' is usually the primary action */}
          <Link to="/add-funds" className="btn btn-green">
            Add funds
          </Link>
          <Link to="/withdraw" className="btn btn-blue">
            Withdraw
          </Link>
        </div>
      </div>

      {/* --- 2. Content Grid (Equity & Commodity) --- */}
      <div className="funds-row">
        
        {/* Equity Column */}
        <div className="funds-col">
          <div className="equity-card">
            <h4>Equity</h4>

            <div className="funds-table">
              
              {/* Top Margin Summary (Highlighted) */}
              <div className="data">
                <p>Available margin</p>
                <p className="imp colored">4,043.10</p>
              </div>
              <div className="data">
                <p>Used margin</p>
                <p className="imp">3,757.30</p>
              </div>
              <div className="data">
                <p>Available cash</p>
                <p className="imp">4,043.10</p>
              </div>
              
              <hr />
              
              {/* Detailed Breakdown */}
              <div className="data">
                <p>Opening Balance</p>
                <p>4,043.10</p>
              </div>
              <div className="data">
                <p>Closing Balance</p> {/* Changed from duplicate Opening Balance */}
                <p>3,736.40</p>
              </div>
              <div className="data">
                <p>Payin</p>
                <p>4,064.00</p>
              </div>
              
              <hr />
              
              {/* Margin Requirements */}
              <div className="data">
                <p>SPAN</p>
                <p>0.00</p>
              </div>
              <div className="data">
                <p>Delivery margin</p>
                <p>0.00</p>
              </div>
              <div className="data">
                <p>Exposure</p>
                <p>0.00</p>
              </div>
              <div className="data">
                <p>Options premium</p>
                <p>0.00</p>
              </div>
              
              <hr />
              
              {/* Collateral */}
              <div className="data">
                <p>Collateral (Liquid funds)</p>
                <p>0.00</p>
              </div>
              <div className="data">
                <p>Collateral (Equity)</p>
                <p>0.00</p>
              </div>
              <div className="data">
                <p>Total Collateral</p>
                <p className="imp">0.00</p>
              </div>
              
            </div>
          </div>
        </div>

        {/* Commodity Column */}
        <div className="funds-col">
          <div className="commodity-card">
            <p>You don't have a commodity account yet.</p>
            <Link to="/open-commodity" className="btn btn-blue">
              Open Account
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Funds;