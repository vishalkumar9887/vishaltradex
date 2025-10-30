import React from "react";
function Education(params) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src="media/images/education.svg"
            alt="Zerodha products ecosystem"
            className="img-fluid"
            style={{ maxWidth: "80%" }}
          />
        </div>

        <div className="col-6">
          <div className="mb-4 " style={{ marginTop: "90px" }}>
            <h2>Free and open market education</h2>
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="">
              Explore Varsity{" "}
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
            <br />
            <br />
            <p>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="">
              Visit TradingQ&A{" "}
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
