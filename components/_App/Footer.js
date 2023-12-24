import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
 
    return (
        <React.Fragment>
            <footer className="footer-top-area f-bg pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <Link href="/">
                                    <a>
                                        {/* <img src="/img/logo.png" alt="Image" /> */}
                                        <h2 style={{fontSize:'35px', color:'#fff'}}>Logo</h2>
                                    </a>
                                </Link>

                                <p>Lorem ipsum dolor, sit amet earum consectetur adipisicing elit. Cupiditate rerum quidem fugiat sapiente! Iusto quae perspiciatis, repudiandae ipsam minus et ex, aliquid dolor molestias, earum enim officiis porro obcaecati.</p>

                                <div className="social-area">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/xpresscure" target="_blank"><i className="bx bxl-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href=" https://www.twitter.com/xpresscure" target="_blank"><i className="bx bxl-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><i className="bx bxl-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><i className="bx bxl-youtube"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank"><i className="bx bxl-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-2 col-md-6">
                            <div className="single-widget">
                                <h3>Useful Links</h3>

                                <ul>
                                    <li>
                                        <a href="/">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="blog-right-sidebar">
                                            Book
                                        </a>
                                    </li>
                                    <li>
                                        <a href="about">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="contact">
                                            Contact Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/privacy-policy">
                                           Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/terms-conditions">
                                            Term and Conditions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-widget open-time">
                                <h3>Opening Hours</h3>

                                <ul>
                                    <li>
                                        <span>Mon-Tue:</span>
                                        <span className="right">6:00 AM - 10:00 PM</span>
                                    </li>
                                    <li>
                                        <span>Wed-Thu:</span>
                                        <span className="right">6:00 AM - 10:00 PM</span>
                                    </li>
                                    <li>
                                        <span>Fry:</span>
                                        <span className="right">6:00 AM - 04:00 PM</span>
                                    </li>
                                    <li>
                                        <span>Sun:</span>
                                        <span className="right">Closed</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget contact">
                                <h3>Get In Touch</h3>

                                <ul>
                                    <li>
                                        <a href="tel:+91-8303519448">
                                            <i className="bx bx-phone-call"></i>
                                            <span>Hotline:</span> 
                                            Phone: +91-0000000000
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a href="mailto:info.xpresscure@gmail.com">
                                            <i className="bx bx-envelope"></i>
                                            <span>Email:</span> 
                                            info@gmail.com
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <i className="bx bx-location-plus"></i>
                                        <span>Address:</span> 
                                        4/668, Lorem Khand, Lorem Nagar, Lorem, Lorem Lorem, India.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
         
            <div className="footer-bottom-area">
                <div className="container">
                    <div className="copy-right">
                        <p>Copyright &copy; {currentYear} Lorem  <a href="https://envyTheme.com/" target="blank"></a></p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Footer;