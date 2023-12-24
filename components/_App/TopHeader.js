import React from 'react';

const TopHeader = () => {
    return (      
        <div className="top-header-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-9 col-sm-6">
                        <ul className="header-content-left">
                            <li>
                                <a href="tel:+91-8303519448">
                                    <i className="bx bx-phone-call"></i>
                                    Call Us:+91-0000000000
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info.xpresscure@gmail.com">
                                    <i className="bx bxs-paper-plane"></i>
                                    Email: info@gmail.com
                                </a>
                            </li>
                            <li>
                                <i className="bx bx-location-plus"></i>
                                 Address: lorem ipsum
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-3 col-sm-6">
                        <ul className="header-content-right">
                            <li>
                                <a href="https://www.facebook.com/xpresscure" target="_blank">
                                    <i className="bx bxl-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/xpresscure" target="_blank">
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
                </div>
            </div>
        </div>
    )
}

export default TopHeader;