import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
  // Fallback data (agar backend down ho)
import styles from "./Holding.css";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("/allHoldinghttp://localhost:3002s")
  //     .then((res) => {
  //       setAllHoldings(res.data);
  //     })
  //     .catch((err) => {
  //       console.error("⚠️ Error fetching holdings:", err.message);
  //       // fallback data (jab backend kaam na kare)
  //       setAllHoldings(allHoldings);
  //     });
  // }, []);
  useEffect(() => {
  axios
    .get("https://vishaltradex-backend.onrender.com/allHoldings")
    .then((res) => {
      setAllHoldings(res.data);
    })
    .catch((err) => {
      console.error("⚠️ Error fetching holdings:", err.message);
      // fallback data (jab backend kaam na kare)
      setAllHoldings(allHoldings);
    });
}, []);


  // Labels aur data graph ke liye
  const labels = allHoldings.map((stock) => stock.name);
  const prices = allHoldings.map((stock) => stock.price);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock)=>stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const profit = curValue - stock.avg * stock.qty;
              const isProfit = profit >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>{profit.toFixed(2)}</td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Totals Section */}
      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      {/* Graph */}
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
