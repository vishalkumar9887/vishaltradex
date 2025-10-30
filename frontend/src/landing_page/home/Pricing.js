import React from "react";

function PricingSection() {
  return (
    <div className="container  " style={{ marginTop: "160px" }}>
      <div className="container mt-5 my-5">
        <div className="row align-items-center">
          {/* ===== LEFT SECTION ===== */}
          <div className="col-md-5 col-12 text-md-start text-center mb-4 mb-md-0">
            <h1 className="pricing-title">Pricing made simple</h1>
            <p className="pricing-subtitle">
              Choose a plan that fits your needs.
            </p>
            <a href="#" className="pricing-link">
              See Plans <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          {/* ===== RIGHT SECTION ===== */}
          <div className="col-md-7 col-12 border rounded-1 p-3 pricing-box">
            <div className="row text-center justify-content-center">
              <div className="col-md-4 col-10 mb-4">
                <h1 className="price-value mt-3">
                  ₹<span>0</span>
                </h1>
                <p className="price-text ">Free account opening</p>
              </div>

              <div className="col-md-4 col-10 mb-4 border-start border-end">
                <h1 className="price-value mt-3">
                  ₹<span>0</span>
                </h1>
                <p className="price-text">
                  Free equity delivery <br /> and direct mutual funds
                </p>
              </div>

              <div className="col-md-4 col-10 mb-4">
                <h1 className="price-value mt-3">
                  ₹<span>20</span>
                </h1>
                <p className="price-text">Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
