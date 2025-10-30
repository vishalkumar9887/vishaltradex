import React from 'react';
function Team(params) {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* 🔹 Our Team Section */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 10%",
          backgroundColor: "#ffffff",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "600",
            color: "#003366",
            marginBottom: "50px",
          }}
        >
          Meet Our Team
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px",
            justifyItems: "center",
          }}
        >
          {[
            { name: "Shuvra Chatarjee", role: "COB, AI & ML Engg.", img: "media/images/shuv.jpeg" },
            { name: "Vivek Kumar", role: "Founder CEO, Game Developer", img: "media/images/viv.png" },
            { name: "Yatin", role: "Manager, Full Stack Developer", img: "media/images/yati.jpeg" },
            { name: "Prince Shukla", role: "Founder Manager, Cybersecurity Expert", img: "media/images/prince.jpeg" },
            { name: "Vasu", role: "CFO, AI Specialist", img: "media/images/vasu.jpeg" },
            { name: "Rishi", role: "CMO, Java Developer", img: "media/images/rishi.jpeg" },
          ].map((member, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <img
                src={member.img}
                alt={member.name}
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              />
              <h3
                style={{
                  fontSize: "18px",
                  color: "#003366",
                  marginTop: "15px",
                  marginBottom: "5px",
                }}
              >
                {member.name}
              </h3>
              <p style={{ fontSize: "14px", color: "#777" }}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 VishTradeX in Numbers */}
      <section
        style={{
          backgroundColor: "#f0f4f8",
          padding: "70px 10%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "600",
            color: "#003366",
            marginBottom: "40px",
          }}
        >
          VishTradeX in Numbers
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "50px",
          }}
        >
          {[
            { number: "1M+", text: "Active Users" },
            { number: "₹10B+", text: "Monthly Trades" },
            { number: "99.9%", text: "System Uptime" },
          ].map((item, index) => (
            <div key={index}>
              <h3
                style={{
                  fontSize: "36px",
                  color: "#003366",
                  marginBottom: "10px",
                }}
              >
                {item.number}
              </h3>
              <p style={{ fontSize: "16px", color: "#666" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 CTA Section */}
      <section
        style={{
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "600",
            color: "#003366",
            marginBottom: "20px",
          }}
        >
          Ready to start your investment journey?
        </h2>
        <p style={{ color: "#555", fontSize: "18px", marginBottom: "30px" }}>
          Open your VishTradeX account today — fast, simple, and paperless.
        </p>
        <a
          href="/index.html"
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
      </section>

     
    </div>
    );
}

export default Team;
