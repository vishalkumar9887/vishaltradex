import React from "react";

function Footer() {
  return (
    <footer
      className="container-fluid mt-5 pt-5 pb-3"
      style={{
        borderTop: "1px solid #d3d3d3",
        backgroundColor: "#f9f9f9",
        color: "#555",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div className="container">
        <div className="row justify-content-between">
          {/* LOGO + SOCIAL ICONS */}
          <div className="col-md-3 mb-4">
            <h2
              style={{
                color: "#022f5c",
                fontWeight: "700",
                fontSize: "28px",
              }}
            >
              VishTradeX
            </h2>
            <p style={{ fontSize: "14px", color: "#777", lineHeight: "1.6" }}>
              © 2010 - 2025, VishTradeX Broking Ltd. <br /> All rights reserved.
            </p>

            <div className="d-flex gap-3 mt-3">
              <a href="#" style={{ color: "#777" }}>
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" style={{ color: "#777" }}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" style={{ color: "#777" }}>
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" style={{ color: "#777" }}>
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" style={{ color: "#777" }}>
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#" style={{ color: "#777" }}>
                <i className="bi bi-telegram"></i>
              </a>
            </div>
          </div>

          {/* ACCOUNT */}
          <div className="col-md-2 mb-4">
            <h5 style={{ fontWeight: "600", color: "#022f5c" }}>Account</h5>
            <ul className="list-unstyled mt-3">
              <li><a href="#" className="text-muted text-decoration-none">Open demat account</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Minor demat account</a></li>
              <li><a href="#" className="text-muted text-decoration-none">NRI demat account</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Commodity</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Fund transfer</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Referral program</a></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="col-md-2 mb-4">
            <h5 style={{ fontWeight: "600", color: "#022f5c" }}>Support</h5>
            <ul className="list-unstyled mt-3">
              <li><a href="#" className="text-muted text-decoration-none">Contact us</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Support portal</a></li>
              <li><a href="#" className="text-muted text-decoration-none">File a complaint</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Bulletin</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Downloads</a></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="col-md-2 mb-4">
            <h5 style={{ fontWeight: "600", color: "#022f5c" }}>Company</h5>
            <ul className="list-unstyled mt-3">
              <li><a href="#" className="text-muted text-decoration-none">About</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Philosophy</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Press & media</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Tech</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Open source</a></li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-2 mb-4">
            <h5 style={{ fontWeight: "600", color: "#022f5c" }}>Quick Links</h5>
            <ul className="list-unstyled mt-3">
              <li><a href="#" className="text-muted text-decoration-none">Upcoming IPOs</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Brokerage charges</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Market holidays</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Calculators</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Markets</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Sectors</a></li>
            </ul>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div
          className="text-center mt-4 pt-3 border-top"
          style={{ fontSize: "13px", color: "#777", lineHeight: "1.6" }}
        >
          <p>
            VishTradeX Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: INZ000031633. Depository services through VishTradeX Broking Ltd. –
            SEBI Registration no.: IN-DP-431-2019.
          </p>
          <p>
            For complaints or queries, please write to{" "}
            <a
              href="mailto:complaints@vishtradex.com"
              style={{ color: "#022f5c", textDecoration: "none", fontWeight: "500" }}
            >
              complaints@vishtradex.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
