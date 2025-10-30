import React from "react";

function Stats() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* LEFT SIDE TEXT */}
        <div className="col-lg-6 col-md-12 text-start">
          <h2 className="fw-bold mb-5 ">Trust with confidence</h2>

          {/* 1️⃣ Customer-first always */}
          <div className="mb-4">
            <h5 className="fw-semibold">Customer-first always</h5>
            <p className="text-muted">
              That’s why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
              worth of equity investments.
            </p>
          </div>

          {/* 2️⃣ No spam or gimmicks */}
          <div className="mb-4">
            <h5 className="fw-semibold">No spam or gimmicks</h5>
            <p className="text-muted">
              No gimmicks, spam, “gamification”, or annoying <br />push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>

          {/* 3️⃣ The Zerodha universe */}
          <div className="mb-4">
            <h5 className="fw-semibold">The Zerodha universe</h5>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in <b>30+ fintech</b> startups offer you tailored services specific to your needs.
            </p>
          </div>

          {/* 4️⃣ Do better with money */}
          <div>
            <h5 className="fw-semibold">Do better with money</h5>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don’t <br />just facilitate
              transactions, but actively help you do better with your money.
            </p>
          </div>

          {/* Explore Links */}
          <div className="mt-4">
            <a href="#" className="text-primary text-decoration-none me-3 fw-semibold">
              Explore our products  <i className="fa fa-arrow-right" aria-hidden="true"></i>

            </a>
            <a href="#" className="text-primary text-decoration-none fw-semibold">
              Try Kite  <i className="fa fa-arrow-right" aria-hidden="true"></i>

            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="col-lg-6 col-md-12 text-center mt-5 mt-lg-0">
          <img
            src="media/images/ecosystem.png"
            alt="Zerodha products ecosystem"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Stats;
