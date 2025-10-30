import React from 'react';
function Hero() {
    return (
        <div className='container ' style={{ marginTop: "100px", textAlign: "center" }}>
            <div className="row p-3">
                <h2 className='mt-3'>VishTradeX products </h2>
                <p className='text-muted mt-2'>Explore our suite of products designed to make investing simple and efficient.</p>
                 <p className=' text-muted mt-2 '> Checkout our <a href="#" style={{ textDecoration: "none" }}>
                     product catalog <i className="fa fa-arrow-right" aria-hidden="true"></i>
                 </a>
             </p>
            </div>
        </div>

    );
}
export default Hero;
 