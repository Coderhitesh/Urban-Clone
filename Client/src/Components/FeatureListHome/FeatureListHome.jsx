import React from 'react';
import { Link } from 'react-router-dom';
import deep1 from './deep1.jpg'
import deep2 from './deep2.jpg'
import deep3 from './deep3.jpg'
import deep4 from './deep4.jpg'

import repair1 from './repair1.jpg'
import repair2 from './repair2.webp'
import repair3 from './repair3.webp'
import repair4 from './repair4.jpg'

function FeatureListHome() {
  return (
    <>
			<section class="space min">
				<div class="container">
				
					<div class="row justify-content-center">
						<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
							<div class="sec_title position-relative text-center mb-5">
								<h6 class="theme-cl mb-0">Featured Listings</h6>
								<h2 class="ft-bold">Goodup in Delhi</h2>
							</div>
						</div>
					</div>
					
					{/* <!-- row --> */}
					<div class="row align-items-center">
						<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							<ul class="nav nav-tabs small-tab mb-3" id="myTab" role="tablist">
								<li class="nav-item" role="presentation">
									<button class="nav-link active" id="places-tab" data-bs-toggle="tab" data-bs-target="#places" type="button" role="tab" aria-controls="places" aria-selected="true">DEEP CLEANING</button>
								</li>
								<li class="nav-item" role="presentation">
									<button class="nav-link" id="events-tab" data-bs-toggle="tab" data-bs-target="#events" type="button" role="tab" aria-controls="events" aria-selected="false">APPLIANCE REPAIR</button>
								</li>
								<li class="nav-item" role="presentation">
									<button class="nav-link" id="doctor-tab" data-bs-toggle="tab" data-bs-target="#doctor" type="button" role="tab" aria-controls="doctor" aria-selected="false">Doctors</button>
								</li>
								<li class="nav-item" role="presentation">
									<button class="nav-link" id="car-tab" data-bs-toggle="tab" data-bs-target="#car" type="button" role="tab" aria-controls="car" aria-selected="false">Cars</button>
								</li>
								<li class="nav-item" role="presentation">
									<button class="nav-link" id="real-tab" data-bs-toggle="tab" data-bs-target="#real" type="button" role="tab" aria-controls="real" aria-selected="false">Real Estate</button>
								</li>
								<li class="nav-item" role="presentation">
									<button class="nav-link" id="hotels-tab" data-bs-toggle="tab" data-bs-target="#hotels" type="button" role="tab" aria-controls="hotels" aria-selected="false">Hotels</button>
								</li>
								{/* <li class="nav-item" role="presentation">
									<button class="nav-link" id="jobs-tab" data-bs-toggle="tab" data-bs-target="#jobs" type="button" role="tab" aria-controls="jobs" aria-selected="false">jobs</button>
								</li> */}
							</ul>	
						</div>
						
						<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							<div class="tab-content" id="myTabContent">
								
								{/* <!-- Places --> */}
								<div class="tab-pane fade show active" id="places" role="tabpanel" aria-labelledby="places-tab">
									<div class="row justify-content-center">
					
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-pos ab-left">
														<div class="Goodup-status close me-2">Closed</div>
													</div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src={deep1} class="img-fluid" alt="" /></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-pr-average high">4.8</div>
														<div class="Goodup-aldeio">
															<div class="Goodup-rates">
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
															</div>
															<div class="Goodup-all-review"><span>46 Reviews</span></div>
														</div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														{/* <div class="Goodup-author"><Link to="author-detail.html"><img src={deep1} class="img-fluid circle" alt=""/></Link></div> */}
														<h4 class="mb-0 ft-medium medium"><Link to={''} class="text-dark fs-md">Sofa Cleaning Service</Link></h4>
														<div class="Goodup-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Munirka, New Delhi</div>
														<div class="Goodup-middle-caption mt-3">
															{/* <p>At vero eos et accusamus et iusto </p> */}
														</div>
													</div>
													<div class="Goodup-grid-footer py-2 px-3">
														<div class="Goodup-ft-first">
															<Link to="half-map-search-2.html" class="Goodup-cats-wrap"><div class="cats-ico bg-2"><i class="lni lni-slim"></i></div><span class="cats-title">DEEP CLEANING</span></Link>
														</div>
														<div class="Goodup-ft-last">
															<div class="Goodup-inline">
																<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-envelope position-absolute"></i></button></div>
																<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-pos ab-left">
														<div class="Goodup-status open me-2">Open</div>
														<div class="Goodup-featured-tag">Featured</div>
													</div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src={deep2} class="img-fluid" alt="" /></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-pr-average high">4.1</div>
														<div class="Goodup-aldeio">
															<div class="Goodup-rates">
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
															</div>
															<div class="Goodup-all-review"><span>17 Reviews</span></div>
														</div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														{/* <div class="Goodup-author"><Link to="author-detail.html"><img src="assets/img/t-2.png" class="img-fluid circle" alt="" /></Link></div> */}
														<h4 class="mb-0 ft-medium medium"><Link to={''} class="text-dark fs-md">Carpet Cleaning Service</Link></h4>
														<div class="Goodup-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Sastri Nagar, New Delhi</div>
														<div class="Goodup-middle-caption mt-3">
															{/* <p>At vero eos et accusamus et iusto odio dignissimos ducimus</p> */}
														</div>
													</div>
													<div class="Goodup-grid-footer py-2 px-3">
														<div class="Goodup-ft-first">
															<Link to="half-map-search-2.html" class="Goodup-cats-wrap"><div class="cats-ico bg-3"><i class="lni lni-cake"></i></div><span class="cats-title">DEEP CLEANING</span></Link>
														</div>
														<div class="Goodup-ft-last">
															<div class="Goodup-inline">
																<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-envelope position-absolute"></i></button></div>
																<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-pos ab-left">
														<div class="Goodup-status open me-2">Open</div>
													</div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src={deep3} class="img-fluid" alt="" /></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-pr-average mid">3.6</div>
														<div class="Goodup-aldeio">
															<div class="Goodup-rates">
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
															</div>
															<div class="Goodup-all-review"><span>30 Reviews</span></div>
														</div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														{/* <div class="Goodup-author"><Link to="author-detail.html"><img src="assets/img/t-3.png" class="img-fluid circle" alt="" /></Link></div> */}
														<h4 class="mb-0 ft-medium medium"><Link to={''} class="text-dark fs-md">Office Deep Cleaning</Link></h4>
														<div class="Goodup-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Pritampura, New Delhi</div>
														<div class="Goodup-middle-caption mt-3">
															{/* <p>At vero eos et accusamus et iusto odio dignissimos ducimus</p> */}
														</div>
													</div>
													<div class="Goodup-grid-footer py-2 px-3">
														<div class="Goodup-ft-first">
															<Link to="half-map-search-2.html" class="Goodup-cats-wrap"><div class="cats-ico bg-4"><i class="lni lni-coffee-cup"></i></div><span class="cats-title">DEEP CLEANING</span></Link>
														</div>
														<div class="Goodup-ft-last">
															<div class="Goodup-inline">
																<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-envelope position-absolute"></i></button></div>
																<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-pos ab-left">
														<div class="Goodup-status close me-2">Closed</div>
														<div class="Goodup-featured-tag">Featured</div>
													</div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src={deep4} class="img-fluid" alt="" /></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-pr-average poor">2.3</div>
														<div class="Goodup-aldeio">
															<div class="Goodup-rates">
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
															</div>
															<div class="Goodup-all-review"><span>42 Reviews</span></div>
														</div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														{/* <div class="Goodup-author"><Link to="author-detail.html"><img src="assets/img/t-4.png" class="img-fluid circle" alt="" /></Link></div> */}
														<h4 class="mb-0 ft-medium medium"><Link to={''} class="text-dark fs-md">Home Deep Cleaning</Link></h4>
														<div class="Goodup-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Rohini, New Delhi</div>
														<div class="Goodup-middle-caption mt-3">
															{/* <p>At vero eos et accusamus et iusto odio dignissimos ducimus</p> */}
														</div>
													</div>
													<div class="Goodup-grid-footer py-2 px-3">
														<div class="Goodup-ft-first">
															<Link to="half-map-search-2.html" class="Goodup-cats-wrap"><div class="cats-ico bg-5"><i class="lni lni-shopping-basket"></i></div><span class="cats-title">DEEP CLEANING</span></Link>
														</div>
														<div class="Goodup-ft-last">
															<div class="Goodup-inline">
																<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-envelope position-absolute"></i></button></div>
																<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										
									</div>
								</div>
								{/* <!-- /Places --> */}
								
								{/* <!-- Events --> */}
								<div class="tab-pane fade" id="events" role="tabpanel" aria-labelledby="events-tab">
									<div class="row justify-content-center">
					
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src={repair1} class="img-fluid" alt="" /></Link>
													</div>
													<div class="Goodup-overlay-caps">
														<h4 class="mb-0 ft-medium medium"><Link to={''} class="text-white fs-md">Refrigerator Repair</Link></h4>
														<div class="Goodup-location text-white"><i class="fas fa-map-marker-alt me-1"></i>Sastri Nagar, New Delhi</div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-grid-footer py-3 px-3">
														<div class="Goodup-ft-first">
															<div class="Goodup-catsin">
															APPLIANCE REPAIR
															</div>
														</div>
														{/* <div class="Goodup-ft-last">
															<span class="small">9 Fab 09:30 - 10:30</span>
														</div> */}
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src={repair2} class="img-fluid" alt="" /></Link>
													</div>
													<div class="Goodup-overlay-caps">
														<h4 class="mb-0 ft-medium medium"><Link to={''} class="text-white fs-md">TV Repair</Link></h4>
														<div class="Goodup-location text-white"><i class="fas fa-map-marker-alt me-1"></i>Munirka, New Delhi</div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-grid-footer py-3 px-3">
														<div class="Goodup-ft-first">
															<div class="Goodup-catsin">
															APPLIANCE REPAIR
															</div>
														</div>
														<div class="Goodup-ft-last">
															{/* <span class="small">10 Fab 09:00 - 10:00</span> */}
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src={repair3} class="img-fluid" alt="" /></Link>
													</div>
													<div class="Goodup-overlay-caps">
														<h4 class="mb-0 ft-medium medium"><Link to={''} class="text-white fs-md">Microwave Repair</Link></h4>
														<div class="Goodup-location text-white"><i class="fas fa-map-marker-alt me-1"></i>Sastri Nagar, New Delhi</div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-grid-footer py-3 px-3">
														<div class="Goodup-ft-first">
															<div class="Goodup-catsin">
															APPLIANCE REPAIR
															</div>
														</div>
														<div class="Goodup-ft-last">
															{/* <span class="small">12 Apr 14:30 - 15:45</span> */}
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src={repair4} class="img-fluid" alt="" /></Link>
													</div>
													<div class="Goodup-overlay-caps">
														<h4 class="mb-0 ft-medium medium"><Link to={''} class="text-white fs-md">Washing Machine Repair</Link></h4>
														<div class="Goodup-location text-white"><i class="fas fa-map-marker-alt me-1"></i>Sukhrali, New Delhi</div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-grid-footer py-3 px-3">
														<div class="Goodup-ft-first">
															<div class="Goodup-catsin">
															APPLIANCE REPAIR
															</div>
														</div>
														<div class="Goodup-ft-last">
															{/* <span class="small">18 Oct 10:00 - 11:00</span> */}
														</div>
													</div>
												</div>
											</div>
										</div>
										
									</div>
								</div>
								{/* <!-- /Events --> */}
								
								{/* <!-- Doctor --> */}
								<div class="tab-pane fade" id="doctor" role="tabpanel" aria-labelledby="doctor-tab">
									<div class="row justify-content-center">
						
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="doctor-grid-view">
												<div class="doctor-grid-thumb">
													<Link to={"/doctor-detail"}><img src="assets/img/doc-1.jpg" class="img-fluid" alt="" /></Link>
												</div>
												
												<div class="doctor-grid-caption">
													<div class="doc-title-wrap"><h4 class="doc-title verified"><Link to={"/doctor-detail"}>Dr. Heather D. Birch</Link></h4></div>
													<span class="doc-designation">MBBS, MS - General Surgery, MCh</span>
													
													<div class="doc-inner-wrap">
														<div class="doc-ratting-boxes">
															<ul class="doc ratting-view">
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star"></i></li>
															</ul>
															<span class="doctor-review-list">(44 Reviews)</span>
														</div>
														<div class="doc-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Rohini, New Delhi</div>
													</div>
												</div>
												
												<div class="doctor-grid-footer">
													<div class="doc-foot-first"><span class="av-status available">Available Today</span></div>
													<div class="doc-foot-last"><Link to={'/doctor-detail'} class="btn doc-book-btn">Book Now</Link></div>
												</div>
												
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="doctor-grid-view">
												<div class="doctor-grid-thumb">
													<Link to={'/doctor-detail'}><img src="assets/img/doc-2.jpg" class="img-fluid" alt="" /></Link>
												</div>
												
												<div class="doctor-grid-caption">
													<div class="doc-title-wrap"><h4 class="doc-title verified"><Link to={'/doctor-detail'}>Dr. Joyce G. Howell</Link></h4></div>
													<span class="doc-designation">MBBS, MS - General Surgery, MCh</span>
													
													<div class="doc-inner-wrap">
														<div class="doc-ratting-boxes">
															<ul class="doc ratting-view">
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star"></i></li>
															</ul>
															<span class="doctor-review-list">(44 Reviews)</span>
														</div>
														<div class="doc-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Rohini, New Delhi</div>
													</div>
												</div>
												
												<div class="doctor-grid-footer">
													<div class="doc-foot-first"><span class="av-status available">Available Today</span></div>
													<div class="doc-foot-last"><Link to={'/doctor-detail'} class="btn doc-book-btn">Book Now</Link></div>
												</div>
												
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="doctor-grid-view">
												<div class="doctor-grid-thumb">
													<Link to={'/doctor-detail'}><img src="assets/img/doc-3.jpg" class="img-fluid" alt="" /></Link>
												</div>
												
												<div class="doctor-grid-caption">
													<div class="doc-title-wrap"><h4 class="doc-title verified"><Link to={'/doctor-detail'}>Dr. Juliana J. GGoodupry</Link></h4></div>
													<span class="doc-designation">MBBS, MS - General Surgery, MCh</span>
													
													<div class="doc-inner-wrap">
														<div class="doc-ratting-boxes">
															<ul class="doc ratting-view">
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star"></i></li>
															</ul>
															<span class="doctor-review-list">(44 Reviews)</span>
														</div>
														<div class="doc-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Rohini, New Delhi</div>
													</div>
												</div>
												
												<div class="doctor-grid-footer">
													<div class="doc-foot-first"><span class="av-status available">Available Today</span></div>
													<div class="doc-foot-last"><Link to={'/doctor-detail'} class="btn doc-book-btn">Book Now</Link></div>
												</div>
												
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="doctor-grid-view">
												<div class="doctor-grid-thumb">
													<Link to={'/doctor-detail'}><img src="assets/img/doc-4.jpg" class="img-fluid" alt="" /></Link>
												</div>
												
												<div class="doctor-grid-caption">
													<div class="doc-title-wrap"><h4 class="doc-title verified"><Link to={"/doctor-detail"}>Dr. Elizabeth J. Vergara</Link></h4></div>
													<span class="doc-designation">MBBS, MS - General Surgery, MCh</span>
													
													<div class="doc-inner-wrap">
														<div class="doc-ratting-boxes">
															<ul class="doc ratting-view">
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star"></i></li>
															</ul>
															<span class="doctor-review-list">(44 Reviews)</span>
														</div>
														<div class="doc-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Rohini, New Delhi</div>
													</div>
												</div>
												
												<div class="doctor-grid-footer">
													<div class="doc-foot-first"><span class="av-status available">Available Today</span></div>
													<div class="doc-foot-last"><Link to={"/doctor-detail"} class="btn doc-book-btn">Book Now</Link></div>
												</div>
												
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="doctor-grid-view">
												<div class="doctor-grid-thumb">
													<Link to={'/doctor-detail'}><img src="assets/img/doc-5.jpg" class="img-fluid" alt="" /></Link>
												</div>
												
												<div class="doctor-grid-caption">
													<div class="doc-title-wrap"><h4 class="doc-title verified"><Link to={'/doctor-detail'}>Dr. Michelle R. McIntyre</Link></h4></div>
													<span class="doc-designation">MBBS, MS - General Surgery, MCh</span>
													
													<div class="doc-inner-wrap">
														<div class="doc-ratting-boxes">
															<ul class="doc ratting-view">
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star"></i></li>
															</ul>
															<span class="doctor-review-list">(44 Reviews)</span>
														</div>
														<div class="doc-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Rohini, New Delhi</div>
													</div>
												</div>
												
												<div class="doctor-grid-footer">
													<div class="doc-foot-first"><span class="av-status available">Available Today</span></div>
													<div class="doc-foot-last"><Link to={'/doctor-detail'} class="btn doc-book-btn">Book Now</Link></div>
												</div>
												
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="doctor-grid-view">
												<div class="doctor-grid-thumb">
													<Link to={'/doctor-detail'}><img src="assets/img/doc-6.jpg" class="img-fluid" alt="" /></Link>
												</div>
												
												<div class="doctor-grid-caption">
													<div class="doc-title-wrap"><h4 class="doc-title verified"><Link to={'/doctor-detail'}>Dr. Mary F. Holliday</Link></h4></div>
													<span class="doc-designation">MBBS, MS - General Surgery, MCh</span>
													
													<div class="doc-inner-wrap">
														<div class="doc-ratting-boxes">
															<ul class="doc ratting-view">
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star"></i></li>
															</ul>
															<span class="doctor-review-list">(44 Reviews)</span>
														</div>
														<div class="doc-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Rohini, New Delhi</div>
													</div>
												</div>
												
												<div class="doctor-grid-footer">
													<div class="doc-foot-first"><span class="av-status available">Available Today</span></div>
													<div class="doc-foot-last"><Link to={'/doctor-detail'} class="btn doc-book-btn">Book Now</Link></div>
												</div>
												
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="doctor-grid-view">
												<div class="doctor-grid-thumb">
													<Link to={'/doctor-detail'}><img src="assets/img/doc-7.jpg" class="img-fluid" alt="" /></Link>
												</div>
												
												<div class="doctor-grid-caption">
													<div class="doc-title-wrap"><h4 class="doc-title verified"><Link to={'/doctor-detail'}>Dr. Dennis K. Bales</Link></h4></div>
													<span class="doc-designation">MBBS, MS - General Surgery, MCh</span>
													
													<div class="doc-inner-wrap">
														<div class="doc-ratting-boxes">
															<ul class="doc ratting-view">
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star"></i></li>
															</ul>
															<span class="doctor-review-list">(44 Reviews)</span>
														</div>
														<div class="doc-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Rohini, New Delhi</div>
													</div>
												</div>
												
												<div class="doctor-grid-footer">
													<div class="doc-foot-first"><span class="av-status available">Available Today</span></div>
													<div class="doc-foot-last"><Link to={'/doctor-detail'} class="btn doc-book-btn">Book Now</Link></div>
												</div>
												
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="doctor-grid-view">
												<div class="doctor-grid-thumb">
													<Link to={'/doctor-detail'}><img src="assets/img/doc-8.jpg" class="img-fluid" alt=""/></Link>
												</div>
												
												<div class="doctor-grid-caption">
													<div class="doc-title-wrap"><h4 class="doc-title verified"><Link to={'/doctor-detail'}>Dr. Donald S. Herring</Link></h4></div>
													<span class="doc-designation">MBBS, MS - General Surgery, MCh</span>
													
													<div class="doc-inner-wrap">
														<div class="doc-ratting-boxes">
															<ul class="doc ratting-view">
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star filled"></i></li>
																<li><i class="fas fa-star"></i></li>
															</ul>
															<span class="doctor-review-list">(44 Reviews)</span>
														</div>
														<div class="doc-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Rohini, New Delhi</div>
													</div>
												</div>
												
												<div class="doctor-grid-footer">
													<div class="doc-foot-first"><span class="av-status available">Available Today</span></div>
													<div class="doc-foot-last"><Link to={'/doctor-detail'} class="btn doc-book-btn">Book Now</Link></div>
												</div>
												
											</div>
										</div>
										
									</div>
								</div>
								{/* <!-- /Doctor --> */}
								
								{/* <!-- car --> */}
								<div class="tab-pane fade" id="car" role="tabpanel" aria-labelledby="car-tab">
									<div class="row justify-content-center">
						
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-pos ab-left">
														<div class="Goodup-featured-tag">Featured</div>
													</div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src="assets/img/car/c-1.jpg" class="img-fluid" alt=""/></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-prt-price">Rs.<span>30,999</span></div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														<div class="Goodup-cates multi"><Link to="search-car.html" class="cats-1">Hyundai</Link></div>
														<h4 class="mb-0 ft-medium medium"><Link to={''} class="text-dark fs-md">New Hyundai Creta</Link></h4>
														<div class="Goodup-middle-caption mt-2">
															<div class="Goodup-options-list">
																<ul class="no-list-style">
																	<li><i class="fas fa-gas-pump"></i><span>Petrol</span></li>
																	<li><i class="far fa-calendar-alt"></i><span>2018</span></li>
																	<li><i class="fas fa-blender-phone"></i><span>20 KM/L</span></li>
																	<li><i class="fab fa-accusoft"></i><span>500 CC</span></li>
																</ul>
															</div>
														</div>
													</div>
													<div class="Goodup-grid-footer py-2 px-3">
														<div class="Goodup-ft-first">
															<div class="Goodup-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Sastri Nagar, New Delhi</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src="assets/img/car/c-2.jpg" class="img-fluid" alt=""/></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-prt-price">Rs.<span>22,500</span></div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														<div class="Goodup-cates multi"><Link to="search-car.html" class="cats-1">Tata</Link></div>
														<h4 class="mb-0 ft-medium medium"><Link to={''} class="text-dark fs-md">New Hyundai Creta<span class="verified-badge"><i class="fas fa-check-circle"></i></span></Link></h4>
														<div class="Goodup-middle-caption mt-2">
															<div class="Goodup-options-list">
																<ul class="no-list-style">
																	<li><i class="fas fa-gas-pump"></i><span>Diesel</span></li>
																	<li><i class="far fa-calendar-alt"></i><span>2017</span></li>
																	<li><i class="fas fa-blender-phone"></i><span>22 KM/L</span></li>
																	<li><i class="fab fa-accusoft"></i><span>512 CC</span></li>
																</ul>
															</div>
														</div>
													</div>
													<div class="Goodup-grid-footer py-2 px-3">
														<div class="Goodup-ft-first">
															<div class="Goodup-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Sastri Nagar, New Delhi</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-pos ab-left">
														<div class="Goodup-featured-tag">Featured</div>
													</div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src="assets/img/car/c-3.jpg" class="img-fluid" alt=""/></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-prt-price">Rs.<span>40,000</span></div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														<div class="Goodup-cates multi"><Link to="search-car.html" class="cats-1">Maruti</Link></div>
														<h4 class="mb-0 ft-medium medium"><Link to={''} class="text-dark fs-md">New Hyundai Creta</Link></h4>
														<div class="Goodup-middle-caption mt-2">
															<div class="Goodup-options-list">
																<ul class="no-list-style">
																	<li><i class="fas fa-gas-pump"></i><span>Petrol</span></li>
																	<li><i class="far fa-calendar-alt"></i><span>2013</span></li>
																	<li><i class="fas fa-blender-phone"></i><span>26 KM/L</span></li>
																	<li><i class="fab fa-accusoft"></i><span>700 CC</span></li>
																</ul>
															</div>
														</div>
													</div>
													<div class="Goodup-grid-footer py-2 px-3">
														<div class="Goodup-ft-first">
															<div class="Goodup-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Sastri Nagar, New Delhi</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src="assets/img/car/c-4.jpg" class="img-fluid" alt=""/></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-prt-price">Rs.<span>32,999</span></div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														<div class="Goodup-cates multi"><Link to="search-car.html" class="cats-1">Hyundai</Link></div>
														<h4 class="mb-0 ft-medium medium"><Link to={''} class="text-dark fs-md">New Hyundai Creta<span class="verified-badge"><i class="fas fa-check-circle"></i></span></Link></h4>
														<div class="Goodup-middle-caption mt-2">
															<div class="Goodup-options-list">
																<ul class="no-list-style">
																	<li><i class="fas fa-gas-pump"></i><span>Diesel</span></li>
																	<li><i class="far fa-calendar-alt"></i><span>2017</span></li>
																	<li><i class="fas fa-blender-phone"></i><span>18 KM/L</span></li>
																	<li><i class="fab fa-accusoft"></i><span>450 CC</span></li>
																</ul>
															</div>
														</div>
													</div>
													<div class="Goodup-grid-footer py-2 px-3">
														<div class="Goodup-ft-first">
															<div class="Goodup-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Sastri Nagar, New Delhi</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src="assets/img/car/c-5.jpg" class="img-fluid" alt=""/></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-prt-price">Rs.<span>50,000</span></div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														<div class="Goodup-cates multi"><Link to="search-car.html" class="cats-1">Nexon</Link></div>
														<h4 class="mb-0 ft-medium medium"><Link to={''} class="text-dark fs-md">New Hyundai Creta</Link></h4>
														<div class="Goodup-middle-caption mt-2">
															<div class="Goodup-options-list">
																<ul class="no-list-style">
																	<li><i class="fas fa-gas-pump"></i><span>Petrol</span></li>
																	<li><i class="far fa-calendar-alt"></i><span>2020</span></li>
																	<li><i class="fas fa-blender-phone"></i><span>22 KM/L</span></li>
																	<li><i class="fab fa-accusoft"></i><span>600 CC</span></li>
																</ul>
															</div>
														</div>
													</div>
													<div class="Goodup-grid-footer py-2 px-3">
														<div class="Goodup-ft-first">
															<div class="Goodup-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Sastri Nagar, New Delhi</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-pos ab-left">
														<div class="Goodup-featured-tag">Featured</div>
													</div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src="assets/img/car/c-6.jpg" class="img-fluid" alt=""/></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-prt-price">Rs.<span>35,500</span></div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														<div class="Goodup-cates multi"><Link to="search-car.html" class="cats-1">Maruti</Link></div>
														<h4 class="mb-0 ft-medium medium"><Link to={''} class="text-dark fs-md">New Hyundai Creta</Link></h4>
														<div class="Goodup-middle-caption mt-2">
															<div class="Goodup-options-list">
																<ul class="no-list-style">
																	<li><i class="fas fa-gas-pump"></i><span>Diesel</span></li>
																	<li><i class="far fa-calendar-alt"></i><span>2012</span></li>
																	<li><i class="fas fa-blender-phone"></i><span>21 KM/L</span></li>
																	<li><i class="fab fa-accusoft"></i><span>520 CC</span></li>
																</ul>
															</div>
														</div>
													</div>
													<div class="Goodup-grid-footer py-2 px-3">
														<div class="Goodup-ft-first">
															<div class="Goodup-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Sastri Nagar, New Delhi</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src="assets/img/car/c-7.jpg" class="img-fluid" alt=""/></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-prt-price">Rs.<span>25,000</span></div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														<div class="Goodup-cates multi"><Link to="search-car.html" class="cats-1">Tata</Link></div>
														<h4 class="mb-0 ft-medium medium"><Link to={''} class="text-dark fs-md">New Hyundai Creta<span class="verified-badge"><i class="fas fa-check-circle"></i></span></Link></h4>
														<div class="Goodup-middle-caption mt-2">
															<div class="Goodup-options-list">
																<ul class="no-list-style">
																	<li><i class="fas fa-gas-pump"></i><span>Diesel</span></li>
																	<li><i class="far fa-calendar-alt"></i><span>2016</span></li>
																	<li><i class="fas fa-blender-phone"></i><span>24 KM/L</span></li>
																	<li><i class="fab fa-accusoft"></i><span>450 CC</span></li>
																</ul>
															</div>
														</div>
													</div>
													<div class="Goodup-grid-footer py-2 px-3">
														<div class="Goodup-ft-first">
															<div class="Goodup-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Sastri Nagar, New Delhi</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-pos ab-left">
														<div class="Goodup-featured-tag">Featured</div>
													</div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src="assets/img/car/c-8.jpg" class="img-fluid" alt=""/></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-prt-price">Rs.<span>34,999</span></div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														<div class="Goodup-cates multi"><Link to="search-car.html" class="cats-1">Maruti</Link></div>
														<h4 class="mb-0 ft-medium medium"><Link to={''} class="text-dark fs-md">New Hyundai Creta</Link></h4>
														<div class="Goodup-middle-caption mt-2">
															<div class="Goodup-options-list">
																<ul class="no-list-style">
																	<li><i class="fas fa-gas-pump"></i><span>Petrol</span></li>
																	<li><i class="far fa-calendar-alt"></i><span>2019</span></li>
																	<li><i class="fas fa-blender-phone"></i><span>23 KM/L</span></li>
																	<li><i class="fab fa-accusoft"></i><span>540 CC</span></li>
																</ul>
															</div>
														</div>
													</div>
													<div class="Goodup-grid-footer py-2 px-3">
														<div class="Goodup-ft-first">
															<div class="Goodup-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Sastri Nagar, New Delhi</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
									</div>
								</div>
								{/* <!-- /car --> */}
								
								{/* <!-- Real --> */}
								<div class="tab-pane fade" id="real" role="tabpanel" aria-labelledby="real-tab">
									<div class="row justify-content-center">
					
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-pos ab-left">
														<div class="Goodup-status open me-2">For Rent</div>
														<div class="Goodup-featured-tag">Featured</div>
													</div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src="assets/img/real/r-1.jpg" class="img-fluid" alt=""/></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-prt-price">Rs.<span>30,999</span></div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														<div class="Goodup-author"><Link to="author-detail.html"><img src="assets/img/t-1.png" class="img-fluid circle" alt=""/></Link></div>
														<div class="Goodup-cates multi"><span class="Goodup-apr-rates"><i class="fas fa-star"></i>4.8</span><Link to="search-property.html" class="cats-1">Apartment</Link></div>
														<h4 class="mb-0 ft-medium medium"><Link to={''} class="text-dark fs-md">Liverpool London, LC345AC<span class="verified-badge"><i class="fas fa-check-circle"></i></span></Link></h4>
														<div class="Goodup-middle-caption mt-2">
															<div class="Goodup-options-list">
																<ul class="no-list-style">
																	<li><i class="fas fa-bed"></i><span>3 Beds</span></li>
																	<li><i class="fas fa-bath"></i><span>2 Baths</span></li>
																	<li><i class="fas fa-clone"></i><span>1.2k sqft</span></li>
																	<li><i class="fas fa-calendar"></i><span>3 Days Ago</span></li>
																</ul>
															</div>
														</div>
													</div>
													<div class="Goodup-grid-footer py-2 px-3">
														<div class="Goodup-ft-first">
															<div class="Goodup-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Sastri Nagar, New Delhi</div>
														</div>
														<div class="Goodup-ft-last">
															<div class="Goodup-inline">
																<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-envelope position-absolute"></i></button></div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-pos ab-left">
														<div class="Goodup-status me-2">For Sale</div>
													</div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src="assets/img/real/r-2.jpg" class="img-fluid" alt=""/></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-prt-price">Rs.<span>44,000</span></div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														<div class="Goodup-author"><Link to="author-detail.html"><img src="assets/img/t-2.png" class="img-fluid circle" alt=""/></Link></div>
														<div class="Goodup-cates multi"><span class="Goodup-apr-rates"><i class="fas fa-star"></i>4.7</span><Link to="search-property.html" class="cats-1">Condos</Link></div>
														<h4 class="mb-0 ft-medium medium"><Link to={''} class="text-dark fs-md">Montreal Canada, HAQC445<span class="verified-badge"><i class="fas fa-check-circle"></i></span></Link></h4>
														<div class="Goodup-middle-caption mt-2">
															<div class="Goodup-options-list">
																<ul class="no-list-style">
																	<li><i class="fas fa-bed"></i><span>3 Beds</span></li>
																	<li><i class="fas fa-bath"></i><span>2 Baths</span></li>
																	<li><i class="fas fa-clone"></i><span>1.2k sqft</span></li>
																	<li><i class="fas fa-calendar"></i><span>3 Days Ago</span></li>
																</ul>
															</div>
														</div>
													</div>
													<div class="Goodup-grid-footer py-2 px-3">
														<div class="Goodup-ft-first">
															<div class="Goodup-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Pritampura, New Delhi</div>
														</div>
														<div class="Goodup-ft-last">
															<div class="Goodup-inline">
																<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-envelope position-absolute"></i></button></div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-pos ab-left">
														<div class="Goodup-status open me-2">For Rent</div>
														<div class="Goodup-featured-tag">Featured</div>
													</div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src="assets/img/real/r-3.jpg" class="img-fluid" alt=""/></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-prt-price">Rs.<span>37,999</span></div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														<div class="Goodup-author"><Link to="author-detail.html"><img src="assets/img/t-3.png" class="img-fluid circle" alt=""/></Link></div>
														<div class="Goodup-cates multi"><span class="Goodup-apr-rates"><i class="fas fa-star"></i>4.5</span><Link to="search-property.html" class="cats-1">Villa</Link></div>
														<h4 class="mb-0 ft-medium medium"><Link to={''} class="text-dark fs-md">Huwai Denever USA, AWE789O<span class="verified-badge"><i class="fas fa-check-circle"></i></span></Link></h4>
														<div class="Goodup-middle-caption mt-2">
															<div class="Goodup-options-list">
																<ul class="no-list-style">
																	<li><i class="fas fa-bed"></i><span>3 Beds</span></li>
																	<li><i class="fas fa-bath"></i><span>2 Baths</span></li>
																	<li><i class="fas fa-clone"></i><span>1.2k sqft</span></li>
																	<li><i class="fas fa-calendar"></i><span>3 Days Ago</span></li>
																</ul>
															</div>
														</div>
													</div>
													<div class="Goodup-grid-footer py-2 px-3">
														<div class="Goodup-ft-first">
															<div class="Goodup-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Rohini, New Delhi</div>
														</div>
														<div class="Goodup-ft-last">
															<div class="Goodup-inline">
																<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-envelope position-absolute"></i></button></div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-pos ab-left">
														<div class="Goodup-status me-2">For Sale</div>
													</div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src="assets/img/real/r-4.jpg" class="img-fluid" alt=""/></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-prt-price">Rs.<span>45,000K</span></div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														<div class="Goodup-author"><Link to="author-detail.html"><img src="assets/img/t-4.png" class="img-fluid circle" alt=""/></Link></div>
														<div class="Goodup-cates multi"><span class="Goodup-apr-rates"><i class="fas fa-star"></i>4.9</span><Link to="search-property.html" class="cats-1">House</Link></div>
														<h4 class="mb-0 ft-medium medium"><Link to={''} class="text-dark fs-md">Alameda Canada, SHQT45O<span class="verified-badge"><i class="fas fa-check-circle"></i></span></Link></h4>
														<div class="Goodup-middle-caption mt-2">
															<div class="Goodup-options-list">
																<ul class="no-list-style">
																	<li><i class="fas fa-bed"></i><span>3 Beds</span></li>
																	<li><i class="fas fa-bath"></i><span>2 Baths</span></li>
																	<li><i class="fas fa-clone"></i><span>1.2k sqft</span></li>
																	<li><i class="fas fa-calendar"></i><span>3 Days Ago</span></li>
																</ul>
															</div>
														</div>
													</div>
													<div class="Goodup-grid-footer py-2 px-3">
														<div class="Goodup-ft-first">
															<div class="Goodup-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Sastri Nagar</div>
														</div>
														<div class="Goodup-ft-last">
															<div class="Goodup-inline">
																<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-envelope position-absolute"></i></button></div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-pos ab-left">
														<div class="Goodup-status open me-2">For Rent</div>
													</div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src="assets/img/real/r-5.jpg" class="img-fluid" alt=""/></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-prt-price">Rs.<span>35,000</span></div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														<div class="Goodup-author"><Link to="author-detail.html"><img src="assets/img/t-5.png" class="img-fluid circle" alt=""/></Link></div>
														<div class="Goodup-cates multi"><span class="Goodup-apr-rates"><i class="fas fa-star"></i>4.6</span><Link to="search-property.html" class="cats-1">Building</Link></div>
														<h4 class="mb-0 ft-medium medium"><Link to={''} class="text-dark fs-md">Henever Canada, QWUI98<span class="verified-badge"><i class="fas fa-check-circle"></i></span></Link></h4>
														<div class="Goodup-middle-caption mt-2">
															<div class="Goodup-options-list">
																<ul class="no-list-style">
																	<li><i class="fas fa-bed"></i><span>3 Beds</span></li>
																	<li><i class="fas fa-bath"></i><span>2 Baths</span></li>
																	<li><i class="fas fa-clone"></i><span>1.2k sqft</span></li>
																	<li><i class="fas fa-calendar"></i><span>3 Days Ago</span></li>
																</ul>
															</div>
														</div>
													</div>
													<div class="Goodup-grid-footer py-2 px-3">
														<div class="Goodup-ft-first">
															<div class="Goodup-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Sukhrali, New Delhi</div>
														</div>
														<div class="Goodup-ft-last">
															<div class="Goodup-inline">
																<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-envelope position-absolute"></i></button></div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-pos ab-left">
														<div class="Goodup-status open me-2">For Rent</div>
														<div class="Goodup-featured-tag">Featured</div>
													</div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src="assets/img/real/r-6.jpg" class="img-fluid" alt=""/></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-prt-price">Rs.<span>42,000</span></div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														<div class="Goodup-author"><Link to="author-detail.html"><img src="assets/img/t-6.png" class="img-fluid circle" alt=""/></Link></div>
														<div class="Goodup-cates multi"><span class="Goodup-apr-rates"><i class="fas fa-star"></i>4.2</span><Link to="search-property.html" class="cats-1">Apartment</Link></div>
														<h4 class="mb-0 ft-medium medium"><Link to={''} class="text-dark fs-md">Barghimbar USA, ERIO098<span class="verified-badge"><i class="fas fa-check-circle"></i></span></Link></h4>
														<div class="Goodup-middle-caption mt-2">
															<div class="Goodup-options-list">
																<ul class="no-list-style">
																	<li><i class="fas fa-bed"></i><span>3 Beds</span></li>
																	<li><i class="fas fa-bath"></i><span>2 Baths</span></li>
																	<li><i class="fas fa-clone"></i><span>1.2k sqft</span></li>
																	<li><i class="fas fa-calendar"></i><span>3 Days Ago</span></li>
																</ul>
															</div>
														</div>
													</div>
													<div class="Goodup-grid-footer py-2 px-3">
														<div class="Goodup-ft-first">
															<div class="Goodup-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Sastri Nagar, New Delhi</div>
														</div>
														<div class="Goodup-ft-last">
															<div class="Goodup-inline">
																<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-envelope position-absolute"></i></button></div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-pos ab-left">
														<div class="Goodup-status me-2">For Sale</div>
													</div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src="assets/img/real/r-7.jpg" class="img-fluid" alt=""/></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-prt-price">Rs.<span>31,950</span></div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														<div class="Goodup-author"><Link to="author-detail.html"><img src="assets/img/t-7.png" class="img-fluid circle" alt=""/></Link></div>
														<div class="Goodup-cates multi"><span class="Goodup-apr-rates"><i class="fas fa-star"></i>4.5</span><Link to="search-property.html" class="cats-1">Villa</Link></div>
														<h4 class="mb-0 ft-medium medium"><Link to={''} class="text-dark fs-md">Burbank Canada, ECH15462<span class="verified-badge"><i class="fas fa-check-circle"></i></span></Link></h4>
														<div class="Goodup-middle-caption mt-2">
															<div class="Goodup-options-list">
																<ul class="no-list-style">
																	<li><i class="fas fa-bed"></i><span>3 Beds</span></li>
																	<li><i class="fas fa-bath"></i><span>2 Baths</span></li>
																	<li><i class="fas fa-clone"></i><span>1.2k sqft</span></li>
																	<li><i class="fas fa-calendar"></i><span>3 Days Ago</span></li>
																</ul>
															</div>
														</div>
													</div>
													<div class="Goodup-grid-footer py-2 px-3">
														<div class="Goodup-ft-first">
															<div class="Goodup-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Munirka, New Delhi</div>
														</div>
														<div class="Goodup-ft-last">
															<div class="Goodup-inline">
																<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-envelope position-absolute"></i></button></div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-pos ab-left">
														<div class="Goodup-status open me-2">For Rent</div>
														<div class="Goodup-featured-tag">Featured</div>
													</div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src="assets/img/real/r-1.jpg" class="img-fluid" alt=""/></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-prt-price">Rs.<span>46,999</span></div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														<div class="Goodup-author"><Link to="author-detail.html"><img src="assets/img/t-8.png" class="img-fluid circle" alt=""/></Link></div>
														<div class="Goodup-cates multi"><span class="Goodup-apr-rates"><i class="fas fa-star"></i>4.7</span><Link to="search-property.html" class="cats-1">Work Space</Link></div>
														<h4 class="mb-0 ft-medium medium"><Link to={''} class="text-dark fs-md">Emeryville Green Vally<span class="verified-badge"><i class="fas fa-check-circle"></i></span></Link></h4>
														<div class="Goodup-middle-caption mt-2">
															<div class="Goodup-options-list">
																<ul class="no-list-style">
																	<li><i class="fas fa-bed"></i><span>3 Beds</span></li>
																	<li><i class="fas fa-bath"></i><span>2 Baths</span></li>
																	<li><i class="fas fa-clone"></i><span>1.2k sqft</span></li>
																	<li><i class="fas fa-calendar"></i><span>3 Days Ago</span></li>
																</ul>
															</div>
														</div>
													</div>
													<div class="Goodup-grid-footer py-2 px-3">
														<div class="Goodup-ft-first">
															<div class="Goodup-location"><i class="fas fa-map-marker-alt me-1 theme-cl"></i>Sastri Nagar, New Delhi</div>
														</div>
														<div class="Goodup-ft-last">
															<div class="Goodup-inline">
																<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-envelope position-absolute"></i></button></div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
									</div>
								</div>
								{/* <!-- /Real --> */}
								
								{/* <!-- Hotels --> */}
								<div class="tab-pane fade" id="hotels" role="tabpanel" aria-labelledby="hotels-tab">
									<div class="row justify-content-center">
					
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-pos ab-left">
														<div class="Goodup-featured-tag">Featured</div>
													</div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src="assets/img/rooms/1.jpg" class="img-fluid" alt=""/></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-pr-average high">4.2</div>
														<div class="Goodup-aldeio">
															<div class="Goodup-rates">
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
															</div>
															<div class="Goodup-all-review"><span>42 Reviews</span></div>
														</div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														<div class="Goodup-room-price"><span>Rs.1k</span>per night</div>
														<h4 class="mb-0 ft-medium medium mb-0"><Link to={''} class="text-dark fs-md">3112 Comfort Deluxe Space<span class="verified-badge"><i class="fas fa-check-circle"></i></span></Link></h4>
														<div class="Goodup-distance">1.5 km to Town Center</div>
														<div class="Goodup-middle-caption mt-3">
															<div class="Goodup-facilities-wrap Goodup-flx mb-0">
																<div class="Goodup-facility-list">
																	<ul class="no-list-style">
																		<li><i class="fas fa-wifi"></i></li>
																		<li><i class="fas fa-swimming-pool"></i></li>
																		<li><i class="fas fa-parking"></i></li>
																		<li><i class="fas fa-dog"></i></li>
																		<li><i class="fas fa-fan"></i></li>
																		<li><i class="fas fa-wine-glass-alt"></i></li>
																	</ul>
																</div>
															</div>
															<div class="Goodup-booking-button">
																<Link to="#" class="Goodup-btn-book">Book Now</Link>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-pos ab-left">
														<div class="Goodup-status offer me-2">-20% Off</div>
													</div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src="assets/img/rooms/2.jpg" class="img-fluid" alt=""/></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-pr-average high">4.2</div>
														<div class="Goodup-aldeio">
															<div class="Goodup-rates">
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
															</div>
															<div class="Goodup-all-review"><span>42 Reviews</span></div>
														</div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														<div class="Goodup-room-price"><span>Rs.1k</span>per night</div>
														<h4 class="mb-0 ft-medium medium mb-0"><Link to={''} class="text-dark fs-md">3112 Comfort Deluxe Space<span class="verified-badge"><i class="fas fa-check-circle"></i></span></Link></h4>
														<div class="Goodup-distance">1.5 km to Town Center</div>
														<div class="Goodup-middle-caption mt-3">
															<div class="Goodup-facilities-wrap Goodup-flx mb-0">
																<div class="Goodup-facility-list">
																	<ul class="no-list-style">
																		<li><i class="fas fa-wifi"></i></li>
																		<li><i class="fas fa-swimming-pool"></i></li>
																		<li><i class="fas fa-parking"></i></li>
																		<li><i class="fas fa-dog"></i></li>
																		<li><i class="fas fa-fan"></i></li>
																		<li><i class="fas fa-wine-glass-alt"></i></li>
																	</ul>
																</div>
															</div>
															<div class="Goodup-booking-button">
																<Link to="#" class="Goodup-btn-book">Book Now</Link>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-pos ab-left">
														<div class="Goodup-featured-tag">Featured</div>
													</div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src="assets/img/rooms/3.jpg" class="img-fluid" alt=""/></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-pr-average high">4.2</div>
														<div class="Goodup-aldeio">
															<div class="Goodup-rates">
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
															</div>
															<div class="Goodup-all-review"><span>42 Reviews</span></div>
														</div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														<div class="Goodup-room-price"><span>Rs.1k</span>per night</div>
														<h4 class="mb-0 ft-medium medium mb-0"><Link to={''} class="text-dark fs-md">3112 Comfort Deluxe Space<span class="verified-badge"><i class="fas fa-check-circle"></i></span></Link></h4>
														<div class="Goodup-distance">1.5 km to Town Center</div>
														<div class="Goodup-middle-caption mt-3">
															<div class="Goodup-facilities-wrap Goodup-flx mb-0">
																<div class="Goodup-facility-list">
																	<ul class="no-list-style">
																		<li><i class="fas fa-wifi"></i></li>
																		<li><i class="fas fa-swimming-pool"></i></li>
																		<li><i class="fas fa-parking"></i></li>
																		<li><i class="fas fa-dog"></i></li>
																		<li><i class="fas fa-fan"></i></li>
																		<li><i class="fas fa-wine-glass-alt"></i></li>
																	</ul>
																</div>
															</div>
															<div class="Goodup-booking-button">
																<Link to="#" class="Goodup-btn-book">Book Now</Link>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src="assets/img/rooms/4.jpg" class="img-fluid" alt=""/></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-pr-average high">4.2</div>
														<div class="Goodup-aldeio">
															<div class="Goodup-rates">
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
															</div>
															<div class="Goodup-all-review"><span>42 Reviews</span></div>
														</div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														<div class="Goodup-room-price"><span>Rs.1k</span>per night</div>
														<h4 class="mb-0 ft-medium medium mb-0"><Link to={''} class="text-dark fs-md">3112 Comfort Deluxe Space<span class="verified-badge"><i class="fas fa-check-circle"></i></span></Link></h4>
														<div class="Goodup-distance">1.5 km to Town Center</div>
														<div class="Goodup-middle-caption mt-3">
															<div class="Goodup-facilities-wrap Goodup-flx mb-0">
																<div class="Goodup-facility-list">
																	<ul class="no-list-style">
																		<li><i class="fas fa-wifi"></i></li>
																		<li><i class="fas fa-swimming-pool"></i></li>
																		<li><i class="fas fa-parking"></i></li>
																		<li><i class="fas fa-dog"></i></li>
																		<li><i class="fas fa-fan"></i></li>
																		<li><i class="fas fa-wine-glass-alt"></i></li>
																	</ul>
																</div>
															</div>
															<div class="Goodup-booking-button">
																<Link to="#" class="Goodup-btn-book">Book Now</Link>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-pos ab-left">
														<div class="Goodup-status offer me-2">-20% Off</div><div class="Goodup-featured-tag">Featured</div>
													</div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src="assets/img/rooms/5.jpg" class="img-fluid" alt=""/></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-pr-average high">4.2</div>
														<div class="Goodup-aldeio">
															<div class="Goodup-rates">
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
															</div>
															<div class="Goodup-all-review"><span>42 Reviews</span></div>
														</div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														<div class="Goodup-room-price"><span>Rs.1k</span>per night</div>
														<h4 class="mb-0 ft-medium medium mb-0"><Link to={''} class="text-dark fs-md">3112 Comfort Deluxe Space<span class="verified-badge"><i class="fas fa-check-circle"></i></span></Link></h4>
														<div class="Goodup-distance">1.5 km to Town Center</div>
														<div class="Goodup-middle-caption mt-3">
															<div class="Goodup-facilities-wrap Goodup-flx mb-0">
																<div class="Goodup-facility-list">
																	<ul class="no-list-style">
																		<li><i class="fas fa-wifi"></i></li>
																		<li><i class="fas fa-swimming-pool"></i></li>
																		<li><i class="fas fa-parking"></i></li>
																		<li><i class="fas fa-dog"></i></li>
																		<li><i class="fas fa-fan"></i></li>
																		<li><i class="fas fa-wine-glass-alt"></i></li>
																	</ul>
																</div>
															</div>
															<div class="Goodup-booking-button">
																<Link to="#" class="Goodup-btn-book">Book Now</Link>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-pos ab-left">
														<div class="Goodup-status offer me-2">-20% Off</div>
													</div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src="assets/img/rooms/6.jpg" class="img-fluid" alt=""/></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-pr-average high">4.2</div>
														<div class="Goodup-aldeio">
															<div class="Goodup-rates">
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
															</div>
															<div class="Goodup-all-review"><span>42 Reviews</span></div>
														</div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														<div class="Goodup-room-price"><span>Rs.1k</span>per night</div>
														<h4 class="mb-0 ft-medium medium mb-0"><Link to={''} class="text-dark fs-md">3112 Comfort Deluxe Space<span class="verified-badge"><i class="fas fa-check-circle"></i></span></Link></h4>
														<div class="Goodup-distance">1.5 km to Town Center</div>
														<div class="Goodup-middle-caption mt-3">
															<div class="Goodup-facilities-wrap Goodup-flx mb-0">
																<div class="Goodup-facility-list">
																	<ul class="no-list-style">
																		<li><i class="fas fa-wifi"></i></li>
																		<li><i class="fas fa-swimming-pool"></i></li>
																		<li><i class="fas fa-parking"></i></li>
																		<li><i class="fas fa-dog"></i></li>
																		<li><i class="fas fa-fan"></i></li>
																		<li><i class="fas fa-wine-glass-alt"></i></li>
																	</ul>
																</div>
															</div>
															<div class="Goodup-booking-button">
																<Link to="#" class="Goodup-btn-book">Book Now</Link>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-pos ab-left">
														<div class="Goodup-featured-tag">Featured</div>
													</div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src="assets/img/rooms/7.jpg" class="img-fluid" alt=""/></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-pr-average high">4.2</div>
														<div class="Goodup-aldeio">
															<div class="Goodup-rates">
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
															</div>
															<div class="Goodup-all-review"><span>42 Reviews</span></div>
														</div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														<div class="Goodup-room-price"><span>Rs.1k</span>per night</div>
														<h4 class="mb-0 ft-medium medium mb-0"><Link to={''} class="text-dark fs-md">3112 Comfort Deluxe Space<span class="verified-badge"><i class="fas fa-check-circle"></i></span></Link></h4>
														<div class="Goodup-distance">1.5 km to Town Center</div>
														<div class="Goodup-middle-caption mt-3">
															<div class="Goodup-facilities-wrap Goodup-flx mb-0">
																<div class="Goodup-facility-list">
																	<ul class="no-list-style">
																		<li><i class="fas fa-wifi"></i></li>
																		<li><i class="fas fa-swimming-pool"></i></li>
																		<li><i class="fas fa-parking"></i></li>
																		<li><i class="fas fa-dog"></i></li>
																		<li><i class="fas fa-fan"></i></li>
																		<li><i class="fas fa-wine-glass-alt"></i></li>
																	</ul>
																</div>
															</div>
															<div class="Goodup-booking-button">
																<Link to="#" class="Goodup-btn-book">Book Now</Link>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Single --> */}
										<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
											<div class="Goodup-grid-wrap">
												<div class="Goodup-grid-upper">
													<div class="Goodup-bookmark-btn"><button type="button"><i class="lni lni-heart-filled position-absolute"></i></button></div>
													<div class="Goodup-pos ab-left">
														<div class="Goodup-status offer me-2">-20% Off</div>
													</div>
													<div class="Goodup-grid-thumb">
														<Link to={''} class="d-block text-center m-auto"><img src="assets/img/rooms/8.jpg" class="img-fluid" alt=""/></Link>
													</div>
													<div class="Goodup-rating overlay">
														<div class="Goodup-pr-average high">4.2</div>
														<div class="Goodup-aldeio">
															<div class="Goodup-rates">
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
																<i class="fas fa-star"></i>
															</div>
															<div class="Goodup-all-review"><span>42 Reviews</span></div>
														</div>
													</div>
												</div>
												<div class="Goodup-grid-fl-wrap">
													<div class="Goodup-caption px-3 py-2">
														<div class="Goodup-room-price"><span>Rs.1k</span>per night</div>
														<h4 class="mb-0 ft-medium medium mb-0"><Link to={''} class="text-dark fs-md">3112 Comfort Deluxe Space<span class="verified-badge"><i class="fas fa-check-circle"></i></span></Link></h4>
														<div class="Goodup-distance">1.5 km to Town Center</div>
														<div class="Goodup-middle-caption mt-3">
															<div class="Goodup-facilities-wrap Goodup-flx mb-0">
																<div class="Goodup-facility-list">
																	<ul class="no-list-style">
																		<li><i class="fas fa-wifi"></i></li>
																		<li><i class="fas fa-swimming-pool"></i></li>
																		<li><i class="fas fa-parking"></i></li>
																		<li><i class="fas fa-dog"></i></li>
																		<li><i class="fas fa-fan"></i></li>
																		<li><i class="fas fa-wine-glass-alt"></i></li>
																	</ul>
																</div>
															</div>
															<div class="Goodup-booking-button">
																<Link to="#" class="Goodup-btn-book">Book Now</Link>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
									</div>
								</div>
								{/* <!-- /Hotels --> */}
								
							</div>
						</div>
					
					</div>
					{/* <!-- /row --> */}
					
				</div>
			</section>
			{/* <!-- ======================= All Types Listing ======================== --> */}
    </>
  );
}

export default FeatureListHome;
