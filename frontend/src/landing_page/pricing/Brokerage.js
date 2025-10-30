import React, { useState } from "react";

function Pricing() {
  const [activeTab, setActiveTab] = useState("equity");

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center fw-bold mb-4">Brokerage Charges</h2>

      {/* Tabs */}
      <div className="container text-center mt-5">
      <ul className="nav nav-tabs justify-content-center custom-tabs mb-4 border-0">
        {["Equity", "Currency", "Commodity"].map((tab) => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link ${
                activeTab === tab.toLowerCase() ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab.toLowerCase())}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {/* ✅ Tab Content Example */}
      <div className="tab-content mt-4">
        {activeTab === "equity" && (
          <p className="text-muted fs-5">
           <div className="row-2"></div>
          </p>
        )}
        {activeTab === "currency" && (
          <p className="text-muted fs-5">
            
          </p>
        )}
        {activeTab === "commodity" && (
          <p className="text-muted fs-5">
            
          </p>
        )}
      </div>
    </div>

      {/* Table Section */}
      <div className="table-responsive">
        {activeTab === "equity" && (
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light">
              <tr>
                <th></th>
                <th>Equity Delivery</th>
                <th>Equity Intraday</th>
                <th>F&O - Futures</th>
                <th>F&O - Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="mt-1">Brokerage</td>
                <td>Zero Brokerage</td>
                <td>0.03% or ₹20/order (whichever is lower)</td>
                <td>0.03% or ₹20/order (whichever is lower)</td>
                <td>Flat ₹20 per executed order</td>
              </tr>
              <tr>
                <td>STT/CTT</td>
                <td>0.1% on buy & sell</td>
                <td>0.025% on sell side</td>
                <td>0.02% on sell side</td>
                <td>
                  0.125% on exercised options <br /> 0.1% on sell side
                </td>
              </tr>
              <tr>
                <td>Transaction charges</td>
                <td>NSE: 0.00297% / BSE: 0.00375%</td>
                <td>NSE: 0.00297% / BSE: 0.00375%</td>
                <td>NSE: 0.00173%</td>
                <td>NSE: 0.03503% (on premium)</td>
              </tr>
              <tr>
                <td>GST</td>
                <td colSpan="4">18% on (brokerage + SEBI + transaction charges)</td>
              </tr>
              <tr>
                <td>SEBI charges</td>
                <td colSpan="4">₹10 / crore</td>
              </tr>
              <tr>
                <td>Stamp charges</td>
                <td>0.015% or ₹1500 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
                <td>0.002% or ₹200 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        )}

        {activeTab === "currency" && (
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light">
              <tr>
                <th></th>
                <th>Currency Futures</th>
                <th>Currency Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="mt-1">Brokerage</td>
                <td>0.03% or ₹20/order (whichever is lower)</td>
                <td>₹20 per executed order</td>
              </tr>
              <tr>
                <td>STT/CTT</td>
                <td>No STT</td>
                <td>No STT</td>
              </tr>
              <tr>
                <td>Transaction charges</td>
                <td>NSE: 0.00035% / BSE: 0.00045%</td>
                <td>NSE: 0.0311% / BSE: 0.001%</td>
              </tr>
              <tr>
                <td>GST</td>
                <td colSpan="2">18% on (brokerage + SEBI + transaction charges)</td>
              </tr>
              <tr>
                <td>SEBI charges</td>
                <td colSpan="2">₹10 / crore</td>
              </tr>
              <tr>
                <td>Stamp charges</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        )}

        {activeTab === "commodity" && (
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light">
              <tr>
                <th></th>
                <th>Commodity Futures</th>
                <th>Commodity Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>0.03% or ₹20/order (whichever is lower)</td>
                <td>₹20 per executed order</td>
              </tr>
              <tr>
                <td>STT/CTT</td>
                <td>0.01% on sell side (Non-Agri)</td>
                <td>0.05% on sell side</td>
              </tr>
              <tr>
                <td>Transaction charges</td>
                <td>MCX: 0.0021% / NSE: 0.0001%</td>
                <td>MCX: 0.0418% / NSE: 0.001%</td>
              </tr>
              <tr>
                <td>GST</td>
                <td colSpan="2">18% on (brokerage + SEBI + transaction charges)</td>
              </tr>
              <tr>
                <td>SEBI charges</td>
                <td>Agri: ₹1 / crore<br/>Non-Agri: ₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td>Stamp charges</td>
                <td>0.002% or ₹200 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      <p className="text-center " style={{marginBottom: "150px", marginTop: " 20px"}}>
        <a href="#" style={{ textDecoration: "none" }}>
          Calculate your costs upfront using our brokerage calculator
        </a>
      </p>
    </div>
  );
}

export default Pricing;
