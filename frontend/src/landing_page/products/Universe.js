import React from "react";
import { useNavigate } from "react-router-dom";

function Universe() {
  const partners = [
    {
      name: "Smallcase",
      img: "media/images/smallcaseLogo.png",
      desc: "Build long-term, diversified portfolios with smallcases.",
    },
    {
      name: "Sensibull",
      img: "media/images/sensibullLogo.svg",
      desc: "Options trading platform for traders and investors.",
    },
    {
      name: "Zerodha",
      img: "media/images/logo.svg",
      desc: "Tools for market analysis and stock screening.",
    },
    {
      name: "Ditto",
      img: "media/images/dittoLogo.png",
      desc: "Simplify insurance decisions with unbiased advice.",
    },
    {
      name: "Streak",
      img: "media/images/streakLogo.png",
      desc: "Create, backtest, and deploy trading strategies easily.",
    },
    {
      name: "GoldenPi",
      img: "media/images/goldenpiLogo.png",
      desc: "Invest in high-yield bonds and fixed-income securities.",
    },
  ];

  return (
    <div className="container text-center mt-5 mb-5">
      <h1 className="fw-bold">VishTradeX Universe</h1>
      <p className="text-muted fs-5">
        Apni trading aur investment experience ko next level par le jao — hamare
        partner platforms ke saath.
      </p>

      {/* ✅ Partner Logos Grid */}
      <div className="row mt-5 gy-4">
        {partners.map((p, index) => (
          <div key={index} className="col-6 col-md-4">
            <div className="p-4 border rounded-4 shadow-sm bg-white hover-shadow h-100">
              <img
                src={p.img}
                alt={p.name}
                className="img-fluid mb-3"
                style={{ maxHeight: "60px" }}
              />
              <h5 className="fw-semibold mb-2">{p.name}</h5>
              <p className="text-muted small mb-0">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="" style={{marginTop:"50px"}}
><a
          href="/signup"
          style={{
            backgroundColor: "#003366",
            color: "white",
            padding: "14px 40px",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "600",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#004b99")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#003366")}
        >
          Get Started
        </a>
        </div>
     
    </div>
  );
}

export default Universe;
