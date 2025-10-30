import React from 'react';

function Award() {
  return (
    <div className="container">
      <div className="row text-center me-10 p-5 mt-8">
        {/* Left Side Image */}
        <div className="col-lg-6 col-sm-12 mb-4">
          <img
            src="media/images/largestBroker.svg"
            alt="Award 1"
            className="img-fluid mb-2"
          />
          
        </div>

        {/* Right Side Content */}
        <div className="col-lg-6 col-sm-12 mb-4 p-5 text-start" >
          <h1>Largest stock broker in India</h1>
          <p className='mb-5'>2+ million clients contribute to over 15% of India’s daily trading volume</p>

          <div className="container " style={{ marginLeft: "25px" }}>

          <div className="row">
            {/* Left List */}
            <div className="col-6 ">
              <ul>
                <li>Futures and Options trading</li>
                <li>Mutual funds</li>
                <li>Commodity trading</li>
                <li>Investment in Smallcase</li>
              </ul>
            </div>

            {/* Right List + Image */}
            <div className="col-6 ">
              <ul>
                <li>Direct equity</li>
                <li>IPO investment</li>
                <li>Bonds and ETFs</li>
                <li>Digital gold</li>
              </ul>
              </div>
          </div>

              <img
                src="media/images/pressLogos.png"
                alt="Press Logos"
                className="img-fluid mt-3" 
                 
              />
              </div>
            
        </div>
      </div>
    </div>
  );
}

export default Award;
