import React from "react";

function Hero() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", marginTop: "100px" }}>
      {/* 🔹 Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
          backgroundColor: "#f8fafc",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#003366",
            marginBottom: "20px",
          }}
        >
          About VishTradeX
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#555",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          We’re building India’s most trusted and seamless trading platform —
          empowering every individual to invest and grow their wealth with
          confidence, simplicity, and transparency.
        </p>
      </section>

      {/* 🔹 Mission Section */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: "80px 10%",
        }}
      >
        <div style={{ flex: "1 1 400px", padding: "20px" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "600",
              color: "#003366",
              marginBottom: "20px",
            }}
          >
            Our Mission
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#444",
              lineHeight: "1.8",
            }}
          >
            At VishTradeX, our goal is to simplify investing and make it
            accessible to everyone. We’re passionate about creating a platform
            that brings modern technology, low costs, and education together to
            help users take charge of their financial future.
          </p>
        </div>

        <div style={{ flex: "1 1 400px", textAlign: "center" }}>
            
          <img
            src="MEDIA/images/vishal.jpeg"
            alt="Our Mission"
            style={{
              width: "80%",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              
            }}
          />
  <h2 style={{ fontSize: "20px", color: "#003366", marginTop: "15px" }}>
    Vishal Kumar
  </h2>
  <p style={{ color: "#171717ff", fontSize: "14px", marginBottom: "5px" }}>
    Founder & CEO
  </p>
  <p style={{ color: "#0f0e0eff", fontSize: "13px" }}>
    Software Developer | Backend Engineer
  </p>
        </div>
      </section>
    </div>
  );
}

export default Hero;
