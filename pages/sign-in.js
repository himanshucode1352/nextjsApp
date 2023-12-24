import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import Link from "next/link";

const SignIn = () => {
  return (
    <React.Fragment>
      {/* <Navbar />
            <PageBanner 
                pageTitle="Sign In" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Sign In" 
                imgClass="bg-1" 
            /> */}

      <div className="user-area-all-style log-in-area ptb-100">
        <div className="container">
          {/* <div className="section-title">
                        <h2>Sign In your account!</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quas cumque iste veniam id dolorem deserunt ratione error voluptas rem ullam possimus placeat, ut, odio</p>
                    </div> */}

          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <div className="contact-form-action">
                <form method="post">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                      <h2>Logo</h2>
                      <p className="mb-2">
                        Welcome. Please login to the Customer Portal here.
                      </p>
                    </div>

                    {/* <div className="col-lg-4 col-md-4 col-sm-12">
                                            <button className="default-btn" type="submit">
                                                Facebook
                                            </button>
                                        </div>

                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                            <button className="default-btn" type="submit">
                                                Twitter
                                            </button>
                                        </div> */}

                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Username or Email"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6 form-condition">
                      <div className="agree-label">
                        <input type="checkbox" id="chb1" />
                        <label htmlFor="chb1">Remember Me</label>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <Link href="/recover-password">
                        <a className="forget">Forgot my password?</a>
                      </Link>
                    </div>

                    <div className="col-12">
                      <button className="default-btn btn-two" type="submit">
                         Submit
                      </button>
                    </div>

                    <div className="col-12">
                      <p className="account-desc">
                        Are you new?
                        <Link href="/sign-up">
                          <a>Sign Up</a>
                        </Link>
                      </p>
                      <small>
                        <span>
                          <b>Important:</b>
                        </span>
                        If you are an existing BTTC member, please log in with
                        the details emailed to you to avoid creating a duplicate
                        account.
                      </small>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3"></div>
            {/* <div className="col-lg-6">
                            <div className="log-in-img"></div>
                        </div> */}
          </div>
        </div>
      </div>

      {/* <Subscribe />
            <Footer />  */}
    </React.Fragment>
  );
};

export default SignIn;
