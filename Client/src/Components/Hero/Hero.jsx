import React from 'react';
import banner from './banner.webp'

function Hero() {
  return (
    <>
      {/* <!-- ======================= Home Banner ======================== --> */}
      <div
        className="home-banner margin-bottom-0"
        style={{background: `#f41b3b url(${banner}) no-repeat`,}}
        data-overlay="5"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="banner_caption text-center mb-5">
                <h1 className="banner_title ft-bold mb-1">
                  Explore Great Place in Your Town
                </h1>
                <p className="fs-md ft-medium">
                  Explore wonderful place to stay, salon, shopping, massage or
                  visit local areas.
                </p>
              </div>

              <form className="main-search-wrap fl-wrap half-column">
                <div  className="main-search-item">
                  <span style={{marginRight:"10px"}} className="search-tag">Find</span>
                  <input
                   style={{borderLeft:'1px solid red'}}
                    type="text"
                    className="form-control radius"
                    placeholder="Nail salons, plumbers, takeout..."
                  />
                </div>
                <div className="main-search-item">
                  <span style={{marginRight:"10px"}} className="search-tag">Where</span>
                  <input
                  style={{borderLeft:'1px solid red'}}
                    type="text"
                    className="form-control"
                    placeholder="San Francisco, CA"
                  />
                </div>
                <div className="main-search-button">
                  <button
                    className="btn full-width theme-bg text-white"
                    type="button"
                  >
                    Search
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ======================= Home Banner ======================== --> */}
    </>
  );
}

export default Hero;
