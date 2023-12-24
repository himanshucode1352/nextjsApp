import React from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';
import ModalVideo from 'react-modal-video';

const MainBanner = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <React.Fragment>
            <div className="main-banner-area-two">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="banner-text">
                                        <ReactWOW animation='fadeInUp' delay='1s'>
                                            <span>Smarter Service Care</span>
                                        </ReactWOW>

                                        <ReactWOW animation='fadeInUp' delay='1s'>
                                            <h1>Prevention From Corona Virus Stay Home, Stay Safe</h1> 
                                        </ReactWOW>
                                        
                                        <ReactWOW animation='fadeInUp' delay='1s'>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua gravida. Risus commodo.</p>
                                        </ReactWOW>

                                        <ReactWOW animation='fadeInUp' delay='1s'>
                                            <div className="banner-btn">
                                                <Link href="/appointment">
                                                    <a className="default-btn">
                                                        Book An Appointment
                                                    </a>
                                                </Link>
                                         
                                                <div
                                                    onClick={e => {e.preventDefault(); openModal()}}
                                                    className="default-btn active popup-youtube"
                                                > 
                                                    Play Now
                                                </div>
                                            </div>
                                        </ReactWOW>
                                    </div>
                                </div>
            
                                <div className="col-lg-6 pr-0">
                                    <div className="banner-img-wrap">
                                        <ReactWOW animation='fadeInUp' delay='1s'>
                                            <div className="banner-img">
                                                <img src="/img/home-two/home-two-banner.png" alt="Image" />
                                            </div>
                                        </ReactWOW>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
        </React.Fragment> 
    )
}

export default MainBanner;