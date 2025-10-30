import React, { useState } from "react";
import { 
  FaUserPlus, 
  FaChartLine, 
  FaMoneyBillWave, 
  FaCog, 
  FaMobileAlt, 
  FaFileContract,
  FaPlus,
  FaChevronRight,
  FaMinus
} from "react-icons/fa";

function CreateTicket() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const ticketCategories = [
    {
      id: "account",
      title: "Account Opening",
      icon: <FaUserPlus />,
      color: "primary",
      items: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account Opening",
        "NRI Account Opening",
        "Charges at Zerodha",
        "Zerodha IDFC FIRST Bank 3-in-1 Account",
        "Getting Started"
      ]
    },
    {
      id: "trading",
      title: "Trading & Markets",
      icon: <FaChartLine />,
      color: "success",
      items: [
        "Equity Trading",
        "Futures and Options (F&O)",
        "Commodity Trading",
        "Currency Trading",
        "Margin Requirements",
        "Corporate Actions",
        "Market Timings"
      ]
    },
    {
      id: "funds",
      title: "Funds",
      icon: <FaMoneyBillWave />,
      color: "info",
      items: [
        "Add Funds",
        "Withdraw Funds",
        "Fund Statement",
        "IMPS/RTGS/NEFT",
        "Payment Gateway Issues",
        "Bank Account Modification",
        "Auto Fund Transfer"
      ]
    },
    {
      id: "segments",
      title: "Segments",
      icon: <FaCog />,
      color: "warning",
      items: [
        "Equity Segment",
        "Commodity Segment",
        "Currency Segment",
        "Activate Segment",
        "Segment Charges",
        "Segment Conversion"
      ]
    },
    {
      id: "kite",
      title: "Kite",
      icon: <FaMobileAlt />,
      color: "danger",
      items: [
        "Kite Web",
        "Kite Mobile App",
        "Order Types",
        "Charting",
        "Kite Connect API",
        "Marketwatch",
        "GTT Orders"
      ]
    },
    {
      id: "console",
      title: "Console",
      icon: <FaFileContract />,
      color: "secondary",
      items: [
        "Portfolio",
        "Tax P&L",
        "Reports",
        "Holdings",
        "Positions",
        "Statement of Accounts",
        "Referral Program"
      ]
    }
  ];

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="fs-2 fw-bold mb-3">To create a ticket, select a relevant topic</h1>
          <p className="text-muted">Browse through our help categories or search for your specific issue</p>
        </div>
      </div>

      <div className="row g-4">
        {ticketCategories.map((category) => (
          <div key={category.id} className="col-lg-4 col-md-6">
            <div 
              className={`card h-100 border-0 shadow-sm hover-card transition-all`}
              style={{ cursor: "pointer" }}
              onClick={() => toggleCategory(category.id)}
            >
              <div className={`card-header bg-${category.color} text-white d-flex justify-content-between align-items-center`}>
                <h5 className="mb-0 d-flex align-items-center">
                  <span className="me-2">{category.icon}</span>
                  {category.title}
                </h5>
                {expandedCategory === category.id ? <FaMinus /> : <FaPlus />}
              </div>
              <div className={`card-body ${expandedCategory === category.id ? '' : 'collapsed'}`}>
                <ul className="list-unstyled">
                  {category.items.map((item, index) => (
                    <li key={index} className="mb-2">
                      <a 
                        href="#" 
                        className="d-flex justify-content-between align-items-center text-decoration-none text-dark hover-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>{item}</span>
                        <FaChevronRight className="text-muted small" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-5">
        <div className="col-12 text-center">
          <div className="bg-light p-4 rounded-3">
            <h4 className="mb-3">Can't find what you're looking for?</h4>
            <p className="text-muted mb-4">Our support team is here to help you with any questions or issues.</p>
            <button className="btn btn-primary btn-lg px-4">
              Contact Support
            </button>
            <div className="m">
  {/* 🔹 Instagram */}
  <a
    href="https://www.instagram.com/mr.vishal6394"
    target="_blank"
    rel="noopener noreferrer"
    style={{ marginRight: "15px", fontSize: "24px", color: "#E1306C" }}
  >
    <i className="fa fa-instagram" aria-hidden="true"></i>
  </a>

  {/* 🔹 LinkedIn */}
  <a
    href="https://www.linkedin.com/in/vishal-offc/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ marginRight: "15px", fontSize: "24px", color: "#0A66C2" }}
  >
    <i className="fa fa-linkedin" aria-hidden="true"></i>
  </a>

  {/* 🔹 GitHub */}
  <a
    href="https://github.com/vishalkumar9887"  // 👉 apna GitHub username yha daalna
    target="_blank"
    rel="noopener noreferrer"
    style={{ fontSize: "24px", color: "#333" }}
  >
    <i className="fa fa-github" aria-hidden="true"></i>
  </a>
</div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        .hover-link {
          transition: color 0.2s ease;
        }
        .hover-link:hover {
          color: var(--bs-primary) !important;
        }
        .card-body.collapsed {
          max-height: 0;
          overflow: hidden;
          padding: 0;
        }
        .card-body {
          max-height: 500px;
          overflow-y: auto;
          transition: max-height 0.3s ease, padding 0.3s ease;
        }
      `}</style>
    </div>
  );
}

export default CreateTicket;