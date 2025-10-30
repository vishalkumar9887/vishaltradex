// src/components/TopBar.js
import React from "react";
import styles from "./TopBar.module.css"; import Menu from "./Menu";
// Import CSS Module

const TopBar = ({ indices }) => {
  return (
    <header className={styles.topbarContainer}>
      {/* 🔹 Stock Indices Section */}
      <div className={styles.indicesContainer}>
        {indices.map((index) => {
          const isPositive = index.change >= 0;
          const changeClass = isPositive ? styles.positive : styles.negative;

          return (
            <div key={index.name} className={styles.indexBox}>
              <p className={styles.indexName}>{index.name}</p>
              <p className={styles.indexPoints}>
                {index.points.toLocaleString("en-IN")}
              </p>
              { <p className={`${styles.percent} ${changeClass}`}>
                {isPositive ? "+" : ""}
                {index.change.toFixed(2)}%
              </p> }
            </div>
          );
        })}
      </div>

      {/* 🔹 Menu Section */}
      <Menu />
    </header>
  );
};

// ✅ Default Props
TopBar.defaultProps = {
  indices: [
    { name: "NIFTY 50", points: 19734.15, change: 1.02 },
    { name: "SENSEX", points: 65829.34, change: -0.55 },
  ],
};

export default TopBar;
