import React, { useState } from "react";

function Hero() {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <header className="navbar bg-white shadow-sm border-bottom"style={{marginTop:"70px"}}>
        <div className="container px-4 py-3">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="d-flex align-items-center">
              <div className="logo-circle bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: "40px", height: "40px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-headset" viewBox="0 0 16 16">
                  <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
                </svg>
              </div>
              <h1 className="fs-4 fw-bold mb-0">Support Portal</h1>
            </div>
            <a href="#" className="btn btn-primary rounded-pill px-4 py-2 d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-ticket-perforated me-2" viewBox="0 0 16 16">
                <path d="M4 4.85v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Z"/>
                <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 0 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3 .5.5 0 0 0 .5-.5V4.5A1.5 1.5 0 0 0 14.5 3h-13ZM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9V4.5Z"/>
              </svg>
              Track Tickets
            </a>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-5">
        <div className="container px-4 py-5">
          <div className="row">
            <div className="col-md-7">
              <div className="mb-4">
                <h2 className="fs-1 fw-bold mb-3 text-dark">
                  How can we help you today?
                </h2>
                <p className="text-muted fs-5">
                  Search for an answer or browse help topics to create a ticket
                </p>
              </div>

              <div className={`position-relative ${isFocused ? 'search-focused' : ''}`}>
                <label htmlFor="supportSearch" className="visually-hidden">
                  Search for an answer
                </label>
                <div className="input-group input-group-lg mb-3 shadow-sm rounded-pill overflow-hidden">
                  <span className="input-group-text bg-white border-0 ps-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search text-muted" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                  </span>
                  <input
                    type="search"
                    id="supportSearch"
                    className="form-control border-0 ps-2"
                    placeholder="Eg. how do I activate F&O"
                    value={searchValue}
                    onChange={handleSearchChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                  />
                  {searchValue && (
                    <button 
                      className="btn border-0 bg-white me-2" 
                      onClick={() => setSearchValue("")}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle text-muted" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-muted mb-3">Popular searches:</p>
                <div className="d-flex flex-wrap">
                  <a href="#" className="btn btn-sm bg-white text-primary border border-primary rounded-pill me-2 mb-2 px-3 py-2 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-box-arrow-in-right me-1" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 1 5 12.5v-9A1.5 1.5 0 0 1 6.5 2h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 0-.5.5v1z"/>
                      <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8.5 6.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                    Track account opening
                  </a>
                  <a href="#" className="btn btn-sm bg-white text-primary border border-primary rounded-pill me-2 mb-2 px-3 py-2 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-toggle-on me-1" viewBox="0 0 16 16">
                      <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                    </svg>
                    Track segment activation
                  </a>
                  <a href="#" className="btn btn-sm bg-white text-primary border border-primary rounded-pill me-2 mb-2 px-3 py-2 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-graph-up me-1" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
                    </svg>
                    Intraday margins
                  </a>
                  <a href="#" className="btn btn-sm bg-white text-primary border border-primary rounded-pill me-2 mb-2 px-3 py-2 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-book me-1" viewBox="0 0 16 16">
                      <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                    </svg>
                    Kite user manual
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-5 ps-md-5 mt-5 mt-md-0">
              <div className="bg-white rounded-3 shadow-sm p-4 h-100">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-2" style={{width: "32px", height: "32px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  </div>
                  <h2 className="fs-4 fw-bold mb-0">Featured</h2>
                </div>
                
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a href="#" className="d-flex align-items-start text-decoration-none p-2 rounded-2 featured-link">
                      <div className="bg-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: "40px", height: "40px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-calendar-event text-primary" viewBox="0 0 16 16">
                          <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="fs-6 fw-semibold mb-1">Current Takeovers and Delisting</h3>
                        <p className="text-muted small mb-0">January 2024 update</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex align-items-start text-decoration-none p-2 rounded-2 featured-link">
                      <div className="bg-light rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: "40px", height: "40px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-graph-up-arrow text-primary" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
                          <path fillRule="evenodd" d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.354-1.646a.5.5 0 0 0-.708-.708L11 14.793l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2Z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="fs-6 fw-semibold mb-1">Latest Intraday leverages</h3>
                        <p className="text-muted small mb-0">MIS & CO updates</p>
                      </div>
                    </a>
                  </li>
                </ul>
                
                <div className="mt-4 pt-3 border-top">
                  <a href="#" className="btn btn-outline-primary btn-sm rounded-pill px-3">
                    View all articles
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-1" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .featured-link:hover {
          background-color: rgba(0, 0, 0, 0.03);
          transition: background-color 0.2s ease;
        }
        .featured-link:hover h3 {
          color: #0d6efd;
        }
        .search-focused .input-group {
          box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.25) !important;
        }
      `}</style>
    </>
  );
}

export default Hero;