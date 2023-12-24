import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";

const Doctors2 = () => {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      {/* <PageBanner 
                pageTitle="Doctors Style Two" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Doctors Style Two" 
                imgClass="bg-3" 
            />   */}

      <div className="doctors-area-two ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Our Venues</span>
            <h2>Competition Grade Badminton Stadiums</h2>
            <p>
              BC provides four dedicated competition grade badminton stadiums in
              Clayton, Noble Park, Hallam & Truganina
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-doctors-two">
                <div className="doctor-img">
                  <img src="/img/about/clayton.jpg" alt="Image" />

                  <ul className="doctors-link">
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                </div>

                <div className="doctors-content">
                  <h3>BC Noble Park</h3>
                  <span>13, Duerdin St, Clayton 3168 Call: (03) 000000000</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-doctors-two">
                <div className="doctor-img">
                  <img src="/img/about/noble.jpg" alt="Image" />

                  <ul className="doctors-link">
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-pinterest-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="doctors-content">
                  <h3>BC Noble Park</h3>
                  <span>13, Duerdin St, Clayton 3168 Call: (03) 000000000</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-doctors-two">
                <div className="doctor-img">
                  <img src="/img/about/hallam.jpg" alt="Image" />

                  <ul className="doctors-link">
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-pinterest-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="doctors-content">
                  <h3>BC Noble Park</h3>
                  <span>13, Duerdin St, Clayton 3168 Call: (03) 000000000</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-doctors-two">
                <div className="doctor-img">
                  <img src="/img/about/triguna.jpg" alt="Image" />

                  <ul className="doctors-link">
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-pinterest-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="doctors-content">
                  <h3>BC Noble Park</h3>
                  <span>13, Duerdin St, Clayton 3168 Call: (03) 000000000</span>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="page-navigation-area">
                <nav aria-label="Page navigation example text-center">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link page-links" href="#">
                        <i className="bx bx-chevrons-left"></i>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="bx bx-chevrons-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Subscribe />
            <Footer />  */}
    </React.Fragment>
  );
};

export default Doctors2;
