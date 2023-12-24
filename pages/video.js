import React from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';
import ModalVideo from 'react-modal-video';

const Video = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (     
        <React.Fragment>
           
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="banner-text">
                                        <ReactWOW animation='fadeInUp' delay='1s'>
                                            <div className="banner-btn">
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
            
                            
                            </div>
                </div>
                                
          
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='kTMMrAP6DNI'
                onClose={() => setIsOpen(!isOpen)} 
            />
        </React.Fragment> 
    )
}

export default Video;