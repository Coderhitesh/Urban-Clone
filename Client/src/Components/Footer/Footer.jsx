import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.webp'

function Footer() {
  return (
    <>
      {/* ============================ Footer Start ================================== */}
      <footer className="light-footer skin-light-footer style-2">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                <div className="footer_widget">
                  {/* <img
                    src={logo}
                    className="img-footer small mb-2"
                    alt="logo"
                  /> */}
                  <h1>LOGO</h1>
                  <div className="address mt-2">
                    Vijay Vihar, Rohini
                    <br />
                    New Delhi
                  </div>
                  <div className="address mt-3">
                    40 568 423 6597
                    <br />
                    support@Hover.com
                  </div>
                  <div className="address mt-2">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#" className="theme-cl">
                          <i className="lni lni-facebook-filled"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="theme-cl">
                          <i className="lni lni-twitter-filled"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="theme-cl">
                          <i className="lni lni-youtube"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="theme-cl">
                          <i className="lni lni-instagram-filled"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="theme-cl">
                          <i className="lni lni-linkedin-original"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                <div className="footer_widget">
                  <h4 className="widget_title">Main Navigation</h4>
                  <ul className="footer-menu">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>about</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    <li><Link to={'/privacy'}>Privacy</Link></li>
                    {/* <li><Link to={'/'}>Dashboard</Link></li> */}
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                <div className="footer_widget">
                  <h4 className="widget_title">Business Owners</h4>
                  <ul className="footer-menu">
                    <li><a href="#">Browse Categories</a></li>
                    <li><a href="#">Payment Links</a></li>
                    <li><a href="#">Saved Places</a></li>
                    <li><a href="#">Dashboard</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                <div className="footer_widget">
                  <h4 className="widget_title">About Company</h4>
                  <ul className="footer-menu">
                    <li><a href="#">Who We Are?</a></li>
                    <li><a href="#">Our Mission</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li><a href="#">Packages</a></li>
                    <li><a href="#">Dashboard</a></li>
                  </ul>
                </div>
              </div>

              {/* <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                <div className="footer_widget">
                  <h4 className="widget_title">Helpful Topics</h4>
                  <ul className="footer-menu">
                    <li><a href="#">Site Map</a></li>
                    <li><a href="#">Security</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">FAQ's Page</a></li>
                    <li><a href="#">Privacy</a></li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="footer-bottom br-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12 text-center">
                <p className="mb-0">
                  © 2022 URBAN. Designed By <a href="https://hoverbusinessservices.com/">Hover Business Services LLP</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ============================ Footer End ================================== */}
    </>
  );
}

export default Footer;
