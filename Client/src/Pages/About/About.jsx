import React from 'react'

function About() {
  return (
    <>
      {/* ======================= Top Breadcrumbs ======================== */}
      <section
        className="about-bg bg-cover"
        style={{ background: 'url(assets/img/about.jpg) no-repeat' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-11 col-sm-12">
              <div className="abt-caption">
                <div className="abt-caption-head">
                  <h1>Smart team always creates better things and better solutions.</h1>
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  </h6>
                  <div className="abt-bt-info">
                    <a href="javascript:void(0);" className="btn ft-medium theme-cl bg-white rounded">
                      Get Started<i className="fas fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                  <div className="position-relative row">
                    <div className="col-lg-4 col-md-4 col-4">
                      <h3 className="ft-bold text-sky mb-0"><span className="count">07</span>+</h3>
                      <p className="ft-medium text-light">Business Listing</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                      <h3 className="ft-bold text-warning mb-0"><span className="count">06</span>k+</h3>
                      <p className="ft-medium text-light">Popular Authors</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                      <h3 className="ft-bold text-danger mb-0"><span className="count">200</span>+</h3>
                      <p className="ft-medium text-light">Countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================= Top Breadcrumbs ======================== */}

      {/* ======================= How It Works Detail ======================== */}
      <section className="space min">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-5">
                <h6 className="mb-0 theme-cl">Working Process</h6>
                <h2 className="ft-bold">How It Works</h2>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="wrk-pro-box first">
                <div className="wrk-pro-box-icon"><i className="ti-map-alt text-success"></i></div>
                <div className="wrk-pro-box-caption">
                  <h4>Find Interesting Place</h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti</p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="wrk-pro-box sec">
                <div className="wrk-pro-box-icon"><i className="ti-user theme-cl"></i></div>
                <div className="wrk-pro-box-caption">
                  <h4>Contact A Few Owners</h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti</p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="wrk-pro-box thrd">
                <div className="wrk-pro-box-icon"><i className="ti-shield text-sky"></i></div>
                <div className="wrk-pro-box-caption">
                  <h4>Make A Reservation</h4>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================= How It Works End ======================== */}

      {/* ======================= Our Teams ======================== */}
      <section className="space min gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-5">
                <h6 className="mb-0 theme-cl">Our Team</h6>
                <h2 className="ft-bold">Goodup Expert Team</h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {/* Repeated team member block */}
            {[
              { name: 'James R. Smith', role: 'Project Manager', img: 't-1.png', tags: ['New'] },
              { name: 'Howard L. Gallegos', role: 'Team Leader', img: 't-2.png' },
              { name: 'Patricia C. Foshee', role: 'UI/UX Designer', img: 't-3.png', tags: ['Popular'] },
              { name: 'Helen A. Robbins', role: 'Web Developer', img: 't-4.png' },
              { name: 'Andrew D. Taylor', role: 'Content Writer', img: 't-5.png', tags: ['New'] },
              { name: 'Larry J. Mapes', role: 'Web Expert', img: 't-6.png' },
              { name: 'Loretta G. Wood', role: 'Product Designer', img: 't-7.png', tags: ['Popular'] },
              { name: 'Javier M. Brookins', role: 'Sales Manager', img: 't-8.png', tags: ['New'] }
            ].map((member, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="Goodup-author-wrap">
                  {member.tags && member.tags.map((tag, i) => (
                    <div key={i} className={`Goodup-author-tag ${tag.toLowerCase()}`}>{tag}</div>
                  ))}
                  <div className="Goodup-author-thumb">
                    <a href="author-detail.html">
                      <img src={`assets/img/${member.img}`} className="img-fluid circle" alt={member.name} />
                    </a>
                  </div>
                  <div className="Goodup-author-caption">
                    <h4 className="fs-md mb-0 ft-medium m-catrio">
                      <a href="author-detail.html">{member.name}</a>
                    </h4>
                    <div className="Goodup-location">{member.role}</div>
                  </div>
                  <div className="Goodup-author-links">
                    <ul className="Goodup-social colored">
                      <li><a href="javascript:void(0);"><i className="lni lni-facebook-filled"></i></a></li>
                      <li><a href="javascript:void(0);"><i className="lni lni-linkedin-original"></i></a></li>
                      <li><a href="javascript:void(0);"><i className="lni lni-twitter-original"></i></a></li>
                      <li><a href="javascript:void(0);"><i className="lni lni-instagram-original"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ======================= Our Teams End ======================== */}
    </>
  )
}

export default About
