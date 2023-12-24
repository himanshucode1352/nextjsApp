import React from 'react';
import Link from 'next/link';
// import  ModalVideo from 'react-modal-video';

const AboutBanner = ({pageTitle, homePageUrl, homePageText, activePageText, imgClass}) => {

            // // video modal
            // const [isOpen, setIsOpen] = React.useState(true);
            // const openModal = () => {
            //     setIsOpen(!isOpen);
            // }
    return (
        <div className={`page-title-area ${imgClass}`}>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="page-title-content">
                            <h2>{pageTitle}</h2>
                            <ul>
                                <li>
                                    <Link href={homePageUrl}>
                                        <a>{homePageText}</a>
                                    </Link>
                                </li>
                                <li className="active">{activePageText}</li>
                            </ul>
                        </div>

                        {/* <div
                              onClick={e => {e.preventDefault(); openModal()}}
                              className="default-btn active popup-youtube"
                                                > 
                              Play Now
                        </div>     */}



                    </div>
                </div>
            </div>
            {/* <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='nhH1e51MBWA' 
                onClose={() => setIsOpen(!isOpen)} 
            /> */}
        </div>


    );
}

export default AboutBanner;