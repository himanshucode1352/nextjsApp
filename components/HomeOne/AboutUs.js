import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="about-area pb-130 pt-70">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-content">
              <span className="top-title">WELCOME TO Company</span>
              <h2>We understand the Importance of Sports and Fitness!</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore dolore Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore dolore –{" "}
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore dolore Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore dolore
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore dolore Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore dolore
              </p>

              <Link href="/about">
                <a className="default-btn">Read More</a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-img">
              <div className="single-contact-map">
                <img
                  src="/img/about/home_1.jpg"
                  alt="Image"
                />
              </div>
              {/* <div className="shape-1">
								<img src="/img/about/about-shape-1.png" alt="Image" />
							</div>

							<div className="shape-2">
								<img src="/img/about/about-shape-2.png" alt="Image" />
							</div>

							<div className="shape-3">
								<img src="/img/about/about-shape-3.png" alt="Image" />
							</div> */}
            </div>
          </div>
        </div>
        <div className="row align-items-center pt-100">
          <div className="col-lg-6">
            <div className="about-img">
              <div className="single-contact-map">
                <img
                  src="/img/about/badminton-player.jpg"
                  alt="Image"
                />
              </div>
              {/* <div className="shape-1">
								<img src="/img/about/about-shape-1.png" alt="Image" />
							</div>

							<div className="shape-2">
								<img src="/img/about/about-shape-2.png" alt="Image" />
							</div>

							<div className="shape-3">
								<img src="/img/about/about-shape-3.png" alt="Image" />
							</div> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              {/* <span className="top-title">About Us</span> */}
              <ul>
                <li>
                  <i className="flaticon-tick"></i>
                  <h3>Lorem ipsum</h3>
                  <p>
                    The biggest combined badminton and table tennis centre in
                    western Melbourne
                  </p>
                </li>
                <li>
                  <i className="flaticon-tick"></i>
                  <h3>Lorem ipsum</h3>
                  <p>
                    The biggest combined badminton and table tennis centre in
                    western Melbourne
                  </p>
                </li>
                <li>
                  <i className="flaticon-tick"></i>
                  <h3>Lorem ipsum</h3>
                  <p>
                    The biggest combined badminton and table tennis centre in
                    western Melbourne
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
