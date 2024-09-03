import React from 'react';

function Header() {
  return (
    <>
      {/* <!-- ============================================================== -->
            <!-- Top header  -->
            <!-- ============================================================== -->
            <!-- Start Navigation --> */}
      <div className="header header-light dark-text">
        <div className="container">
          <nav id="navigation" className="navigation navigation-landscape">
            <div className="nav-header">
              <a className="nav-brand" href="#">
                <img src="assets/img/logo.png" className="logo" alt="" />
              </a>
              <div className="nav-toggle"></div>
              <div className="mobile_nav">
                <ul>
                  <li>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#login"
                      className="theme-cl fs-lg"
                    >
                      <i className="lni lni-user"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="add-listing.html"
                      className="crs_yuo12 w-auto text-white theme-bg"
                    >
                      <span className="embos_45">
                        <i className="fas fa-plus me-2"></i>Add Listing
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="nav-menus-wrapper"
              style={{ transitionProperty: 'none' }}
            >
              <ul className="nav-menu">
                <li className="active">
                  <a href="javascript:void(0);">Home</a>
                  <ul className="nav-dropdown nav-submenu">
                    <li>
                      <a href="index.html">Home Screen 1</a>
                    </li>
                    <li>
                      <a href="home-2.html">Home Screen 2</a>
                    </li>
                    <li>
                      <a href="home-3.html">Home Screen 3</a>
                    </li>
                    <li>
                      <a href="home-4.html">Home Screen 4</a>
                    </li>
                    <li>
                      <a href="home-5.html">Home Screen 5</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="javascript:void(0);">Listings</a>
                  <ul className="nav-dropdown nav-submenu">
                    <li>
                      <a href="javascript:void(0);">Grid Layout</a>
                      <ul className="nav-dropdown nav-submenu">
                        <li>
                          <a href="listing-search-v1.html">With Sidebar V1</a>
                        </li>
                        <li>
                          <a href="listing-search-v2.html">With Sidebar V2</a>
                        </li>
                        <li>
                          <a href="listing-search-v3.html">With Sidebar V3</a>
                        </li>
                        <li>
                          <a href="listing-search-with-map.html">
                            Full Width + Map
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">List Layout</a>
                      <ul className="nav-dropdown nav-submenu">
                        <li>
                          <a href="listing-search-v4.html">With Sidebar</a>
                        </li>
                        <li>
                          <a href="listing-search-v5.html">Full Width</a>
                        </li>
                        <li>
                          <a href="listing-search-with-map.html">
                            Full Width With Map
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Map Styles</a>
                      <ul className="nav-dropdown nav-submenu">
                        <li>
                          <a href="half-map-search-1.html">Search On Map V1</a>
                        </li>
                        <li>
                          <a href="half-map-search-2.html">Search On Map V2</a>
                        </li>
                        <li>
                          <a href="half-map-search-3.html">Search On Map V3</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Single Listing</a>
                      <ul className="nav-dropdown nav-submenu">
                        <li>
                          <a href="single-listing-detail-1.html">
                            Single Listing V1
                          </a>
                        </li>
                        <li>
                          <a href="single-listing-detail-2.html">
                            Single Listing V2
                          </a>
                        </li>
                        <li>
                          <a href="single-listing-detail-3.html">
                            Single Listing V3
                          </a>
                        </li>
                        <li>
                          <a href="single-listing-detail-4.html">
                            Single Listing V4
                          </a>
                        </li>
                        <li>
                          <a href="single-listing-detail-5.html">
                            Single Listing V5
                          </a>
                        </li>
                        <li>
                          <a href="single-listing-detail-6.html">
                            Single Listing V6
                          </a>
                        </li>
                        <li>
                          <a href="single-listing-detail-7.html">
                            Single Listing V7
                          </a>
                        </li>
                        <li>
                          <a href="single-listing-detail-8.html">
                            Single Listing V8
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="author-detail.html">Author Detail</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="javascript:void(0);">User Dashboard</a>
                  <ul className="nav-dropdown nav-submenu">
                    <li>
                      <a href="dashboard.html">
                        <i className="lni lni-dashboard me-2"></i>Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="dashboard-my-listings.html">
                        <i className="lni lni-files me-2"></i>My Listings
                      </a>
                    </li>
                    <li>
                      <a href="dashboard-add-listings.html">
                        <i className="lni lni-add-files me-2"></i>Add Listing
                      </a>
                    </li>
                    <li>
                      <a href="dashboard-saved-listings.html">
                        <i className="lni lni-bookmark me-2"></i>Saved Listing
                      </a>
                    </li>
                    <li>
                      <a href="dashboard-my-bookings.html">
                        <i className="lni lni-briefcase me-2"></i>My Bookings
                        <span className="count-tag bg-warning">4</span>
                      </a>
                    </li>
                    <li>
                      <a href="dashboard-wallet.html">
                        <i className="lni lni-mastercard me-2"></i>Wallet
                      </a>
                    </li>
                    <li>
                      <a href="dashboard-messages.html">
                        <i className="lni lni-envelope me-2"></i>Messages
                        <span className="count-tag bg-sky">4</span>
                      </a>
                    </li>
                    <li>
                      <a href="dashboard-my-profile.html">
                        <i className="lni lni-user me-2"></i>My Profile
                      </a>
                    </li>
                    <li>
                      <a href="dashboard-change-password.html">
                        <i className="lni lni-lock-alt me-2"></i>Change Password
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="javascript:void(0);">Pages</a>
                  <ul className="nav-dropdown nav-submenu">
                    <li>
                      <a href="blog.html">Blog Style</a>
                    </li>
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="signup.html">Sign Up</a>
                    </li>
                    <li>
                      <a href="login.html">Sign In</a>
                    </li>
                    <li>
                      <a href="privacy.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQs</a>
                    </li>
                    <li>
                      <a href="404.html">404 Page</a>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className="nav-menu nav-menu-social align-to-right">
                <li>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#login"
                    className="ft-bold"
                  >
                    <i className="fas fa-sign-in-alt me-1 theme-cl"></i>Sign In
                  </a>
                </li>
                <li className="add-listing theme-bg">
                  <a href="add-listing.html">
                    <i className="fas fa-plus me-2"></i>Add Listing
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- End Navigation -->
            <!-- ============================================================== --> */}
    </>
  );
}

export default Header;
