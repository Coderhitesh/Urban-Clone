import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function RegisterServiceProvider() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    },[])
    return (
        <>
            {/* ======================= RegisterServiceProvider Detail ======================== */}
            <section className="gray">
                <div className="container">
                    <div className="row align-items-start justify-content-center">
                        <div className="col-xl-12 col-lg-8 col-md-12">
                            <div className="signup-screen-wrap">
                                <div className="text-center mb-4">
                                    <h4 className="m-0 ft-medium">Register As A Service Provider An Account</h4>
                                </div>
                                <div className="signup-screen-single light">

                                    <form className="submit-form">
                                        <div className="row">

                                            <div className="form-group col-lg-6">
                                                <label className="mb-1">Your Name</label>
                                                <input type="text" className="form-control rounded" placeholder="Enter Your Name" />
                                            </div>


                                            <div className="form-group col-lg-6">
                                                <label className="mb-1">Email ID</label>
                                                <input type="email" className="form-control rounded" placeholder="Enter Your Email" />
                                            </div>

                                        </div>
                                        <div className='row'>
                                            <div className="form-group col-lg-6" >
                                                <label className="mb-1">Phone No.</label>
                                                <input type="number" className="form-control rounded" placeholder="Enter Your Number" />
                                            </div>
                                            <div className="form-group col-lg-6">
                                                <label className="mb-1">Pincode</label>
                                                <input type="text" className="form-control rounded" placeholder="Pincode" />

                                            </div>

                                        </div>
                                        <div className='row'>
                                            <div className="form-group col-lg-6">
                                                <label className="mb-1">Services.</label>
                                                <select className='form-select for-select-padding rounded' name="" id="">
                                                    <option value="">Service Name</option>
                                                    <option value="">Service Name -2</option>
                                                    <option value="">Service Name -3</option>
                                                    <option value="">Service Name -4</option>
                                                    <option value="">Service Name -5</option>
                                                    <option value="">Service Name -6</option>
                                                    <option value="">Service Name</option>

                                                </select>
                                            </div>
                                            <div className="form-group col-lg-6">
                                                <label className="mb-1">Select City.</label>
                                                <select className='form-select for-select-padding rounded' name="" id="">
                                                    <option value="">Service Name</option>
                                                    <option value="">Service Name -2</option>
                                                    <option value="">Service Name -3</option>
                                                    <option value="">Service Name -4</option>
                                                    <option value="">Service Name -5</option>
                                                    <option value="">Service Name -6</option>
                                                    <option value="">Service Name</option>

                                                </select>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className="form-group col-lg-6" f>
                                                <label className="mb-1">Select District.</label>
                                                <select className='form-select for-select-padding rounded' name="" id="">
                                                    <option value="">Service Name</option>
                                                    <option value="">Service Name -2</option>
                                                    <option value="">Service Name -3</option>
                                                    <option value="">Service Name -4</option>
                                                    <option value="">Service Name -5</option>
                                                    <option value="">Service Name -6</option>
                                                    <option value="">Service Name</option>

                                                </select>
                                            </div>

                                            <div className="form-group col-lg-6" f>
                                                <label className="mb-1">Experince.</label>
                                                <input type="number" className="form-control for-select-padding rounded" placeholder="Enter Your Experince in Years " />
                                            </div>

                                        </div>
                                        {/* <div className='row'>
                                            <div className="form-group col-lg-12" f>
                                                <label className="mb-1">Experince.</label>
                                                <input type="number" className="form-control rounded" placeholder="Enter Your Experince in Years " />
                                            </div>
                                           
                                        </div> */}

                                        <div className="form-group">
                                            <label className="mb-1">Password</label>
                                            <input type="password" className="form-control rounded" placeholder="Password" />
                                        </div>

                                        <div className="form-group">
                                            <button type="submit" className="btn btn-md full-width theme-bg text-light rounded ft-medium">Sign Up</button>
                                        </div>

                                        {/* <div className="form-group text-center mb-0">
                      <p className="extra">Or Signup with</p>
                      <div className="option-log">
                        <div className="single-log-opt">
                          <Link to={""} className="log-btn">
                            <img src="assets/img/c-1.png" className="img-fluid" alt="" />Login with Google
                          </Link>
                        </div>
                        <div className="single-log-opt">
                          <Link to={""} className="log-btn">
                            <img src="assets/img/facebook.png" className="img-fluid" alt="" />Login with Facebook
                          </Link>
                        </div>
                      </div>
                    </div> */}

                                        <div className="form-group text-center mt-4 mb-0">
                                            <p className="mb-0">Have You Already An account? <Link to={'/sign-in'} className="ft-medium text-success">Sign In</Link></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ======================= RegisterServiceProvider End ======================== */}
        </>
    );
}

export default RegisterServiceProvider;
