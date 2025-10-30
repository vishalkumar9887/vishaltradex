import React from "react";
function Hero(params) {
  return (
    <div className="container " style={{ marginTop: "100px", textAlign: "center" }}>
      <div className="row">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="img-fluid mb-5 "
        />
        <h1 className="mt-5 text-bold" >Invest in Everything </h1>
        <p className="mt-2" >
          Online platform for all your investment needs.
        </p>

        <button type="button" className="btn btn-primary small btn-lg mb-5 mt-2 rounded-pill" style={{ width: "15%", margin: "0 auto" }}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Hero;
